import { CircleLineDecoration } from "../shared";
import { CardImg, CardText } from "./card-comps";

const AboutCard = ({ title, description, imgSrcs }) => {
  //
  return (
    <div className="flex flex-col justify-center items-center gap-12 lgMob:gap-14">
      <CardImg imgSrcs={imgSrcs} />
      <div className="text-center flex flex-col justify-center items-center gap-9 lgMob:gap-10">
        <CircleLineDecoration />
        <CardText title={title} description={description} />
      </div>
    </div>
  );
};

export default AboutCard;
