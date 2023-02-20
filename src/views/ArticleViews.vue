<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div>
    <div class="article">
      <div class="container">
        <div class="back-box">
          <div>
          </div>
          <div class="back">back</div>
        </div>
        <el-scrollbar>
          <div class="title">
            Title of the Article
          </div>
          <div class="content"></div>
        </el-scrollbar>
      </div>

      <div id="article-bg"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleViews',
};
</script>

<style scoped lang="scss">
@function wCal($w) {
  @return calc(100vw / 1920 * $w);
}

@function hCal($h) {
  @return calc(100vh / 1080 * $h);
}

#article-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(72, 72, 73, 0.9);
  z-index: -10;
}

.article {
  .container {
    position: relative;
    margin: 76px wCal(61);
    width: calc(100vw - wCal(122));
    height: calc(100vh - 269px);
    border-top: 1px solid white;
    overflow: hidden;
    color: white;
  }
  .back-box {
    position: absolute;
    .back {
      font-family: union_regular;
      font-size: 28px;
    }
  }

  .title {
    margin-top: 50px;
    font-family: Roboto-Black;
    font-size: 42px;
  }
  .content {
    width: 100%;
  }
}
</style>
