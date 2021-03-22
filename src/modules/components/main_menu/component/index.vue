<template>
  <div style="position: absolute;">
    <input type="checkbox" id="menu_control" />

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

        <a
            v-for="(item, index) in getItems()"
            v-bind:key="index"
            :href="item.url"
            class="menu-link"
        >

          <li :class="(item.active) ? `menu-item menu-item-active` : `menu-item`">

            {{ item.name }}

          </li>

        </a>

      </ul>

      <section class="menu-footer">
        <div class="social-networks">
          <nav>
            <ul>
              <li
                v-for="(item, index) in getSocialsNetworks()"
                v-bind:key="index"
              >
                <redirect class="social-networks-item" :to="item.url">
                  <i :class="item.icon"></i>
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
import { mapGetters } from 'vuex'

export default {
  name: "main_menu",
  components: {
    redirect,
  },
  methods: {
    ...mapGetters('mainMenu', ['getItems', 'getSocialsNetworks'])
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
