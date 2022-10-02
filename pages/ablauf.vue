<template>
  <div class="container mt-8 text-center">
    <!--heading-->
    <h1 class="z-10 text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl font-heading">Ablauf</h1>
    <img class="z-0 inline-block -mt-12" src="~/assets/img/underline.png"/>

    <!--Content-->
    <div class="flex flex-wrap mt-4 -mx-3 overflow-hidden text-gray-700 font-body">

      <div class="order-2 w-full px-3 my-3 mb-2 overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2">
        <!-- Column Content -->
        <img class="rounded-lg shadow-md" :src="require('~/assets/img/' + images[currentIndex] + '.jpg')">
      </div>

      <div class="w-full px-3 my-3 overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2">
        <div class="p-4 bg-white rounded-lg shadow-md">
          <h2 class="text-xl font-bold">1. Telefonischer Kontakt</h2>
          <p>Du meldest dich über das Kontaktformular, per E-Mail oder per Telefon bei mir. Ich rufe dich dann zurück
            und gemeinsam gehen wir vorab ein paar Fragen durch. Hier kannst du mir u.a. mitteilen, ob bzw. welche
            Tragen du schon Zuhause hast oder was du dir vorstellst. Wir vereinbaren einen Termin entweder bei dir oder
            bei mir Zuhause.</p>
        </div>
        <div class="p-4 mt-4 bg-white rounded-lg shadow-md">
          <h2 class="text-xl font-bold">2. Beratungsgespräch</h2>
          <p>Zu Beginn unseres Treffens sprechen wir kurz über Theorie (Anhock-Spreizhaltung, Verwöhnen, Entwicklung des
            Babys). Anschließend kannst du mir gerne deine Tragehilfen bzw. Tragetücher zeigen, die du Zuhause hast.
            Solltest du noch keine Tragehilfe/Tuch Zuhause haben, zeige ich dir einige Modelle und erkläre dir die
            Unterschiede.</p>

          <p class="mt-4">Ich zeige dir dann, wie man deine favorisierte Trage/Tuch anlegt. Wir üben immer mit einer
            Tragepuppe. Anschließend kannst du die gewünschten Tragen/Tücher selbst ausprobieren. Auch hier üben wir
            solange mit der Tragepuppe, bist du dich sicher fühlst und dein Baby tragen willst.</p>

          <p class="mt-4">Die Bedürfnisse deines Babys stehen an erster Stelle. Deshalb kannst du während der Beratung
            jederzeit wickeln, stillen oder
            füttern. Hast du dich für ein Tragetuch und/oder eine Tragehilfe entschieden, überlasse ich dir diese/s
            leihweise für ein paar Tage, bis du dir deine Trage bzw. Tuch bestellt hast. Der Preis für den Verleih liegt
            bei 10 € pro Woche.</p>
        </div>
        <div class="p-4 mt-4 mb-2 bg-white rounded-lg shadow-md">
          <h2 class="text-xl font-bold">3. Nachberatung</h2>
          <p>Du erhältst nach unserem Gespräch noch eine E-Mail von mir. Darin findest du u. A. nochmals Videos, wie die
            Trage richtig anzulegen ist. Außerdem erhältst du noch ein paar allgemeine Infos über das Tragen.
            Die Nachberatung per Whatsapp oder E-Mail ist kostenlos. Du kannst mir gerne ein Foto schicken, wenn du dein
            Baby das erste Mal eingebunden hast und ich sage dir, ob du noch etwas verbessern solltest. Falls du noch
            andere Fragen hast, kannst du mir diese dann auch gerne noch stellen.
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'ablauf',
    data() {
      return {
        images: [
          'tragetuch_ablauf_1',
          'tragetuch_ablauf_2',
          'tragetuch_ablauf_3',
          'tragetuch_ablauf_4',
          'tragetuch_ablauf_5'
        ],
        currentIndex: 0,
      }
    },
    head() {
      return {
        title: 'Ablauf Trageberatung - Trageberatung Lisa Reif',
      }
    },
    mounted() {
      this.startSlider()
    },
    methods: {
      slide() {
        const noOfImages = this.images.length
        if (noOfImages === this.currentIndex + 1) {
          this.currentIndex = 0
        }else{
          this.currentIndex = this.currentIndex + 1;
        }
      },
      startSlider() {
        setInterval(() => {
          this.slide()
        }, 4000)
      },
    },
  }
</script>

<style scoped>

</style>
