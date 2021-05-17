<template>
  <div>
    <button
        :type="(!type) ? `button` : type"
        :class="`btn ${(customClass) ? customClass : `btn-${bg}`}`"
        @click="$emit('click')"
        :disabled="(!!loading)"
    >
      <span
          v-if="loading"
          class="spinner-grow spinner-grow-sm"
          role="status"
      />
      <span
          v-if="loading"
      >
        Carregando...
      </span>
      <span
          v-if="!loading"
      >
        {{ name }}
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'default-button',
  props: {
    type: { required: true },
    bg: { required: false },
    loading: { required: true },
    name: { required: true },
    customClass: { required: false }
  }
}
</script>

<style scoped>

</style>
