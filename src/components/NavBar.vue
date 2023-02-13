<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <nav>
<!--    logo-->
    <div id="Logo">
      <img :src="logo" alt="Logo" id="logo-img" @click="goFor"/>
    </div>
<!--    router-->
    <div id="router-box">
      <router-link to="/">Home</router-link>
      <router-link to="/Categories">Categories</router-link>
      <router-link to="/Volcanoes">Volcanoes</router-link>
      <router-link to="/more">Learn More</router-link>
    </div>
<!--    search-->
    <div id="search">
      <div class="icon-container">
        <img :src="icon_search" alt="search icon" class="icon"/>
      </div>
      <el-input v-model="searchInput" placeholder="Enter category or volcano..."/>
    </div>
  </nav>
</template>

<script>
import Logo from '@/assets/Welcome/Logo.png';
import IconSearch from '@/assets/Welcome/Icon-search.png';

export default {
  name: 'NavBar',
  data() {
    return {
      logo: Logo,
      icon_search: IconSearch,
      searchInput: '',
    };
  },
  methods: {
    goFor() {
      this.$router.push('/');
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

nav {
  position: absolute;
  margin: 0 wCal(122);
  height: 116px;
  width: calc(100vw - wCal(244));
  display: flex;
  justify-content: space-between;
  align-items: end;
  #Logo {
    width: 59px;
    height: 60px;
    #logo-img {
      width: 100%;
      height: 100%;
      min-width: 59px;
      min-height: 60px;
      cursor: pointer;
    }
  }

  #router-box {
    display: flex;
    column-gap: wCal(76);
    a {
      font-family: union_regular;
      color: white;
      font-size: 30px;
      text-decoration: none;
      white-space: nowrap;
    }
  }

  #search {
    display: flex;
    flex-direction: row;
    align-items: end;
    .icon-container {
      display: flex;
      align-items: end;
      width: 36px;
      height: 36px;
      margin-right: 26px;
      .icon {
        width: 100%;
        height: 100%;
      }
    }
    .el-input {
      --el-input-text-color: white;
      --el-font-size-base: 20px;
      //--el-input-border: 3px solid white;
      width: wCal(416);
      height: 36px;
    }
    ::v-deep .el-input__wrapper {
      border-radius: 12px;
      background-color: transparent;
    }
  }
}
</style>
