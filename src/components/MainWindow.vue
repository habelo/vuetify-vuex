<template>
  <v-container class="col-md-10 col-lg-9 td-main">
    <TitleBlock/>
    <RoleRollDown/>
    <ChoiceBar/>
    <ItemList/>


<!--    <Inbox/>-->
<!--    <CreateMessage/>-->
<!--    <Footer/>-->
    </v-container>
</template>

<script>
import TitleBlock from "@/components/window/TitleBlock";
import CreateMessage from "@/components/window/CreateMessage";
import RoleRollDown from "@/components/window/RoleRollDown";
import Inbox from "@/components/window/listings/Inbox";
import Footer from "@/components/window/Footer";
import ChoiceBar from "@/components/fragments/ChoiceBar";
import ItemList from "@/components/fragments/ItemList";
export default {
  name: "MainWindow",
  components: {ItemList, ChoiceBar, Footer, Inbox, RoleRollDown, CreateMessage, TitleBlock}
}
</script>

<style scoped>

</style>