<template>
  <v-container id="rolevuex">
    <v-row id="roles-view">
      <h3 class="col">{{ role }}</h3>
      <h3 class="col">{{ roles }}</h3>

    </v-row>
    <v-row id="animals-view">
      <h3 class="col">{{ animal }}</h3>
      <h3 class="col">{{ animals }}</h3>
    </v-row>
    <v-row id="test-view">
      <h3 class="col">{{ testVar }}</h3>
    </v-row>

    <v-form class="row">
      <v-text-field
          v-model="buttonRole"
          label="Role"
      ></v-text-field>
      <v-text-field
          v-model="buttonAnimal"
          label="Animal"
      ></v-text-field>
      <v-btn @click="addRole(buttonRole)">MOAR roles</v-btn>
      <v-btn @click="addAnimal(buttonAnimal)">MOAR animal</v-btn>
    </v-form>
  </v-container>
</template>

<script>
//todo mapActions gör så att det blir mindre kod
import {mapActions, mapGetters, mapMutations} from "vuex"

export default {
  name: "RoleVuex",
  data: () => ({
    buttonRole: '',
    buttonAnimal: '',
    // roles: [],
    // animals: []
  }),
  methods: {
    // ...mapActions(["addAnimal"]),
    ...mapMutations(["addAnimal"]),
    addRole(buttonRole) {
      // this.$store.dispatch("addRole", buttonRole)
      this.$store.commit("addRole", buttonRole)
      this.buttonRole = ''
    },
  },
  computed: {
    ...mapGetters({
      animal: "getAnimal", role: "getCurrentRole", roles:"getRoles", animals: "getAnimals", testVar: "getTestVar"
    })
    // ...mapGetters({animal: "getAnimal", roles:"getRoles", animals: "getAnimals"})
    // role() {
    //   return this.$store.getters.getCurrentRole
    // },
    // animal() {
    //   return this.$store.getters.getAnimal
    // }
  },
  mounted() {
    console.log()
    // this.roles = this.$store.getters.getRoles;
    // this.animals = this.$store.getters.getAnimals
  }
}
</script>

<style scoped>

</style>