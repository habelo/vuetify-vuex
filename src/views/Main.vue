<template>
<!--  todo inte optimala att skriva över men funkar med ID alltså id="test" krävs för att skriva över css'n-->
  <div id="test" class="no-gutters td-wrapper h-min-100 container-fluid">
<!--  <v-container id="test" fluid class="no-gutters td-wrapper h-min-100 container-fluid">-->
<!--    <div class="container-fluid no-gutters td-wrapper h-min-100">-->
<!--    todo strukturera om sidebaren-->
<!--    <MainSideBar/>-->
<!--    <MainWindow/>-->

    <RoleVuex/>
  </div>
</template>

<script>
import MainSideBar from "@/components/MainSideBar";
import MainWindow from "@/components/MainWindow";
import RoleVuex from "@/components/RoleVuex";
export default {
  name: "Main",
  components: {RoleVuex, MainWindow, MainSideBar}
}
</script>

<style scoped>

</style>