<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
 <div class="category">
   <div class="card">
    <div class="title">Ash And Cinder Cone Causes And Features</div>
    <div class="features">{{ features }}</div>
    </div>
   <div class="card">
    <div class="title">Emission Frequency</div>
    </div>
   <div class="card">
    <div class="title">Number Of Volcanoes</div>
    </div>

   <div class="viewMore" @click="goFor">
    <div>View More</div>
    <div><img :src="arrowRight" alt="view more"/></div>
   </div>
 </div>
</template>

<script>
import ArrowRight from '@/assets/Categories/arrow-right.png';

export default {
  name: 'CategoryBoard',
  props: {
    label: String,
  },
  data() {
    return {
      arrowRight: ArrowRight,
      features: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    };
  },
  methods: {
    goFor() {
      this.$router.push('/Volcano');
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

.category {
  display: flex;
  width: wCal(1515);
  height: 668px;
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 40px;
    width: 100%;
    height: 100%;
    border-right: 1px solid rgb(151, 151, 151);
    color: white;
    &:hover {
      border-top: 5px solid white;
    }
  }

  .title {
    margin-top: 37px;
    width: 438px;
    height: 112px;
    font-family: Roboto-Black;
    font-size: 35px;
    text-align: center;
  }

  .features {
    font-family: union_regular;
    font-size: 16px;
    line-height: 31px;
    text-align: start;
  }
}

.viewMore {
  position: absolute;
  bottom: 20px;
  right: 46px;
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  cursor: pointer;

  color: white;
  font-family: union_regular;
  font-size: 32px;
}
</style>
