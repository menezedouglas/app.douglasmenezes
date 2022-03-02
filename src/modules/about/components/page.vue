<template>
  <q-page class="q-pa-md">
    <div class="row">
      <div class="col">
        <q-breadcrumbs>
          <q-breadcrumbs-el label="Início" to="/" icon="home" />
          <q-breadcrumbs-el label="Sobre" icon="widgets" />
        </q-breadcrumbs>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="text-h5 q-py-md">Sobre</div>
      </div>
    </div>
  </q-page>
  <credits />
</template>

<script>
import { defineComponent } from 'vue'
import credits from '../../../components/credits.vue'

export default defineComponent({
  name: 'page',
  components: {
    credits
  }
})
</script>
