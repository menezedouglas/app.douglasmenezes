<template>
  <div
      class="form-floating mb-3"
  >
    <input
        v-model="value"
        :type="type"
        :name="name"
        class="form-control"
        :id="`${type}_${name}`"
        :placeholder="placeholder"
        @change="$emit('change')"
        @keydown="$emit('keydown')"
        @keypress="$emit('keypress')"
        @keyup="$emit('keyup')"
    >
    <label
        :for="`${type}_${name}`"
    >
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'default-input',
  props: {
    type: { required: true },
    name: { required: true },
    placeholder: { required: true },
    label: { required: true }
  },
  data () {
    return {
      value: ''
    }
  },
  watch: {
    value (val) {
      this.$emit('value', val)
    }
  }
}
</script>
