<template>
  <div class="row">
    <div class="col-12 text-center">
      <q-chip
        dense
        outline
        text-color="white"
        label="Socials"
      />
    </div>
  </div>
  <div class="socials-scroll-area">
    <q-card
      v-for="({ label, logo, url }, index) in socials"
      :key="index"
      flat
      class="social-card"
      @click="redirect(url)"
    >
      <q-card-section horizontal class="relative-position full-height">
        <q-card-section class="absolute-center text-center">
          <i :class="logo" style="font-size: 40px" />
          <div class="text-subtitle2 text-uppercase text-center q-my-md">
            {{ label }}
          </div>
        </q-card-section>
      </q-card-section>
    </q-card>
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
.socials-scroll-area {
  width: 100%;
  height: auto;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
}

.social-card {
  min-width: 100px;
  height: 120px;
  margin: 20px;
  cursor: pointer;
  background: transparent;
  color: #fff;
}

@media screen and (min-width: 1000px) {
  .socials-scroll-area {
    justify-content: space-around;
  }
}
</style>