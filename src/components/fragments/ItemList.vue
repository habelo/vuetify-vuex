<template>
  <table class="listTable table-striped table-hover table-responsive mb-4 td-table">
    <thead>
    <tr>

      <th></th>
      <th class="mainRow">Ämne</th>
      <th class="td-invisibleCell"><span class="sr-only">Hanterat</span></th>
      <th class="td-invisibleCell"><span class="sr-only">Bilaga</span></th>
      <th></th>
      <th class="text-center hidden-xs">
        <span aria-hidden="true" class="icon icon-trash-white" title="Radera"></span>
        <span class="sr-only">Radera</span>
      </th>

    </tr>
    </thead>

    <tbody>
    <tr id="draft-box-message-list">
      <td
          class="pointer"
          data-toggle="modal" data-target="#createMsgPopup"

      >
        <button
            class="td-btn-naked td-truncate"
        ><span class="hidden">Välj meddelande</span></button>
      </td>
      <td
          class="pointer"
          data-toggle="modal" data-target="#createMsgPopup"

      >
        <button
            class="td-btn-naked td-truncate"
        ><span class="hidden">Välj meddelande</span></button>
      </td>
      <td class="pointer td-invisibleCell"

          data-toggle="modal" data-target="#createMsgPopup"
      >
        <button
            class="pointer td-btn-naked"
            title="">
          <span class="icon icon-handled"></span><span class="hidden">Välj meddelande</span></button>
      </td>
      <td class="pointer td-invisibleCell"
          data-toggle="modal" data-target="#createMsgPopup"

      >
        <button
            class="td-btn-naked"
        ><span
            class="icon icon-attachment"></span>&nbsp;<span class="hidden">Välj meddelande</span>
        </button>
      </td>
      <td
          class="pointer"
          data-toggle="modal" data-target="#createMsgPopup"

      >
        <button
            class="td-btn-naked"
        ><span class="hidden">Välj meddelande</span></button>
      </td>
      <!--            <td align="center" class="hidden-xs">-->
      <!--                <button type="button" -->
      <!--                        class="btn btn-link td-btn-remove" value="Radera meddelande">-->
      <!--                                        <span class="icon icon-remove "-->
      <!--                                              title="Radera"></span><span class="hidden">Radera</span>-->
      <!--                    <span class="sr-only">Radera</span>-->
      <!--                </button>-->
      <!--            </td>-->

    </tr>
    </tbody>

    <tbody id="outbox-inbox-list">
    <tr>
      <td
          class="pointer"
          data-toggle="modal" data-target="#showMsgPopup"

      >
        <button
            class="td-btn-naked td-truncate"
        ><span class="hidden">Välj meddelande</span></button>
      </td>
      <!-- td><button data-toggle="modal" data-target="#showMsgPopup"  class="td-btn-naked td-truncate" ></button></td-->
      <td
          class="pointer"
          data-toggle="modal" data-target="#showMsgPopup"

      >
        <button
            class="td-btn-naked td-truncate"
        ><span class="hidden">Välj meddelande</span></button>
      </td>
      <td class="pointer td-invisibleCell"
          data-toggle="modal" data-target="#showMsgPopup"

      >
        <button
            class="td-btn-naked"
            title="">
          <span class="icon icon-handled"></span><span class="hidden">Välj meddelande</span></button>
      </td>
      <td class="pointer td-invisibleCell"
          data-toggle="modal" data-target="#showMsgPopup"

      >
        <button
            class="td-btn-naked"
        ><span
            class="icon icon-attachment"></span>&nbsp;<span class="hidden">Välj meddelande</span>
        </button>
      </td>
      <td
          class="pointer"
          data-toggle="modal" data-target="#showMsgPopup"

      >
        <button
            class="td-btn-naked"
        ><span class="hidden">Välj meddelande</span></button>
      </td>
      <td align="center" class="hidden-xs">
        <button type="button"
                class="btn btn-link td-btn-remove" value="Radera meddelande">
                                        <span class="icon icon-remove "
                                              title="Radera"></span><span class="hidden">Radera</span>
          <span class="sr-only">Radera</span>
        </button>
      </td>

    </tr>
    </tbody>

  </table>
</template>

<script>
export default {
  name: "ItemList"
}
</script>

<style scoped>

</style>