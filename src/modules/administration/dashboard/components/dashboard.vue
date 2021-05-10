<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 my-3">
        <h1 class="text-muted">Usuários</h1>
        <hr class="my-2">
      </div>
      <div class="col-auto">
        <user></user>
      </div>
    </div>
  </div>
</template>

<script>
import { component as user } from '../../user'
import {mapActions, mapGetters} from "vuex";
export default {
  name: "dashboard",
  components: {
    user
  },
  computed: {
    user: {
      set (val) {
        try {
          this.ActionSetUser(val)
        } catch (error) {
          this.ActionSetErrors(error)
        }
      },
      get () {
        return {
          id: this.id,
          name: this.name,
          email: this.email
        }
      }
    },
    id: {
      set (val) {
        this.ActionSetId(val)
      },
      get () {
        return this.getId()
      }
    },
    name: {
      set (val) {
        this.ActionSetName(val)
      },
      get () {
        return this.getName()
      }
    },
    email: {
      set (val) {
        this.ActionSetEmail(val)
      },
      get () {
        return this.getEmail()
      }
    },
    loading: {
      set (val) {
        this.ActionSetLoading(val)
      },
      get () {
        return this.getLoading()
      }
    }
  },
  methods: {
    ...mapActions('user', [
      'ActionSetId',
      'ActionSetName',
      'ActionSetEmail',
      'ActionSetLoading',
      'ActionSetUser'
    ]),
    ...mapActions('messages', [
      'ActionSetErrors'
    ]),
    ...mapGetters('user', [
      'getId',
      'getName',
      'getEmail',
      'getLoading'
    ]),
    ...mapGetters('login', [
      'getUserId'
    ])
  },
 created () {
    this.user = this.getUserId()
  }
}
</script>

<style scoped>

</style>
