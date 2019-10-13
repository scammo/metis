def buildDocker(label, dockerfile = "Dockerfile", origin = "", tags = [], buildArgs = [], ctx = "`pwd`", Closure mid = {}) {
  return {
    def originParam;
    def buildArgsParam = "";
    buildArgs.each { arg ->
      buildArgsParam = "${buildArgsParam} --build-arg ${arg}";
    }
    if (origin == "") {
      originParam = ""
    } else {
      originParam = "-t ${origin}"
      tags.each { tag ->
        originParam = "${originParam} --replica ${origin}:${tag}"
      }
    }
    podTemplate(name: 'makisu', workspaceVolume: emptyDirWorkspaceVolume(memory: true), slaveConnectTimeout: 600000, label: label, yaml: """
      kind: Pod
      metadata:
        name: makisu
      spec:
        containers:
        - image: codeanker/makisu:8
          imagePullPolicy: IfNotPresent
          name: makisu
          tty: true
          resources:
            requests:
              memory: "512Mi"
              cpu: "1"
          volumeMounts:
            - name: registry-config
              mountPath: /registry-config
            - name: storage
              mountPath: /makisu-storage
        volumes:
          - name: registry-config
            secret:
              secretName: docker-registry-config
          - name: storage
            persistentVolumeClaim:
            claimName: makisu
      """
    ) {
      node(label) {
        stage('Build') {
          checkout scm
          container(name: 'makisu', shell: '/.dockerinit/busybox/sh') {
            mid()
            sh """#!/.dockerinit/busybox/sh
            /makisu-internal/makisu build \
              --push=index.docker.io \
              --file ${dockerfile} \
              --registry-config=/registry-config/registry.yaml \
              --modifyfs \
              --redis-cache-addr=cache-redis-svc.redis.svc.cluster.local:6379 \
              $originParam \
              ${ctx}
            """
          }
        }
      }
    }
  }
}

node("master") {
  def scmVars;
  stage('scm') {
    scmVars = checkout scm
  }
  def stepsForParallel = [:]
  def pkg = readJSON file: 'package.json'
  def commitHash = scmVars.GIT_COMMIT.take(7);
  def version = pkg.version;

  def labelClient = "metis-client-${UUID.randomUUID().toString()}"
  def buildArgsClient = [
    "commitHash=${commitHash}",
    "version=${version}"
  ]
  def tagsClient = [
    "${commitHash}"
  ]
  stepsForParallel[labelClient] = buildDocker(labelClient, "./Dockerfile", "index.docker.io/dlrgjugend/metis-client", tagsClient, buildArgsClient, "`pwd`/client")

  def labelApi = "metis-api-${UUID.randomUUID().toString()}"
  def buildArgsApi = [
    "commitHash=${commitHash}",
    "version=${version}"
  ]
  def tagsApi = [
    "${commitHash}"
  ]
  stepsForParallel[labelApi] = buildDocker(labelApi, "./Dockerfile", "index.docker.io/dlrgjugend/metis-api", tagsApi, buildArgsApi, "`pwd`/api")

  parallel stepsForParallel
}
