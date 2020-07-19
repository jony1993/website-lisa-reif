<template>
  <div class="container mt-8">
    <div class="flex flex-wrap -mx-2 overflow-hidden">

      <div class="w-full px-2 my-2 overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2">
        <!--Heading-->
        <h1 class="z-10 text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl font-heading">Kontakt</h1>
        <img class="z-0 inline-block -mt-12" src="~/assets/img/underline.png"/>
        <!--Content-->
        <div class="mt-4 text-gray-700 font-body">
          <p>Lisa Reif</p>
          <p>Hoholtingerstr. 7</p>
          <p>94431 Pilsting / Großköllnbach</p>
          <p>Tel. 0176/56951313</p>
          <p>E-Mail: trageberatung-lisareif@gmx.de</p>
          <div class="pt-8 pb-16 lg:col-span-3">
            <div class="max-w-lg mx-auto lg:max-w-none">
              <form action="#" method="POST" @submit.prevent="sendEmail" class="grid grid-cols-1 row-gap-6">
                <div>
                  <label for="full_name" class="sr-only">Dein Name</label>
                  <div class="relative rounded-md shadow-sm">
                    <input v-model="nameMsg" id="full_name"
                           class="block w-full px-4 py-3 placeholder-gray-500 transition duration-150 ease-in-out form-input"
                           placeholder="Dein Name">
                  </div>
                </div>
                <div>
                  <label for="email" class="sr-only">Deine E-Mail</label>
                  <div class="relative rounded-md shadow-sm">
                    <input v-model="emailMsg" id="email" type="email"
                           class="block w-full px-4 py-3 placeholder-gray-500 transition duration-150 ease-in-out form-input"
                           placeholder="E-Mail Adresse">
                  </div>
                </div>
                <div>
                  <label for="phone" class="sr-only">Deine Telefonnummer</label>
                  <div class="relative rounded-md shadow-sm">
                    <input v-model="phoneMsg" id="phone"
                           class="block w-full px-4 py-3 placeholder-gray-500 transition duration-150 ease-in-out form-input"
                           placeholder="Telefonnummer">
                  </div>
                </div>
                <div>
                  <label for="message" class="sr-only">Deine Nachricht</label>
                  <div class="relative rounded-md shadow-sm">
                  <textarea v-model="messageMsg" id="message" rows="4"
                            class="block w-full px-4 py-3 placeholder-gray-500 transition duration-150 ease-in-out form-input"
                            placeholder="Deine Nachricht"></textarea>
                  </div>
                </div>
                <span class="inline-flex rounded-md">
              <button type="submit"
                      class="inline-flex justify-center px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out rounded-md bg-primary focus:outline-none">
                {{ctaText}}
              </button>
            </span>
              </form>
              <!--Success Message-->
              <div class="p-4 rounded-md bg-green-50" v-if="isSuccess">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <svg class="w-5 h-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <div class="ml-3">
                    <h3 class="text-sm font-medium leading-5 text-green-800">
                      Nachricht wurde erfolgreich zugestellt. Ich melde mich schnellstmöglich bei dir :)
                    </h3>
                  </div>
                </div>
              </div>

              <!--Error message-->
              <div class="p-4 rounded-md bg-red-50" v-if="isError">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <svg class="w-5 h-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <div class="ml-3">
                    <h3 class="text-sm font-medium leading-5 text-red-800">
                      Fehler beim Senden der Nachricht
                    </h3>
                    <div class="mt-2 text-sm leading-5 text-red-700">
                      <p>Leider konnte die Nachricht nicht gesendet werden. Probiere es bitte noch einmal. Sollte es
                        nicht funktionieren kannst du mich gerne
                        anrufen oder mir eine E-Mail schreiben.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full px-2 my-2 overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2">
        <img class="rounded-lg shadow-md" src="~/assets/img/lisa.png">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'kontakt',
    head() {
      return {
        title: 'Kontakt - Trageberatung Lisa Reif',
      }
    },
    data() {
      return {
        nameMsg: '',
        emailMsg: '',
        phoneMsg: '',
        messageMsg: '',
        isLoading: false,
        isError: false,
        isSuccess: false,
      }
    },
    computed: {
      ctaText() {
        if(this.isLoading){
          return "Nachricht wird gesendet..."
        }else{
          return "Abschicken"
        }
      },
    },
    methods: {
      sendEmail() {
        this.isLoading = true
        this.isSuccess = false
        this.isError = false
        if(this.emailMsg !== "" && this.messageMsg !== ""){
          this.$axios.post('https://formspree.io/xyynbogg', {
              name: this.nameMsg,
              from: this.emailMsg,
              phone: this.phoneMsg,
              _subject: `${this.nameMsg} | Kontaktformular Nachricht`,
              message: this.messageMsg,
            },
          ).then((response) => {
            this.nameMsg = ''
            this.emailMsg = ''
            this.messageMsg = ''
            this.phoneMsg = ''
            this.isLoading = false
            this.isSuccess = true
          }).catch((error) => {
            this.isLoading = false
            this.isError = true
          })
        }else{
          this.isError = true
          this.isLoading = false
        }
      },
    },
  }
</script>

<style scoped>

</style>
