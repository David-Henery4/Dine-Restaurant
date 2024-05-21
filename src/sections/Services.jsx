import { ServicesContent, ImgSlider } from "@/components/services"

const Services = () => {
  return (
    <section className="w-full col-start-2 col-end-12 py-20 pb-32 grid gap-[49px] lgMob:py-[120px] lgLap:py-40 lgLap:gap-5 lgLap:grid-cols-servicesSliderCols lgDesk:max-w-maxContentWidth lgDesk:mx-auto">
      <ImgSlider />
      <ServicesContent />
    </section>
  );
}

export default Services