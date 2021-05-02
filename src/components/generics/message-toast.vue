<style>
  .toast {
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
</template>

<script>
export default {
  name: "message-toast",
  props: {
    bg: { required: true },
    message: { required: true },
    show: { required: true }
  }
}
</script>
