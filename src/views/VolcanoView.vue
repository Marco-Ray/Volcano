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
            <div class="vDescription">{{ description }}</div>
          </el-scrollbar>
          <div class="location">
            <div class="map">there should be a map</div>
          </div>
        </div>
        <div class="session-r">
          <div class="vPhoto"></div>
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

export default {
  name: 'VolcanoView',
  components: {
    SideBoard,
  },
  data() {
    return {
      arrowLeft: ArrowLeft,
      iconTag: IconTag,
      iconLike: IconLike,
      iconLiked: IconLiked,
      current_volcano: {},
      volcano_json: [],
      type: this.$route.query.type ? this.$route.query.type : 'Stratovolcano',
      liked: false,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
    async likeVolcano(index) {
      await likeVolcano(index)
        .then((res) => {
          console.log(res.data);
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
    height: 60px;
    font-family: Roboto-Black;
    font-size: 48px;
  }
  ::v-deep .el-scrollbar{
    height: hCal(150);
    min-height: 100px;
    margin: hCal(28) 0 hCal(73) 0;
  }
  .vDescription {
    width: 100%;
    font-family: union_regular;
    font-size: 16px;
    line-height: 31px;
  }
  .location {
    width: 100%;
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
  width: wCal(866);
  .vPhoto {
    weight: 100%;
    height: hCal(729);
    background-color: rgb(216, 216, 216);
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
}
</style>
