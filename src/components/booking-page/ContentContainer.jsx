import { BookingTextContent, BookingForm } from "./content-comps";
import { PatternDivide } from "../../../public/assets/patterns";

const ContentContainer = () => {
  return (
    <div className="mt-11 smDesk:flex smDesk:justify-start smDesk:items-start smDesk:gap-[125px] smDesk:mt-[153px]">
      <BookingTextContent />
      <BookingForm />
    </div>
  );
};

export default ContentContainer;
