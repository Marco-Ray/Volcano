<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div v-for="i in 6" :key="i" class="item-box">
            <div class="item">
              <div class="item-cover">{{ i }}</div>
              <div class="item-content">
                <div class="item-title" @click="goArticle">Title of the Article</div>
                <div class="item-abstract">
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
</template>

<script>
export default {
  name: 'MenuView',
  data() {
    return {
    };
  },
  methods: {
    goArticle() {
      this.$router.push({ path: '/LearnMore/Article' });
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
    background-color: rgb(216, 216, 216);
  }
  .item-content {
    display: none;
    width: calc(100% - 500px);
    color: white;
  }
}
</style>
