import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaSearch } from 'react-icons/fa';
import { Form, useNavigate } from 'react-router-dom';
import ShuffleHero from './ShuffleHero';
import ChatBot from './ChatBot';

const Intro = () => {
 const navigate = useNavigate();

 const [alphaCode, setAlphaCode] = useState('');

 const { register, handleSubmit, formState: { errors } } = useForm();

 const onSubmit = data => {
  setAlphaCode(data.trackingId);
  navigate(`/${alphaCode}`);
 };


 return (
  <div className=" grid p-4 bg-[url('/8.jpg')] bg-center min-h-screen">
   <Form onSubmit={handleSubmit(onSubmit)} className=" flex justify-center items-center">

    <input {...register('trackingId', {
     minLength: 3, required: true
    })} type="text" placeholder="Input tracking ID / Alpha code" className="border-e-0 text-neutral-100 p-4 bg-slate-100 w-full sm:max-w-md lg:max-w-2xl outline-none bg-transparent border-2 font-semibold rounded-s-full" />
    <button type='submit' disabled={errors.trackingId} className=' bg-transparent border-2 rounded-e-full disabled:cursor-not-allowed cursor-pointer p-5 bg-neutral-100 text-neutral-100 border-s-0'>
     <FaSearch />
    </button>
   </Form>

   <div className=' text-center'>
    <ShuffleHero />
    <ChatBot />
   </div>
  </div>
 );
};

export default Intro;