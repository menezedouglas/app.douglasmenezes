<template>
  <div class="card border-0 shadow">
    <div class="card-body">
      <div
          v-if="!showData && !showError"
          class="d-flex align-items-center"
      >
        <strong>Carregando...</strong>
        <div
            class="spinner-grow ms-auto"
            role="status"
            aria-hidden="true"
        />
      </div>
      <div
          v-if="!showData && showError"
          class="alert alert-warning mb-0"
          role="alert"
      >
        <h4 class="alert-heading">Ops...</h4>
        <p class="mb-0">
          Não foi possivel obter os serviços
        </p>
      </div>
      <div
          v-if="showData && !showError"
          class="accordion accordion-flush"
          :id="getId()"
      >
        <div
            v-for="item in getItems()"
            v-bind:key="item.id"
            class="accordion-item"
        >
          <h2
              class="accordion-header"
              :id="`flush-heading${item.id}`"
          >
            <button
                class="accordion-button collapsed bg-light"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="`#flush-collapse${item.id}`"
                aria-expanded="false"
                :aria-controls="`flush-collapse${item.id}`"
            >
              {{ item.name }}
            </button>
          </h2>
          <div
              :id="`flush-collapse${item.id}`"
              class="accordion-collapse collapse"
              :aria-labelledby="`flush-heading${item.id}`"
              :data-bs-parent="`#${getId()}`"
          >
            <div
                class="accordion-body"
            >
              {{ item.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "index",
  props: {
    showData: {
      required: true
    },
    showError: {
      required: true
    }
  },
  watch: {
    showData (val) {
      if(val) {
        this.loadData()
      }
    }
  },
  methods: {
    ...mapGetters('accordion', ['getItems', 'getId']),
    loadData () {

    }
  }
}
</script>
