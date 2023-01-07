<template>
    <div>
        <CommercialBar/>
<NavBar/>
<section class="bg-white">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contact</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">Vous voulez contacter Damien Doussot pour une question précise ? N'hésiter pas à le contacter à l'aide de ce formulaire de contact </p>
      <form action="#" class="space-y-8">
        <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Prénom</label>
              <input type="email" id="message" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="" required>
          </div>
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Nom</label>
              <input type="email" id="message" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="" required>
          </div>
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Votre email</label>
              <input type="email" id="email" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="nom@mail.com" required>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 ">Objet</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Dites nous comment on peut vous aider" required>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900">Votre message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Laissez un commentaire..."></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-black sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Envoyer votre message</button>
      </form>
  </div>
</section>
    </div>

  
</template>

<script>
export default {

}
</script>

<style>

</style>