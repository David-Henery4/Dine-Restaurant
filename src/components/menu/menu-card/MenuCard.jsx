import { MenuCardImg, MenuCardText } from "./card-comps"

export const MenuCard = ({ title, description, imgs }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-9 smTab:flex-row smTab:gap-[62px] lgLap:gap-6">
      <MenuCardImg imgs={imgs} />
      <MenuCardText title={title} description={description} />
    </div>
  );
};
