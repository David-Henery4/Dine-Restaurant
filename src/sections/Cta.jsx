import { Heading, Button } from "@/components/shared";

const Cta = () => {
  return (
    <section className="w-full col-start-1 col-end-13 bg-ctaBgImageMob bg-center bg-cover grid grid-cols-mob lgMob:grid-cols-tab lgMob:bg-ctaBgImageMobLg">
      <div className="w-full col-start-2 col-end-12 text-center py-20 flex flex-col justify-center items-center gap-5 lgMob:py-[68px]">
        <Heading
          headingType="lg"
          theme="dark"
          className="text-[32px] leading-10 -tracking-[0.4px]"
        >
          Ready to make a reservation?
        </Heading>
        <Button className="tracking-[2.5px]">BOOK A TABLE</Button>
      </div>
    </section>
  );
}

export default Cta