<template>
  <LanguageNavBar />
  <router-view></router-view>
</template>

<script>
import LanguageNavBar from "./components/LanguageNavBar.vue";
export default {
  name: "App",
  components: {
    LanguageNavBar,
  },
};
</script>