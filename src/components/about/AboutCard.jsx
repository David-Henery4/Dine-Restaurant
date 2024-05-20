import { CircleLineDecoration } from "../shared";
import { CardImg, CardText } from "./card-comps";

const AboutCard = ({ title, description, imgSrcs }) => {
  //
  return (
    <div className="flex flex-col justify-center items-center gap-12 lgMob:gap-14 lap:flex-row lap:gap-[90px] lap:last:flex-row-reverse group">
      <CardImg imgSrcs={imgSrcs} />
      <div className="text-center flex flex-col justify-center items-center gap-9 lgMob:gap-10 lap:flex-1 lap:text-left lap:mt-[38px] lap:items-start lap:group-last:mt-0 lap:group-last:mb-[38px] lgLap:mt-[70px] lgLap:group-last:mt-0 lgLap:group-last:mb-[70px]">
        <CircleLineDecoration />
        <CardText title={title} description={description} />
      </div>
    </div>
  );
};

export default AboutCard;
