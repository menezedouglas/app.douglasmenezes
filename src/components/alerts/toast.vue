<template>
  <div :class="`toast-aria toast-show-scroll ${position}`">
    <section class="toast-scroll-aria">
      <message-toast
          bg="primary"
          message="teste"
          :show="true"
      />
      <message-toast
          bg="primary"
          message="teste"
          :show="true"
      />
      <message-toast
          bg="primary"
          message="teste"
          :show="true"
      />
      <message-toast
          bg="primary"
          message="teste"
          :show="true"
      />
      <message-toast
          bg="primary"
          message="teste"
          :show="true"
      />
      <message-toast
          bg="primary"
          message="teste"
          :show="true"
      />
      <message-toast
          bg="primary"
          message="teste"
          :show="true"
      />
      <message-toast
          bg="primary"
          message="teste"
          :show="true"
      />
      <message-toast
          bg="primary"
          message="teste"
          :show="true"
      />
      <message-toast
          bg="primary"
          message="teste"
          :show="true"
      />
      <message-toast
          bg="primary"
          message="teste"
          :show="true"
      />
      <message-toast
          bg="primary"
          message="teste"
          :show="true"
      />
    </section>
  </div>
</template>

<script>
import messageToast from '@/components/generics/message-toast'
export default {
  name: "toast",
  props: {
    position: { required: true }
  },
  components: {
    messageToast
  }
}
</script>

<style scoped>
  .toast-aria {
    position: fixed;
    z-index: 1;
  }

  .toast-aria::after:not(.toast-show-scroll) {
    content: '';
    display: inline-block;
    z-index: 5;
    pointer-events: none;   /* isto faz com que o clique "passe" adiante */
    min-height:60px;       /* Aqui voce define o tamanho do degrade */
    width:100%;
    position:absolute;
    left: 0;
    top:0;
    /* Para branco, use 255,255,255,0 e 255,255,255,1 */
    background: linear-gradient(to bottom, #F8F1F1, transparent);
  }

  .toast-aria::before:not(.toast-show-scroll) {
    content: '';
    display: inline-block;
    z-index: 5;
    pointer-events: none;
    min-height:100px;
    width:100%;
    position:absolute;
    left: 0;
    bottom:0;
    background: linear-gradient(to top, #F8F1F1, transparent);
  }

  .toast-scroll-aria {
    max-height: 50vh;
    max-width: 350px;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 30px;
  }

  .toast-scroll-aria::-webkit-scrollbar {
    display: block;
  }

  .top-center {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .top-left {
    top: 0;
    left: 0;
  }

  .top-right {
    top: 0;
    right: 0;
  }

  .bottom-center {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .bottom-left {
    bottom: 0;
    left: 0;
  }

  .bottom-right {
    bottom: 0;
    right: 0;
  }
</style>
