import { BodyText, Heading } from "../shared";

const HeaderText = () => {
  return (
    <div className="grid gap-6 mt-9">
      <Heading
        headingType="xl"
        theme="dark"
        className="text-[32px] leading-[40px] max-w-[230px] mx-auto"
      >
        Exquisite dining since 1989
      </Heading>
      <BodyText>
        Experience our seasonal menu in beautiful country surroundings. Eat the
        freshest produce from the comfort of our farmhouse.
      </BodyText>
    </div>
  );
};

export default HeaderText;