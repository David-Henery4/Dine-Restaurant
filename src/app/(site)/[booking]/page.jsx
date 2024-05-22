import {  BookingContent, BackgroundHero } from "@/sections/booking-page"

const Booking = () => {
  return (
    <main className="w-full grid grid-cols-mob grid-rows-bookingPageRows lgMob:grid-cols-tab desk:grid-cols-lap lgDesk:grid-cols-desk">
      <BackgroundHero />
      <BookingContent />
    </main>
  );
}

export default Booking