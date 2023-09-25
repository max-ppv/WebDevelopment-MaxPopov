<main>
  <div class="max-w-md p-6 mx-auto bg-white rounded-md">
    <a class="inline-block m-auto text-2xl font-bold text-gray-800" href="/"
      ><img src="/logo.png" alt="Logo" class="inline-block w-full mx-auto" /></a
    >
    <!-- <a class="inline-block m-auto text-gray-800" href="/">back to home</a> -->
    <slot />
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
