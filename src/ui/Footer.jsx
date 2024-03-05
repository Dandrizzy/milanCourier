import { FaPhone } from 'react-icons/fa6';
import { MdMail } from 'react-icons/md';

const Footer = () => {
 return (
  <div id='contact' className=" bg-blue-700  p-4 text-neutral-100">

   <div className="max-w-4xl grid gap-6 sm:flex sm:justify-between mx-auto">

    <div className=" gap-2 grid">
     <div className=" flex gap-2">
      <strong>
       &copy; {new Date().getFullYear()}
      </strong>
      <span>
       <strong>EagleExpress</strong>
      </span>
     </div>
     <div className="">
      <strong>Services</strong>
      <ul>
       <li>Air Fright</li>
       <li>Export & Import</li>
       <li>Transportation</li>
       <li>Consulting Services</li>
       <li>Local Moving</li>
       <li>Road Freight</li>
      </ul>
     </div>
    </div>

    <div className="">
     <strong>Company</strong>
     <ul className=' pt-2 grid gap-2'>
      <li>Eagle Express</li>
      <li>Courier</li>
      <li>Logistics</li>
     </ul>
    </div>

    <div className=" ">
     <strong>Connect with us</strong>
     <ul className=' pt-2 flex  gap-6'>
      <li><a href="tel:+12192760111"><FaPhone /></a></li>
      <li><a href="mailto:EagleExpresses@gmail.com"><MdMail /></a></li>
     </ul>
     <img src="/veh.png" alt="Lgo" className=" h-20 mx-auto mt-8 bg-neutral-100 rounded-md p-1" />
    </div>
   </div>
  </div>
 );
};

export default Footer;