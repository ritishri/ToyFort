

import { Carousel } from "flowbite-react";

const brandImages = [
  "https://toyfort.s3.ap-south-1.amazonaws.com/upload_test/slider_66f6be1a7f4349-76985966-11120591.webp",
  "https://toyfort.s3.ap-south-1.amazonaws.com/upload_test/slider_66f2885a1d9360-71514268-52607569.webp",
  "https://toyfort.s3.ap-south-1.amazonaws.com/upload_test/slider_66f1a89f900df4-71886973-81790150.webp",
  "https://toyfort.s3.ap-south-1.amazonaws.com/upload_test/slider_66f1a89f900df4-71886973-81790150.webp",
  "https://toyfort.s3.ap-south-1.amazonaws.com/upload_test/slider_66f1a89f900df4-71886973-81790150.webp",
  "https://toyfort.s3.ap-south-1.amazonaws.com/upload_test/slider_66f1a89f900df4-71886973-81790150.webp",
  "https://toyfort.s3.ap-south-1.amazonaws.com/upload_test/slider_66f1a89f900df4-71886973-81790150.webp",
  "https://toyfort.s3.ap-south-1.amazonaws.com/upload_test/slider_66f1a89f900df4-71886973-81790150.webp",
  "https://toyfort.s3.ap-south-1.amazonaws.com/upload_test/slider_66f6be1a7f4349-76985966-11120591.webp",
];

// **Grouping images into sets of 3**
const groupedSlides = [];
for (let i = 0; i < brandImages.length; i += 3) {
  groupedSlides.push(brandImages.slice(i, i + 3));
}

export default function Slider() {
  return (
    <div className="sm:h-72 md:h-80 lg:h-96 bg-slate-200 p-3">
      <Carousel slideInterval={3000} indicators={true} leftControl="❮" rightControl="❯">
        {groupedSlides.map((group, index) => (
          <div key={index} className="flex justify-center rounded-lg gap-4">
            {group.map((img, imgIndex) => (
              <img
                key={imgIndex}
                className="w-2/6 h-96 shadow-md"
                src={img}
                alt=''
              />
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
}
