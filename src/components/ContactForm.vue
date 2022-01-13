<template>
  <q-form @submit.prevent="submit" class="">
    <div class="row">
      <div class="col-12 q-pa-sm">
        <q-input
          standout
          :stack-label="$q.platform.is.mobile"
          v-model="form.name"
          no-error-icon
          label="Me diga, como devo lhe chamar?"
          :rules="[
            (val) =>
              (val && val !== '') ||
              'Por favor, você precisa preencher este campo!',
          ]"
        />
      </div>
      <div class="col-12 q-pa-sm">
        <q-input
          standout
          :stack-label="$q.platform.is.mobile"
          v-model="form.email"
          no-error-icon
          label="Qual seu e-mail para contato?"
          :rules="[
            (val) =>
              (val && val !== '') ||
              'Por favor, você precisa preencher este campo!',
          ]"
        />
      </div>
      <div class="col-12 q-pa-sm">
        <span class="form-font-style q-pb-md">Qual o assunto?</span>
        <q-radio
          name="subject"
          v-model="form['subject']"
          class="radio-input"
          val="Proposta de emprego"
          label="Proposta de emprego"
        />
        <q-radio
          name="subject"
          v-model="form['subject']"
          class="radio-input"
          val="Seu novo site"
          label="Seu novo site"
        />
        <q-radio
          name="subject"
          v-model="form['subject']"
          class="radio-input"
          val="Projeto Beneficente"
          label="Projeto Beneficente"
        />
        <q-radio
          name="subject"
          v-model="form['subject']"
          class="radio-input"
          val="Sujestão ou reclamação"
          label="Sujestão ou reclamação"
        />
      </div>
      <div class="col-12 q-pa-sm">
        <q-input
          standout
          :stack-label="$q.platform.is.mobile"
          v-model="form.message"
          type="textarea"
          no-error-icon
          input-style="form-font-style"
          label="Deixe sua mensagem"
          :rules="[
            (val) =>
              (val && val !== '') ||
              'Por favor, você precisa preencher este campo!',
          ]"
        />
      </div>
      <div class="col-12 q-pa-sm">
        <q-btn
          label="Enviar sua mensagem"
          class="btn-send-message form-font-style"
        />
      </div>
    </div>
  </q-form>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "contactForm",
  data() {
    return {
      form: {
        name: ref(""),
        email: ref(""),
        subject: ref(""),
        message: ref(""),
      },
    };
  },
  methods: {
    async submit() {
      try {
        //
      } catch (error) {
        //
      }
    },
  },
});
</script>

<style scoped>
</style>