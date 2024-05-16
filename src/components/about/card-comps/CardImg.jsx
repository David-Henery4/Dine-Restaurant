import Image from "next/image"


const CardImg = ({ img }) => {
  return (
    <div className="w-full">
      <Image
        src={img}
        width={660}
        height={800}
        className="w-full h-auto"
        alt="The farm and relaxed surroundings in the country side where the restaurant is located."
      />
    </div>
  );
};

export default CardImg