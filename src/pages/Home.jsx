import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Slider from './slider.jsx'


const brandImages = [
  "https://toyfort.s3.ap-south-1.amazonaws.com/smartivity-8.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/scentos-2.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/electrobotic-9.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/chicco-3.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/lego-4.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/barbie-5.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/experience-1.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/hot-wheel-6.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/smiggle-7.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/fujifilm-10.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/nua-11.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/r-for-rabbit-18.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/funskool-12.png",
  "	https://toyfort.s3.ap-south-1.amazonaws.com/mustela-13.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/imc-toys-14.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/kriiddaank-15.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/imagi-make-16.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/step-2-17.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/joie-19.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/graco-20.png",

  ]

function Home() {

  const [startIndex, setStartIndex] = useState(0);

  const rightSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % brandImages.length);
  };

  const leftSlide = () => {
    setStartIndex((prevIndex) =>
      (prevIndex - 1 + brandImages.length) % brandImages.length
    );
  };
 

  const sliderImages = [];
  for (let i = 0; i < 6; i++) {
    sliderImages.push(brandImages[(startIndex + i) % brandImages.length]);
  }

  useEffect(()=>{

    const interval = setInterval(()=>{
      rightSlide()
    },4000)

    return () => clearInterval(interval)

  },[startIndex])
  
  
  return (

    
    <div className="p-4">

      <Slider/>

      <div>
        <h1 className="flex justify-center items-center font-bold text-2xl m-10 mt-20 font-sans tracking-widest" >SHOP BY FAMOUS BRAND</h1>

        <div className="flex flex-row m-4">

          <button onClick={leftSlide}><FontAwesomeIcon className="bg-slate-300 rounded-full p-2" icon={faCaretLeft} /></button>


          {/* Images */}

          <div className="flex">
            {sliderImages.map((img, index) => (
              <img
                key={index}
                className="w-48 h-48 m-5 rounded-2xl transition-transform duration-300"
                src={img}
                alt=''
              />
            ))}
          </div>

          <button  onClick={rightSlide}><FontAwesomeIcon className="bg-slate-300 rounded-full p-2" icon={faCaretRight} /></button>


        </div>

      </div>


      <h1 className="flex justify-center items-center font-bold text-2xl mt-20 font-sans tracking-widest">
        SHOP BY AGE
      </h1>

      <div className="flex flex-row">
        <img
          className="w-48 h-48 m-7 transform transition duration-200 hover:scale-110 cursor-pointer"
          src="https://toyfort.s3.ap-south-1.amazonaws.com/uploads/assets/1.png"
        />
        <img
          className="w-48 h-48 m-7 transform transition duration-200 hover:scale-110 cursor-pointer"
          src="https://toyfort.s3.ap-south-1.amazonaws.com/uploads/assets/2.png"
        />
        <img
          className="w-48 h-48 m-7 transform transition duration-200 hover:scale-110 cursor-pointer"
          src="https://toyfort.s3.ap-south-1.amazonaws.com/uploads/assets/3.png"
        />
        <img
          className="w-48 h-48 m-7 transform transition duration-200 hover:scale-110 cursor-pointer"
          src="https://toyfort.s3.ap-south-1.amazonaws.com/uploads/assets/4.png"
        />
        <img
          className="w-48 h-48 m-7 transform transition duration-200 hover:scale-110 cursor-pointer"
          src="https://toyfort.s3.ap-south-1.amazonaws.com/uploads/assets/5.png"
        />
        <img
          className="w-48 h-48 m-7 transform transition duration-200 hover:scale-110 cursor-pointer"
          src="https://toyfort.s3.ap-south-1.amazonaws.com/uploads/assets/6.png"
        />
      </div>

      <div className="w-full">
        <h1 className="flex justify-center items-center font-semibold text-xl font-sans bg-gray-100 m-10 pb-2 pt-2 border-r-4 cursor-pointer rounded-full border-2 border-gray-200 shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105 animate-fadeIn ">
          Special Prices, Premium Products, and Free Home Delivery PAN India -
          <span className="text-red-500">It's All Just a Click Away!</span>
        </h1>
      </div>
    </div>
  );
}

export default Home;

// <FontAwesomeIcon className="bg-slate-300 rounded-full p-2" icon={faCaretLeft} />