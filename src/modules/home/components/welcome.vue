<template>
  <q-page class="q-pa-md half-page bg-xiketic">
    <div class="welcome">
      <div class="row full-height">
        <div class="col-md col-12 relative-position">
          <q-img src="undraw_developer_activity.svg" class="welcome-logo" />
        </div>
        <div class="col-md-8 col-12 relative-position">
          <div class="absolute-center">
            <small>Olá!</small>
            <span>Me chamo Douglas 😉</span>
            <small>Full Stack Developer</small>
            <q-separator class="q-my-sm bg-transparent"></q-separator>
            <q-btn outline color="purple" label="Entre em contato comigo" @click="redirectTo('https://linktr.ee/menezedouglas')" >
              <q-tooltip>Em breve</q-tooltip>
            </q-btn>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: "welcome",
  methods: {
    redirectTo(url) {
      window.open(url, '_blank');
    }
  }
});
</script>

<style scoped>
.welcome {
  padding: 8px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.welcome span,
.welcome small {
  display: block;
  font-family: Roboto, sans-serif;
}

.welcome span {
  font-weight: 500;
  font-size: 20pt;
  color: #ffffff;
  padding: 0 0 10px 0;
}

.welcome small {
  color: #ffffff55;
  font-size: 12px;
  text-transform: uppercase;
}

@media screen and (min-width: 1000px) {
  .welcome-logo {
    width: 100%;
    max-width: 300px;
    position: absolute;
    top: 50%;
    left: 75%;
    transform: translate(-50%, -50%);
  }
}

@media screen and (max-width: 1000px) {
  .welcome-logo {
    width: 70%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
