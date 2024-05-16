import Image from "next/image";

const MenuCardImg = ({img}) => {
  return (
    <div className="w-full">
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
