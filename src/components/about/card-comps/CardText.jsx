import { BodyText, Heading } from "@/components/shared"

const CardText = ({ title, description }) => {
  return (
    <div>
      <Heading headingType="lg" className="text-[32px] leading-10">
        {title}
      </Heading>
      <BodyText theme="light" className="mt-3 lgMob:mt-7">
        {description}
      </BodyText>
    </div>
  );
};

export default CardText