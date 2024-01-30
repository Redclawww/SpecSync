
const Specifications = ({props,quickSpec}) => { 
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-white text-3xl">{props.name}</h1>
      <img src={props.img} alt="" className="rounded-xl " />
      <div className="p-10 bg-black text-white rounded-3xl">
      <ul className="flex flex-col gap-4">
        {quickSpec.map((spec, index) => (
          <li key={index}>
            <strong>{spec.name}</strong>: {spec.value}
          </li>
        ))}
      </ul>
    </div>
      <button className="px-5 py-5 bg-black text-white rounded-2xl hover:scale-105 transition-all">
        <strong>Show Detailed Specifications</strong>
      </button>
    </div>
  );
};

export default Specifications;
