import { MenuCardImg, MenuCardText } from "./card-comps"

export const MenuCard = ({title,description, img}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-9">
      <MenuCardImg img={img}/>
      <MenuCardText title={title} description={description} />
    </div>
  );
}
