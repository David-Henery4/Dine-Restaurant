import { Heading, BodyText } from "@/components/shared"

const MenuCardText = ({ title, description }) => {
  return (
    <div className="text-center">
      <Heading headingType="md" theme="dark">
        {title}
      </Heading>
      <BodyText className="mt-2">
        {description}
      </BodyText>
    </div>
  );
};

export default MenuCardText