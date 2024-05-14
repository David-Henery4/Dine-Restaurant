import { ButtonContainer, TabsContainer, TextContent } from "./content-comps"

const ServicesContent = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-7">
      <TabsContainer/>
      <div className="flex flex-col justify-center items-center gap-7 ">
        <TextContent/>
        <ButtonContainer/>
      </div>
    </div>
  )
}

export default ServicesContent