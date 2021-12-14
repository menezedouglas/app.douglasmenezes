<template>
  <q-page>
    <div class="welcome">
      <span>Douglas Menezes</span>
      <span v-if="!$q.platform.is.mobile">Desenvolvedor Full Stack PHP</span>
      <span v-if="$q.platform.is.mobile">Dev. FullStack PHP</span>
      <img
        src="scroll_down.png"
        alt="scroll_down"
        class="scroll-down-icon"
      />
    </div>
  </q-page>
</template>

<script>
export default {
  name: "welcome"
}
</script>

<style scoped>
.welcome {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 100%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.welcome span:first-of-type {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 200;
  text-align: center;
  letter-spacing: 0.25em;
  text-transform: capitalize;
  color: #D66853;
}

.welcome span:last-of-type {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  text-align: center;

  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #ffffff;
}

.scroll-down-icon {
  position: absolute;
  left: 50%;
  bottom: 50px;
  transform: translateX(-50%);
}

@media screen and (min-width: 1100px) {
  .welcome span:first-of-type {
    font-size: 48px;
    margin: 0 0 20px 0;
    line-height: 56px;
  }

  .welcome span:last-of-type {
    font-size: 18px;
    line-height: 21px;
  }

  .scroll-down-icon {
    width: 50px;
  }
}

@media screen and (max-width: 1100px) {
  .welcome span:first-of-type {
    font-size: 33.6px;
    margin: 0 0 14px 0;
    line-height: 39.2px;
  }

  .welcome span:last-of-type {
    font-size: 12.6px;
    line-height: 14.7px;
  }

  .scroll-down-icon {
    width: 35px;
  }
}

</style>
