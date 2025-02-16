import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Slider from "./slider.jsx";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
];

const categories = [
  {
    src: "https://toyfort.s3.ap-south-1.amazonaws.com/img/Art-&-Craft-caraousal-category-banner.webp",
    title: "Art & Craft",
  },
  {
    src: "https://toyfort.s3.ap-south-1.amazonaws.com/img/Action-Figure-caraousal-category-banner.webp",
    title: "Action Figures",
  },
  {
    src: "https://toyfort.s3.ap-south-1.amazonaws.com/img/Kitchen-set-caraousal-category-banner.webp",
    title: "Kitchen Sets",
  },
  {
    src: "https://toyfort.s3.ap-south-1.amazonaws.com/img/Educational-Toys-caraousal-category-banner.webp",
    title: "Educational Toys",
  },
  {
    src: "https://toyfort.s3.ap-south-1.amazonaws.com/img/Blocks-&-Building-Sets-caraousal-category-banner.webp",
    title: "Blocks & Building Sets",
  },
  {
    src: "https://toyfort.s3.ap-south-1.amazonaws.com/img/Doll-&-Doll-Houses-caraousal-category-banner.webp",
    title: "Doll & Doll Houses",
  },
  {
    src: "https://toyfort.s3.ap-south-1.amazonaws.com/img/Rideon-caraousal-category-banner.webp",
    title: "Rideon",
  },
  {
    src: "https://toyfort.s3.ap-south-1.amazonaws.com/img/Trampoline-caraousal-category-banner.webp",
    title: "Trampoline",
  },
];



