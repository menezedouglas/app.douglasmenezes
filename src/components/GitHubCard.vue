<template>
  <q-card class="git-hub-card">
    <q-item>
      <q-item-section avatar>
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/boy-avatar.png">
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>Title</q-item-label>
        <q-item-label caption>
          Subhead
        </q-item-label>
      </q-item-section>
    </q-item>

    <q-separator />

    <q-card-section horizontal>
      <q-card-section>

      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "GitHubCard"
})
</script>

<style scoped>
.git-hub-card {
  position: relative;
  width: 300px;
  max-height: 500px;
  margin: 10px;
  order: 5;
  flex-grow: 4;
  display: inline-block;
}
</style>
