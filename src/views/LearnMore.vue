<template>
  <div>
    <div class="learn-more">
      <div class="container"></div>

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
    position: relative;
    margin: 76px wCal(122);
    width: calc(100vw - wCal(244));
    height: calc(100vh - 269px);
  }
}
</style>
