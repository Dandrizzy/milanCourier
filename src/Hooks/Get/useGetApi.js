import supabase from '../../Services/supabase';

export const useGetApi = ({ key }) => {
  async function fetch() {
    // 1. Create
    const { data, error } = await supabase.from(key).select('*');

    if (error) {
      console.error(error);
      throw new Error(`${key} could not be fetched`, error.message);
    }
    return data;
  }

  return { fetch };
};
