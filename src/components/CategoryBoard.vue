<template>
 <div class="category">
   <div class="card">1</div>
   <div class="card">2</div>
   <div class="card">3</div>

   <div class="viewMore">View More</div>
 </div>
</template>

<script>
export default {
  name: 'CategoryBoard',
  props: {
    label: String,
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

.category {
  display: flex;
  width: wCal(1515);
  height: 668px;
  .card {
    width: 100%;
    height: 100%;
    border-right: 1px solid rgb(151, 151, 151);
    &:hover {
      border-top: 5px solid white;
    }
  }
}

.viewMore {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: white;
}
</style>
