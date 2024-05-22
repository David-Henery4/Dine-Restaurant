import Logo from "/public/assets/logo.svg";
import Link from "next/link";
import ContentContainer from "@/components/booking-page/ContentContainer";

const BookingContent = () => {
  return (
    <section className="w-full col-start-2 col-end-12 row-start-1 row-end-3 pt-14 pb-[86px]">
      <div className="grid place-items-center">
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
