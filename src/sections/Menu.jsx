import { BodyText, Heading, CircleLineDecoration } from "@/components/shared";
import MenuCardContainer from "@/components/menu/MenuCardContainer";

const Menu = () => {
  return (
    <section className="w-full col-start-1 col-end-13 pt-[72px] pb-[102px] bg-codGray grid grid-cols-mob lgMob:grid-cols-tab lgMob:py-24 lgLap:pt-[262px] lgLap:pb-[120px]">
      <div className="w-full col-start-2 col-end-12 flex flex-col justify-center items-center gap-[85px] lgMob:gap-14 smTab:col-start-3 smTab:col-end-11 lgLap:flex-row lgLap:col-start-2 lgLap:col-end-12 lgLap:items-start lgLap:gap-[125px]">

        <div className="text-center lgLap:text-left lgLap:flex-[2] lgLap:grid lgLap:justify-items-start">
          <CircleLineDecoration />
          <Heading
            headingType="lg"
            theme="dark"
            className="text-[32px] leading-10 -tracking-[0.4px] mt-9 lgMob:mt-10"
          >
            A few highlights from our menu
          </Heading>
          <BodyText className="mt-4 lgMob:mt-7">
            We cater for all dietary requirements, but here’s a glimpse at some
            of our diner’s favourites. Our menu is revamped every season.
          </BodyText>
        </div>

        {/* Menu Card Container */}
        <MenuCardContainer/>

      </div>
    </section>
  );
};

export default Menu;
