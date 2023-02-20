<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div>
    <div class="learn-more">
      <div class="container">
        <el-scrollbar>
          <router-view
            v-slot="{ Component, route }"
          >
            <transition
              :name="route.meta.transitionName"
            >
              <component
                :is="Component"
                :key="route.path"
              />
            </transition>
          </router-view>
        </el-scrollbar>
      </div>

      <div id="learn-more-bg"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LearnMore',
  data() {
    return {
    };
  },
  methods: {

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

#learn-more-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(72, 72, 73, 0.9);
  z-index: -10;
}

.learn-more {
  .container {
    margin: 76px wCal(61);
    width: calc(100vw - wCal(122));
    height: calc(100vh - 269px);
    border-top: 1px solid white;
    overflow: hidden;
    ::v-deep .el-scrollbar {
      width: 100%;
      .el-scrollbar__wrap {
        margin-top: 20px;
      }
      .el-scrollbar__view {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
    }
  }
}
</style>
