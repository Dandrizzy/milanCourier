import { useForm } from 'react-hook-form';
import { FaArrowLeftLong, FaCheck } from 'react-icons/fa6';
import { MdCancel } from 'react-icons/md';
import { Form, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCreateApi } from '../Hooks/Create/useCreateApi';
import { useCreate } from '../Hooks/Create/useCreate';
import Spinner from '../ui/Spinner';
const CreateForm = () => {

 const navigate = useNavigate();

 const { create: createFn } = useCreateApi({ key: 'ticket' });
 const { create, isCreating } = useCreate({ key: ['ticket'], fn: createFn });


 const [receiveDate, setReceiveDate] = useState('');
 const [deliveryDate, setDeliveryDate] = useState('');

 const { register, handleSubmit, formState: { errors }, reset } = useForm();

 if (isCreating) return <Spinner />;

 const disable = errors.name || errors.sCountry || errors.sAddress || errors.sPhone || errors.sEmail || errors.rName || errors.rCountry || errors.rAddress || errors.rPhone || errors.rEmail || errors.description || errors.weight;


 const onSubmit = data => {
  create({ ...data, receiveDate, deliveryDate, author: 'milan' }, {
   onSuccess: () => {
    reset();
    navigate(`/dashboard`);
   }
  });
 };


 return (
  <div className=" text-neutral-900 p-4">

   <Form onSubmit={handleSubmit(onSubmit)}   >

    <div className=' grid sm:grid-cols-3 sm:gap-x-4 gap-x-8 gap-y-16'>

     <div className=" grid gap-4 ">
      <label htmlFor="sName">Sender&apos;s name:</label>
      <input type="text" id='sName' {...register('name', { required: true })} className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="Sender's name" />
     </div>

     <div className=" grid gap-4 ">
      <label htmlFor="sCountry">Sender&apos;s country:</label>
      <input {...register('sCountry', { required: true })} type="text" id='sCountry' className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="Sender's country" />
     </div>

     <div className=" grid gap-4 ">
      <label htmlFor="sAddress">Sender&apos;s address:</label>
      <input {...register('sAddress', { required: true })} type="text" id='sAddress' className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="Sender's address" />
     </div>

     <div className=" grid gap-4 ">
      <label htmlFor="sPhone">Sender&apos;s phone:</label>
      <input {...register('sPhone', { required: true })} type="text" id='sPhone' className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="Sender's phone" />
     </div>

     <div className=" grid gap-4 ">
      <label htmlFor="sEmail">Sender&apos;s email:</label>
      <input {...register('sEmail', { required: true })} type="email" id='sEmail' className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="Sender's email" />
     </div>

     <div className=" grid gap-4 ">
      <label htmlFor="rName">Recipient name:</label>
      <input {...register('rName', { required: true })} type="text" id='rName' className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="Recipient name" />
     </div>

     <div className=" grid gap-4 ">
      <label htmlFor="rCountry">Recipient country:</label>
      <input {...register('rCountry', { required: true })} type="text" id='rCountry' className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="Recipient country" />
     </div>

     <div className=" grid gap-4 ">
      <label htmlFor="rAddress">Recipient address:</label>
      <input {...register('rAddress', { required: true })} type="text" id='rAddress' className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="Recipient address" />
     </div>

     <div className=" grid gap-4 ">
      <label htmlFor="rPhone">Recipient phone:</label>
      <input {...register('rPhone', { required: true })} type="text" id='rPhone' className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="Recipient phone" />
     </div>

     <div className=" grid gap-4 ">
      <label htmlFor="rEmail">Recipient email:</label>
      <input {...register('rEmail', { required: true })} type="email" id='rEmail' className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="Recipient email" />
     </div>

     <div className=" grid gap-4 ">
      <label htmlFor="description">Description:</label>
      <input {...register('description', { required: true })} type="text" id='description' className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="Description" />
     </div>

     <div className=" grid gap-4 ">
      <label htmlFor="weight">Weight:</label>
      <input {...register('weight', { required: true })} type="number" id='weight' className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="Weight in (kg)" />
     </div>

     <div className=" grid gap-4 ">
      <label htmlFor="amount">Amount:</label>
      <input {...register('amount', { required: true })} type="number" id='weight' className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="Amount in ($)" />
     </div>

     <div className=" grid gap-4 ">
      <label htmlFor="deliveryDate">Status:</label>
      <input {...register('status', { required: true })} type="text" id='status' className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="Status" />
     </div>

     <div className="grid gap-4">
      <label htmlFor="date">Set start date:</label>
      <input className="focus:border-blue-500 border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none border-b p-2" type="datetime-local" value={receiveDate
       // .toISOString().slice(0, -8)
      } onChange={e => setReceiveDate(new Date(e.target.value).toISOString().slice(0, -8))} />
     </div>

     <div className="grid gap-4">
      <label htmlFor="date">Set end date:</label>
      <input className="focus:border-blue-500 border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none border-b p-2" type="datetime-local" value={deliveryDate
       // .toISOString().slice(0, -8)
      } onChange={e => setDeliveryDate(new Date(e.target.value).toISOString().slice(0, -8))} />
     </div>

    </div>

    <div className=" py-10 flex justify-center items-center gap-3 sm:gap-8">

     <button disabled={disable || isCreating} type='submit' className=' bg-blue-600 py-2 text-neutral-100 rounded-full px-4 hover:bg-blue-500 font-bold flex items-center gap-2 disabled:cursor-not-allowed disabled:bg-neutral-600'>
      <FaCheck className=' text-2xl' />Submit
     </button>

     <button disabled={isCreating} type='reset' className=' bg-yellow-500 py-2 text-neutral-100 rounded-full px-4 hover:bg-yellow-400 font-bold flex items-center gap-2'><MdCancel className=' text-2xl' />Clear</button>

     <Link type='button' to={-1} className=' bg-neutral-600 py-2 text-neutral-100 rounded-full px-4 hover:bg-neutral-500 font-bold flex items-center gap-2 '>Back <FaArrowLeftLong className=' text-2xl' /></Link>

    </div>

   </Form>
  </div>
 );
};

export default CreateForm;