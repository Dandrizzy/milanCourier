import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

const ShuffleHero = () => {
 return (
  <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
   <div>
    <span className="block mb-4 text-xs md:text-sm text-blue-400 font-medium">
     Better every day
    </span>
    <h3 className="text-4xl text-neutral-100 md:text-6xl font-semibold">
     Eagle Express Delivery
    </h3>
    <p className="text-base md:text-lg text-neutral-100 my-4 md:my-6">
     Track shipment / Find and ship a product using Alpha code
    </p>


    {/* <button className="bg-orange-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-orange-600 active:scale-95">
     Menu
    </button> */}
   </div>
   <ShuffleGrid />
  </section>
 );
};

const shuffle = (array) => {
 let currentIndex = array.length,
  randomIndex;

 while (currentIndex != 0) {
  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex--;

  [array[currentIndex], array[randomIndex]] = [
   array[randomIndex],
   array[currentIndex],
  ];
 }

 return array;
};

const squareData = [
 {
  id: 1,
  src: "/01.JPG",
 },
 {
  id: 2,
  src: "/02.JPG",
 },
 {
  id: 3,
  src: '/03.JPG'
 },
 {
  id: 4,
  src: '/04.JPG'
 },
 {
  id: 5,
  src: '/06.JPG'
 },
 {
  id: 6,
  src: '/07.JPG'
 },
 {
  id: 7,
  src: '/08.JPG'
 },
 {
  id: 8,
  src: '/09.JPG'
 },
 {
  id: 9,
  src: '/010.JPG'
 },
 {
  id: 10,
  src: '/011.JPG'
 },
 {
  id: 11,
  src: '/5.jpg'
 },
 {
  id: 12,
  src: '/05.jpg'
 },
 {
  id: 13,
  src: '/3.jpg'
 },
 {
  id: 14,
  src: '/8.jpg'
 },
 {
  id: 15,
  src: '/5.jpg'
 },
 {
  id: 16,
  src: '/12.jpg'
 },
];

const generateSquares = () => {
 return shuffle(squareData).map((sq) => (
  <motion.div
   key={sq.id}
   layout
   transition={{ duration: 1.5, type: "spring" }}
   className="w-full h-full"
   style={{
    backgroundImage: `url(${sq.src})`,
    backgroundSize: "cover",
   }}
  ></motion.div>
 ));
};

const ShuffleGrid = () => {
 const timeoutRef = useRef(null);
 const [squares, setSquares] = useState(generateSquares());
 const shuffleSquares = useCallback(() => {
  setSquares(generateSquares());

  timeoutRef.current = setTimeout(shuffleSquares, 3000);
 }, []);

 useEffect(() => {
  shuffleSquares();

  return () => clearTimeout(timeoutRef.current);
 }, [shuffleSquares]);


 return (
  <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
   {squares.map((sq) => sq)}
  </div>
 );
};

export default ShuffleHero;