<template>
  <div class="container mt-8 text-center">
    <!--Heading-->
    <h1 class="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl z-10 font-heading">Über mich</h1>
    <img class="-mt-12 z-0 inline-block" src="~/assets/img/underline.png"/>

    <!--Content-->
    <div class="mt-4 flex flex-wrap -mx-2 overflow-hidden text-gray-700 font-body text-left">
      <div class="my-2 px-2 w-full overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
        <p class="font-body">
          Mein Name ist Lisa, ich bin 30 Jahre alt und Mama von zwei Kindern. 
          <br />
          <br />
          Durch meine Tochter bin ich 2018 zum Tragen gekommen und habe mich im September 2019 entschlossen, 
          eine Ausbildung zur Trageberaterin bei der Trageschule Hamburg zu machen. 
          <br />
          <br /> 
          Seit Januar 2020 bin ich zertifizierte Trageberaterin.
        </p>
      </div>
      <div class="my-2 px-2 w-full overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
        <img class="shadow-md rounded-lg" src="~/assets/img/lisa2.jpg">
      </div>

    </div>
  </div>
</template>

<script>
	export default {
		name: 'ueber-mich',
    head () {
      return {
        title: "Über mich - Trageberatung Lisa Reif"
      }
    }
	}
</script>

<style scoped>

</style>
