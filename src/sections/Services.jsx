import { ServicesContent, ImgSlider } from "@/components/services"

const Services = () => {
  return (
    <section className="w-full col-start-2 col-end-12 py-20 pb-32 grid gap-[49px] lgMob:py-[120px]">
      <ImgSlider/>
      <ServicesContent/>
    </section>
  )
}

export default Services