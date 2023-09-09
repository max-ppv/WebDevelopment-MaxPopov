import { error } from '@sveltejs/kit';

export async function load({ params }: { params: { id: string } }) {
  console.log('params', params);

  if (!params.id) throw error(404);
  return params;
}
