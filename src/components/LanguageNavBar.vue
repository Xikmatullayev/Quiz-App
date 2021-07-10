<template>
  <div class="languages">
    <router-link to="/uz">o'z</router-link>
    |
    <router-link to="/">en</router-link>
    |
    <router-link to="/ru">рус</router-link>
  </div>
</template>

<script>
export default {
  name: "LanguageNavBar",
};
</script>

<style scoped>
.router-link-exact-active {
  color: rgb(106, 128, 202) !important;
}
</style>