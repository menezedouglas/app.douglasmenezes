<style>
  .toast {
    width: auto;
    margin-bottom: 15px;
  }
</style>

<template>
  <div>
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
          {{ message }}
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
    <div
        class="progress my-2"
        style="height: 1px;"
    >
      <div
          :class="`progress-bar bg-${bg}`"
          role="progressbar"
          :style="`width: ${percent}%;`"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
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
        count += 10
        this.percent = (100 * count) / (this.timer * 1000)
        if(this.percent === 100) {
          clearInterval(updateTime)
          setTimeout(() => {
            this.$emit('close')
          }, (this.index + 1) * 1000)
        }
      }, 10)
    }
  },
  created() {
    this.startTimer()
  }
}
</script>
