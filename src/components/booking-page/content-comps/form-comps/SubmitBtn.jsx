

const SubmitBtn = ({ isValidating }) => {
  return (
    <button className={`w-full text-center p-6 font-semibold border inline-block bg-codGray border-codGray text-white hover:bg-white hover:text-mirage active:text-white active:bg-codGray ${isValidating && "opacity-50"}`} disabled={isValidating}>
      {isValidating ? "BOOKING..." : "MAKE RESERVATION"}
    </button>
  );
};

export default SubmitBtn