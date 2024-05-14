import { BodyText, Heading, CircleLineDecoration } from "@/components/shared";
import MenuCardContainer from "@/components/menu/MenuCardContainer";

const Menu = () => {
  return (
    <section className="w-full col-start-1 col-end-13 pt-[72px] pb-[102px] bg-codGray grid grid-cols-mob">
      <div className="w-full col-start-2 col-end-12 flex flex-col justify-center items-center gap-[85px]">

        <div className="text-center">
          <CircleLineDecoration />
          <Heading
            headingType="lg"
            theme="dark"
            className="text-[32px] leading-10 -tracking-[0.4px] mt-9"
          >
            A few highlights from our menu
          </Heading>
          <BodyText className="mt-4">
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
