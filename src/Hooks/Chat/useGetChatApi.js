import supabase from "../../Services/supabase";
export const useGetChatApi = ({id=1}) => {

// Function to retrieve messages for a chat ID
async function getChatHistory() {
  const { data, error } = await supabase
    .from('chats')
    .select('*')
    .eq('chatId', id)
    .order('created_at', { ascending: true });

  if (error) {
    console.log('Supabase error:', error.message);
    return [];
  }

  return data;
}
return {getChatHistory}
}