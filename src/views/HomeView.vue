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

<!-- video -->
        <video-player v-if="isShowVideo"
          src="bg-video.mp4"
          :loop="true"
          :volume="0.6"
          :autoplay="true"
          :muted="true"
          :fluid="true"
          @error="closeVideo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { VideoPlayer } from '@videojs-player/vue'
import 'video.js/dist/video-js.css'

export default {
  name: 'HomeView',
  components: {
    VideoPlayer,
  },
  data() {
    return {
      isShowVideo: true,
    };
  },
  methods: {
    start() {
      this.$router.push('/Categories');
    },
    closeVideo() {
      console.log('1111');
      this.isShowVideo = false;
    },
  },
  created() {
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

.video-js {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}
</style>
