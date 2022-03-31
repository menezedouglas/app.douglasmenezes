<template>
  <q-page class="q-pa-md bg-xiketic">
    <div class="absolute-center">
      <div class="row">
        <div class="col-12 text-center text-white">
          <div class="text-h5">Douglas Menezes</div>
          <small>FULL STACK DEVELOPER</small>
        </div>
        <div class="col-12 q-mb-lg">
          <socials />
        </div>
        <div class="col-12 text-center text-grey-6 q-my-xl">
          <p>
            Design inspirado em
            <a href="https://portifolio-seven-smoky.vercel.app/">
              Jessika Miranda ツ
            </a>
          </p>
        </div>
        <div class="col-12 text-grey-8 text-center">
          <small>
            Douglas Menezes Evangelista da Silva <br />
            Desenvolvimento de Software <br />
            CNPJ 36.044.262/0001-03 <br />
            © MIT License.
          </small>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import socials from "./social.vue";
export default defineComponent({
  name: "credits",
  components: {
    socials,
  },
});
</script>

<style scoped>
</style>