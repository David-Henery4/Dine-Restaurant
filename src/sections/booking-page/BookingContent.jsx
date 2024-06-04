import Logo from "/public/assets/logo.svg";
import Link from "next/link";
import ContentContainer from "@/components/booking-page/ContentContainer";
import { PatternDivide } from "../../../public/assets/patterns";

const BookingContent = () => {
  return (
    <section className="w-full max-w-maxContentWidth mx-auto col-start-2 col-end-12 row-start-1 row-end-3 pt-14 pb-[86px] z-10 smTab:pb-[120px] smDesk:pt-16">
      <div className="grid place-items-center smDesk:place-items-start">
        <Link
          href="/"
          title="Logo icon, which directs to the homepage"
          className=""
        >
          {/* LOG NEEDS TO BE BIGGER ON TABLETS */}
          <Logo />
        </Link>
      </div>
      <ContentContainer />
    </section>
  );
};

export default BookingContent;
