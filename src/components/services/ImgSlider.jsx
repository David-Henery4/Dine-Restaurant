import Image, { getImageProps } from "next/image";
import SlideImg1 from "/public/images/homepage/mobile/family-gathering-mobile.jpg";
import SlideImg2 from "/public/images/homepage/mobile/family-gathering-mobile@2x.jpg";
//
import SlideImg2Tab from "/public/images/homepage/tablet/family-gathering-tablet@2x.jpg";
import SlideImg2Desk from "/public/images/homepage/desktop/family-gathering-desktop@2x.jpg";

const ImgSlider = () => {
  const defaultProps = { alt: "family-gathering" };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...defaultProps,
    src: SlideImg2Desk,
    width: 1100,
    height: 1220,
  });
  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...defaultProps,
    src: SlideImg2Tab,
    width: 1146,
    height: 720,
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...defaultProps,
    src: SlideImg2,
    width: 660,
    height: 800,
  });
  //
  return (
    <div className="w-full max-w-96 mx-auto max-h-[469px] xtraSmTab:max-h-[360px] xtraSmTab:max-w-[573px] lgLap:h-[600px] lgLap:max-w-none lgLap:max-h-none lgLap:col-start-1 lgLap:col-end-7">
      <picture>
        <source media="(min-width: 1060px)" srcSet={desktop} />
        <source media="(min-width: 560px)" srcSet={tablet} />
        <source media="(min-width: 320px)" srcSet={mobile} />
        <img
          {...rest}
          className="w-full h-auto object-cover object-center lgLap:h-full"
        />
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
