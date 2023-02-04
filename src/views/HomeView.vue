<template>
  <div class="home">
    <h1>This is the website of Volcano, Boooom!</h1>
    <p>Here is the message from api</p>
    <p>{{ message }}</p>
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
