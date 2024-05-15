import { Heading, BodyText } from "@/components/shared"

const MenuCardText = ({ title, description }) => {
  return (
    <div className="text-center">
      <Heading headingType="md" theme="dark">
        {title}
      </Heading>
      <BodyText className="mt-2 lgMob:text-base">
        {description}
      </BodyText>
    </div>
  );
};

export default MenuCardText