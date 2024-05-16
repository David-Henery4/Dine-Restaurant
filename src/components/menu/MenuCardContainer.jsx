import { MenuCard } from "./menu-card/MenuCard";
//
import MenuSalmon1 from "/public/images/homepage/mobile/salmon-mobile.jpg";
import MenuSalmon2 from "/public/images/homepage/mobile/salmon-mobile@2x.jpg";
//
import MenuBeef1 from "/public/images/homepage/mobile/beef-mobile.jpg";
import MenuBeef2 from "/public/images/homepage/mobile/beef-mobile@2x.jpg";
//
import MenuChocolate1 from "/public/images/homepage/mobile/chocolate-mobile.jpg";
import MenuChocolate2 from "/public/images/homepage/mobile/chocolate-mobile@2x.jpg";

const MenuCardContainer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-14 lgMob:gap-12">
      <MenuCard
        title="Seared Salmon Fillet"
        description="Our locally sourced salmon served with a refreshing buckwheat summer salad."
        img={MenuSalmon1}
      />
      <MenuCard
        title="Rosemary Filet Mignon"
        description="Our prime beef served to your taste with a delicious choice of seasonal sides."
        img={MenuBeef1}
      />
      <MenuCard
        title="Summer Fruit Chocolate Mousse"
        description="Creamy mousse combined with summer fruits and dark chocolate shavings."
        img={MenuChocolate1}
      />
    </div>
  );
};

export default MenuCardContainer;
