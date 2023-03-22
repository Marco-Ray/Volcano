<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router>
    <el-menu-item index="/" >Home</el-menu-item>
    <el-menu-item index="/Categories">Statistics</el-menu-item>
    <el-sub-menu>
      <template #title>Volcanoes</template>
      <el-menu-item index="3-1" :route="{ path: '/Volcano/Stratovolcano' }">Stratovolcano</el-menu-item>
      <el-menu-item index="3-2" :route="{ path: '/Volcano/Shield' }">Shield</el-menu-item>
      <el-menu-item index="3-3" :route="{ path: '/Volcano/Caldera' }">Caldera</el-menu-item>
      <el-menu-item index="3-4" :route="{ path: '/Volcano/Pyroclastic+cone' }">Pyroclastic cone</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="/LearnMore">Learn More</el-menu-item>
  </el-menu>
</template>

<script>
export default {
name: "NavBarNew"
}
</script>

<style scoped>

</style>
