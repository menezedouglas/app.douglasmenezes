<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col-12 q-my-sm">
        <h2 class="text-grey-8">Dashboard</h2>
        <hr class="q-my-sm">
      </div>
      <div class="row col-12 q-gutter-md">
        <user />
        <notation-day />
      </div>
    </div>
  </div>
</template>

<script>
import { component as user } from '../../user'
import notationDay from '../../notation/components/notationDay'
import {mapActions, mapGetters} from "vuex";
export default {
  name: "dashboard",
  components: {
    user,
    notationDay
  },
  computed: {
    user: {
      async set (val) {
        try {
          await this.ActionSetUser(val)
        } catch (error) {
          this.ActionSetErrors(error)
          if(error.request.status) {
            await this.$store.dispatch('login/ActionLogOut')
            await this.$router.push('/login')
          }
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
