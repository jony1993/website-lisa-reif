<template>
  <div class="container mt-8">

    <!--Heading-->
    <h1 class="text-5xl z-10 font-heading">Warum Tragen?</h1>
    <img class="-mt-4 z-0" src="~/assets/img/underline.png"/>

    <!--Reason 1, 2 3-->
    <div class="flex flex-wrap -mx-1 overflow-hidden mt-16">

      <div class="my-1 sm:pr-8 md:pr-8 lg:pr-8 xl:pr-8 w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2">
        <p class="mb-4">1. Das Bedürfnis nach Nähe und Geborgenheit wird befriedigt und die Bindung zwischen Tragendem und Baby wird gestärkt.</p>
        <p class="mb-4">2. Das Tragen hat positive Auswirkungen auf die körperliche und geistige  Entwicklung des Babys (z.B. Entwicklung der Hüfte, Gleichgewichtssinn wird geschult).</p>
        <p class="mb-4">3. Bauchschmerzen werden durch die Wärme und leichte Massage gemindert.</p>
      </div>

      <div class="bg-gray-200 rounded shadow-md my-1 px-1 w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2">

      </div>
    </div>

    <!--Reason 4, 5, 6-->
    <div class="flex flex-wrap -mx-1 overflow-hidden mt-16">

      <div class="order-2 md:order-1 lg:order-1 xl:order-1 my-1 px-1 w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2 bg-gray-200 rounded shadow-md">
      </div>

      <div class="order-1 md:order-2 lg:order-2 xl:order-2 my-1 sm:pl-8 md:pl-8 lg:pl-8 xl:pl-8 w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2">
        <p class="mb-4">4. Das Baby kann überall mit dabei sein und die Welt zusammen mit dir erkunden. Wenn es ihm zu viel wird, kann es sich einfach an dich kuschelnund schlafen.</p>
        <p class="mb-4">5. Du hast beide Hände frei für ältere Geschwister oder den Haushalt.</p>
        <p class="mb-4">6. Du kannst dein Baby überall mitnehmen und musst nicht darauf achten,ob der Weg für den Kinderwagen geeignet ist. Treppen oder Berge sind kein Problem mehr.</p>
      </div>

    </div>
    <!--Reason 7, 8, 9-->
    <div class="flex flex-wrap -mx-1 overflow-hidden mt-16">

      <div class="my-1 sm:pr-8 md:pr-8 lg:pr-8 xl:pr-8 w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2">
        <p class="mb-4">7. Du kannst dein Baby unauffällig in der Tragehilfe/Tragetuch stillen.</p>
        <p class="mb-4">8. Das Tragetuch nimmt nur sehr wenig Platz weg und ist schnell griffbereit.</p>
        <p class="mb-4">9. Auch der Papa (oder Oma, Opa, etc.) kann durch das Tragen eine intensive Beziehung zum Baby aufbauen.</p>
      </div>

      <div class="my-1 px-1 w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2 bg-gray-200 rounded shadow-md "></div>
    </div>

    <!--CTA-->
    <div class="mt-16 mb-12 bg-white shadow-md rounded p-8 mx-auto text-center">
      <p>Klingt das interessant für dich? Dann kannst du gerne Kontakt mit mir aufnehmen:</p>
      <nuxt-link class="bg-primary inline-block mt-4 rounded shadow-md pt-2 pb-2 pr-4 pl-4 hover:shadow-lg " to="/contact"> Kontakt aufnehmen</nuxt-link>
    </div>
  </div>
</template>

<script>
	export default {
		name: 'reasons',
	}
</script>

<style scoped>

</style>
