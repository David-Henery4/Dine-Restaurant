import {  BookingContent, BackgroundHero } from "@/sections/booking-page"
import { PatternCurveBottomRight } from "/public/assets/patterns";

const Booking = () => {
  return (
    <main className="w-full grid grid-cols-mob grid-rows-bookingPageRows lgMob:grid-cols-tab desk:grid-cols-lap lgDesk:grid-cols-desk">
      <BackgroundHero />
      <BookingContent />

      {/* Background SVG */}
      <div className="hidden w-full row-start-2 row-end-3 col-start-1 col-end-13 overflow-hidden smDesk:block">
        <PatternCurveBottomRight className="w-[108%] relative -left-[36.7%]" />
      </div>
    </main>
  );
}

export default Booking