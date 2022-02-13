<template>
  <q-card class="git-hub-card" @click="redirect">
    <q-card-section horizontal>
      <q-card-section>
        <span class="text-h6">{{ name }}</span> <br>
        <span class="text-grey-7">author: <strong>{{ owner.login }}</strong></span> <br>
        <small class="text-grey-9">Ultima modificação: {{ formatDate(updated_at) }}</small> <br>
        <small class="text-grey-9">Criado em: {{ formatDate(created_at) }}</small>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue'
import moment from 'moment'

export default defineComponent({
  name: "GitHubCard",
  props: [
    'owner',
    'name',
    'url',
    'language',
    'created_at',
    'updated_at'
  ],
  methods: {
    formatDate(date) {
      return moment(date).format('DD/MM/YYYY HH:mm:ss')
    },
    redirect() {
      window.open(this.url)
    }
  }
})
</script>

<style scoped>
.git-hub-card {
  max-width: 400px;
  min-width: 300px;
  margin: 10px;
  cursor: pointer;
}

.git-hub-card:hover {
  background: #1D1D1Daa;
}
</style>
