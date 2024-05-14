import { Heading } from "@/components/shared";

const TabsContainer = () => {
  return (
    <menu className="w-full flex flex-col justify-center items-center gap-4">
      <li
        className="relative hover:cursor-pointer hover:scale-105"
        title="tab button for image slider"
      >
        <Heading headingType="sm" className="uppercase">
          Family Gathering
        </Heading>
        <div className="w-12 h-[1px] bg-beaver absolute bottom-0 left-1/2 -translate-x-1/2" />
      </li>
      <li
        className="hover:cursor-pointer hover:scale-105"
        title="tab button for image slider"
      >
        <Heading headingType="sm" className="uppercase opacity-50">
          Special Events
        </Heading>
      </li>
      <li
        className="hover:cursor-pointer hover:scale-105"
        title="tab button for image slider"
      >
        <Heading headingType="sm" className="uppercase opacity-50">
          Social Events
        </Heading>
      </li>
    </menu>
  );
};

export default TabsContainer;
