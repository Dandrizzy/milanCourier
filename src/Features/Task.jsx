import { FaClock } from "react-icons/fa";
import { FaCloudMoon, FaDelicious, FaTruckFast } from "react-icons/fa6";
import { GiStack } from "react-icons/gi";

const Task = () => {
 return (
  <div className=" p-4 grid gap-8 bg-red-50/30 text-slate-900">

   <div className="">
    <h1 className=" text-center lg:text-4xl text-2xl font-semibold">
     We take the <br />
     <span className=" text-blue-500 ">burden of logistics off you.</span>
    </h1>
   </div>

   <div className="grid lg:grid-cols-2 gap-8">


    <div className=" bg-[url('/3.jpg')] bg-cover shadow-md border-t-2 px-4 py-8">
     <div className="backdrop-blur-2xl text-neutral-50 font-bold p-4 max-w-md backdrop-invert-0 mx-auto">
      <FaTruckFast className=" text-4xl text-blue-500" />
      <h1 className=" py-4 font-semibold text-xl">Fast & On Time Delivery</h1>
      <p>We also understand the importance of fast and on-time delivery for our clients. Our mission is to provide reliable and efficient shipping services that meet the expectations of our clients and exceed industry standards. To achieve fast and on-time delivery, we utilize the latest technologies and employ highly skilled professionals who are trained to handle shipments of all sizes and types. We work with a network of trusted partners and carriers to ensure that we can deliver to any location in a timely manner.</p>
     </div>
    </div>

    <div className=" shadow-md border-t-2 px-4 py-8 bg-cover bg-[url('/air.jpg')] ">
     <div className=" mx-auto backdrop-blur-2xl text-neutral-50 font-bold p-4 max-w-md backdrop-invert-0">

      <FaDelicious className=" text-4xl text-blue-500" />
      <h1 className=" py-4 font-semibold text-xl">100% Safe Delivery</h1>
      <p>We ensure the safe delivery of packages is my top priority. We take every possible measure to ensure that the packages we deliver arrive at their destination safely and intact.To achieve 100% safe delivery, we use high-quality packaging materials to protect the items from damage during transit. We also make sure to handle the packages carefully and avoid any rough handling that could cause harm.</p>
     </div>
    </div>


    <div className="shadow-md border-t-2 px-4 py-8 bg-cover bg-[url('/12.jpg')] ">

     <div className=" mx-auto backdrop-blur-2xl text-neutral-50 font-bold p-4 max-w-md backdrop-invert-0">

      <GiStack className=" text-4xl text-blue-500" />
      <h1 className=" py-4 font-semibold text-xl">Social Commerce</h1>
      <p>Experience a whole new level of excitement with our courier services as we seamlessly blend social commerce into your delivery journey, allowing you to engage in real-time tracking, share unboxing moments, and build a vibrant community, enhancing your overall brand experience! </p>
     </div>

    </div>


    <div className="bg-cover bg-[url('/6.jpg')] shadow-md border-t-2 px-4 py-8">
     <div className=" mx-auto backdrop-blur-2xl text-neutral-50 font-bold p-4 max-w-md backdrop-invert-0">
      <FaCloudMoon className=" text-4xl text-blue-500" />
      <h1 className=" py-4 font-semibold text-xl">Weather Insurance</h1>
      <p>we understand that weather can be a significant factor in the safe and timely delivery of shipments. Even with careful planning, unexpected weather events can impact delivery schedules and potentially cause damage to shipments.To address this issue, we offer weather insurance as an additional option to our clients. This insurance covers losses or damages resulting from unforeseen weather conditions such as hurricanes, floods, heavy snow, and other severe weather events.</p>
     </div>
    </div>

    <div className="bg-cover bg-[url('/05.jpg')] shadow-md border-t-2 px-4 py-8">
     <div className=" mx-auto backdrop-blur-2xl text-neutral-50 font-bold p-4 max-w-md backdrop-invert-0">
      <FaClock className=" text-4xl text-blue-500" />
      <h1 className=" py-4 font-semibold text-xl">Latest Technology</h1>
      <p>At EagleExpress, we&apos;re thrilled to introduce a revolutionary chapter in courier services tailored just for you. Picture this-real-time tracking at your fingertips, swift drone deliveries, and personalized experiences driven by state-of-the-art technology.</p>
     </div>
    </div>

   </div>

  </div>
 );
};

export default Task;