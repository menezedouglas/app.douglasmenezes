
<template>
  <q-drawer
    v-model="open"
    side="right"
    overlay
    behavior="mobile"
    class="menu"
  >
    <q-list>
      <q-item-label
        header
        class="menu-title"
      >
        Menu
      </q-item-label>
      <q-scroll-area
        :visible="false"
        class="scroll-area"
      >
        <div
          v-for="(link, index) in items"
          :key="index"
        >
          <essential-link
            v-if="!link.multiple"
            v-bind="link"
          />

          <q-expansion-item
            group="mainMenu"
            expand-separator
            v-if="link.multiple"
            :label="link.title"
            class="menu-expansion-item"
          >
            <q-card class="bg-dark">
              <q-card-section>
                <essential-link
                  v-for="(item, index) in link.items"
                  :key="index"
                  v-bind="item"
                />
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </div>
      </q-scroll-area>
    </q-list>
    <section class="menu-footer">
      <div class="social-networks">
        <q-list>
          <q-item
            v-for="(item, index) in mainMenu.socialsNetworks"
            v-bind:key="index"
            clickable
            tag="a"
            :href="item.url"
            class="social-networks-item"
          >
            <q-item-section
              v-if="item.icon"
              avatar
              class="absolute-center"
            >
              <q-icon :name="item.icon" />
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      <small>
        Douglas Menezes Evangelista da Silva<br>
        Desenvolvimento de Software M.E<br>
        CNPJ 36.044.262/0001-03<br>
        © Todos os Direitos Reservados. 2021 <br>
      </small>
    </section>
  </q-drawer>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

export default {
  name: "main_menu",
  data () {
    return {
      mainMenu: {
        itemsUnauthenticated: [
          {
            multiple: false,
            title: 'Início',
            link: '/#/'
          },
          {
            multiple: false,
            title: 'Projetos',
            link: '/#/projects'
          }
        ],
        itemsAuthenticated: [
          {
            multiple: false,
            title: 'Dashboard',
            link: '/#/dashboard'
          },
          {
            multiple: true,
            title: 'Administração',
            items: [
              {
                title: 'Usuários',
                link: '/#/users'
              },
              {
                title: 'Clientes',
                link: '/#/clients'
              },
              {
                title: 'Contratos',
                link: '/#/contracts'
              },
              {
                title: 'Serviços',
                link: '/#/services'
              },
              {
                title: 'Apontamentos',
                link: '/#/notations'
              }
            ]
          },
          {
            multiple: true,
            title: 'Financeiro',
            items: [
              {
                title: 'Transações',
                link: '/#/transaction'
              },
              {
                title: 'Recebimentos',
                link: '/#/receipt'
              },
              {
                title: 'Dívidas',
                link: '/#/debt'
              }
            ]
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
    EssentialLink,
  },
  computed: {
    items : {
      set (val) {
        this.$store.dispatch('mainMenu/ActionSetItems', val)
      },
      get () {
        return this.$store.getters['mainMenu/getItems']
      }
    },
    socialsNetworks: {
      set (val) {
        this.$store.dispatch('mainMenu/ActionSetSocialsNetworks', val)
      },
      get () {
        return this.$store.getters['mainMenu/getSocialsNetworks']
      }
    },
    open: {
      set (val) {
        this.$store.dispatch('mainMenu/ActionSetOpen', val)
      },
      get () {
        return this.$store.getters['mainMenu/getOpen']
      }
    }
  },
  created () {
    switch (this.$store.getters['login/hasAuthorization']) {
      case true: {
        this.$store.dispatch('mainMenu/ActionSetItems', [
          ...this.mainMenu.itemsUnauthenticated,
          ...this.mainMenu.itemsAuthenticated
        ])
        break
      }
      case false: {
        this.$store.dispatch('mainMenu/ActionSetItems', [
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
    width: 80%;
    height: auto;
    top: 0;
    left: calc(10% + 15px);
    padding: 0;
  }

  .social-networks .q-list {
    display: flex;
    flex-direction: row;
    align-content: space-around;
    justify-content: space-around;
    padding: 0 !important;
  }

  .social-networks-item {
    color: rgba(255,255,255,.5);
    padding: 0;
    margin: 0;
    font-size: 12pt;
    cursor: pointer;
    transition: all .05s linear !important;
  }

  .social-networks-item:hover {
    color: rgba(255,255,255,.9);
  }
</style>
