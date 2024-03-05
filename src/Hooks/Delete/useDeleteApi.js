import supabase from '../../Services/supabase';

export const useDeleteApi = ({ key }) => {
  async function deleteFn(id) {
    // 1. Create
    const { data, error } = await supabase.from(key).delete().eq('id', id);

    if (error) {
      console.error(error);
      throw new Error(`${key} could not be deleted`, error.message);
    }
    return data;
  }

  return { deleteFn };
};
