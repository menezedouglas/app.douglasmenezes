<template>
  <q-page class="half-page bg-xiketic">
    <div class="row half-page">
      <div class="col-md-4 col-12 flex items-center justify-center q-pa-lg">
        <q-img src="me.jpg" class="profile-image" />
      </div>
      <div class="col-md-8 col-12 q-my-auto q-pa-lg">
        <div class="text-h5 text-white q-my-md">Sobre mim</div>
        <p class="about-text">
          Sou um profissional dedicado, com vontade em fazer parte da equipe,
          junto crescermos e evoluirmos. Sou amigável, compreensivo, atencioso e
          gosto de trabalhar em equipe.
        </p>
        <p class="about-text">
          Trabalho com desenvolvimento de sistemas e sites modernos, responsivos
          e que irão atender suas necessidades específicas. Utilizo o melhor
          framework PHP disponível atualmente (Laravel), bem como NodeJS e
          Bootstrap. Venho me empenhando para ganhar experiência em
          desenvolvimento mobile com React Native e Expo, com a finalidade de
          atender as necessidades atuais do mercado mundial.
        </p>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "about",
});
</script>

<style scoped>
.profile-image {
  width: 15em;
  border-radius: 50%;
}

.about-text {
  font-size: 12pt;
  color: #fff;
  font-style: Roboto, sans-serif;
  font-weight: 100;
  line-height: 2.5em;
}
</style>