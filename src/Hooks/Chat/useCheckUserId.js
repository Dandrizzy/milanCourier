
import { useState } from "react";
import { useUser } from "../../Features/authentication/useUser";
import supabase from "../../Services/supabase";
export const useCheckUserId = () =>{
  const [exist, setExist] = useState(null)
  const {user} = useUser()

 async function checkUserId() {
 
  const { data, error } = await supabase
    .from('chats')
    .select('*')
    .eq('chatId', user?.id);
  if (error) {
    console.log('Error:', error.message);
    return;
  }
  if (data.length > 0) {
    setExist(true)
    console.log('User ID exists in the table.');
    return {data}
  } else {
    setExist(false)
    console.log('User ID does not exist in the table.');
  }
}
return {checkUserId, exist}

}


