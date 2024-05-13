import { CircleLineDecoration } from "../shared";
import { CardImg, CardText } from "./card-comps";

const AboutCard = ({title, description, img}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-12">
      <CardImg img={img} />
      <div className="text-center flex flex-col justify-center items-center gap-9">
        <CircleLineDecoration />
        <CardText title={title} description={description} />
      </div>
    </div>
  );
};

export default AboutCard;
