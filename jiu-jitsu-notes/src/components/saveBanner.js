const SaveBanner = ({ failed }) => {
  return failed ? (
    <div className="w-full flex justify-center items-center p-2 text-white bg-red-500">
      Could Not Save!
    </div>
  ) : (
    <div className="w-full flex justify-center items-center p-2 text-white bg-green-500">
      Saved!
    </div>
  );
};

export default SaveBanner;
