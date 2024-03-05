import { useForm } from 'react-hook-form';
import { FaArrowLeftLong, FaCheck } from 'react-icons/fa6';
import { MdCancel } from 'react-icons/md';
import { Form, Link, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import Spinner from '../ui/Spinner';

import { useGetSpecific } from '../Hooks/GetSpecific/useGetSpecific';
import { useGetById } from '../Hooks/GetSpecific/useGetById';
import { useEditTicket } from '../Hooks/Edit/useEditTicket';
const EditTicket = () => {




 const { formId } = useParams();

 const navigate = useNavigate();



 const { isEditing, editTicket: edit } = useEditTicket();

 const { getSpecific } = useGetById({ key: 'ticket', id: formId });
 const { data, isFetching } = useGetSpecific({ fn: getSpecific, key: ['ticket', formId] });



 const [receiveDate, setReceiveDate] = useState(data?.data?.receiveDate);
 const [deliveryDate, setDeliveryDate] = useState(data?.data?.deliveryDate);

 const { register, handleSubmit, formState: { errors }, reset } = useForm();

 if (isEditing || isFetching || data.data === undefined) return <Spinner />;

 const { name, rAddress, rCountry, rEmail, rName, rPhone, sAddress, sCountry, sEmail, sPhone, weight, description, amount, id, ticketId, receiveDate: rDate, deliveryDate: dDate, status } = data.data;


 const disable = errors.name || errors.sCountry || errors.sAddress || errors.sPhone || errors.sEmail || errors.rName || errors.rCountry || errors.rAddress || errors.rPhone || errors.rEmail || errors.description || errors.weight;


 const onSubmit = data => {

  edit({ obj: { ...data, receiveDate, deliveryDate }, id }, {
   onSuccess: () => {
    reset();
    navigate(`/ticket/${ticketId}`);
   }
  });
 };


 return (
  <div className=" text-neutral-900 p-4">

   <Form onSubmit={handleSubmit(onSubmit)}>

    <div className=' grid sm:grid-cols-3 gap-x-8 gap-y-8 sm:gap-y-16'>

     <div className=" grid gap-2 ">
      <label htmlFor="sName">Sender&apos;s name:</label>
      <input defaultValue={name} type="text" id='sName' {...register('name', { required: true })} className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="Sender's name" />
     </div>

     <div className=" grid gap-2 ">
      <label htmlFor="sCountry">Sender&apos;s country:</label>
      <input {...register('sCountry', { required: true })} defaultValue={sCountry} type="text" id='sCountry' className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="Sender's country" />
     </div>

     <div className=" grid gap-2 ">
      <label htmlFor="sAddress">Sender&apos;s address:</label>
      <input {...register('sAddress', { required: true })} defaultValue={sAddress} type="text" id='sAddress' className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="Sender's address" />
     </div>

     <div className=" grid gap-2 ">
      <label htmlFor="sPhone">Sender&apos;s phone:</label>
      <input {...register('sPhone', { required: true })} defaultValue={sPhone} type="text" id='sPhone' className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="Sender's phone" />
     </div>

     <div className=" grid gap-2 ">
      <label htmlFor="sEmail">Sender&apos;s email:</label>
      <input {...register('sEmail', { required: true })} defaultValue={sEmail} type="email" id='sEmail' className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="Sender's email" />
     </div>

     <div className=" grid gap-2 ">
      <label htmlFor="rName">Recipient name:</label>
      <input {...register('rName', { required: true })} defaultValue={rName} type="text" id='rName' className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="Recipient name" />
     </div>

     <div className=" grid gap-2 ">
      <label htmlFor="rCountry">Recipient country:</label>
      <input {...register('rCountry', { required: true })} defaultValue={rCountry} type="text" id='rCountry' className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="Recipient country" />
     </div>

     <div className=" grid gap-2 ">
      <label htmlFor="rAddress">Recipient address:</label>
      <input {...register('rAddress', { required: true })} defaultValue={rAddress} type="text" id='rAddress' className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="Recipient address" />
     </div>

     <div className=" grid gap-2 ">
      <label htmlFor="rPhone">Recipient phone:</label>
      <input {...register('rPhone', { required: true })} defaultValue={rPhone} type="text" id='rPhone' className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="Recipient phone" />
     </div>

     <div className=" grid gap-2 ">
      <label htmlFor="rEmail">Recipient email:</label>
      <input {...register('rEmail', { required: true })} defaultValue={rEmail} type="email" id='rEmail' className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="Recipient email" />
     </div>

     <div className=" grid gap-2 ">
      <label htmlFor="description">Recipient description:</label>
      <input {...register('description', { required: true })} defaultValue={description} type="text" id='description' className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="Recipient description" />
     </div>

     <div className=" grid gap-2 ">
      <label htmlFor="weight">Recipient weight:</label>
      <input {...register('weight', { required: true })} defaultValue={weight} type="number" id='weight' className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="Weight in (kg)" />
     </div>

     <div className=" grid gap-2 ">
      <label htmlFor="amount">Amount:</label>
      <input {...register('amount', { required: true, })} defaultValue={amount} type="number" id='amount' className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="Amount ($)" />
     </div>

     <div className=" grid gap-4 ">
      <label htmlFor="deliveryDate">Status:</label>
      <input {...register('status', { required: true })} type="text" id='status' className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="Status" defaultValue={status} />
     </div>

     <div className="grid gap-2">
      <label htmlFor="date">Set start date:</label>
      <input className="focus:border-blue-500 border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none border-b p-2" type="datetime-local" defaultValue={receiveDate === undefined ? rDate : receiveDate
      } onChange={e => setReceiveDate(new Date(e.target.value).toISOString().slice(0, -8))} />
     </div>

     <div className="grid gap-2">
      <label htmlFor="date">Set end date:</label>
      <input className="focus:border-blue-500 border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none border-b p-2" type="datetime-local" defaultValue={deliveryDate === undefined ? dDate : deliveryDate
      } onChange={e => setDeliveryDate(new Date(e.target.value).toISOString().slice(0, -8))} />
     </div>

    </div>

    <div className=" py-10 flex justify-center items-center gap-2 sm:gap-8">

     <button disabled={disable || isEditing} type='submit' className=' bg-blue-600 py-2 text-neutral-100 rounded-full px-4 hover:bg-blue-500 font-bold flex items-center gap-2 disabled:cursor-not-allowed disabled:bg-neutral-600'>
      Submit <FaCheck className=' text-2xl' />
     </button>

     <button disabled={isEditing} type='reset' className=' bg-yellow-500 py-2 text-neutral-100 rounded-full px-4 hover:bg-yellow-400 font-bold flex items-center gap-2'>Clear <MdCancel className=' text-2xl' /></button>

     <Link type='button' to={-1} className=' bg-neutral-600 py-2 text-neutral-100 rounded-full px-4 hover:bg-neutral-500 font-bold flex items-center gap-2 '>Back <FaArrowLeftLong className=' text-2xl' /></Link>

    </div>

   </Form>
  </div>
 );
};

export default EditTicket;