<template>
  <v-app class="h-min-100">
    <router-view></router-view>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },
  mounted() {
    this.$store.dispatch("setCurrentRole")
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
@import "./assets/css/trusteddialog.css";
@import "./assets/css/test.css";
</style>