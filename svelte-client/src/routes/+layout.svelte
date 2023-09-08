<main>
  <div class="bg-white p-6 shadow-md rounded-md max-w-md mx-auto">
    <div class="text-center mb-6 flex">
      <img src="logo.png" alt="Logo" class="mx-auto w-1/4 inline-block" />
      <a class="m-auto text-2xl inline-block font-bold text-gray-800" href="/"
        ><h1 class="">Ticket Manager</h1></a
      >
    </div>
    <div class="space-y-4 mb-6">
      <!-- Содержимое меню и другие элементы могут быть добавлены здесь -->
    </div>
    <slot />
    <!-- Этот слот будет автоматически заменен содержимым вашей страницы -->
  </div>
</main>

<style>
  @import 'tailwindcss/base';
  @import 'tailwindcss/components';
  @import 'tailwindcss/utilities';
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  main {
    font-family: 'Inter', sans-serif;
  }
</style>
