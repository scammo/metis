def buildDocker(label, dockerfile = "Dockerfile", origin = "", tags = [], buildArgs = [], ctx = "`pwd`", Closure mid = {}) {
  return {
    def originParam;
    def buildArgsParam = "";
    buildArgs.each { arg ->
      buildArgsParam = "${buildArgsParam} --build-arg ${arg}";
    }
    if (origin == "") {
      originParam = "--no-push"
    } else {
      originParam = "--destination ${origin}"
      tags.each { tag ->
        originParam = "${originParam} --destination ${origin}:${tag}"
      }
    }
    podTemplate(name: 'kaniko', label: label, yaml: """
      kind: Pod
      metadata:
        name: kaniko
      spec:
        containers:
        - name: kaniko
          image: gcr.io/kaniko-project/executor:debug
          imagePullPolicy: IfNotPresent
          command:
          - /busybox/cat
          tty: true
          resources:
            requests:
              memory: "512Mi"
              cpu: "1"
          volumeMounts:
            - name: jenkins-docker-cfg
              mountPath: /kaniko/.docker/
        volumes:
          - name: jenkins-docker-cfg
            projected:
              sources:
              - secret:
                  name: regcred
                  items:
                    - key: .dockerconfigjson
                      path: config.json
      """
    ) {
      node(label) {
        stage('Build') {
          checkout scm
          container(name: 'kaniko', shell: '/busybox/sh') {
            withEnv(['PATH+EXTRA=/busybox:/kaniko']) {
              mid()
              sh """#!/busybox/sh
              /kaniko/executor -f ${dockerfile}  -c ${ctx} --cache=true --snapshotMode=time --single-snapshot --skip-tls-verify ${originParam} ${buildArgsParam}
              """
            }
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


  def label = "metis-client-${tenant}-${UUID.randomUUID().toString()}"
  def buildArgs = [
    "commitHash=${commitHash}",
    "version=${version}",
  ]
  def tags = [
    "${commitHash}-${tenant}",
  ]
  stepsForParallel[label] = buildDocker(label, "./client/Dockerfile", "docker.io/dlrgjugend/metis-client", tags, buildArgs, "`pwd`/client")

  def buildArgs = [
    "commitHash=${commitHash}",
    "version=${version}"
  ]
  def tags = [
    commitHash
  ]
  def label = "metis-api-${UUID.randomUUID().toString()}"
  stepsForParallel[label] = buildDocker(label, "./api/Dockerfile", "docker.io/dlrgjugend/metis-api", tags, buildArgs, "`pwd`/api")

  parallel stepsForParallel
}
