import { useQuery } from "@tanstack/react-query";
import { useGetChatApi } from "./useGetChatApi";
import { useUser } from "../../Features/authentication/useUser";

export const useGetChat = () => {
 const {user} = useUser()
 const {fetch} = useGetChatApi({id:user?.id})
 const {data, isLoading} = useQuery({
  queryKey: ['chats'],
  queryFn: fetch
 })
 return {data, isLoading}
}