<style>
  .toast {
    width: auto;
    margin-bottom: 15px;
  }
</style>

<template>
  <div
      :class="`toast align-items-center text-white bg-${bg} border-0 ${(show) ? `show` : ``}`"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
  >
    <div
        class="d-flex"
    >
      <div
          class="toast-body"
      >
        {{ message }} {{ percent }}
      </div>
      <button
          type="button"
          class="btn-close btn-close-white me-2 m-auto"
          data-bs-dismiss="toast"
          aria-label="Close"
          @click="$emit('close')"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "message-toast",
  props: {
    index: { required: true },
    bg: { required: true },
    message: { required: true },
    show: { required: true },
    timer: { required: true }
  },
  data () {
    return {
      percent: 0
    }
  },
  methods: {
    startTimer () {
      // eslint-disable-next-line no-unused-vars
      let count = 0
      let updateTime = setInterval(() => {
        count += 1
        this.percent = (100 * count) / this.timer
        if(this.percent == 100) {
          clearInterval(updateTime)
          setTimeout(() => {
            this.$emit('close')
          }, (this.index + 1) * 1000)
        }
      }, 1000)
    }
  },
  created() {
    this.startTimer()
  }
}
</script>
