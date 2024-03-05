import supabase from "../../Services/supabase";

export const upsertApi = async({ticketId, lat, lng}) => {
 const {data, error} = await supabase.from('position').upsert({ticketId, lat, lng}).select()
 if(error) throw new Error(error.message)
 return data
}