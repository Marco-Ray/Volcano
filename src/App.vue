<template>
  <el-scrollbar height="100vh">
    <nav-bar />
    <router-view
      v-slot="{ Component, route }"
      class="viewer"
    >
      <transition
        :name="route.meta.transitionName"
      >
        <component
          :is="Component"
          :key="route.path"
        />
      </transition>
    </router-view>
  </el-scrollbar>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  //overflow-x: hidden;
  overflow-y: hidden;
}

body {
  // TODO
  min-width: 850px;
  background: no-repeat center url("@/assets/Welcome/background.jpg");
  background-size: cover;

}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.viewer {
  padding-top: 96px;
}

// slide-right
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.75s ease-out;
}

.slide-right-enter-to {
  position: absolute;
  left: 0;
}

.slide-right-enter-from {
  position: absolute;
  left: -100%;
}

.slide-right-leave-to {
  position: absolute;
  right: -100%;
}

.slide-right-leave-from {
  position: absolute;
  right: 0;
}

// slide-left
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.75s ease-out;
}

.slide-left-enter-to {
  position: absolute;
  right: 0;
}

.slide-left-enter-from {
  position: absolute;
  right: -100%;
}

.slide-left-leave-to {
  position: absolute;
  left: -100%;
}

.slide-left-leave-from {
  position: absolute;
  left: 0;
}
</style>
