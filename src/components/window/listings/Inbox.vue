<template>
  <div>
    <section id="messageList">

      <div class="sectionHeading">
        <h1 class="sr-only"></h1>
      </div>

      <div class="mb-5 ml-2 ml-md-3 ml-lg-5 mr-2 mr-md-3 mr-lg-5">
        <nav aria-label="Sidor">
          <ul class="pager">
            <li class="previous">
              <button type="button" class="btn btn-link"
              >
                <span class="icon icon-previous icon-left"></span>Senare<span
                  class="sr-only-sm"> meddelanden</span>
              </button>
            </li>
            <li class="next">
              <button type="button" class="btn btn-link pull-right"
              >
                Tidigare <span class="sr-only-sm"> meddelanden</span><span
                  class="icon icon-next icon-right"></span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Inbox"
}
</script>

<style scoped>

</style>