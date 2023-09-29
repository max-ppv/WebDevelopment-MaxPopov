<svelte:head>
  <meta name="robots" content="noindex" />
</svelte:head>

<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  onMount(() => {
    goto('/edit/new');
  });
</script>
