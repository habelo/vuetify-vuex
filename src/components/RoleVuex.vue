<template>
  <v-container>
    <v-row>
      <h3 class="col">{{ role }}</h3>
        <h3 class="col">{{roles}}</h3>

    </v-row>

    <v-form class="row">
          <v-text-field
              v-model="buttonRole"
              label="Regular"
          ></v-text-field>
      <v-btn @click="addRole(buttonRole)">Submit</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "RoleVuex",
  data: () => ({
    buttonRole: '',
    roles: []
  }),
  methods: {
    addRole(buttonRole) {
      this.$store.dispatch("addRole", buttonRole)
      this.buttonRole = ''
    }
  },
  computed: {
    role() {
      return this.$store.getters.getCurrentRole
    }
  },
  mounted() {
    // this.role = this.$store.getters.getCurrentRole;
    this.roles = this.$store.getters.getRoles;
  }
}
</script>

<style scoped>

</style>