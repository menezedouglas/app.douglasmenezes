<template>
  <div style="position: absolute;">
    <input type="checkbox" id="menu_control" checked>

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
        <div class="social-networks">
          <nav>
            <ul>
              <li>
                <redirect class="social-networks-item" to="https://github.com/menezedouglas">
                  <i class="fab fa-github"></i>
                </redirect>
              </li>
              <li>
                <redirect class="social-networks-item" to="https://www.linkedin.com/in/douglas-menezes-526a45148/">
                  <i class="fab fa-linkedin-in"></i>
                </redirect>
              </li>
              <li>
                <redirect class="social-networks-item" to="https://www.instagram.com/menezedouglas/">
                  <i class="fab fa-instagram"></i>
                </redirect>
              </li>
            </ul>
          </nav>
        </div>
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
import { component as redirect } from "@/modules/redirect";

export default {
  name: "main_menu",
  components: {
    redirect,
  }
}
</script>

<style scoped>
  .social-networks {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .social-networks nav ul {
    list-style: none;
  }

  .social-networks nav ul li {
    display: inline-block;
  }

  .social-networks-item {
    color: rgba(255,255,255,.5);
    padding: 0 10px;
    font-size: 18pt;
    cursor: pointer;
    transition: all .05s linear !important;
  }

  .social-networks-item:hover {
    color: rgba(255,255,255,.9);
  }
</style>
