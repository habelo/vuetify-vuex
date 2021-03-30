<template>
  <v-toolbar flat id="titleBlock">
    <v-spacer></v-spacer>
    <v-toolbar-title id="userBlock">
      <span class="td-loggedIn">Jonas agerar som:</span>
      <span class="font-weight-light">Jonas</span>
<!--      todo button?-->
<!--      <v-btn>Jonas</v-btn>-->
    </v-toolbar-title>
      <button type="button" class="btn-link td-btn-log-out"></button>
    <span class="td-divider"></span>
    <button type="button" class="btn btn-link td-btn-log-out">Logga ut<span
        class="icon icon-log-out"></span></button>
  </v-toolbar>


  <!--        <span class="td-loggedIn"><button type="button"-->
  <!--                                          class="btn-link"-->
  <!--        >Ladda ner din information</button></span>-->
</template>

<script>
export default {
  name: "TitleBlock"
}
</script>

<style scoped>

</style>