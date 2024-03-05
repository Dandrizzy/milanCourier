import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useGetSpecificApi } from '../Hooks/GetSpecific/useGetSpecificApi';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetSpecific } from '../Hooks/GetSpecific/useGetSpecific';
import Spinner from '../ui/Spinner';
import { FaCheck } from 'react-icons/fa6';
import { formatCurrency } from '../Hooks/helpers';
import toast from 'react-hot-toast';
import SpinnerMini from '../ui/SpinnerMini';

export const ContactUs = () => {
  const [disable, setDisable] = useState(false);
  const navigate = useNavigate();
  const form = useRef();
  const { id } = useParams();
  const { getSpecific } = useGetSpecificApi({ key: 'ticket', ticketId: id });
  const { data, isFetching } = useGetSpecific({ fn: getSpecific, key: ['ticket', id] });

  if (isFetching || data.data === undefined) return <Spinner />;

  const { rName, rEmail, amount, ticketId, sEmail, description } = data.data;

  const amountFmt = formatCurrency(amount);

  const sendEmail = (e) => {
    e.preventDefault();
    setDisable(d => !d);
    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, 'HS91SoID9eOvXD1Kq')
      .then((result) => {
        toast.success(result.text + ' Successfully sent');
        navigate('/dashboard');
      }, (error) => {
        toast.error(error.text);
      });
  };

  return (
    <div className="p-4
    ">

      <form className=' text-neutral-900 min-h-screen grid gap-4' ref={form} onSubmit={sendEmail}>
        <div className=" grid gap-4 ">
          <label htmlFor="rName">Name</label>
          <input value={rName} type="text" id='rName' name="rName" className=' disabled:text-neutral-500 disabled:cursor-not-allowed border-b border-neutral-900  duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' />
        </div>

        <div className=" grid gap-4 ">
          <label htmlFor="rEmail">Email</label>
          <input value={rEmail} type="text" id='rEmail' name="rEmail" className=' border-b border-neutral-900 disabled:text-neutral-500 disabled:cursor-not-allowed  duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' />
        </div>

        <div className=" grid gap-4 ">
          <label htmlFor="sEmail">Your Email</label>
          <input value={sEmail} type="text" id='sEmail' name="sEmail" className=' border-b border-neutral-900 disabled:text-neutral-500 disabled:cursor-not-allowed  duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' />
        </div>


        <div className=" grid gap-4 ">
          <label htmlFor="amount">Amount</label>
          <input value={amountFmt} type="text" id='amount' name='amount' className=' border-b border-neutral-900 disabled:text-neutral-500 disabled:cursor-not-allowed  duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="Sender's country" />
        </div>

        <div className=" grid gap-4 ">
          <label htmlFor="ticketId">Ticket ID</label>
          <input value={ticketId} type="text" id='ticketId' name='ticketId' className=' border-b border-neutral-900 disabled:text-neutral-500 disabled:cursor-not-allowed  duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="Sender's country" />
        </div>

        <div className=" grid gap-4 ">
          <label htmlFor="description">Ticket ID</label>
          <input value={description} type="text" id='description' name='description' className=' border-b border-neutral-900 disabled:text-neutral-500 disabled:cursor-not-allowed  duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="Sender's country" />
        </div>

        <div className=" grid gap-4 ">
          <label htmlFor="message">Message</label>
          <textarea type="text" id='message' name="message" className=' border-b border-neutral-900 disabled:text-neutral-500 disabled:cursor-not-allowed  duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' />
        </div>

        <div className="">
          <button disabled={disable} type='submit' className=' bg-blue-600 py-2 text-neutral-100 rounded-full px-4 hover:bg-blue-500 font-bold flex items-center gap-2 disabled:cursor-not-allowed disabled:bg-neutral-600 '>
            <FaCheck className=' text-2xl' />{disable ? <SpinnerMini /> : 'Send'}
          </button>

        </div>
      </form>
    </div>
  );
};
