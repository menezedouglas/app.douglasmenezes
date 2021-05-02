<template>
  <div style="position: absolute;">
    <toast
        :position="position"
        :messages="messages"
        @close="ActionUnsetMessage($event)"
    />
  </div>
</template>

<script>
import toast from '../../../components/alerts/toast'
import {mapActions, mapGetters} from 'vuex'
export default {
  name: "index",
  components: {
    toast
  },
  props: {
    position: { required: true }
  },
  computed: {
    messages: {
      get () {
        return this.getMessages()
      },
      set (val) {
        this.ActionAddMessage(val)
      }
    }
  },
  methods: {
    ...mapActions('messages', [
      'ActionAddMessage',
      'ActionUnsetMessage'
    ]),
    ...mapGetters('messages', [
      'getMessages'
    ])
  }
}
</script>

<style scoped>

</style>
