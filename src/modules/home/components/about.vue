<template>
  <q-page class="q-pa-md">
    <div class="row">
      <div class="col-md-6 col-12 relative-position full-height">
        <div class="logo">
          <span>Douglas Menezes</span>
          <span v-if="!$q.platform.is.mobile">Desenvolvedor Full Stack PHP</span>
          <span v-if="$q.platform.is.mobile">Dev. FullStack PHP</span>
        </div>
      </div>
      <div class="col-md-6 col-12 relative-position">
        <q-scroll-area class="list-platforms-about-me">
          <platform-card
            v-for="(platform, index) in platforms"
            :key="index"
            :label="platform.label"
            :logo="platform.img"
          />
        </q-scroll-area>
      </div>
    </div>
  </q-page>
</template>

<script>
import {defineComponent} from 'vue'
import PlatformCard from 'components/PlatformCard'

export default defineComponent({
  name: "about",
  components: {
    PlatformCard
  },
  data () {
    return {
      platforms: [
        {
          label: 'codepen',
          img: 'codepen_logo.png'
        },
        {
          label: 'github',
          img: 'github_logo.png'
        },
        {
          label: 'linkedin',
          img: 'linkedin_logo.png'
        }
      ]
    }
  }
})
</script>

<style scoped>
.list-platforms-about-me {
  position: absolute;
  right: 0;
  width: 100%;
}

.logo {
  position: absolute;
  left: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo span:first-of-type {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 200;
  text-align: center;
  letter-spacing: 0.25em;
  text-transform: capitalize;
  color: #D66853;
}

.logo span:last-of-type {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  text-align: center;

  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #ffffff;
}

@media screen and (min-width: 1100px) {
  .logo {
    top: 50vh;
    transform: translateY(-50%);
    padding: 100px;
  }

  .list-platforms-about-me {
    top: 0;
    padding: calc(50% - 150px);
    height: 100vh;
  }

  .logo span:first-of-type {
    font-size: 48px;
    margin: 0 0 20px 0;
    line-height: 56px;
  }

  .logo span:last-of-type {
    font-size: 18px;
    line-height: 21px;
  }

}

@media screen and (max-width: 1100px) {
  .logo {
    padding: 50px;
    margin: 6vh 0 0 0;
  }

  .list-platforms-about-me {
    top: 25vh;
    padding: calc(50% - 150px);
    height: calc(75vh - 20px);
  }

  .logo span:first-of-type {
    font-size: 33.6px;
    margin: 0 0 14px 0;
    line-height: 39.2px;
  }

  .logo span:last-of-type {
    font-size: 12.6px;
    line-height: 14.7px;
  }

}
</style>
