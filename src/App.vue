<template>
  <v-app class="h-min-100">

    <div id="nav">
      <v-toolbar>
        <v-toolbar-items class="col-2">
          <router-link to="/">Main</router-link>
        </v-toolbar-items>
        <v-toolbar-items class="col-2">
          <router-link to="/about">About</router-link>
        </v-toolbar-items>
      </v-toolbar>
    </div>

    <router-view/>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  methods: {},
  components: {},
  //todo här lägger man alla saker som ska ske på "startup"
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