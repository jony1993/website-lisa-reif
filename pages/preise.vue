<template>
  <div class="container mt-8 text-center">
    <!--heading-->
    <h1 class="z-10 text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl font-heading">Preise</h1>
    <img class="z-0 inline-block -mt-12" src="~/assets/img/underline.png"/>

    <!--Price boxes-->
    <div class="flex flex-wrap mt-4 -mx-4 overflow-hidden text-gray-700 font-body">

      <div class="w-full px-4 pb-2 my-4 overflow-hidden sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3">
        <div class="flex flex-col h-full p-4 mx-1 text-center bg-white rounded-lg shadow-md">
          <h2 class="mb-2 text-2xl font-bold">Einzelberatung</h2>
          <p>50 € pro Stunde. Die erste Stunde wird voll berechnet, anschließend erfolgt die Abrechnung viertelstündlich.</p>
          <p class="flex-grow">In der Regel dauert eine Erstberatung zwischen 1,5 und 2 Stunden. Der Preis für die Einzelberatung
            beinhaltet selbstverständlich auch die Anwesenheit eures Partners oder einer engen Bezugsperson.</p>
          <nuxt-link class="inline-block pt-2 pb-2 pl-4 pr-4 mt-4 rounded shadow-md bg-primary hover:shadow-lg" to="/kontakt">Kontakt aufnehmen</nuxt-link>
        </div>
      </div>

      <div class="w-full px-4 pb-2 my-4 overflow-hidden sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3">
        <div class="flex flex-col h-full p-4 mx-1 text-center bg-white rounded-lg shadow-md">
          <h2 class="mb-2 text-2xl font-bold">Gruppenberatung</h2>
          <p class="flex-grow">Preise auf Anfrage. Ich erstelle dir gerne ein individuelles Angebot.</p>
          <nuxt-link class="inline-block pt-2 pb-2 pl-4 pr-4 mt-4 rounded shadow-md bg-primary hover:shadow-lg " to="/kontakt">Kontakt aufnehmen</nuxt-link>
        </div>
      </div>

      <div class="w-full px-4 pb-2 my-4 overflow-hidden sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3">
        <div class="flex flex-col h-full p-4 mx-1 text-center bg-white rounded-lg shadow-md">
          <h2 class="mb-2 text-2xl font-bold">Gutscheine</h2>
          <p class="flex-grow">Du kannst selbstverständlich auch einen Gutschein bei mir kaufen. Ein super Geschenk zur Geburt oder
            Babyparty!</p>
          <nuxt-link class="inline-block pt-2 pb-2 pl-4 pr-4 mt-4 rounded shadow-md bg-primary hover:shadow-lg " to="/kontakt">Kontakt aufnehmen</nuxt-link>
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
      Nachberatung per Whatsapp oder E-Mail kostenlos. Bei einer Beratung bei Dir zuhause fallen Fahrtkosten in Höhe von 0,50 € pro Kilometer an. Berechnungsgrundlage ist Google Maps.
    </p>
    <p class="my-4 text-gray-700 font-body">
      Verleih von Tragehilfen bzw. Tragetüchern jederzeit für 10 € pro Woche möglich.
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
