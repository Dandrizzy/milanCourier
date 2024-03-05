import supabase from './supabase';

export async function updateTicket({ id, obj }) {
  const { data, error } = await supabase
    .from('ticket')
    .update(obj)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error('Ticket could not be updated');
  }
  return data;
}
