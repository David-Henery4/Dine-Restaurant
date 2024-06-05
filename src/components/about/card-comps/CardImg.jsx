import { PatternLines } from "../../../../public/assets/patterns";

const CardImg = ({ imgSrcs, cardNum }) => {
  const { mobile, tablet, desktop } = imgSrcs;
  //
  return (
    <div className="relative w-full max-w-96 mx-auto max-h-[469px] xtraSmTab:max-h-[360px] xtraSmTab:max-w-[573px] lap:h-full lap:flex-1 lap:min-h-[525px] lap:max-h-[720px] lap:max-w-[540px] shadow-2xl">
      {cardNum === 2 && (
        <PatternLines className="hidden tab:block absolute bottom-[15%] -right-[10%] lap:bottom-1/2 lap:-right-1/4" />
      )}
      <picture>
        <source media="(min-width: 920px)" srcSet={desktop} />
        <source media="(min-width: 560px)" srcSet={tablet} />
        <source media="(min-width: 320px)" srcSet={mobile?.mobile} />
        <img
          {...mobile?.restOfMobValues}
          className="w-full h-full object-cover object-center"
        />
      </picture>
    </div>
  );
};

export default CardImg