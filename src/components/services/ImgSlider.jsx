import Image, {getImageProps} from "next/image";
import SlideImg1 from "/public/images/homepage/mobile/family-gathering-mobile.jpg";
import SlideImg2 from "/public/images/homepage/mobile/family-gathering-mobile@2x.jpg";
//
import SlideImg1Tab from "/public/images/homepage/tablet/family-gathering-tablet.jpg";

const ImgSlider = () => {
  const defaultProps = { alt: "family-gathering" };
  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...defaultProps,
    src: SlideImg1Tab,
    width: 1146,
    height: 720,
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...defaultProps,
    src: SlideImg1,
    width: 660,
    height: 800,
  });
  //
  return (
    <div className="w-full">
      <picture>
        <source media="(min-width: 380px)" srcSet={tablet} />
        <source media="(min-width: 320px)" srcSet={mobile} />
        <img {...rest} style={{ width: "100%", height: "auto" }} />
      </picture>
      {/* <div>
        <Image
          src={SlideImg1}
          alt="family-gathering"
          width={660}
          height={800}
          className="h-auto w-full"
        />
      </div> */}
    </div>
  );
};

export default ImgSlider;
