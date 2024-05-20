import { MenuCard } from "./menu-card/MenuCard";
import { salmonMob2, beefMob2, chocolateMob2 } from "../../../public/images/homepage/mobile";
import { salmonDeskTab2, beefDeskTab2, chocolateDeskTab2 } from "../../../public/images/homepage/tablet";

const MenuCardContainer = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-14 lgMob:gap-12 lgLap:flex-[3]">
      <MenuCard
        title="Seared Salmon Fillet"
        description="Our locally sourced salmon served with a refreshing buckwheat summer salad."
        imgs={{ mobile: salmonMob2, tablet: salmonDeskTab2 }}
      />
      <MenuCard
        title="Rosemary Filet Mignon"
        description="Our prime beef served to your taste with a delicious choice of seasonal sides."
        imgs={{ mobile: beefMob2, tablet: beefDeskTab2 }}
      />
      <MenuCard
        title="Summer Fruit Chocolate Mousse"
        description="Creamy mousse combined with summer fruits and dark chocolate shavings."
        imgs={{ mobile: chocolateMob2, tablet: chocolateDeskTab2 }}
      />
    </div>
  );
};

export default MenuCardContainer;
