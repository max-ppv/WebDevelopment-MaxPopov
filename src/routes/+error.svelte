<svelte:head>
  <meta name="robots" content="noindex" />
</svelte:head>

<h1>{$page.status}: {$page.error?.message}</h1>
<div><a class="block py-2 text-blue-500 underline" href="/">To the main page!</a></div>

<script>
  import { page } from '$app/stores';
</script>
