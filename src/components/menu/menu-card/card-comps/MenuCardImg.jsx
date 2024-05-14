import Image from "next/image";

const MenuCardImg = ({img}) => {
  return (
    <div>
      <Image
        src={img}
        alt="menu item"
        width={360}
        height={500}
        className="w-auto h-auto"
      />
    </div>
  );
};

export default MenuCardImg;
