<template>
  <v-row class="mb-4 ml-2 ml-md-3 ml-lg-5 mr-2 mr-md-3 mr-lg-5 hidden-xs pull-left">
    <!-- button type="button"
            class="btn btn-link "
            data-toggle="modal" data-target="#createMsgPopup" >
        <span class="icon icon-pencil icon-left"></span>Nytt meddelande
    </button -->
    <button type="button"
            id="new-message-button2"
            class="btn btn-link "
            data-toggle="modal" data-target="#createMsgPopup">
      <span class="icon icon-pencil icon-left"></span>Nytt meddelande
    </button>
    <button type="button" class="btn btn-link">
      <span class="icon icon-refresh icon-left"></span>Uppdatera
    </button>
    <button type="button" class="btn btn-link">
      <span class="glyphicon glyphicon-indent-left"></span>Visa konversationer
    </button>
    <button type="button" class="btn btn-link"
    >
      <span class="icon  icon-left"></span>
    </button>
  </v-row>
</template>

<script>
export default {
  name: "ChoiceBar"
}
</script>

<style scoped>

</style>