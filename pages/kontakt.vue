<template>
  <div class="container mt-8">
    <div class="flex flex-wrap -mx-2 overflow-hidden">

      <div class="my-2 px-2 w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2">
        <!--Heading-->
        <h1 class="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl z-10 font-heading">Kontakt</h1>
        <img class="-mt-12 z-0 inline-block" src="~/assets/img/underline.png"/>
        <!--Content-->
        <div class="mt-4 text-gray-700 font-body">
          <p>Lisa Reif</p>
          <p>Hoholtingerstr. 7</p>
          <p>94431 Pilsting / Großköllnbach</p>
          <p>Tel. 0176/56951313</p>
          <p>E-Mail: trageberatung-lisareif@gmx.de</p>
          <p class="mt-4">Das Formular ist aktuell in Arbeit. Schreib mit in der Zwischenzeit eine E-Mail.</p>
        </div>
      </div>

      <div class="my-2 px-2 w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2">
        <img class="rounded-lg shadow-md" src="~/assets/img/lisa.png">
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'kontakt',
    head () {
      return {
        title: "Kontakt - Trageberatung Lisa Reif"
      }
    }
  }
</script>

<style scoped>

</style>
