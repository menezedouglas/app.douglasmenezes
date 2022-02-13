<template>
  <q-card class="card-platform-about-me">
    <q-card-section horizontal>
      <q-card-section>
        <q-img
          :src="logo"
          alt="Platform Logo"
          class="platform-logo"
        />
      </q-card-section>
      <q-card-section class="platform-name">
        {{ label }}
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "PlatformCard",
  props: ['label', 'logo']
})
</script>

<style scoped>
  @media screen and (min-width: 1000px) {
    .card-platform-about-me {
      width: 300px;
      height: 100px;
      border-radius: 20px;
      margin: calc(50% - 75px) 0 0 0;
      background: rgba(255, 255, 255, 0.1);
    }

    .platform-logo {
      width: 60px;
      margin: 5px 20px;
    }

    .platform-name {
      font-family: Roboto, sans-serif;
      font-weight: 300;
      font-size: 20px;
      line-height: 28px;
      display: flex;
      align-items: center;
      text-align: center;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: #D66853;
    }
  }

  @media screen and (max-width: 1000px) {
    .card-platform-about-me {
      width: 300px;
      height: 100px;
      border-radius: 20px;
      margin: calc(50% - 75px) 0 0 0;
      background: rgba(255, 255, 255, 0.1);
    }

    .platform-logo {
      width: 60px;
      margin: 5px 20px;
    }

    .platform-name {
      font-family: Roboto, sans-serif;
      font-weight: 300;
      font-size: 20px;
      line-height: 28px;
      display: flex;
      align-items: center;
      text-align: center;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: #D66853;
    }
  }
</style>
