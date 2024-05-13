import AboutCard from "@/components/about/AboutCard";
import AboutCardImg1 from "/public/images/homepage/mobile/enjoyable-place-mobile.jpg";
import AboutCardImg2 from "/public/images/homepage/mobile/locally-sourced-mobile.jpg";

const About = () => {
  return (
    <section className="w-full col-start-2 col-end-12 grid gap-[101px] pb-[101px] -mt-[72px]">
      <AboutCard
        title="Enjoyable place for all the family"
        description="Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal."
        img={AboutCardImg1}
      />
      <AboutCard
        title="The most locally sourced food"
        description="All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food."
        img={AboutCardImg2}
      />
    </section>
  );
};

export default About;
