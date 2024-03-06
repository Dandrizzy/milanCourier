
import { useNavigate, useParams } from "react-router-dom";

import { useGetSpecificApi } from "../Hooks/GetSpecific/useGetSpecificApi";
import { useGetSpecific } from "../Hooks/GetSpecific/useGetSpecific";
import Spinner from "../ui/Spinner";
import { FaArrowLeftLong, FaMap } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useDeleteApi } from "../Hooks/Delete/useDeleteApi";
import { useDelete } from "../Hooks/Delete/useDelete";
import { formatCurrency } from "../Hooks/helpers";
import { Button } from "@radix-ui/themes";


const Ticket = () => {

 const navigate = useNavigate();

 const { deleteFn } = useDeleteApi({ key: 'ticket' });

 const { deleteItem, isDeleting } = useDelete({ fn: deleteFn, key: ['ticket'] });


 const { ticketId } = useParams();

 const { getSpecific } = useGetSpecificApi({ key: 'ticket', ticketId });

 const { data = [], isFetching } = useGetSpecific({ key: ['ticket', ticketId], fn: getSpecific });

 if (isFetching || isDeleting || data.data === undefined) return <Spinner />;


 const { name, rAddress, rCountry, rEmail, rName, rPhone, sAddress, sCountry, sEmail, sPhone, weight, description, deliveryDate, receiveDate, id, amount, status } = data.data;


 return (
  <>
   <div className=" gap-8 grid sm:grid-cols-2 p-4 text-neutral-900">
    <div className="grid gap-4 ">
     <h1 className=" text-xl font-semibold">Sender&apos;s information</h1>
     <p>Name: {name}</p>
     <p>Address: {sAddress}</p>
     <p>Country: {sCountry}</p>
     <p>Email: {sEmail}</p>
     <p>Phone: {sPhone}</p>
    </div>

    <div className="grid gap-4 ">
     <h1 className=" text-xl font-semibold">Recipient information</h1>
     <p>Name: {rName}</p>
     <p>Address: {rAddress}</p>
     <p>Country: {rCountry}</p>
     <p>Email: {rEmail}</p>
     <p>Phone: {rPhone}</p>
    </div>

    <div className="grid gap-4 ">
     <h1 className=" text-xl font-semibold">Parcel details</h1>
     <p>Description: {description}</p>
     <p>Weight: {weight}kg</p>
     <p>Amount: {formatCurrency(amount)}</p>
    </div>

    <div className="grid gap-4 ">
     <h1 className=" text-xl font-semibold">Recipient information</h1>
     <p>Ticket ID: {ticketId}</p>
     <p>Receive date: {receiveDate}</p>
     <p>Estimated delivery date: {deliveryDate}</p>

    </div>


   </div>

   <div className="grid gap-4 text-neutral-900 p-4">
    Status: {status}

   </div>

   <div className=" py-10 flex justify-center items-center flex-wrap gap-3 sm:gap-8">

    <Button size='3' radius="full" onClick={() => navigate(`/form/${id}`)} disabled={isDeleting} >
     <FaEdit className=' text-2xl' />Edit
    </Button>

    <Button size='3' color="red" radius="full" disabled={isDeleting} onClick={() => {
     deleteItem(id, { onSuccess: () => navigate('/dashboard') });
    }} > <MdDelete className=' text-2xl' /> Delete</Button>

    <Button size='3' color="crimson" radius="full" disabled={isDeleting} onClick={() => navigate(`/ticket/adminMap/${ticketId}`)
    } > <FaMap className=' text-2xl' /> View map</Button>

    <Button onClick={() => navigate('/dashboard')} size='3' radius="full" color="gray" disabled={isDeleting} > <FaArrowLeftLong className=' text-2xl' />Back</Button>

   </div>
  </>
 );
};

export default Ticket;