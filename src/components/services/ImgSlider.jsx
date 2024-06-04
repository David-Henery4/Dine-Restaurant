import { getImageProps } from "next/image";

const ImgSlider = ({ activeTabObject }) => {
  const {
    props: { srcSet: desktop },
  } = getImageProps({...activeTabObject?.desktopProps, alt: activeTabObject?.alt});
  const {
    props: { srcSet: tablet },
  } = getImageProps({...activeTabObject?.tabletProps,alt: activeTabObject?.alt});
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({...activeTabObject?.mobileProps, alt:activeTabObject?.alt});
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
          alt={activeTabObject?.alt}
        />
      </picture>
    </div>
  );
};

export default ImgSlider;
