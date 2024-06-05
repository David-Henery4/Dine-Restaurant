import { CircleLineDecoration } from "../shared";
import { CardImg, CardText } from "./card-comps";
import {
  PatternCurveTopRight,
  PatternCurveTopLeft,
  PatternLines,
} from "/public/assets/patterns";

const AboutCard = ({ title, description, imgSrcs, cardNum}) => {
  //
  return (
    <div className="relative flex flex-col justify-center items-center gap-12 lgMob:gap-14 lap:flex-row lap:gap-[90px] lap:last:flex-row-reverse group lgLap:gap-[125px]">
      {cardNum === 1 && 
        <PatternCurveTopRight className="hidden tab:block absolute right-1/2 top-[29%] lap:right-[38%] lap:top-[44%]" />
      }
      <CardImg imgSrcs={imgSrcs} cardNum={cardNum} />
      <div className="text-center flex flex-col justify-center items-center gap-9 lgMob:gap-10 lap:flex-1 lap:text-left lap:mt-[38px] lap:items-start lap:group-last:mt-0 lap:group-last:mb-[38px] lgLap:mt-[70px] lgLap:group-last:mt-0 lgLap:group-last:mb-[70px]">
        <CircleLineDecoration />
        <CardText title={title} description={description} />
      </div>
    </div>
  );
};

export default AboutCard;
