<template>
  <v-row>
    <!--    <label for="roleSelect" class="form-select-label sr-only-sm">Välj roll</label>-->
    <!--    <select id="roleSelect" name="roleSelect"-->
    <!--            class="custom-select td-select pull-right"></select>-->

<v-spacer></v-spacer>
    <v-col
        class="d-flex"
        cols="2">

      <v-select
          class="custom-select td-select "
          :items="roles"
          v-bind:label="chooseRole"
          outlined
      ></v-select>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "RoleRollDown",
  data() {
    return {
      roles: ["Jonas", "Magnus", "FunktionsBrevlåda"],
      chooseRole: "Välj roll"
    }
  }
}
</script>

<style scoped>

</style>