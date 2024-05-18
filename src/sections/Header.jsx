import Link from "next/link";
import Logo from "/public/assets/logo.svg";
import { Button } from "@/components/shared";
import HeaderText from "@/components/header/HeaderText";

const Header = () => {
  return (
    <header className="w-full col-start-1 col-end-13 bg-heroImageMob bg-cover bg-top grid grid-cols-mob pt-[232px] pb-[152px] mob:bg-heroImageMobLg lgMob:grid-cols-tab lgMob:pt-[302px] lgMob:pb-[184px] smTab:bg-heroImageTabLg xtraSmTab:pt-[374px] xtraSmTab:pb-[216px] smTab:bg-center smLap:grid-cols-lap">
      <div className="col-start-2 col-end-12 flex flex-col justify-center items-center text-center">
        <Link
          href="/"
          title="Logo icon, which directs to the homepage"
          className=""
        >
          {/* LOG NEEDS TO BE BIGGER ON TABLETS */}
          <Logo />
        </Link>
        <HeaderText />
        <div className="mt-14">
          <Button className="tracking-[2.5px]">BOOK A TABLE</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
