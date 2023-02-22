<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="sideBoard">
    <div class="type">{{ type }}</div>

    <el-scrollbar class="scroll-viewer">
      <div class="cards_grid">
        <div v-for="(v, index) in volcano_json" :key="index" class="brief_card"
             @click="debounceMethods(setVolcano, index, 2000)">
          <div class="v_pic-box">
            <img :src="v.image" alt="volcano image" class="v_pic"/>
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
      this.$message({
        message: 'Success!',
        type: 'success',
        center: true,
      });
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
  width: wCal(704);
  height: 10px;
  background-color: rgb(143, 143, 143);
  transition: all .3s ease-out;
  color: white;
  .arrow-box {
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 70px;
    height: 20px;
    background-color: rgb(143, 143, 143);
    border-radius: 4px 4px 0 0;
  }
  .arrow {
    position: absolute;
    top: 4px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border: 10px solid rgb(219, 219, 219);
    border-color: transparent transparent rgb(219, 219, 219) transparent ;
    transition: all .3s ease-out;
  }
  .type {
    margin-top: hCal(47);
    display: none;
    font-family: Roboto-Black;
    font-size: 48px;
  }
  .cards_grid {
    padding: 0 wCal(60);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
    grid-row-gap: 36px;
  }
  .brief_card {
    display: none;
    cursor: pointer;
    height: 206px;
    border-bottom: 1px solid white;
    .v_pic-box {
      width: 240px;
      height: 136px;
      background-color: rgb(0, 0, 0);
      &:active {
        border: 5px solid black;
      }
      .v_pic {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .v_name {
      margin-top: 13px;
      font-family: union_regular;
      font-size: 16px;
      line-height: 31px;
      text-align: start;
    }
  }

  &:hover {
    height: hCal(800);
    .arrow {
      border-color: rgb(219, 219, 219) transparent transparent transparent;
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
  height: hCal(610);
}

@media screen and (max-width: 1650px) {
  .sideBoard {
    .cards_grid {
      grid-template-columns: 1fr;
    }
  }
}
</style>
