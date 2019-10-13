<template>
  <footer class="footer mt-auto">
    <div class="container text-center">
      <div class="row justify-content-center align-content-center">
        <div class="col-8">
          <ul class=" text-center m-0 p-0">
            <li class="item d-inline-block">
              Lagersoftware (v{{ $store.state.version }}#{{ $store.state.commitHash }})
            </li>

            <li class="item d-inline-block">
              <a
                href="https://github.com/dlrg/metis"
                target="_blank"
              ><i class="fab fa-github" /> Github</a>
            </li>
            <li class="item d-inline-block">
              <a
                href="https://github.com/dlrg/metis/issues"
                target="_blank"
              >Fehler melden</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'LayoutFooter'
}

</script>

<style lang="scss">
.footer {
  grid-row-start: 2;
  grid-row-end: 3;
}
footer {
  border-top: 1px solid #e8eef6;
  color: #75848e;
  background: #f4f5f7;
  font-size: 13px;
  line-height: 1.66666667;
  padding: 15px 10px;
  font-weight: 300;
}

.item {
  margin-left: 10px;
  padding: 0;
  white-space: nowrap;

  &::after {
    content: "\b7";
    margin-left: 10px;
    speak: none;
  }

  &:last-child::after {
    content: none;
  }

  a {
    color: inherit !important;
    display: inline;
    padding: 0;

    &:hover {
      text-decoration: underline !important;
    }
  }
 }

</style>
