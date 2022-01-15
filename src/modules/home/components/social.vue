<template>
  <div class="socials">
    <div 
      v-for="({label, logo, url}, index) in socials"
      :key="index"
      class="social-item"
       @click="redirect(url)"
    >
      <i :class="logo">
        <q-tooltip v-if="!$q.platform.is.mobile">
          {{ label }}
        </q-tooltip>
      </i>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "social",
  data() {
    return {
      socials: [
        {
          label: "github",
          logo: "fab fa-github",
          url: "https://github.com/menezedouglas",
        },
        {
          label: "linkedin",
          logo: "fab fa-linkedin",
          url: "https://www.linkedin.com/in/menezedouglas/",
        },
        {
          label: "codepen",
          logo: "fab fa-codepen",
          url: "https://codepen.io/menezedouglas",
        },
      ],
    };
  },
  methods: {
    redirect(to) {
      window.open(to);
    },
  },
});
</script>

<style scoped>
.socials  {
  display: block;
  text-align: center;
}

.social-item {
  display: inline-block;
  color: #ffffff32;
  font-size: 20px;
  padding:10px;
  margin: 10px;
  transition: all .2s ease-in-out;
  cursor: pointer;
}

.social-item:hover {
  color: #ffffff;
}
</style>