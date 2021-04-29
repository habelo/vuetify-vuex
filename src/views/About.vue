<template>
  <div class="about">
    <h1>{{animal}}</h1>
  </div>
</template>

<script>
import {mapGetters} from "vuex"

export default {
  name: "About",

  computed: {
    ...mapGetters({animal: "getAnimal"})
  }
}
</script>
