<template>
  <div style="position: absolute;">
    <input type="checkbox" id="menu_control">

    <label for="menu_control">
      <div id="btn_menu">
        <span></span>
      </div>
    </label>

    <nav id="menu">

      <section class="menu-header">

        <div class="row">
          <div class="col position-relative">
            <h3 class="menu-title">
              Menu
            </h3>
          </div>
          <div class="col-auto position-relative">
            <label for="menu_control">
              <div id="btn-menu-close">
                <span></span>
              </div>
            </label>
          </div>
        </div>

      </section>

      <ul class="master-list">

        <a href="#" class="menu-link">

          <li class="menu-item menu-item-active">

            Início

          </li>

        </a>

<!--        <a href="#" class="menu-link">-->

<!--          <li class="menu-item">-->

<!--            Projetos-->

<!--          </li>-->

<!--        </a>-->

<!--        <a href="#" class="menu-link">-->

<!--          <li class="menu-item">-->

<!--            Participações-->

<!--          </li>-->

<!--        </a>-->

<!--        <a href="#" class="menu-link">-->

<!--          <li class="menu-item">-->

<!--            Meu Currículo-->

<!--          </li>-->

<!--        </a>-->

<!--        <a href="#" class="menu-link">-->

<!--          <li class="menu-item">-->

<!--            Tecnologias-->

<!--          </li>-->

<!--        </a>-->

<!--        <a href="#" class="menu-link">-->

<!--          <li class="menu-item">-->

<!--            Contato-->

<!--          </li>-->

<!--        </a>-->

<!--        <a href="#" class="menu-link">-->

<!--          <li class="menu-item">-->

<!--            Entrar-->

<!--          </li>-->

<!--        </a>-->
      </ul>

      <section class="menu-footer">
        <small>
          Douglas Menezes Evangelista da Silva<br>
          Desenvolvimento de Software M.E<br>
          CNPJ 36.044.262/0001-03<br>
          © Todos os Direitos Reservados. 2021 <br>
        </small>
      </section>

    </nav>
  </div>
</template>

<script>
export default {
name: "main_menu"
}
</script>

<style scoped>

</style>
