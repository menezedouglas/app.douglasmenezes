<template>
  <q-page class="q-pa-md half-page bg-white">
    <div class="row">
      <div class="col-12 text-center">
        <q-chip
          dense
          outline
          text-color="purple"
          class="q-mt-lg"
          label="Habilidades (Skills)"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-12 q-mt-xl">
        <div class="skills">
          <div
            v-for="({ label, icon }, index) in skills"
            :key="index"
            class="skills-item"
          >
            <i :class="icon + ` skills-icon`"></i>
            <span class="skills-label">{{ label }}</span>
          </div>
        </div>
      </div>
      <div class="col-12">
        <small class="text-grey-6 q-pa-md">
          * Adquirindo conhecimento sobre...
        </small>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "skills",
  data() {
    return {
      skills: [
        {
          label: "Laravel",
          icon: "fab fa-laravel",
        },
        {
          label: "GitHub",
          icon: "fab fa-github",
        },
        {
          label: "PHP",
          icon: "fab fa-php",
        },
        {
          label: "NodeJS",
          icon: "fab fa-node",
        },
        {
          label: "NPM",
          icon: "fab fa-npm",
        },
        {
          label: "Docker",
          icon: "fab fa-docker",
        },
        {
          label: "Javascript",
          icon: "fab fa-js",
        },
        {
          label: "HTML5",
          icon: "fab fa-html5",
        },
        {
          label: "CSS3",
          icon: "fab fa-css3",
        },
        {
          label: "SASS/SCSS",
          icon: "fab fa-sass",
        },
        {
          label: "Bootstrap",
          icon: "fab fa-bootstrap",
        },
        {
          label: "VueJS",
          icon: "fab fa-vuejs",
        },
        {
          label: "Ubuntu",
          icon: "fab fa-ubuntu",
        },
        {
          label: "React *",
          icon: "fab fa-react",
        },
      ],
    };
  },
});
</script>

<style scoped>
.skills {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
}

.skills-item {
  width: 150px;
  padding: 10px;
  margin: 10px;
  border-radius: 15px;
  background: #3a015c;
  text-align: center;
  color: #fff;
}

.skills-icon {
  display: block;
  margin: 20px 0;

  font-size: 50px;
}

.skills-label {
  font-size: 12px;
  font-family: Roboto, sans-serif;
  font-weight: 100;
  text-transform: uppercase;
}
</style>