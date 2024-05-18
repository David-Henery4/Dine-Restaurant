import Image, { getImageProps } from "next/image";

const MenuCardImg = ({ img, imgs }) => {
  const common = {
    alt: "A highlight from a menu",
  };
  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    width: 1146,
    height: 720,
    src: imgs?.tablet
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 700,
    height: 840,
    src: imgs?.mobile,
  });
  return (
    <div className="w-full max-w-[340px] max-h-64 mx-auto smTab:max-w-32 smTab:max-h-24">
      <picture>
        <source media="(min-width: 660px)" srcSet={tablet} />
        <source media="(min-width: 320px)" srcSet={mobile} />
        <img {...rest} className="w-full h-auto" />
      </picture>
      {/* <Image
        src={img}
        alt="menu item"
        width={360}
        height={500}
        className="w-full h-auto"
      /> */}
    </div>
  );
};

export default MenuCardImg;
