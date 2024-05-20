

const CardImg = ({ imgSrcs }) => {
  const {mobile, tablet, desktop} = imgSrcs;
  //
  return (
    <div className="w-full max-w-96 mx-auto max-h-[469px] xtraSmTab:max-h-[360px] xtraSmTab:max-w-[573px] lap:h-full lap:flex-1 lap:min-h-[525px] lap:max-h-[720px] lap:max-w-[540px]">
      <picture>
        <source media="(min-width: 920px)" srcSet={desktop} />
        <source media="(min-width: 560px)" srcSet={tablet} />
        <source media="(min-width: 320px)" srcSet={mobile?.mobile} />
        <img
          {...mobile?.restOfMobValues}
          className="w-full h-full object-cover object-center"
        />
      </picture>
      {/* <Image
        src={img}
        width={660}
        height={800}
        className="w-full h-auto"
        alt="The farm and relaxed surroundings in the country side where the restaurant is located."
      /> */}
    </div>
  );
};

export default CardImg