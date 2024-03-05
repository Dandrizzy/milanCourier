import { Button, Dialog, Flex, TextField } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { Form } from "react-router-dom";
import Spinner from "../ui/Spinner";
import { useCreateApi } from "../Hooks/Create/useCreateApi";
import { useCreate } from "../Hooks/Create/useCreate";
import SpinnerMini from "../ui/SpinnerMini";
import { useGet } from "../Hooks/Get/useGet";
import { useGetChatApi } from "../Hooks/Chat/useGetChatApi";



// const chat = ["hello", "john", "What are you up to today my love i would love to know now baby"];
const AdminChatBot = ({ id }) => {
 const { create } = useCreateApi({ key: 'chats' });
 const { create: createChat, isCreating } = useCreate({ key: ['chats'], fn: create });
 const { getChatHistory } = useGetChatApi({ id: id });
 const { fetch: fetchChat, isFetching } = useGet({ key: ['chats'], fn: getChatHistory });


 const { register, handleSubmit, formState: { errors }, reset } = useForm();


 if (isFetching) return <Spinner />;

 function onSubmit(data) {
  if (!data) return;
  createChat({ ...data, sender: 'admin', chatId: id, admin: 'milan' });
  reset();
 }



 return (
  <>

   <Dialog.Root>
    <Dialog.Trigger>
     <Button variant="soft" >
      Reply
     </Button>
    </Dialog.Trigger>
    <Dialog.Content style={{ maxWidth: 450 }}>
     <Dialog.Title>Eagle Express AdminChatBot</Dialog.Title>
     <Dialog.Description size="2" mb="4">
      <div className="grid  font-semibold gap-2 max-h-80 overflow-y-auto ">
       {fetchChat.map((msg) => <div key={msg.id} className={msg.sender === 'user' ? `bg-blue-200/50 py-2 px-4 rounded-2xl tracking-normal` : `bg-yellow-200/50 text-right py-2 px-4 rounded-2xl tracking-normal`}>
        {msg.message}
       </div>)}

      </div>
     </Dialog.Description>

     <Form>
      <Flex direction="column" gap="3">
       {errors.message && <span className=" text-red-800 bg-red-200 py-1 text-xs px-4 rounded-full">Start typing...</span>}
       <label>
        <TextField.Input
         {...register("message", { required: "Please enter a message" })}
         placeholder="Message"
        />
       </label>

      </Flex>

      <Flex gap="3" mt="4" justify="end">
       <Dialog.Close>
        <Button variant="soft" color="gray">
         Cancel
        </Button>
       </Dialog.Close>

       <Button onClick={handleSubmit(onSubmit)}>{isCreating ? <SpinnerMini /> : 'Send'}</Button>

      </Flex>
     </Form>
    </Dialog.Content>
   </Dialog.Root>
  </>
 );
};

export default AdminChatBot;