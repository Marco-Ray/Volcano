<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div v-for="(graph, index) in graphsList" :key="index" class="item-box">
            <div class="item">
              <div class="item-cover">
                <img :src="graph.image" alt="cover" class="graph_cover" />
              </div>
              <div class="item-content">
                <div class="item-title" @click="goArticle(index)">{{ graph.title }}</div>
                <div class="item-abstract">
                  {{ graph.content }}
                </div>
              </div>
            </div>
            </div>
</template>

<script>
export default {
  name: 'MenuView',
  props: {
    graphsList: Array,
  },
  emits: ['setIndex'],
  data() {
    return {
    };
  },
  methods: {
    goArticle(index) {
      // this.$emit('setIndex', index);
      this.$router.push({ path: '/Article', query: { index } });
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
      padding: 0 30px;
      .item-title {
        font-family: union_bold;
        font-size: 26px;
        cursor: pointer;
        &:hover {
          border-bottom: 1px solid white;
        }
      }
      .item-abstract {
        margin-top: 50px;
        text-align: start;
      }
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
    background-color: rgb(0, 0, 0);
    .graph_cover {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .item-content {
    display: none;
    width: calc(100% - 500px);
    color: white;
  }
}
</style>
