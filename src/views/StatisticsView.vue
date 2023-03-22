<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div>
    <!-- nav-bar /-->
    <div class="categories">
      <div class="container">
        <el-tabs type="card" tabPosition="left">
          <el-tab-pane
            v-for="(label, index) in labelOptions" :key="index"
            :label="label"
          >
            <category-board :type="label" :index="index" />
          </el-tab-pane>
        </el-tabs>

        <div class="viewMore" @click="goFor">
          <div>View More</div>
          <div><img :src="arrowRight" alt="view more"/></div>
        </div>
      </div>

      <div id="categories-bg"></div>
    </div>
  </div>
</template>

<script>
// import NavBar from '@/components/NavBar.vue';
import CategoryBoard from '@/components/CategoryBoard.vue';
import ArrowRight from '@/assets/Categories/arrow-right.png';

export default {
  name: 'CategoriesView',
  components: {
    // NavBar,
    CategoryBoard,
  },
  data() {
    return {
      arrowRight: ArrowRight,
      labelOptions: ['Stratovolcano', 'Shield', 'Caldera', 'Pyroclastic cone'],
      type: 'Stratovolcano',
    };
  },
  methods: {
    goFor() {
      this.$router.push({ path: '/Volcano', query: { type: this.type } });
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

#categories-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(72, 72, 73, 0.9);
  z-index: -10;
}

.categories {
  .container {
    position: relative;
    margin: 72px wCal(122);
    width: calc(100vw - wCal(244));
    height: calc(100vh - 269px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    row-gap: 100px;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.44), rgba(219, 219, 219, 0.08));
  }
}

.el-tabs {
  height: 100%;
  ::v-deep .el-tabs__nav-wrap {
    padding: 0 !important;
    .el-tabs__nav {
      border: unset !important;
    }
    .el-tabs__content {
      width: calc(100vw - wCal(414));
      height: 100%;
    }
    .el-tabs__item {
      margin: 5px 0 ;
      width: 166px;
      height: 166px;
      background-color: rgb(151, 151, 151);
      text-align: center;
      line-height: 166px;
      color: white;
      border: unset !important;
      &:hover {
        color: red;
      }
    }
    .is-active {
      background-color: rgb(72, 72, 73);
    }
  }
}

.viewMore {
  position: absolute;
  bottom: hCal(-60);
  right: wCal(20);
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  cursor: pointer;
  z-index: 90;

  color: white;
  font-family: union_regular;
  font-size: 32px;
}
</style>
