import supabase from "../../Services/supabase";

const tableName = 'chats';

// Replace 'array_column_name' with the name of the column containing the array
const arrayColumnName = 'messages';
export const useEditChatApi = () => {
async function editFn(msg = ["hello"], id) {
  // Replace 'new_array_values' with the updated array values
  const { data, error } = await supabase
    .from(tableName)
    .update({ [arrayColumnName]: msg })
    .eq('chatId', id);

  if (error) {
    console.error('Error:', error.message);
    return;
  }

  console.log('Array in Supabase updated successfully:', data);
  return {data}
}

// Call the function to update the array
return {editFn};

}