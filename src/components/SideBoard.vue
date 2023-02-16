<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="sideBoard">
    <div class="type">{{ type }}</div>

    <el-scrollbar class="scroll-viewer">
      <div class="cards_grid">
        <div v-for="(v, index) in volcano_json" :key="index" class="brief_card"
             @click="setVolcano(index)">
          <div class="v_pic">
            {{ index }}
          </div>
          <div class="v_name">{{ v.volcano_name }}</div>
        </div>
      </div>
    </el-scrollbar>

    <div class="arrow-box">
      <div class="arrow"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBoard',
  props: {
    volcano_json: Array,
    type: String,
  },
  data() {
    return {
    };
  },
  methods: {
    setVolcano(index) {
      this.$emit('setVolcano', index);
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

.sideBoard {
  width: 0;
  height: hCal(701);
  background-color: rgb(143, 143, 143);
  transition: all .3s ease-out;
  color: white;
  .arrow-box {
    position: absolute;
    right: -20px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 70px;
    background-color: rgb(143, 143, 143);
    border-radius: 0 4px 4px 0;
  }
  .arrow {
    position: absolute;
    top: 50%;
    right: 4px;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border: 10px solid rgb(219, 219, 219);
    border-color: transparent rgb(219, 219, 219) transparent transparent;
    transition: all .3s ease-out;
  }
  .type {
    margin-top: hCal(47);
    display: none;
    font-family: Roboto-Black;
    font-size: 48px;
  }
  .cards_grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
    grid-row-gap: 26px;
  }
  .brief_card {
    display: none;
    cursor: pointer;
    .v_pic {
      width: 318px;
      height: 179px;
      background-color: rgb(219, 219, 219);
    }
    .v_name {
      font-family: union_regular;
      font-size: 16px;
      line-height: 31px;
      text-align: start;
    }
  }

  &:hover {
    width: 825px;
    .arrow {
      border-color: transparent transparent transparent rgb(219, 219, 219);
    }

    .type, .brief_card {
      display: block;
    }
  }
  ::v-deep .el-scrollbar__bar {
    right: 10px;
    --el-scrollbar-bg-color: white;
  }
}

.scroll-viewer {
  margin-top: 40px;
  height: hCal(510);
}
</style>
