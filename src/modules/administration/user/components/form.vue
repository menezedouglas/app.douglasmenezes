<template>
  <!-- Modal -->
  <modal
      id="formUserModal"
      title="Editar usuário"
      :show-footer="false"
      :centralized="true"
  >
    <template v-slot:default>
      <div class="form-row">
        <form
            @submit.prevent="submit"
        >
          <div class="form-group col-12">
            <default-input
                type="text"
                name="name"
                placeholder="Nome"
                label="Nome"
            />
          </div>
          <div class="form-group col-12">
            <default-input
                type="email"
                name="email"
                placeholder="E-mail"
                label="E-mail"
            />
          </div>
          <div class="form-group col-12">
            <default-input
                type="password"
                name="password"
                placeholder="Senha"
                label="Senha"
            />
          </div>
          <div class="form-group col-12">
            <default-button
                type="submit"
                bg="success"
                :loading="loading"
                name="Criar novo usuário"
            />
          </div>
        </form>
      </div>
    </template>
    <template v-slot:footer>
      teste
    </template>
  </modal>
</template>

<script>
import defaultInput from 'components/forms/default-input'
import defaultButton from 'components/generics/default-button'
import modal from 'components/generics/modal'
export default {
  name: "edit",
  props: ['mode'],
  components: {
    defaultInput,
    defaultButton,
    modal
  },
  data () {
    return {
      loading: false
    }
  },
  methods: {
    async submit() {
      //
    }
  }
}
</script>

<style scoped>

</style>
