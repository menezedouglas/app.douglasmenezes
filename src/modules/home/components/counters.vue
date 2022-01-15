<template>
  <q-page class="q-pa-md half-page bg-white">
    <div class="absolute-center full-width">
      <div class="row">
        <div class="col-12 text-center">
          <q-chip
            dense
            outline
            text-color="purple"
            class="q-mb-lg"
            label="Estatísticas do GitHub"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md col-12 text-center q-my-lg">
          <q-img src="undraw_statistic_chart.svg" width="250px" />
        </div>
        <div class="col-md col-12 flex items-center justify-around q-my-lg">
          <counter label="Commits" :end="counters.commits" />
          <counter label="Repositories" :end="counters.repositories" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import counter from "../../../components/Counter.vue";
export default defineComponent({
  name: "counters",
  data() {
    return {
      counters: {
        repositories: 0,
        commits: 0,
      },
    };
  },
  components: {
    counter,
  },
  methods: {
    async load() {
      try {
        const counters = await this.$store.dispatch("home/loadCounters");
        this.counters = counters;
      } catch (error) {
        console.warn(error);
      }
    },
  },
  mounted() {
    // this.load()
  },
});
</script>

<style lang="scss">
</style>