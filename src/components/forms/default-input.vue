<template>
  <div
      class="form-floating q-mb-md"
  >
    <q-input
        filled
        :type="type"
        v-model="value"
        :label="label"
        :dense="false"
        :disable="(!! disabled)"
    />
  </div>
</template>

<script>
export default {
  name: 'default-input',
  props: {
    type: { required: true },
    name: { required: true },
    label: { required: true },
    hint: { required: false },
    disabled: { required: false }
  },
  data () {
    return {
      value: '',
      isPwd: false
    }
  },
  watch: {
    value (val) {
      this.$emit('value', val)
    }
  }
}
</script>
