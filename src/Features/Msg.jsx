import { useParams } from "react-router-dom";
import { useGet } from "../Hooks/Get/useGet";
import Spinner from "../ui/Spinner";
import { useGetApi } from "../Hooks/Get/useGetApi";
import AdminChatBot from "./AdminChatBot";

const Msg = () => {
 const { chatId } = useParams();
 const { fetch } = useGetApi({ key: 'chats' });
 const { fetch: messages, isFetching } = useGet({ fn: fetch, key: ['chats', chatId] });

 if (isFetching) return <Spinner />;

 const filteredMsg = messages.filter(item => item.chatId === chatId);

 return (
  <div className=" p-4 grid gap-8">

   <div className="grid gap-2 max-h-80 overflow-y-auto max-w-xl">
    {filteredMsg.map(msg => <div className={msg.sender === 'user' ? " bg-blue-200/40 p-2 rounded-2xl" : " bg-yellow-200/40 p-2 rounded-2xl"} key={msg.id}>{msg.message}</div>)}
   </div>

   <div className="">
    <AdminChatBot id={chatId} />
   </div>

  </div>
 );
};

export default Msg;