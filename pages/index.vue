<template>
  <div class="container mt-8">

    <div class="flex flex-wrap -mx-2 overflow-hidden sm:-mx-4">
      <div class="my-2 px-2 w-full overflow-hidden sm:my-2 sm:px-2 md:w-1/2 lg:w-1/2 xl:w-1/2">
        <h1 class="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl z-10 font-heading">Herzlich Willkommen</h1>
        <img class="-mt-4 z-0" src="~/assets/img/underline.png" alt="Border Image"/>
        <div class="mt-4 text-gray-700 font-body">
          <p>Trageberatung im Landkreis Dingolfing-Landau und Straubing-Bogen.</p>
          <p class="mt-4">Du willst dein Baby oder Kleinkind tragen und bist auf der Suche nach einer passenden Tragehilfe? </p>
          <p class="mt-4">Du hast bereits ein Tragetuch oder eine Tragehilfe, aber kommst nicht damit zurecht?</p>
          <p class="mt-4">Dann melde dich bei mir und wir finden gemeinsam in einer persönlichen Beratung die für Dich bzw. Euch perfekte
            Tragehilfe.</p>
          <p class="mt-4">Jetzt neu: Du kannst selbstverständlich auch einen Gutschein bei mir kaufen. Ein super Geschenk zur Geburt oder Babyparty! <nuxt-link class="underline" to="/preise">Zu den Gutscheinen</nuxt-link></p>
        </div>
      </div>

      <div class="my-2 px-2 w-full overflow-hidden sm:my-2 sm:px-2 md:w-1/2 lg:w-1/2 xl:w-1/2">
        <img class="rounded-lg shadow-md" src="~/assets/img/lisa.png" alt="Bild von Lisa mit Tragetuch">
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    head () {
      return {
        title: "Trageberatung Lisa Reif - Trageberatung im Landkreis Dingolfing-Landau und Straubing-Bogen"
      }
    }
  }
</script>

<style>
</style>
