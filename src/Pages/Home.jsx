
import { useEffect } from "react";
import Intro from "../Features/Intro";
import Task from "../Features/Task";
import Work from "../Features/Work";
import { useGet } from "../Hooks/Get/useGet";
import { useGetApi } from "../Hooks/Get/useGetApi";
import { addTicket } from "../Features/ticketSlice";
import Spinner from "../ui/Spinner";
import { useDispatch, useSelector } from "react-redux";
import ChatBot from "../Features/ChatBot";

const Home = () => {
 const { ticket } = useSelector(state => state.ticket);


 const dispatch = useDispatch();
 const { fetch: fetchFn } = useGetApi({ key: 'ticket' });
 const { fetch, isFetching } = useGet({ key: ['ticket'], fn: fetchFn });

 useEffect(() => {
  dispatch(addTicket(fetch));
 }, [fetch, dispatch, ticket]);

 if (isFetching) return <Spinner />;
 return (
  <>
   <Intro />
   <Task />
   <Work />
   <ChatBot />
  </>
 );
};

export default Home;