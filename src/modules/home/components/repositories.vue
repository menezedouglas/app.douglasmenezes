<template>
  <q-page class="q-pa-md">
    <div class="page-title">MEUS REPOSITÓRIOS</div>
    <q-separator class="q-my-sm q-mb-lg bg-transparent"/>
    <q-scroll-area class="projects-area">
      <div class="projects-area-content">
        <git-hub-card
          v-for="(project, index) in projects"
          :key="index"
          :owner="project.owner"
          :name="project.name"
          :url="project.html_url"
          :language="project.language"
          :created_at="project.created_at"
          :updated_at="project.updated_at"
        />
      </div>
    </q-scroll-area>

    <div class="text-center q-mt-md">
      <small
        class="text-grey-8"
      >
        Data provided by
        <a href="https://github.com" target="_blank">
          <q-badge>GitHub</q-badge>
        </a>
      </small>
    </div>
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
        console.warn(error)
      }
    }
  },
  created() {
    // this.load()
  }
})
</script>

<style scoped>
  .projects-area {
    width: calc(100vw - 40px);
    display: inline-block;
    background: #ffffff32;
    border-radius: 10px;
    overflow: hidden;
  }

  .projects-area-content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1000px) {
    .projects-area {
      height: calc(100vh - 250px);
    }
  }

  @media screen and (max-width: 1000px) {
    .projects-area {
      height: calc(100vh - 200px);
    }
  }
</style>
