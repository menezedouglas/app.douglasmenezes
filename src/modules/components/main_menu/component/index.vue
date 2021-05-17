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
        <li
            v-for="(item, index) in items"
            v-bind:key="index"
            class="menu-link"
            @click="closeSideBar"
        >
          <redirect
              :class="(item.active) ? `menu-item menu-item-active` : `menu-item`"
              :to="item.url"
          >
            {{ item.name }}
          </redirect>
        </li>

      </ul>

      <section class="menu-footer">
        <div class="social-networks">
          <nav>
            <ul>
              <li
                v-for="(item, index) in socialsNetworks"
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
import { component as redirect } from "../../../redirect";
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "main_menu",
  data () {
    return {
      mainMenu: {
        itemsUnauthenticated: [
          {
            name: 'Início',
            url: '/',
            active: true
          },
          {
            name: 'Projetos',
            url: '/projects',
            active: false
          }
        ],
        itemsAuthenticated: [
          {
            name: 'Dashboard',
            url: '/dashboard',
            active: false
          },
          {
            name: 'Usuários',
            url: '/users',
            active: false
          },
          {
            name: 'Clientes',
            url: '/clients',
            active: false
          },
          {
            name: 'Contratos',
            url: '/contracts',
            active: false
          }
        ],
        socialsNetworks: [
          {
            icon: 'fab fa-github',
            url: 'https://github.com/menezedouglas'
          },
          {
            icon: 'fab fa-linkedin-in',
            url: 'https://www.linkedin.com/in/douglas-menezes-526a45148/'
          },
          {
            icon: 'fab fa-instagram',
            url: 'https://www.instagram.com/menezedouglas/'
          }
        ]
      }
    }
  },
  components: {
    redirect,
  },
  computed: {
    items : {
      set (val) {
        this.ActionSetItems(val)
      },
      get () {
        return this.getItems()
      }
    },
    socialsNetworks: {
      set (val) {
        this.ActionSetSocialsNetworks(val)
      },
      get () {
        return this.getSocialsNetworks()
      }
    }
  },
  methods: {
    ...mapGetters('login', ['hasAuthorization']),
    ...mapActions('mainMenu', ['ActionSetItems', 'ActionSetSocialsNetworks']),
    ...mapGetters('mainMenu', ['getItems', 'getSocialsNetworks']),
    closeSideBar: () => {
      const ctrl_sidebar = document.querySelector('#menu_control')
      if (ctrl_sidebar.checked)
        ctrl_sidebar.checked = !ctrl_sidebar.checked
    }
  },
  created () {
    switch (this.hasAuthorization()) {
      case true: {
        this.ActionSetItems([
          ...this.mainMenu.itemsUnauthenticated,
          ...this.mainMenu.itemsAuthenticated
        ])
        break
      }
      case false: {
        this.ActionSetItems([
          ...this.mainMenu.itemsUnauthenticated
        ])
        break
      }
    }
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
