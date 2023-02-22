<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
 <div class="category">
   <!--el-scrollbar height="811px" -->
     <div class="card card-1">
      <div class="title">Ash And Cinder Cone Causes And Features</div>
      <div class="features">{{ features }}</div>
      </div>
      <!-- eslint-disable-next-line -->
     <div class="card card-2" @mouseover="showChart=true" @mouseleave="showChart=false">
      <div class="title">Emission Frequency <br /> By Year</div>
      </div>
     <div class="card card-3">
      <div class="title">Number Of Volcanoes</div>
      </div>

     <div class="cPhoto-box">
        <img v-if='!showChart' :src="imgList[index][0]" alt="" class="cPhoto" />
        <img v-else :src="imgList[index][1]" alt="" class="cPhoto__chart" />
     </div>
   <!--/el-scrollbar -->
 </div>
</template>

<script>

export default {
  name: 'CategoryBoard',
  props: {
    type: String,
    index: Number,
  },
  data() {
    return {
      features: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      imgList: [
        ['https://i.postimg.cc/zGZkGFQ7/1-2.png', 'https://i.postimg.cc/Nj6k9rqc/1-2.png'],
        ['https://i.postimg.cc/j5FH0HNz/2-2.png', 'https://i.postimg.cc/hjjL5yJD/2-2.png'],
        ['https://i.postimg.cc/2jtwPDFP/3-2.png', 'https://i.postimg.cc/pdkQkbLc/3-2.png'],
        ['https://i.postimg.cc/VLbRwVK5/4-2.png', 'https://i.postimg.cc/fbMjxTD0/4-2.png'],
      ],
      showChart: false,
    };
  },
  methods: {
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  height: calc(100vh - 269px);
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    color: white;
    border-right: 1px solid rgb(151, 151, 151);
    &:nth-child(-1) {
      border-right: unset;
    }
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
    padding: 0 40px;
    font-family: union_regular;
    font-size: 16px;
    line-height: 31px;
    text-align: start;
  }
}

.cPhoto-box {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: hCal(658);
  pointer-events: none;
  .cPhoto {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
    object-position: 50% 100%;
  }
  .cPhoto__chart {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
    object-position: 50% 100%;
  }
}

//@media screen and (max-width: 900px) {
//  .category {
//    grid-template-columns: repeat(1, 1fr);
//    .card {
//      border-bottom: 1px solid rgb(151, 151, 151);
//      &:nth-child(-1) {
//        border-right: unset;
//      }
//      &:hover {
//        border-top: unset;
//        border-left: 5px solid white;
//      }
//    }
//  }
//}
</style>
