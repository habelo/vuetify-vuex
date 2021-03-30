<template>
  <div class="modal fade" id="createMsgPopup" role="dialog" data-backdrop="static" data-keyboard="false">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn btn-link pull-right" data-dismiss="modal"
          ><span class="icon icon-close icon-left"></span>Stäng
          </button>
          <span class="td-divider pull-right"></span>
          <h2 class="modal-title sr-only">Skriv meddelande</h2>
        </div>
        <div class="modal-body">
          <div id="createMsgNotificationMessage" class="alert alert-success hidden"
               role="alert"></div>
          <form>
                            <span style="display:inline"
                                  class="">Typ:</span>
            <div id="typeDropdown" class="dropdown"
                 style="display:inline">
              <button class="btn btn-link dropdown-toggle" id="recipientTypeSelector"
                      type="button"
                      data-toggle="dropdown">
                ERROR
              </button>
              <span class="caret"></span>
              <!--                                    TRUSTED_DIALOG(0),-->
              <!--                                    MINA_MEDDELANDEN(1),-->
              <!--                                    ONE_TIME(3),-->
              <!--                                    SDK(4),-->
              <!--                                    WHISTLE_BLOW(5),-->
              <!--                                    MAIL_CONNECTOR(6);-->
              <!--                                    MEETING(7);-->
              <ul class="dropdown-menu" id="message-dropdown" style="z-index: 10000">
                <li data-name="0" id="type-dropdown-li-0"><a href=""
                                                             class="dropdown-item"
                                                             id="type-dropdown-link-0">

                </a>
                </li>
                <li data-name="1" id="type-dropdown-li-1"><a href="" id="type-dropdown-link-1"
                                                             class="dropdown-item">

                </a>
                </li>
                <!-- li data-name="2"><a href="" class="dropdown-item">TrustedDialog, med notifiering i Mina meddelanden</a></li -->
                <li data-name="3" id="type-dropdown-li-3"><a href="" id="type-dropdown-link-3"
                                                             class="dropdown-item">

                </a>
                </li>
                <li data-name="4" id="type-dropdown-li-4"><a href="" id="type-dropdown-link-4"
                                                             class="dropdown-item">

                </a>
                </li>
                <li data-name="5" id="type-dropdown-li-5"><a href="" id="type-dropdown-link-5"
                                                             class="dropdown-item hidden">

                </a>
                </li>
                <li data-name="7" id="type-dropdown-li-7"><a href="" id="type-dropdown-link-7"
                                                             class="dropdown-item"
                >

                </a>
                </li>
              </ul>
            </div>

            <button type="button" class="btn btn-link"

            >
              <span class="icon icon-refresh icon-left"></span>
            </button>
            <div>
              <label for="roleSelectSend" class="pull-left form-select-label sr-only-sm">Skicka
                som</label>
              <select id="roleSelectSend" name="roleSelectSend"
                      class="custom-select td-select pull-right"></select>
            </div>
            <div id="recipientsFlowContainer">
              <ul id="recipients" class="list-group">
                <li class="fileToAttach list-group-item">
                  <span class="filename">Address</span>
                  <button type="button" class="btn btn-link pull-right deleteAttachment"
                  >
                    <span aria-hidden="true" class="icon icon-remove" title="Radera"></span>
                  </button>
                </li>
              </ul>
            </div>


            <div id="toContainer"
            >
              <div id="to-typeahead"
                   class="user-typeahead form-group form-horizontal form-group-lg">
                <label for="to" class="typeahead-label">Till:</label>
                <input id="to" type="text"
                       autocomplete="off" name="to"
                       class="typeahead form-control"/>
              </div>
            </div>

            <div class="form-group form-horizontal form-group-lg">
              <label for="subject">Ämne:</label>
              <input id="subject" type="text"
                     name="subject"
                     class="form-control"/>
            </div>
            <div id="main-text-area-container" class="form-group form-horizontal">
              <label for="text" class="sr-only">Text:</label>
              <textarea id="text"
                        class="form-control bodyText"


                        name="text" placeholder="Meddelande" rows="10"
              ></textarea>
            </div>

            <div id="meeting"></div>

            <div class="container-fluid no-gutters mt-2">
              <div class="col-md-10">
                <div>
                  <!-- div class="dropup">
                      <div id="drop">Drop files here.</div>
                      <DIV id="list"></DIV> -->

                  <button class="btn btn-link dropdown-toggle" type="button" id="dropdownMenu1"
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span class="icon icon-attachment icon-left"></span>Bifoga fil
                    <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li class="fileinput-button">
                    <span class="btn btn-link" role="button"><label for="attachmentUploadId">Ladda upp fil</label>
                      <input class="attachmentupload" type="file" id="attachmentUploadId" name="files[]"
                             data-url="/files">
                    </span>
                    </li>
                    <li>
                      <button type="button"
                              class="btn btn-link" data-toggle="modal"
                              data-target="#selectAttachments">Bifoga redan uppladdade
                        filer
                      </button>
                    </li>
                  </ul>
                  <!-- /div -->
                  <div class="form-group ml-2">
                    <h3>Bifogade filer:</h3>
                    <ul id="attachedFiles" class="list-group">
                      <li class="fileToAttach list-group-item">
                        <span class="filename"></span>
                        <img src="/public/img/glyphicons-333-certificate.png" alt=""/>
                        <button type="button"
                                class="btn btn-link pull-right deleteAttachment"
                        >
                                                    <span aria-hidden="true" class="icon icon-remove"
                                                          title="Radera"></span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="update-draft-button" class="col-md-2 text-right">
                <button type="button" class="btn btn-link"><span
                    class="icon icon-save icon-left"></span>Spara till utkast
                </button>
              </div>
              <div id="send-message-button" class="col-md-2 text-right">
                <button type="button" class="btn btn-link"><span
                    class="icon icon-send icon-left"></span>Skicka
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateMessage"
}
</script>

<style scoped>

</style>