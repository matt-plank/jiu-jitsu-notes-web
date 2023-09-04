const Bar = ({ children }) => {
  return (
    <p className="text-xl bg-gray-700 text-white px-3 py-1 w-full rounded-md">
      {children}
    </p>
  );
};

const Card = ({ title, aspect, position, yourGrips, theirGrips }) => {
  return (
    <div className="bg-gray-200 rounded-md p-5 flex flex-1 gap-2 flex-col">
      <h2 className="text-2xl">{title}</h2>
      <hr class="h-px my-4 bg-gray-800 border-0" />
      <Bar>
        <p>
          <span className="text-yellow-500">{aspect} </span>
          {position}
        </p>
      </Bar>
      <Bar>{yourGrips}</Bar>
      {theirGrips ? <Bar>{theirGrips}</Bar> : <></>}
    </div>
  );
};

export default Card;
