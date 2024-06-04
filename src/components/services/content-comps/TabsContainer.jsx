import { Heading } from "@/components/shared";
import sliderImages from "@/localData/sliderImages";

const TabsContainer = ({
  setActiveTabObject,
  activeTabObject,
}) => {
  //
  const handleSelectNewSlide = (newId, slideArray) => {
    const newActiveSlideObject = slideArray.filter((item) => item.id === newId)
    setActiveTabObject(newActiveSlideObject[0]);
  };
  //
  return (
    <menu className="w-full flex flex-col justify-center items-center gap-4 smTab:flex-row smTab:justify-evenly lgLap:flex-col lgLap:items-start">
      {sliderImages.map((e, i, a) => {
        const isActive = activeTabObject.id === e.id;
        return (
          <li
            key={e?.id}
            className="relative hover:cursor-pointer"
            title={e?.tabTitle}
            onClick={() => handleSelectNewSlide(e.id, a)}
          >
            <Heading
              headingType="sm"
              className={`uppercase hover:scale-105 ${isActive || "opacity-50"}`}
            >
              {e?.title}
            </Heading>
            {isActive && (
              <div className="w-12 h-[1px] bg-beaver absolute bottom-0 left-1/2 -translate-x-1/2 lgLap:-translate-x-0 lgLap:-left-[180px] lgLap:bottom-1/2 lgLap:w-[150px]" />
            )}
          </li>
        );
      })}
    </menu>
  );
};

export default TabsContainer;
