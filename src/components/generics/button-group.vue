<template>
  <div
      class="btn-group"
      role="group"
      aria-label="Basic example"
  >
    <defaultButton
        v-for="(btn, index) in buttons"
        v-bind:key="index"
        :type="btn.type"
        :bg="btn.bg"
        :loading="btn.loading"
        :name="btn.name"
        @click="btn.action(btn)"
    />
  </div>
</template>

<script>
import defaultButton from '@/components/generics/default-button'
export default {
  name: "button-group",
  components: {
    defaultButton
  },
  props: {
    buttons: { required: true }
  }
}
</script>

<style scoped>

</style>
