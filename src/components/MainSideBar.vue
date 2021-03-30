<template>
  <div class="col-md-2 col-lg-3 td-sidebar">
    <nav class="td-nav">
          <SideBar v-for="bar in mainSideBars" :name="bar.name" :key="bar.id"/>
    </nav>
  </div>
</template>

<script>
import SideBar from "@/components/fragments/sidebar/SideBar";
export default {
  name: "MainSideBar",
  components: {SideBar},

  data() {
    return{
      mainSideBars: [{id: 0, name: "Inbox"}, { id: 1, name: "Outbox"}]
    }
  }
}
</script>

<style scoped>

</style>