import Image from "next/image";

const MenuCardImg = ({img}) => {
  return (
    <div className="w-full max-w-[340px] max-h-64 mx-auto smTab:max-w-32 smTab:max-h-24">
      <Image
        src={img}
        alt="menu item"
        width={360}
        height={500}
        className="w-full h-auto"
      />
    </div>
  );
};

export default MenuCardImg;
