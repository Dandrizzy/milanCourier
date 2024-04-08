
import { useGetSpecificApi } from "../Hooks/GetSpecific/useGetSpecificApi";
import { useGetSpecific } from "../Hooks/GetSpecific/useGetSpecific";
import Spinner from "../ui/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import { formatCurrency, formatDate } from "../Hooks/helpers";
import { Button } from "@radix-ui/themes";
import { FaMapLocationDot } from "react-icons/fa6";
import { FcCheckmark, FcPaid, FcServices, FcShipped } from "react-icons/fc";

const HomeTicket = () => {

  const navigate = useNavigate();
  const { alphaCode: ticketId } = useParams();


  const { getSpecific } = useGetSpecificApi({ key: 'ticket', ticketId });

  const { data = [], isFetching } = useGetSpecific({ key: ['ticket', ticketId], fn: getSpecific });

  if (isFetching) return <Spinner />;

  if (data?.data === undefined) return <p className=" p-4">Please check your internet. 📶</p>;

  const { name, rAddress, rCountry, rEmail, rName, rPhone, sAddress, sCountry, sEmail, sPhone, weight, description, deliveryDate, receiveDate, amount, status } = data.data;

  return (
    <>

      <div className="p-4 max-w-3xl flex flex-col justify-center mx-auto ">
        <div className=" pb-4">
          <h1 className="pb-4 text-xl font-semibold">Package Information</h1>
          <div className="grid gap-4 text-neutral-900">
            Status: {status}
          </div>
          <div className=" flex max-w-lg justify-between py-4">
            <div className="grid place-items-center gap-4 text-xs">

              <FcPaid className=" h-10 w-10" />
              <p>Confirmed</p>
            </div>
            <div className="w-full h-1 bg-green-300 my-6 rounded-full"></div>

            <div className="grid place-items-center gap-4 text-xs">

              <FcServices className=" h-10 w-10" />
              <p>Processing</p>
            </div>

            <div className="w-full h-1 bg-green-300 my-6 rounded-full"></div>

            <div className="grid place-items-center gap-4 text-xs">

              <FcShipped className=" h-10 w-10" />
              <p>Dispatched</p>
            </div>

            <div className="w-full h-1 bg-green-300 my-6 rounded-full"></div>

            <div className="grid place-items-center gap-4 text-xs">

              <FcCheckmark className=" h-10 w-10" />
              <p>Package Checked</p>
            </div>
          </div>
        </div>
        <div className=" max-w-2xl text-neutral-900 gap-8 grid sm:grid-cols-2 ">
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
            <p>Weight: {weight}</p>
            <p>Amount: {formatCurrency(amount)}</p>
          </div>

          <div className="grid gap-4 ">
            <h1 className=" text-xl font-semibold">Tracking details</h1>
            <p>Ticket ID: {ticketId}</p>
            <p>Receive date: {formatDate(receiveDate)}</p>
            <p>Estimated delivery date: {formatDate(deliveryDate)}</p>

          </div>


        </div>

      </div>
      <div className=" flex justify-center items-center my-6">
        <Button color="green" size='3' radius="full" onClick={() => navigate(`/customer/${ticketId}`)}>
          <FaMapLocationDot />
          Show on map</Button>
      </div>
    </>
  );
};

export default HomeTicket;