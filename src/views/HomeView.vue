<template>
  <div class="home">
<!--    <p>{{ message }}</p>-->
  </div>
</template>

<script>
// @ is an alias to /src
import { getJson } from '@/api/data';

export default {
  name: 'HomeView',
  components: {
  },
  data() {
    return {
      message: '',
    };
  },
  methods: {
    apiTest() {
      getJson().then((res) => {
        // console.log(res.data);
        this.message = res.data.message;
      });
    },
  },
  created() {
    this.apiTest();
  },
};
</script>

<style lang="scss">
.home {
  width: 100vw;
  height: 100vh;
  background: no-repeat center url("@/assets/Welcome/background.jpeg");
}
</style>
