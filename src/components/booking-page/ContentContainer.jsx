import { BookingTextContent, BookingForm } from "./content-comps";

const ContentContainer = () => {
  return (
    <div className="mt-11 smDesk:flex smDesk:justify-start smDesk:items-start smDesk:gap-[125px] smDesk:mt-[153px]">
      <BookingTextContent />
      <BookingForm />
    </div>
  );
};

export default ContentContainer;
