import supabase from '../../Services/supabase';

export const useGetById = ({ key, id }) => {
  async function getSpecific() {
    // 1. Create
    const { data, error } = await supabase
      .from(key)
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error(error.message);
      throw new Error(`${key} could not be fetched`, error.message);
    }
    return { data };
  }

  return { getSpecific };
};
