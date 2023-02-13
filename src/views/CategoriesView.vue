<template>
  <div class="categories">
    <div class="container">
      <el-tabs type="card" tabPosition="left">
        <el-tab-pane label="Ash And Cinder Cone">Ash And Cinder Cone</el-tab-pane>
        <el-tab-pane label="Basic Lava Cone">Basic Lava Cone</el-tab-pane>
        <el-tab-pane label="Acid Lava Cone">Acid Lava Cone</el-tab-pane>
        <el-tab-pane label="Composite Cone">Composite Cone</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoriesView',
};
</script>

<style scoped lang="scss">
@function wCal($w) {
  @return calc(100vw / 1920 * $w);
}

@function hCal($h) {
  @return calc(100vh / 1080 * $h);
}

.categories {
  width: 100vw;
  height: 100vh;
  background-color: #484849;
  .container {
    position: absolute;
    top: 116px;
    margin: 79px wCal(122);
    width: calc(100vw - wCal(244));
    height: calc(100vh - 269px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    row-gap: 100px;
    //background-color: white;
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
    .el-tabs__item {
      margin: 5px 0 ;
      width: 160px;
      height: 160px;
      background-color: rgb(151, 151, 151);
      text-align: center;
      line-height: 166px;
      color: white;
      border: unset !important;
      &:hover {
        color: blue;
      }
    }
    .is-active {
      background-color: rgb(72, 72, 73);
    }
  }
}

//::v-deep .el-tabs--left {
//  width: 168px;
//  height: 168px;
//}
</style>
