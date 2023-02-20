<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="article">
    <div class="back-box" @click="goBack">
      <div class="back-icon-box">
        <img :src="iconBack" alt="back" class="back-icon"/>
      </div>
      <div class="back">Back</div>
    </div>
    <el-scrollbar>
      <div class="title">
        Title of the Article
      </div>
      <div class="content"></div>
    </el-scrollbar>
  </div>
</template>

<script>
import IconBack from '@/assets/LearnMore/icon-back.png';

export default {
  name: 'ArticleViews',
  data() {
    return {
      iconBack: IconBack,
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

.article {
  width: 100%;
  color: white;
}

.back-box {
  position: absolute;
  top: 5px;
  display: flex;
  z-index: 90;
  align-items: center;
  cursor: pointer;
  .back-icon-box {
    width: 25px;
    height: 24px;
    margin-right: 5px;
    .back-icon {
      width: 100%;
    }
  }
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
  height: 2000px;
}

</style>
