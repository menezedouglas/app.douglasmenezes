<template>
  <q-card>
    <q-card-section
        v-if="!showData && !showError"
        class="flex items-center justify-center q-pa-lg"
    >
      <q-spinner-ball
          color="primary"
          size="2em"
      />
    </q-card-section>
    <q-card-section>
      <q-splitter
          v-model="splitterModel"
          style="max-height: 400px"
      >
        <template v-slot:before>
          <q-tabs
              v-if="showData && !showError"
              v-model="tab"
              vertical
              style="color: #16697A;"
          >
            <q-tab
                v-for="item in getItems()"
                v-bind:key="item.id"
                :name="item.name.toLowerCase()"
                :label="item.name"
            />
          </q-tabs>
        </template>
        <template v-slot:after>
          <q-tab-panels
              v-if="showData && !showError"
              v-model="tab"
              animated
              swipeable
              vertical
              transition-prev="jump-up"
              transition-next="jump-up"
          >
            <q-tab-panel
                v-for="item in getItems()"
                v-bind:key="item.id"
                :name="item.name.toLowerCase()"
            >
              {{ item.description }}
            </q-tab-panel>
          </q-tab-panels>
        </template>
      </q-splitter>
    </q-card-section>
  </q-card>
<!--  <div class="card border-0 shadow">-->
<!--    <div class="card-body">-->
<!--      <div-->
<!--          v-if="!showData && showError"-->
<!--          class="alert alert-warning mb-0"-->
<!--          role="alert"-->
<!--      >-->
<!--        <h4 class="alert-heading">Ops...</h4>-->
<!--        <p class="mb-0">-->
<!--          Não foi possivel obter os serviços-->
<!--        </p>-->
<!--      </div>-->
<!--      <div-->
<!--          v-if="showData && !showError"-->
<!--          class="accordion accordion-flush"-->
<!--          :id="getId()"-->
<!--      >-->
<!--        <div-->

<!--            class="accordion-item"-->
<!--        >-->
<!--          <h2-->
<!--              class="accordion-header"-->
<!--              :id="`flush-heading${item.id}`"-->
<!--          >-->
<!--            <button-->
<!--                class="accordion-button collapsed bg-light"-->
<!--                type="button"-->
<!--                data-bs-toggle="collapse"-->
<!--                :data-bs-target="`#flush-collapse${item.id}`"-->
<!--                aria-expanded="false"-->
<!--                :aria-controls="`flush-collapse${item.id}`"-->
<!--            >-->
<!--              {{ item.name }}-->
<!--            </button>-->
<!--          </h2>-->
<!--          <div-->
<!--              :id="`flush-collapse${item.id}`"-->
<!--              class="accordion-collapse collapse"-->
<!--              :aria-labelledby="`flush-heading${item.id}`"-->
<!--              :data-bs-parent="`#${getId()}`"-->
<!--          >-->
<!--            <div-->
<!--                class="accordion-body"-->
<!--            >-->
<!--              {{ item.description }}-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
</template>

<script>
import { ref } from 'vue'
import { mapGetters } from 'vuex'
export default {
  name: "index",
  setup () {
    return {
      tab: ref('sistema'),
      splitterModel: ref(20)
    }
  },
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
