<template>
  <q-page class="q-pa-md">
    <div class="page-title">Algumas das Minhas Skills</div>
    <div class="row">
      <div class="col-md-6 col-12">
        <q-scroll-area class="techs-list-scroll-area">
          <div class="techs-list">
            <q-card
              v-for="(tech, index) in techs"
              :key="index"
              class="tech-card"
              flat
              @click="redirect(tech.url)"
            >
              <q-card-section>
                <q-img
                  class="tech-logo"
                  :src="tech.img"
                />
                <div class="tech-label">{{ tech.label }}</div>
              </q-card-section>
            </q-card>
          </div>
        </q-scroll-area>
      </div>
      <div class="col-md-6 col-12 flex items-center justify-center">
        <q-img
          src="undraw_job_hunt.png"
          class="undraw-job-hunt"
        />
      </div>
    </div>
  </q-page>
</template>
loca
<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "social",
  data() {
    return {
      techs: [
        {
          label: 'Laravel',
          img: 'laravel_logo.png',
          url: 'https://laravel.com'
        },
        {
          label: 'NodeJS',
          img: 'nodejs_logo.png',
          url: 'https://nodejs.org/'
        },
        {
          label: 'Bootstrap',
          img: 'bootstrap_logo.png',
          url: 'https://getbootstrap.com/'
        },
        {
          label: 'VueJS',
          img: 'vuejs_logo.png',
          url: 'https://vuejs.org/'
        },
      ]
    }
  },
  methods: {
    redirect(url) {
      window.open(url)
    }
  }
})
</script>

<style scoped>
@media screen and (min-width: 1000px) {
  .techs-list-scroll-area {
    width: 100%;
    height: calc(100vh - 150px);
    background: #ffffff32;
    border-radius: 10px;
    overflow: hidden;
  }

  .techs-list {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    width: 50vw;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .tech-card {
    width: 200px;
    background: transparent;
    margin: 10px 30px 100px 10px;
    transition: all .2s ease-in-out;
  }

  .tech-card:hover {
    background: #dddddd32;
    cursor: pointer;
  }

  .tech-card:hover .tech-label {
    opacity: 1;
    visibility: visible;
  }

  .tech-card .tech-label {
    font-family: Roboto, sans-serif;
    font-weight: 200;
    font-size: 14pt;
    text-align: center;
    margin: 40px 0 0 0;
    background: #1D1D1D55;
    border-radius: 20px;
    opacity: 0;
    visibility: hidden;
    transition: all .2s ease-in-out;
  }

  .tech-card .tech-logo {
    width: 150px;
    margin-left: 50%;
    transform: translateX(-50%);
  }

  .undraw-job-hunt {
    width: 400px;
  }
}

@media screen and (max-width: 1000px) {
  .techs-list-scroll-area {
    position: absolute;
    bottom: 20px;
    width: calc(100% - 32px);
    height: 50vh;
    background: #ffffff32;
    border-radius: 10px;
    overflow: hidden;
  }

  .techs-list {
    width: calc(100vw - 32px);
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .tech-card {
    width: 130px;
    background: #dddddd32;
    margin: 10px;
    transition: all .2s ease-in-out;
  }

  /*.tech-card:hover {*/
  /*  background: #dddddd32;*/
  /*  cursor: pointer;*/
  /*}*/
  /*.tech-card:hover .tech-label {*/
  /*  opacity: 1;*/
  /*  visibility: visible;*/
  /*}*/
  .tech-card .tech-label {
    font-family: Roboto, sans-serif;
    font-weight: 200;
    font-size: 12pt;
    text-align: center;
    margin: 20px 0 0 0;
    background: #1D1D1D55;
    border-radius: 20px;
    /*opacity: 0;*/
    /*visibility: hidden;*/
    transition: all .2s ease-in-out;
  }

  .tech-card .tech-logo {
    width: 100px;
  }

  .undraw-job-hunt {
    width: 200px;
    margin: 50px auto;
  }
}
</style>
