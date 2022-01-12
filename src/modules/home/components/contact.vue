<template>
  <q-page class="q-pa-md">
    <div class="page-title">Inicie uma conversa comigo</div>
    <div class="row">
      <div class="col-md-6 col-12 flex items-center justify-center">
        <q-img
          src="undraw_chat.svg"
          class="undraw-chat"
        />
      </div>
      <div class="col-md-6 col-12 relative-position">
        <q-scroll-area class="form-contact-scroll-area">
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
              val => val && val !== '' || 'Por favor, você precisa preencher este campo!'
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
              val => val && val !== '' || 'Por favor, você precisa preencher este campo!'
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
                val => val && val !== '' || 'Por favor, você precisa preencher este campo!'
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
        </q-scroll-area>
      </div>
    </div>
  </q-page>
</template>

<script>
import {defineComponent, ref} from 'vue'

export default defineComponent({
  name: "contact",
  data () {
    return {
      form: {
        name: ref(''),
        email: ref(''),
        subject: ref(''),
        message: ref('')
      }
    }
  },
  methods: {
    async submit () {
      try {
        //
      } catch (error) {
        //
      }
    }
  }
})
</script>

<style scoped>
  .radio-input {
    width: 100%;
    margin: 5px 0 10px 0;
    font-family: Roboto, sans-serif;
  }



  .btn-send-message {
    width: 100%;
    background: #D66853;
    color: #ffffff;
  }

  @media screen and (min-width: 1000px) {
    .form-contact-scroll-area {
      background: #ffffff32;
      border-radius: 10px;
      width: 100%;
      height: calc(100vh - 250px);
      margin: 50px 0 0 0;
      padding: 15px;
    }

    .undraw-chat {
      width: 400px;
    }
  }

  @media screen and (max-width: 1000px){
    .form-contact-scroll-area {
      background: #ffffff32;
      border-radius: 10px;
      width: 100%;
      height: calc(100vh - 294px);
      padding: 15px;
      overflow: hidden;
    }

    .undraw-chat {
      width: 200px;
      margin: 30px auto;
    }
  }
</style>
