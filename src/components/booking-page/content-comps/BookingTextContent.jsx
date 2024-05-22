import { Button, BodyText, Heading } from "@/components/shared";

const BookingTextContent = () => {
  return (
    <div className="text-center">
      <Heading
        theme="dark"
        className="text-[32px] leading-[40px] max-w-[230px] mx-auto lgMob:text-5xl lgMob:leading-[64px] lgMob:-tracking-[0.6px] lgMob:max-w-[300px] smLap:text-[80px] smLap:leading-[80px] smLap:max-w-[508px] lap:ml-0"
      >
        Reservations
      </Heading>
      <BodyText className="mt-[13px]">
        We can’t wait to host you. If you have any special requirements please
        feel free to call on the phone number below. We’ll be happy to
        accommodate you.
      </BodyText>
      <Button className="mt-5">RESERVE PLACE</Button>
    </div>
  );
}

export default BookingTextContent