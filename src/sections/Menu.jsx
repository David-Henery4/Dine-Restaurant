import { BodyText, Heading, CircleLineDecoration } from "@/components/shared";
import MenuCardContainer from "@/components/menu/MenuCardContainer";

const Menu = () => {
  return (
    <section className="w-full col-start-1 col-end-13 pt-[72px] pb-[102px] bg-codGray grid grid-cols-mob lgMob:grid-cols-tab lgMob:py-24">
      <div className="w-full col-start-2 col-end-12 flex flex-col justify-center items-center gap-[85px] lgMob:gap-14">

        <div className="text-center">
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
