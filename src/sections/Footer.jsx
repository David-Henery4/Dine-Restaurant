import Logo from "/public/assets/logo.svg";
import Link from "next/link";
import { LocationDetails, OpenTimesDetails } from "@/components/footer";

const Footer = () => {
  return (
    <footer className="w-full px-6 pt-20 pb-16 bg-codGray lgMob:px-10">
      <div className="w-full flex flex-col justify-center items-center gap-11">
        <div>
          <Link
            href="/"
            title="Logo icon, which directs to the homepage"
            className=""
          >
            <Logo />
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center gap-8 font-normal text-sm leading-7 tracking-[2px] text-white text-center">
          <LocationDetails />
          <OpenTimesDetails />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
