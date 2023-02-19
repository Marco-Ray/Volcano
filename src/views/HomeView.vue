<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div>
    <div class="home">
      <div class="container">
        <div>
          <div id="title">
            <div>
              Explore
            </div>
            <div>
              The Volcanoes
            </div>
          </div>
          <div class="description">
            <p>
              The website presents dynamic data on four of
              the world's existing volcanoes and their specific volcanoes,
              with science as the main feature.
            </p>
          </div>
        </div>
        <div id="btt-start" @click="start">START</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import { getJson } from '@/api/data';

export default {
  name: 'HomeView',
  components: {
  },
  data() {
    return {
      // message: '',
    };
  },
  methods: {
    // apiTest() {
    //   getJson().then((res) => {
    //     // console.log(res.data);
    //     this.message = res.data.message;
    //   });
    // },
    start() {
      this.$router.push('/Categories');
    },
  },
  created() {
    // this.apiTest();
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

.home {
  .container {
    margin-top: hCal(166);
    margin-left: wCal(122);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    row-gap: 100px;
  }

}

#title {
  width: 858px;

  font-family: Roboto-Black;
  text-align: start;
  color: white;
  font-size: 82px;
}

.description {
  width: 600px;

  font-family: union_regular;
  font-size: 22px;
  color: white;
  text-align: start;
  overflow-wrap: break-word;
  p {
    line-height: 33px;
  }
}

#btt-start {
  margin-bottom: 20px;
  width: 199px;
  height: 69px;
  border-radius: 12px;
  border-width: 2px;
  border-style: solid;
  border-color: white;
  cursor: pointer;

  line-height: 69px;
  font-family: union_regular;
  font-size: 30px;
  color: white;

  &:hover {
    color: red;
    border-color: red;
  }
}
</style>