function Home() {


  const [startIndex, setStartIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const rightSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % brandImages.length);
  };

  const leftSlide = () => {
    setStartIndex(
      (prevIndex) => (prevIndex - 1 + brandImages.length) % brandImages.length
    );
  };

  const sliderImages = [];
  for (let i = 0; i < 6; i++) {
    sliderImages.push(brandImages[(startIndex + i) % brandImages.length]);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      rightSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [startIndex]);

  return (
    <div className="p-4">
      <Slider />

      {/* Shop By Brand */}

      <div>
        <h1 className="flex justify-center items-center font-bold text-2xl m-10 mt-20 font-sans tracking-widest">
          SHOP BY FAMOUS BRAND
        </h1>

        <div className="flex flex-row m-4">
          <button onClick={leftSlide}>
            <FontAwesomeIcon
              className="bg-slate-300 rounded-full p-2"
              icon={faCaretLeft}
            />
          </button>

          {/* Images */}

          <div className="flex">
            {sliderImages.map((img, index) => (
              <img
                key={index}
                className="w-48 h-48 m-5 rounded-2xl transition-transform duration-300"
                src={img}
                alt=""
              />
            ))}
          </div>

          <button onClick={rightSlide}>
            <FontAwesomeIcon
              className="bg-slate-300 rounded-full p-2"
              icon={faCaretRight}
            />
          </button>
        </div>
      </div>

      {/* Shop by age */}

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

      {/* SPecial Price */}

      <div className="w-full">
        <h1 className="flex justify-center items-center font-semibold text-xl font-sans bg-gray-100 m-10 pb-2 pt-2 border-r-4 cursor-pointer rounded-full border-2 border-gray-200 shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105 animate-fadeIn ">
          Special Prices, Premium Products, and Free Home Delivery PAN India -
          <span className="text-red-500">It's All Just a Click Away!</span>
        </h1>
      </div>

      <div className="flex flex-row m-3">
        <div className="relative w-80 h-64 m-5 border-2 transition hover:scale-110 border-gray-200 rounded-lg overflow-hidden group">
          <img
            className="w-full h-full rounded-lg transition duration-200 hover:scale-110 transform "
            src="https://toyfort.s3.ap-south-1.amazonaws.com/uploads/assets/Toys_25_off.png"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center font-bold py-2 opacity-0 group-hover:opacity-90 transition-opacity duration-300 tracking-wider">
            UP TO 25% OFF
          </div>
        </div>

        <div className="relative w-80 h-64 transition hover:scale-110 m-5 border-2 border-gray-200 rounded-lg overflow-hidden group">
          <img
            className="w-full h-full rounded-lg transition ease-in-out hover:scale-110"
            src="https://toyfort.s3.ap-south-1.amazonaws.com/uploads/assets/Metashot_35_off.png"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center font-bold py-2 opacity-0 group-hover:opacity-90 transition-opacity duration-300 tracking-wider">
            UP TO 35% OFF
          </div>
        </div>

        <div className="relative w-80 h-64 m-5 transition hover:scale-110 border-2 border-gray-200 rounded-lg overflow-hidden group">
          <img
            className="w-full h-full rounded-lg transition duration-200 hover:scale-110 transform "
            src="https://toyfort.s3.ap-south-1.amazonaws.com/uploads/assets/Headphone_45_off.png"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center font-bold py-2 opacity-0 group-hover:opacity-90 transition-opacity duration-300 tracking-wider">
            UP TO 45% OFF
          </div>
        </div>

        <div className="relative w-80 h-64 m-5 transition hover:scale-110 border-2 border-gray-200 rounded-lg overflow-hidden group">
          <img
            className="w-full h-full rounded-lg transition duration-200 hover:scale-110 transform "
            src="https://toyfort.s3.ap-south-1.amazonaws.com/uploads/assets/Bags_55_off.png"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center font-bold py-2 opacity-0 group-hover:opacity-90 transition-opacity duration-300 tracking-wider">
            UP TO 55% OFF
          </div>
        </div>
      </div>

      {/* Shop by trending category */}

      <h1 className="flex justify-center items-center font-bold text-2xl mt-20 mb-10 font-sans tracking-widest">
        SHOP BY TRENDING CATEGORY
      </h1>

      <div className="flex flex-wrap justify-center">
        <div className="flex-33.3% max-w-[33.3%] p-1">
          <a href="#">
            <img src="https://toyfort.s3.ap-south-1.amazonaws.com/img/Art-&-Craft-caraousal-category-banner.webp" />
          </a>
          <a href="#">
            <img
              className="pt-2"
              src="https://toyfort.s3.ap-south-1.amazonaws.com/img/Action-Figure-caraousal-category-banner.webp"
            />
          </a>
        </div>

        <div className="flex-33.3% max-w-[33.3%] p-1">
          <a href="#">
            <img src="https://toyfort.s3.ap-south-1.amazonaws.com/img/Educational-Toys-caraousal-category-banner.webp" />
          </a>
          <a href="#">
            <img
              className="pt-2"
              src="https://toyfort.s3.ap-south-1.amazonaws.com/img/Blocks-&-Building-Sets-caraousal-category-banner.webp"
            />
          </a>
        </div>

        <div className="flex-33.3% max-w-[33.3%] p-1">
          <a href="#">
            <img src="https://toyfort.s3.ap-south-1.amazonaws.com/img/Doll-&-Doll-Houses-caraousal-category-banner.webp" />
          </a>

          <a href="#">
            <img
              className="pt-2"
              src="https://toyfort.s3.ap-south-1.amazonaws.com/img/Rideon-caraousal-category-banner.webp"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="flex-50% max-w-50% p-1">
          <a>
            <img src="https://toyfort.s3.ap-south-1.amazonaws.com/img/Kitchen-set-caraousal-category-banner.webp" />
          </a>
        </div>

        <div className="flex-50% max-w-50% p-1">
          <a>
            <img src="https://toyfort.s3.ap-south-1.amazonaws.com/img/Trampoline-caraousal-category-banner.webp" />
          </a>
        </div>
      </div>

      {/* Outdoor Play For Kids */}

      <div className="min-w-[769px]">
        <div className="flex justify-center items-center font-bold text-2xl mt-20 mb-10 font-sans tracking-widest">
          <h1>OUTDOOR PLAY FOR KIDS</h1>
        </div>

        <a>
          <img
            className="w-full p-4"
            src="https://toyfort.s3.ap-south-1.amazonaws.com/img/OutdoorPlay/Outdoor-Play-Toy-Fort-Banner.webp"
          />
        </a>

        <div className="w-full">
          <div className="flex flex-row pt-0 ">
            <div className="ml-20 mr-32 group">
              <a href="#">
                <img
                  className=""
                  src="https://toyfort.s3.ap-south-1.amazonaws.com/img/OutdoorPlay/Play-House.webp"
                />
                <h6 className="text-center group-hover:text-red-600">
                  Play House
                </h6>
              </a>
            </div>

            <div className="mr-32 group">
              <a href="#">
                <img
                  className=""
                  src="https://toyfort.s3.ap-south-1.amazonaws.com/img/OutdoorPlay/Battery-Ride-On.webp"
                />
                <h6 className="text-center group-hover:text-red-600">
                  Battery Ride On
                </h6>
              </a>
            </div>

            <div className="mr-32 group">
              <a href="#">
                <img
                  className=""
                  src="https://toyfort.s3.ap-south-1.amazonaws.com/img/OutdoorPlay/Slides-and-Swings.webp"
                />
                <h6 className="text-center group-hover:text-red-600">
                  Sliding and Swings
                </h6>
              </a>
            </div>

            <div className="group">
              <a href="#">
                <img
                  className=""
                  src="https://toyfort.s3.ap-south-1.amazonaws.com/img/OutdoorPlay/Sand-Water-Table.webp"
                />
                <h6 className="text-center group-hover:text-red-600">
                  Sand water Table
                </h6>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}

      


    </div>
  );
}

export default Home;

