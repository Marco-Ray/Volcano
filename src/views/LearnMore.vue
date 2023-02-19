<template>
  <div>
    <div class="learn-more">
      <div class="container">
        <el-scrollbar>
          <div v-for="i in 6" :key="i" class="item-box">
            <div class="item">
              <div class="item-cover">{{ i }}</div>
              <div class="item-content">
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur.
                </div>
              </div>
            </div>
            </div>
        </el-scrollbar>
      </div>

      <div id="learn-more-bg"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LearnMore',
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
  .item-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 600px;
    height: 400px;
    transition: all .3s ease-out;
    &:nth-child(n):hover {
      width: 1040px;
      .item-content {
        display: block;
      }
    }
    &:nth-child(2n-1) {
      border-right: 1px solid white;
    }
  }
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto 50px;
    width: calc(100% - 100px);
    height: 100%;
    border-bottom: 1px solid white;
    .item-cover {
      width: 500px;
      height: 350px;
      background-color: rgb(216, 216, 216);
    }
    .item-content {
      display: none;
      width: calc(100% - 500px);
      color: white;
    }
  }
}
</style>
