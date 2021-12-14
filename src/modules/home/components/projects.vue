<template>
  <q-page class="q-pa-md">
    <q-scroll-area class="projects-area">
      <git-hub-card
        v-for="(project, index) in projects"
        :key="index"
      />
    </q-scroll-area>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import GitHubCard from '../../../components/GitHubCard'

export default defineComponent({
  name: "projects",
  components: {
    GitHubCard
  },
  computed: {
    projects: {
      set (val) {
        this.$store.dispatch('home/setProjects', val)
      },
      get () {
        return this.$store.getters['home/getProjects']
      }
    }
  },
  methods: {
    async load () {
      try {
        await this.$store.dispatch('home/loadProjects')
      } catch (error) {
        console.log(error)
      }
    }
  },
  created() {
    this.load()
  }
})
</script>

<style scoped>
  .projects-area {
    width: calc(100vw - 40px);
    height: calc(100vh - 30px);
    display: flex;
  }


</style>
