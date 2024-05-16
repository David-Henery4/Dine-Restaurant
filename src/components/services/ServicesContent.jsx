import { ButtonContainer, TabsContainer, TextContent } from "./content-comps"

const ServicesContent = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-7 lgMob:gap-12">
      <TabsContainer/>
      <div className="flex flex-col justify-center items-center gap-7 lgMob:gap-[60px]">
        <TextContent/>
        <ButtonContainer/>
      </div>
    </div>
  )
}

export default ServicesContent