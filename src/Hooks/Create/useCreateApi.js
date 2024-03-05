import supabase from '../../Services/supabase';

export const useCreateApi = ({ key }) => {
  async function create(newData) {
    // 1. Create
    const { data, error } = await supabase
      .from(key)
      .insert([newData])
      .select()
      .single();

    if (error) {
      console.error(error);
      throw new Error(`${key} could not be created`, error.message);
    }
    return data;
  }

  return { create };
};
