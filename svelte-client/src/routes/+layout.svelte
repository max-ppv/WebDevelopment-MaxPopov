<style>
	@import 'tailwindcss/base';
	@import 'tailwindcss/components';
	@import 'tailwindcss/utilities';
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

	main {
		font-family: 'Inter', sans-serif;
	}
</style>

<script>
</script>

<main>
	<div class="bg-white p-6 shadow-md rounded-md max-w-md mx-auto">
		<div class="text-center mb-6">
			<h1 class="text-2xl font-bold text-gray-800">Ticket Manager</h1>
		</div>
		<div class="space-y-4 mb-6">
			<!-- Содержимое меню и другие элементы могут быть добавлены здесь -->
		</div>
		<slot />
		<!-- Этот слот будет автоматически заменен содержимым вашей страницы -->
	</div>
</main>
