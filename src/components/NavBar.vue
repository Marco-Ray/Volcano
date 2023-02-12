<template>
  <nav>
<!--    logo-->
    <div id="Logo">
      <img :src="logo" alt="Logo" id="logo-img" />
    </div>
<!--    router-->
    <div id="router-box">
      <router-link to="/">Home</router-link>
      <router-link to="/Categories">Categories</router-link>
      <router-link to="/Volcanoes">Volcanoes</router-link>
      <router-link to="/more">Learn More</router-link>
    </div>
  </nav>
</template>

<script>
import Logo from '@/assets/Welcome/Logo.png';

export default {
  name: 'NavBar',
  data() {
    return {
      logo: Logo,
    };
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

nav {
  position: absolute;
  height: 116px;
  display: flex;
  width: 100vw;
  justify-content: start;
  align-items: end;
  font-size: 30px;
  #Logo {
    width: 59px;
    height: 60px;
    margin-right: wCal(283);
    margin-left: wCal(122);
    #logo-img {
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
  }

  #router-box {
    display: flex;
    column-gap: wCal(76);
    a {
      font-family: union_regular;
      color: white;
      text-decoration: none;
    }
  }
}
</style>
