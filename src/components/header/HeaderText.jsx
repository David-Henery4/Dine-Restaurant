import { BodyText, Heading } from "../shared";

const HeaderText = () => {
  return (
    <div className="grid gap-6 mt-9 smLap:mt-16 lap:mt-[153px] lap:gap-[10px]">
      <Heading
        headingType="xl"
        theme="dark"
        className="text-[32px] leading-[40px] max-w-[230px] mx-auto lgMob:text-5xl lgMob:leading-[64px] lgMob:-tracking-[0.6px] lgMob:max-w-[300px] smLap:text-[80px] smLap:leading-[80px] smLap:max-w-[508px] lap:ml-0"
      >
        Exquisite dining since 1989
      </Heading>
      <BodyText className="xtraSmTab:max-w-[573px] lap:ml-0 lap:max-w-[445px]">
        Experience our seasonal menu in beautiful country surroundings. Eat the
        freshest produce from the comfort of our farmhouse.
      </BodyText>
    </div>
  );
};

export default HeaderText;
