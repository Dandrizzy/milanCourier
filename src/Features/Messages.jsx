import { Button, Flex, Table } from "@radix-ui/themes";
import { useGet } from "../Hooks/Get/useGet";
import { useGetApi } from "../Hooks/Get/useGetApi";
import { groupMessagesByChatId } from "../Hooks/helpers";
import Spinner from "../ui/Spinner";
import { useNavigate } from "react-router-dom";

const Messages = () => {
 const navigate = useNavigate();
 const { fetch } = useGetApi({ key: 'chats' });
 const { fetch: messages, isFetching } = useGet({ key: ['chats'], fn: fetch });

 if (isFetching) return <Spinner />;
 const msg = messages.filter(m => m.admin === 'milan');
 const allMsg = groupMessagesByChatId(msg);

 // console.log(allMsg[0].messages);

 return (
  <div className=" p-4">
   <Table.Root variant="surface">
    <Table.Header>
     <Table.Row>
      <Table.ColumnHeaderCell>S/N</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Message</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>
     </Table.Row>
    </Table.Header>

    {allMsg.map((msg, index) => {
     let len = msg.messages.length - 1 < 1 ? 0 : msg.messages.length - 1;
     return <Table.Body key={msg.chatId}>
      <Table.Row>
       <Table.RowHeaderCell>{index + 1}</Table.RowHeaderCell>
       <div className={msg.messages[len].sender === 'user' ? ' rounded-lg bg-blue-200/40' : ' bg-yellow-200/40 rounded-lg'}>
        <Table.Cell >{msg.messages[len].message}</Table.Cell>

       </div>
       <Table.Cell >
        <Flex gap="3">
         <Button color="blue" variant="soft" onClick={() => navigate(`/dashboard/messages/${msg.chatId}`)} >
          View
         </Button>

        </Flex>

       </Table.Cell>
      </Table.Row>

     </Table.Body>;
    })}
   </Table.Root>

  </div>
 );
};

export default Messages;