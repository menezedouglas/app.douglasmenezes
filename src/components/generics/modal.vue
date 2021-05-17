<template>
  <div
      class="modal fade"
      :id="id"
      tabindex="-1"
      :aria-labelledby="`${id}Label`"
      aria-hidden="true"
  >
    <div
        :class="`modal-dialog${(centralized) ? ` modal-dialog-centered ` : ` ` }modal-dialog-scrollable`"
    >
      <div
          class="modal-content"
      >
        <div
            class="modal-header"
        >
          <h5
              class="modal-title"
              :id="`${id}Label`"
          >
            {{ title }}
          </h5>
          <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
          />
        </div>
        <div
            class="modal-body"
        >
          <slot></slot>
        </div>
        <div
            v-if="showFooter"
            class="modal-footer"
        >
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  props: ['id', 'title', 'showFooter', 'centralized']
}
</script>
