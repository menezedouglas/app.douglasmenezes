<template>
  <div>
    <form-user></form-user>
  </div>
</template>

<script>
import { formUser } from '../modules/administration/user'

export default {
  name: 'modals',
  components: {
    formUser
  }
}
</script>

<style scoped>

</style>
