import Image from "next/image";
import SlideImg1 from "/public/images/homepage/mobile/family-gathering-mobile.jpg";
import SlideImg2 from "/public/images/homepage/mobile/family-gathering-mobile@2x.jpg";

const ImgSlider = () => {
  return (
    <div className="w-full">
      <div>
        <Image
          src={SlideImg1}
          alt="family-gathering"
          width={660}
          height={800}
          className="h-auto w-auto"
        />
      </div>
    </div>
  );
};

export default ImgSlider;
