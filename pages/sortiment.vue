<template>
  <div class="container mt-8 text-center">
    <!--Heading-->
    <h1 class="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl z-10 font-heading">Sortiment</h1>
    <img class="-mt-12 z-0 inline-block" src="~/assets/img/underline.png"/>
    <p class="font-body text-gray-700 mt-4">Mein Sortiment wird ständig erweitert. Falls du eine Trage testen möchtest,
      die hier nicht aufgeführt ist, sprich mich bitte an.</p>

    <!--Content-->
    <div class="flex flex-wrap -mx-3 overflow-hidden mt-4 text-gray-700 font-body">

      <div class="my-3 px-3 w-full overflow-hidden sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4">
        <div class="">
          <img class="rounded-lg shadow-md" src="~/assets/img/tragetuch_sortiment.jpg">
          <h2 class="text-xl font-bold mt-4">Tragetücher</h2>
          <a href="#tragetuecher"
             class="bg-primary inline-block mt-4 rounded shadow-md pt-2 pb-2 pr-4 pl-4 hover:shadow-lg ">
            Mehr Infos >>
          </a>
        </div>
      </div>

      <div class="my-3 px-3 w-full overflow-hidden sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4">
        <div class="">
          <img class="rounded-lg  shadow-md" src="~/assets/img/halfbuckle_sortiment.jpg">
          <h2 class="text-xl font-bold mt-4">Halfbuckle</h2>
          <a href="#halfbuckle"
             class="bg-primary inline-block mt-4 rounded shadow-md pt-2 pb-2 pr-4 pl-4 hover:shadow-lg ">
            Mehr Infos >>
          </a>
        </div>
      </div>

      <div class="my-3 px-3 w-full overflow-hidden sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4">
        <div class="">
          <img class="rounded-lg shadow-md" src="~/assets/img/fullbuckle_sortiment.jpg">
          <h2 class="text-xl font-bold mt-4">Fullbuckle</h2>
          <a href="#fullbuckle"
             class="bg-primary inline-block mt-4 rounded shadow-md pt-2 pb-2 pr-4 pl-4 hover:shadow-lg ">
            Mehr Infos >>
          </a>
        </div>
      </div>

      <div class="my-3 px-3 w-full overflow-hidden sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4">
        <div class="">
          <img class="rounded-lg shadow-md" src="~/assets/img/ringsling_sortiment.jpg">
          <h2 class="text-xl font-bold mt-4">Ringsling</h2>
          <a href="#ringsling"
             class="bg-primary inline-block mt-4 rounded shadow-md pt-2 pb-2 pr-4 pl-4 hover:shadow-lg ">
            Mehr Infos >>
          </a>
        </div>
      </div>
    </div>

    <!--Tragetücher-->
    <hr class="mt-16">
    <section id="tragetuecher" class="mt-16 font-body text-gray-700">
      <h2 class="text-4xl mb-2">Tragetücher</h2>
      <p>Hier unterscheidet man zwischen elastischen und gewebten Tragetüchern. Die elastischen Tragetücher sind sehr
        kuschelig und passen sich perfekt an das Baby und den Tragenden an. Besonders kleine Babys fühlen sich in einem
        elastischen Tuch ganz besonders geborgen.</p>
      <p class="mt-4">Bei den gewebten Tragetüchern sorgt die spezielle Webtechnik dafür, dass auch diese Tücher ein
        Stück weit flexibel sind. Man spricht hier von diagonalelastisch bzw. querelastisch. Mit einem gewebten
        Tragetuch kann man auch schwerere Kinder sehr gut tragen.</p>
      <p class="font-bold mt-4">Mein Sortiment:</p>
      <ul>
        <li>Elastisch: Izmi, Hoppediz, Schmusewolke</li>
        <li>Gewebt: Didymos, Hoppediz, Fidella</li>
      </ul>
    </section>

    <!--Half Buckle-->
    <hr class="mt-16">
    <section id="halfbuckle" class="mt-16 font-body text-gray-700">
      <h2 class="text-4xl mb-2">Halfbuckle</h2>
      <p>Beim Halfbuckle wird der Bauchgurt entweder mit einer Schnalle geschlossen oder geknotet (Mei Tai). Die Träger
        sind zum Knoten und wie das Rückenteil aus Tragetuchstoff. Sie schmiegen sich sehr schön an das Baby an.</p>
      <p class="font-bold mt-4">Mein Sortiment:</p>
      <ul>
        <li>Limas</li>
        <li>Limas Plus</li>
        <li>Cybex Yema.Tie</li>
        <li>MySol Girasol</li>
        <li>Fidella FlyTai</li>
        <li>Kokadi TaiTai</li>
        <li>Fräulein Hübsch SoftTai</li>
      </ul>
    </section>

    <!--Full Buckle-->
    <hr class="mt-16">
    <section id="fullbuckle" class="mt-16 font-body text-gray-700">
      <h2 class="text-4xl mb-2">Fullbuckle</h2>
      <p>Im Gegensatz zum Halfbuckle wird beim Fullbuckle alles mit Schnallen geschlossen. Hier muss man nichts knoten
        oder binden.</p>
      <p class="font-bold mt-4">Mein Sortiment:</p>
      <ul>
        <li>Limas Flex</li>
        <li>Kokadi Flip</li>
        <li>Fidella Fusion</li>
        <li>Ruckeli Slim</li>
        <li>Manduca First</li>
      </ul>
    </section>

    <!--Ringsling-->
    <hr class="mt-16">
    <section id="ringsling" class="mt-16 font-body text-gray-700">
      <h2 class="text-4xl mb-2">Ringsling</h2>
      <p>Der Ringsling ist aus Tragetuchstoff, der mit zwei Ringen versehen ist. Die Belastung hier ist jedoch
        einseitig und somit eher für zwischendurch geeignet. Vorteil hier ist das schnelle Anlegen.</p>
      <p class="font-bold mt-4">Mein Sortiment:</p>
      <ul>
        <li>Limas</li>
        <li>Fidella</li>
        <li>Schmusewolke</li>
        <li>Didymos</li>
      </ul>
    </section>

    <!--Onbuhimo-->
    <hr class="mt-16">
    <section id="onbuhimo" class="mt-16 font-body text-gray-700">
      <h2 class="text-4xl mb-2">Onbuhimo</h2>
      <p>Ein Onbuhimo ist eine Tragehilfe ohne Hüftgurt, die meist auf dem Rücken getragen wird. Der Onbuhimo hat nur
        ein kleines Packmaß und ist daher praktisch für unterwegs. Mit einem Onbuhimo kann man auch in der
        Schwangerschaft tragen, da hier kein Hüftgurt drückt.</p>
      <p class="font-bold mt-4">Mein Sortiment:</p>
      <ul>
        <li>Kokadi Onbu</li>
      </ul>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'sortiment',
    head() {
      return {
        title: 'Sortiment - Trageberatung Lisa Reif',
      }
    },
  }
</script>

<style scoped>

</style>
