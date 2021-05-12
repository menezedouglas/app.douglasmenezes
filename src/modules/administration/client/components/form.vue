<template>
  <form
    @submit.prevent="submit"
  >
    <div class="form-row">
      <div class="form-group col-12">
        <default-input
          type="number"
          name="user_id"
          @value="user_id = $event"
          label="Usuário"
        />
      </div>
      <div class="form-group col-12">
        <default-input
            type="number"
            name="user_is_representative"
            @value="user_is_representative = $event"
            label="O usuário é representante?"
        />
      </div>
      <div class="form-group col-12">
        <default-input
            type="text"
            name="representative_name"
            @value="representative_name = $event"
            label="Nome do Representante"
        />
      </div>
      <div class="form-group col-12">
        <default-input
            type="text"
            name="representative_occupation"
            @value="representative_occupation = $event"
            label="Cargo do Representante"
        />
      </div>
      <div class="form-group col-12"></div>
    </div>
  </form>
</template>

<script>
import defaultInput from '../../../../components/forms/default-input'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: "form",
  components: {
    defaultInput
  },
  computed: {
    loading: {
      set (val) {
        this.ActionSetLoading(val)
      },
      get () {
        return this.getLoading()
      }
    },
    form: {
      set (val) {
        this.ActionSetForm(val)
      },
      get () {
        return this.getForm()
      }
    },
    user_id: {
      set (val) {
        this.ActionSetFormUserId(val)
      },
      get () {
        return this.getFormUserId()
      }
    },
    user_is_representative: {
      set (val) {
        this.ActionSetFormUserIsRepresentative(val)
      },
      get () {
        return this.getFormUserIsRepresentative()
      }
    },
    representative_name: {
      set (val) {
        this.ActionSetFormRepresentativeName(val)
      },
      get () {
        return this.getFormRepresentativeName()
      }
    },
    representative_occupation: {
      set (val) {
        this.ActionSetFormRepresentativeOccupation(val)
      },
      get () {
        return this.getFormRepresentativeOccupation()
      }
    }
  },
  methods: {
    ...mapActions('client', [
        'ActionSetLoading',
        'ActionSetForm',
        'ActionSetFormUserId',
        'ActionSetFormUserIsRepresentative',
        'ActionSetFormRepresentativeName',
        'ActionSetFormRepresentativeOccupation'
    ])
    , ...mapGetters('client', [
        'getLoading',
        'getForm',
        'getFormUserId',
        'getFormUserIsRepresentative',
        'getFormRepresentativeName',
        'getFormRepresentativeOccupation'
    ])
    , async submit () {

    }
  }
}
</script>

<style scoped>

</style>
