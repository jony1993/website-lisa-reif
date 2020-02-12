<template>
  <div class="container mt-8 text-center">

    <!--Heading-->
    <h1 class="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl z-10 font-heading">Warum Tragen?</h1>
    <img class="-mt-12 z-0 inline-block" src="~/assets/img/underline.png"/>

    <!--Content-->
    <!--Reason 1, 2 3-->
    <div class="text-gray-700 font-body">
      <div class="flex flex-wrap items-center -mx-1 overflow-hidden mt-4">

        <div class="my-1 sm:pr-8 md:pr-8 lg:pr-8 xl:pr-8 w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2 text-left">
          <p class="mb-4">1. Das Bedürfnis nach Nähe und Geborgenheit wird befriedigt und die Bindung zwischen Tragendem und Baby wird gestärkt.</p>
          <p class="mb-4">2. Das Tragen hat positive Auswirkungen auf die körperliche und geistige  Entwicklung des Babys (z.B. Entwicklung der Hüfte, Gleichgewichtssinn wird geschult).</p>
          <p class="mb-4">3. Bauchschmerzen werden durch die Wärme und leichte Massage gemindert.</p>
        </div>

        <div class="my-1 px-1 pb-2 w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2">
          <img class="bg-gray-200 rounded shadow-md" src="~/assets/img/tragetuch_warum_1.jpg" alt="Tragetuch Rücken">
        </div>
      </div>

      <!--Reason 4, 5, 6-->
      <div class="flex flex-wrap items-center -mx-1 overflow-hidden mt-4 sm:mt-16">

        <div class="order-2 pb-2 md:order-1 lg:order-1 xl:order-1 my-1 px-1 w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2">
          <img class="bg-gray-200 rounded shadow-md" src="~/assets/img/tragetuch_warum_2.jpg" alt="Tragetuch Bauch">
        </div>

        <div class="order-1 md:order-2 lg:order-2 xl:order-2 my-1 sm:pl-8 md:pl-8 lg:pl-8 xl:pl-8 w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2 text-left">
          <p class="mb-4">4. Das Baby kann überall mit dabei sein und die Welt zusammen mit dir erkunden. Wenn es ihm zu viel wird, kann es sich einfach an dich kuscheln und schlafen.</p>
          <p class="mb-4">5. Du hast beide Hände frei für ältere Geschwister oder den Haushalt.</p>
          <p class="mb-4">6. Du kannst dein Baby überall mitnehmen und musst nicht darauf achten, ob der Weg für den Kinderwagen geeignet ist. Treppen oder Berge sind kein Problem mehr.</p>
        </div>

      </div>
      <!--Reason 7, 8, 9-->
      <div class="flex flex-wrap items-center -mx-1 overflow-hidden mt-4 sm:mt-16">

        <div class="my-1 sm:pr-8 md:pr-8 lg:pr-8 xl:pr-8 w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2 text-left">
          <p class="mb-4">7. Du kannst dein Baby unauffällig in der Tragehilfe/Tragetuch stillen.</p>
          <p class="mb-4">8. Das Tragetuch nimmt nur sehr wenig Platz weg und ist schnell griffbereit.</p>
          <p class="mb-4">9. Auch der Papa (oder Oma, Opa, etc.) kann durch das Tragen eine intensive Beziehung zum Baby aufbauen.</p>
        </div>

        <div class="my-1 pb-2 px-1 w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2 bg-gray-200">
          <img class="bg-gray-200 rounded shadow-md" src="~/assets/img/tragetuch_warum_3.jpg" alt="Tragetuch Bauch">
        </div>
      </div>
    </div>

    <!--CTA-->
    <div class="mt-16 bg-white shadow-md rounded-lg p-8 mx-auto text-center text-gray-700 font-body">
      <p>Klingt das interessant für dich? Dann kannst du gerne Kontakt mit mir aufnehmen:</p>
      <nuxt-link class="bg-primary inline-block mt-4 rounded shadow-md pt-2 pb-2 pr-4 pl-4 hover:shadow-lg " to="/kontakt"> Kontakt aufnehmen</nuxt-link>
    </div>
  </div>
</template>

<script>
	export default {
		name: 'warum-tragen',
    head () {
      return {
        title: "Warum Tragen? - Trageberatung Lisa Reif"
      }
    }
	}
</script>

<style scoped>

</style>
