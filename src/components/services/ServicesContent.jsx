import { ButtonContainer, TabsContainer, TextContent } from "./content-comps"

const ServicesContent = ({ setActiveTabObject, activeTabObject }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-7 lgMob:gap-12 lgLap:flex-col-reverse lgLap:gap-20 lgLap:col-start-8 lgLap:col-end-13">
      <TabsContainer
        activeTabObject={activeTabObject}
        setActiveTabObject={setActiveTabObject}
      />
      <div className="flex flex-col justify-center items-center gap-7 lgMob:gap-[60px] lgLap:items-start lgLap:w-full">
        <TextContent activeTabObject={activeTabObject} />
        <ButtonContainer />
      </div>
    </div>
  );
};

export default ServicesContent