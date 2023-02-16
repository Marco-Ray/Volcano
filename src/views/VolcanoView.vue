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
          <div class="vName">{{ current_volcano.volcano_name }}</div>
          <div class="vDescription">{{ description }}</div>
          <div class="location">
            <div class="map">there should be a map</div>
            <div class="geoInfo">
              lat: {{ current_volcano.latitude }}
              <br/>
              lng: {{ current_volcano.longitude }}
            </div>
          </div>
        </div>
        <div class="session-r">right</div>
      </div>

      <side-board class="side_board" :volcano_json="volcano_json" :type="type"
                  @setVolcano="setVolcano" />

      <div id="volcano-bg"></div>
    </div>
  </div>
</template>

<script>
import ArrowLeft from '@/assets/Volcano/arrow-left.png';
import { getVolcano } from '@/api/data';
import SideBoard from '@/components/SideBoard.vue';

export default {
  name: 'VolcanoView',
  components: {
    SideBoard,
  },
  data() {
    return {
      arrowLeft: ArrowLeft,
      current_volcano: {},
      volcano_json: [],
      type: this.$route.query.type ? this.$route.query.type : 'Stratovolcano',
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    async getVolcano(type) {
      await getVolcano(type)
        .then((res) => {
          if (res.data) {
            this.volcano_json = res.data;
            // eslint-disable-next-line
            this.current_volcano = res.data[0];
          } else {
            this.volcano_json = [];
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    setVolcano(index) {
      this.current_volcano = this.volcano_json[index];
      // TODO give feedback when successfully select new volcano
    },
  },
  created() {
    this.getVolcano(this.type);
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
    height: 60px;
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

.side_board {
  position: absolute;
  top: 286px;
  left: 0;
}
</style>
