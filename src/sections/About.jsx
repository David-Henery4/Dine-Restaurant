import AboutCard from "@/components/about/AboutCard";
import {
  enjoyablePlaceMob2,
  locallySourcedMob2,
} from "../../public/images/homepage/mobile";
import {
  enjoyablePlaceTab2,
  locallySourcedTab2,
} from "../../public/images/homepage/tablet";
import {
  enjoyablePlaceDesk2,
  locallySourcedDesk2,
} from "../../public/images/homepage/desktop";
//
import handleImgs from "@/helpers/imgArtDirectionSort";

const About = () => {
  //
  return (
    <section className="w-full col-start-2 col-end-12 grid gap-[101px] pb-[101px] -mt-[72px] lgMob:-mt-24 lgMob:pb-[118px]">
      <AboutCard
        title="Enjoyable place for all the family"
        description="Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal."
        imgSrcs={handleImgs(
          enjoyablePlaceMob2,
          enjoyablePlaceTab2,
          enjoyablePlaceDesk2
        )}
      />
      <AboutCard
        title="The most locally sourced food"
        description="All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food."
        imgSrcs={handleImgs(
          locallySourcedMob2,
          locallySourcedTab2,
          locallySourcedDesk2
        )}
      />
    </section>
  );
};

export default About;
