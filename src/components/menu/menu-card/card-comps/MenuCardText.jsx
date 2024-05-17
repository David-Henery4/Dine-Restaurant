import { Heading, BodyText } from "@/components/shared"

const MenuCardText = ({ title, description }) => {
  return (
    <div className="text-center smTab:text-left smTab:flex-1">
      <Heading headingType="md" theme="dark">
        {title}
      </Heading>
      <BodyText className="mt-2 max-w-80 lgMob:text-base smTab:mx-0 smTab:max-w-96">
        {description}
      </BodyText>
    </div>
  );
};

export default MenuCardText