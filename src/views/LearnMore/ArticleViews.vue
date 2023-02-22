<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="article">
    <div class="back-box" @click="goBack">
      <div class="back-icon-box">
        <img :src="iconBack" alt="back" class="back-icon"/>
      </div>
      <div class="back">Back</div>
    </div>
    <el-scrollbar v-if="selectedGraph">
      <div class="title">
        {{ selectedGraph.title }}
      </div>
      <div class="content">
        <div class="g_content">
          {{ selectedGraph.content }}
        </div>
        <iframe :src="selectedGraph.graph"
                :title="index" class="chart">
        </iframe>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
import IconBack from '@/assets/LearnMore/icon-back.png';

export default {
  name: 'ArticleViews',
  props: {
    graphsList: Array,
  },
  data() {
    return {
      iconBack: IconBack,
      index: this.$route.query.index,
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
  computed: {
    selectedGraph() {
      if (this.graphsList) {
        return this.graphsList[this.index];
      }
      return {};
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
  margin: 60px 100px 0 100px;
  width: 100%;
  .g_content {
    font-family: union_regular;
    width: 100%;
    font-size: 16px;
    text-align: start;
  }
  .chart {
    margin-top: 20px;
    min-width: 720px;
    min-height: 420px;
  }
}

</style>
