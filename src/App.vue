<template>
  <div id="app">
    <Checker v-if="loggedIn" />
    <Login v-else />
  </div>
</template>

<script>
import Checker from "./components/Checker.vue";
import Login from "./components/Login.vue";

export default {
  name: "App",
  components: {
    Checker,
    Login
  },
  data() {
    return {
      loggedIn: false
    };
  }
};
</script>

<style lang="scss">
@import "@/scss/_library.scss";
//////////////// MAIN RULES ////////////////
*,
*::after,
*::before {
  box-sizing: border-box;
  outline: none;
}
html {
  height: 100%;
}
body {
  font-weight: normal;
  min-height: 100%;
  height: 100%;
  overflow-x: hidden;
  position: relative;
  margin: 0;
  padding: 0;
  background: $body-bg;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}
#app {
  background-color: $body-bg;
  font-family: $basefont;
  text-align: center;
}
</style>
