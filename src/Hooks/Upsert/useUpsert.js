import { useMutation } from "@tanstack/react-query";
import { upsertApi } from "./upsertApi";
import toast from "react-hot-toast";

export const useUpsert = () => {
 const {mutate: upsert, isPending} = useMutation({
   mutationFn: upsertApi,
   mutationKey: [ 'position' ],
   onSuccess: ()=> toast.success( "Position saved!" ),
 })

 return{upsert,isPending}
}