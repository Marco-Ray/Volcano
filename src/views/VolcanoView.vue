<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div>
    <div class="volcano">
      <div class="container">
        <div class="back" @click="goBack">
          <div><img :src="arrowLeft" alt="go back"/></div>
          <div>Back</div>
        </div>
        <div class="session-l">
          <div class="vName">{{ volcano_name }}</div>
          <div class="vDescription">{{ description }}</div>
          <div class="location">
            <div class="map">there should be a map</div>
            <div class="geoInfo">the latitude and longitude</div>
          </div>
        </div>
        <div class="session-r">right</div>
      </div>

      <div id="volcano-bg"></div>
    </div>
  </div>
</template>

<script>
import ArrowLeft from '@/assets/Volcano/arrow-left.png';

export default {
  name: 'VolcanoView',
  data() {
    return {
      arrowLeft: ArrowLeft,
      volcano_name: 'ASH AND CINDER CONE NAME OF VOLCANO',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped lang="scss">
@function wCal($w) {
  @return calc(100vw / 1920 * $w);
}

@function hCal($h) {
  @return calc(100vh / 1080 * $h);
}

#volcano-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(72, 72, 73, 0.9);
  z-index: -10;
}

.volcano {
  .container {
    position: relative;
    margin: 72px wCal(122);
    width: calc(100vw - wCal(244));
    height: calc(100vh - 269px);
    display: flex;
    flex-direction: row;
    justify-content: center;
    column-gap: 92px;
  }
}

.back {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  column-gap: 10px;
  cursor: pointer;

  font-family: union_regular;
  font-size: 32px;
  color: white;
}

.session-l, .session-r {
  width: 100%;
  height: 100%;
}

.session-l {
  margin-top: 79px;
  color: white;
  text-align: start;
  .vName {
    font-family: Roboto-Black;
    font-size: 48px;
  }
  .vDescription {
    margin-top: 28px;
    font-family: union_regular;
    font-size: 16px;
    line-height: 31px;
  }
  .location {
    display: flex;
    flex-direction: column;
    margin-top: 34px;
    .map {
      width: 100%;
      height: 339px;
      background-color: rgb(216, 216, 216);
    }
    .geoInfo {
      margin-top: 30px;
    }
  }
}

.session-r {
  background: rgb(216, 216, 216);
}
</style>
