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
          <div class="vType">
            <div class="tag-box">
              <img :src="iconTag" alt="type" class="tag">
            </div>
            <span style="border-bottom: 1px solid white;
             text-transform: uppercase">
              {{ type }}
            </span>
          </div>
          <div class="vName">{{ current_volcano.volcano_name }}</div>
          <el-scrollbar height="150">
            <div class="vDescription">{{ current_volcano.Description }}</div>
          </el-scrollbar>
          <div class="location" v-if="LatLng.lat && LatLng.lng">
            <l-map
              ref="map" v-model:zoom="zoom"
                   :center="LatLng">
              <l-tile-layer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                layer-type="base"
                name="OpenStreetMap"
              ></l-tile-layer>
              <l-marker :lat-lng="LatLng" ></l-marker>
            </l-map>
          </div>
        </div>
        <div class="session-r">
          <div class="vPhoto_box">
            <img :src="current_volcano.image" alt="volcano photo" class="vPhoto"/>
          </div>
          <div class="like">
            <div v-if="!liked"
              class="like-box" @click="debounceMethods(likeVolcano, current_volcano.id, 2000)">
              <img :src="iconLike" alt="like" class="like-icon" />
            </div>
            <div v-else
              class="like-box"  @click="debounceMethods(dislikeVolcano, current_volcano.id, 2000)">
              <img :src="iconLiked" alt="liked" class="like-icon" />
            </div>
            <div class="like-num">{{ current_volcano.likes }}</div>
          </div>
        </div>
      </div>

      <side-board class="side_board" :volcano_json="volcano_json" :type="type"
                  @setVolcano="setVolcano" />

      <div id="volcano-bg"></div>
    </div>
  </div>
</template>

<script>
import ArrowLeft from '@/assets/Volcano/arrow-left.png';
import IconTag from '@/assets/Volcano/icon-tag.png';
import IconLike from '@/assets/Volcano/icon-like.png';
import IconLiked from '@/assets/Volcano/icon-liked.png';
import { getVolcano, likeVolcano, dislikeVolcano } from '@/api/data';
import SideBoard from '@/components/SideBoard.vue';
import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  name: 'VolcanoView',
  components: {
    SideBoard,
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      arrowLeft: ArrowLeft,
      iconTag: IconTag,
      iconLike: IconLike,
      iconLiked: IconLiked,
      current_volcano: {},
      volcano_json: [],
      type: this.$route.params.type,
      liked: false,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      zoom: 8,
      LatLng: {},
    };
  },
  methods: {
    goBack() {
      this.$router.push('/Categories');
    },
    async getVolcano(type) {
      await getVolcano(type)
        .then((res) => {
          if (res.data) {
            this.volcano_json = res.data;
            // eslint-disable-next-line
            this.current_volcano = res.data[0];
            this.LatLng.lat = parseFloat(this.current_volcano.latitude);
            this.LatLng.lng = parseFloat(this.current_volcano.longitude);
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
      this.liked = false;
      this.LatLng = {};
      this.LatLng.lat = parseFloat(this.current_volcano.latitude);
      this.LatLng.lng = parseFloat(this.current_volcano.longitude);
    },
    async likeVolcano(index) {
      await likeVolcano(index)
        .then((res) => {
          // eslint-disable-next-line
          this.current_volcano['likes'] = res.data.likes;
          this.liked = true;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async dislikeVolcano(index) {
      await dislikeVolcano(index)
        .then((res) => {
          // eslint-disable-next-line
          this.current_volcano['likes'] = res.data.likes;
          this.liked = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getVolcano(this.type);
  },
  watch: {
    // 监听路由是否变化
    '$route' (to, from) {
      if(to.query.type != from.query.type){
        this.type = to.query.type; // 把最新id赋值给定义在data中的id
        this.$router.go(0); // 重新调用加载数据方法
      }
    }
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
    margin: 76px wCal(122);
    width: calc(100vw - wCal(244));
    height: calc(100vh - 269px);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
  z-index: 90;
}

.session-l, .session-r {
  height: 100%;
}

.session-l {
  position: relative;
  margin-top: 79px;
  width: wCal(704);
  color: white;
  text-align: start;
  .vType {
    position: absolute;
    top: -79px;
    right: 0;
    display: flex;
    column-gap: 18px;
    font-family: Roboto-Black;
    font-size: 32px;
    line-height: 43px;
    .tag-box {
      width: 43px;
      height: 43px;
    }
    .tag {
      width: 100%;
      height: 100%;
    }
  }
  .vName {
    width: 100%;
    //height: 60px;
    font-family: Roboto-Black;
    font-size: 48px;
  }
  ::v-deep .el-scrollbar{
    height: hCal(150);
    min-height: 100px;
    margin: hCal(28) 0 hCal(73) 0;
  }
  .vDescription {
    padding-bottom: 15px;
    width: 100%;
    font-family: union_regular;
    font-size: 16px;
    line-height: 31px;
  }
  .location {
    width: 100%;
    height: 339px;
    display: flex;
    flex-direction: column;
    margin-top: 34px;
  }
}

.session-r {
  width: wCal(866);
  .vPhoto_box {
    width: 100%;
    height: hCal(729);
    background-color: #000;
    .vPhoto {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .like {
    margin-top: 10px;
    display: flex;
    column-gap: 10px;
    .like-box {
      width: 37px;
      height: 37px;
      cursor: pointer;
      .like-icon {
        width: 100%;
        height: 100%;
      }
    }
    .like-num {
      font-family: union_regular;
      font-size: 16px;
      line-height: 37px;
      color: white;
    }
  }
}

.side_board {
  position: absolute;
  bottom: 0;
  left: wCal(121);
  z-index: 99;
}

.leaflet-container {
  z-index: 90;
}

@media screen and (max-width: 1400px) {
  .session-l {
    .vType {
      position: unset;
      margin-bottom: 20px;
    }
  }
}

//@media screen and (max-width: 1000px) {
//  .volcano {
//    .container {
//      flex-direction: column;
//      justify-content: center;
//      align-items: center;
//    }
//  }
//}
</style>
