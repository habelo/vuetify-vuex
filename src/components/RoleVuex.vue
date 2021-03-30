<template>
  <div>
    <h3>{{role}}</h3>
    <h3>{{roles}}</h3>
  </div>
</template>

<script>
export default {
  name: "RoleVuex",
  data: ()=> ({
    role: '',
    roles: []
  }),
  mounted() {
    // this.role = this.$store.getters.getCurrentRole;
    this.role = this.$store.getters.getCurrentRole;
    this.roles = this.$store.getters.getRoles;
  }
}
</script>

<style scoped>

</style>