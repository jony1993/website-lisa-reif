<template>
  <div class="container mt-8 text-center">
    <!--heading-->
    <h1 class="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl z-10 font-heading">Preise</h1>
    <img class="-mt-12 z-0 inline-block" src="~/assets/img/underline.png"/>

    <!--Price boxes-->
    <div class="mt-4 flex flex-wrap -mx-4 overflow-hidden text-gray-700 font-body">

      <div class="my-4 px-4 pb-2 w-full overflow-hidden sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3">
        <div class="flex flex-col mx-1 p-4 h-full bg-white shadow-md rounded-lg text-center">
          <h2 class="text-2xl mb-2 font-bold">Einzelberatung</h2>
          <p>38 € für die erste Stunde, dann Abrechnung nach angefangener Viertelstunde für 9,50€.</p>
          <p class="flex-grow">In der Regel dauert eine Erstberatung zwischen 1,5 und 2 Stunden. Der Preis für die Einzelberatung
            beinhaltet selbstverständlich auch die Anwesenheit eures Partners oder einer engen Bezugsperson.</p>
          <nuxt-link class="bg-primary inline-block mt-4 rounded shadow-md pt-2 pb-2 pr-4 pl-4 hover:shadow-lg" to="/kontakt">Kontakt aufnehmen</nuxt-link>
        </div>
      </div>

      <div class="my-4 px-4 pb-2 w-full overflow-hidden sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3">
        <div class="flex flex-col mx-1 p-4 h-full bg-white shadow-md rounded-lg text-center">
          <h2 class="text-2xl mb-2 font-bold">Gruppenberatung</h2>
          <p class="flex-grow">Preise auf Anfrage. Ich erstelle dir gerne ein individuelles Angebot.</p>
          <nuxt-link class="bg-primary inline-block mt-4 rounded shadow-md pt-2 pb-2 pr-4 pl-4 hover:shadow-lg " to="/kontakt">Kontakt aufnehmen</nuxt-link>
        </div>
      </div>

      <div class="my-4 px-4 pb-2 w-full overflow-hidden sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3">
        <div class="flex flex-col mx-1 p-4 h-full bg-white shadow-md rounded-lg text-center">
          <h2 class="text-2xl mb-2 font-bold">Gutscheine</h2>
          <p class="flex-grow">Du kannst selbstverständlich auch einen Gutschein bei mir kaufen. Ein super Geschenk zur Geburt oder
            Babyparty!</p>
          <nuxt-link class="bg-primary inline-block mt-4 rounded shadow-md pt-2 pb-2 pr-4 pl-4 hover:shadow-lg " to="/kontakt">Kontakt aufnehmen</nuxt-link>
        </div>
      </div>

    </div>

    <p class="mt-12 text-gray-700 font-body">
      Beratung für Schwangere: Gerne kannst du dich auch schon während der Schwangerschaft über das Tragen informieren.
      In einem Beratungsgespräch zeige ich dir die verschiedenen Tragehilfen und Tragetücher. Sofern möglich und
      gewünscht, kannst du das Anlegen bzw. Binden mit Puppe üben. Das zweite Gespräch findet dann statt, wenn dein Baby
      da ist. Hier üben wir das Anlegen der Tragehilfe bzw. des Tuches nochmal mit der Puppe und wenn du dich sicher
      fühlst, trägst du dein Baby.
    </p>
    <p class="mt-4 text-gray-700 font-body">
      Nachberatung per Whatsapp oder E-Mail kostenlos. Ab 5 Kilometern Entfernung fallen Fahrtkosten in Höhe von 0,30 €
      pro Kilometer an. Berechnungsgrundlage ist Google Maps.
    </p>
    <p class="my-4 text-gray-700 font-body">
      Verleih von Tragehilfen bzw. Tragetüchern jederzeit für 10 € pro Woche möglich. Die geliehenen Tragen/Tücher müssen
    </p>
  </div>
</template>

<script>
  export default {
    name: 'preise',
    head () {
      return {
        title: "Preise - Trageberatung Lisa Reif"
      }
    }
  }
</script>

<style scoped>

</style>
