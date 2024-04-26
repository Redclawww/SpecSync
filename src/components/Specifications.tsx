// @ts-nocheck
const Specifications = ({ props, quickSpec }) => {
  return (
    <div className="flex flex-col gap-6 text-center mont-regular">
      <h1 className="text-white text-3xl">{props.name}</h1>
      <img src={props.img} alt="" className="rounded-xl" />
      <div className=" bg-black text-white rounded-3xl">
        <ul className="flex flex-col gap-4 border p-5 rounded-2xl">
          {quickSpec.map((spec, index) => (
            <li key={index}>
              <strong>{spec.name}</strong>: {spec.value}
            </li>
          ))}
        </ul>
      </div>
      <button className=" py-5  bg-black text-white rounded-2xl hover:scale-105 transition-all border-2 ">
        <strong className="px-10 rounded-2xl  ">
          Show Detailed Specifications
        </strong>
      </button>
    </div>
  );
};

export default Specifications;
