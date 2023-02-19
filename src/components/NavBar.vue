<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <nav>
<!--    logo-->
    <div id="Logo">
      <img :src="logo" alt="Logo" id="logo-img" @click="goFor"/>
    </div>
<!--    router-->
    <div id="menu">
      <!-- div id="trigger" @click="routersTrigger">
        <img :src="iconBars" alt="" class="svg"/>
      </div -->
      <div id="router-box" v-show="isShow">
        <router-link to="/">Home</router-link>
        <router-link to="/Categories">Categories</router-link>
        <router-link :to="{ path: '/Volcano', query: { type: 'Stratovolcano' }}">
          Volcano
        </router-link>
        <router-link to="/LearnMore">Learn More</router-link>
      </div>
    </div>
<!--    search-->
    <!-- div id="search">
      <div class="icon-container">
        <img :src="iconSearch" alt="search icon" class="icon"/>
      </div>
      <el-input v-model="searchInput" placeholder="Enter category or volcano..."/>
    </div-->
  </nav>
</template>

<script>
import Logo from '@/assets/Welcome/Logo.png';
import IconSearch from '@/assets/Welcome/Icon-search.png';
import IconBars from '@/assets/Nav/bars-solid.svg';

export default {
  name: 'NavBar',
  data() {
    return {
      logo: Logo,
      iconSearch: IconSearch,
      iconBars: IconBars,
      searchInput: '',
      isShow: true,
    };
  },
  methods: {
    goFor() {
      this.$router.push('/');
    },
    routersTrigger() {
      this.isShow = !this.isShow;
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
  top: 0;
  left: 0;
  padding: 0 wCal(122);
  height: 180px;
  width: calc(100vw - wCal(244));
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
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

  #menu {
    position: relative;
    #trigger {
      display: none;
    }
  }
  #router-box {
    display: flex;
    column-gap: wCal(80);
    a {
      padding: 8px 23px;
      font-family: union_regular;
      color: white;
      font-size: 22px;
      text-decoration: none;
      white-space: nowrap;
      &:hover {
        border-bottom: 1px solid white;
      }
    }
    .router-link-active {
      border-radius: 12px;
      border: 1px solid white;
    }
  }

  #search {
    display: flex;
    flex-direction: row;
    align-items: end;
    margin-left: 20px;
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

@media screen and (max-width: 700px) {
  nav {
    background-color: black;
    height: 200px;
    min-height: 100px;
    #menu {
      #trigger {
        display: block;
        color: white;
        cursor: pointer;
        .svg {
          width: 50px;
          height: 50px;
        }
      }
      #router-box {
        //position: absolute;
        flex-direction: column;
      }
    }
  }
}
</style>
