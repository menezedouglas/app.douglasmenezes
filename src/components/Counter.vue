<template>
  <div class="counter">
    <span class="counter-aria" ref="counterAria"></span>
    <span v-if="label" class="label">
        {{ label }}
    </span>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "counter",
  props: {
    start: {
      required: false,
      default: 0,
      type: Number,
    },
    end: {
      required: false,
      default: 100,
      type: Number,
    },
    label: {
        required: false,
        default: '',
        type: String
    }
  },
  methods: {
    init() {
      let startTimestamp = null;
      const obj = this.$refs.counterAria;
      const duration = 3000;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(
          progress * (this.end - this.start) + this.start
        );
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    },
  },
  mounted() {
    this.init();
  },
});
</script>

<style lang="scss">
.counter {
  min-width: 80px;
  min-height: 80px;
  background: #4f0147;

  border-radius: 20px;

  font-family: Roboto, sans-serif;
  color: #fff;

  display: grid;
  place-items: center;
}

.counter .counter-aria {
  font-size: 30px;
  font-weight: 700;
  padding: 10px;
}

.counter .label {
    font-size: 20px;
    padding: 10px;
}
</style>