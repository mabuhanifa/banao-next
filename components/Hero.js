import { FiArrowLeft } from "react-icons/fi";

export default function Hero() {
  return (
    <div className="h-[440px] bg-gr">
      <div className="md:hidden flex justify-between items-center pl-4 pr-4 pt-4 text-white">
        <button>
          <FiArrowLeft size={20}/>
        </button>
        <button className="border border-white p-2 rounded">Join Group</button>
      </div>
      <h1 className="pl-4 text-white text-[36px] font-[700] md:pl-[200px] pt-72">
        Computer Engineering
      </h1>
      <p className="pl-4 text-white md:pl-[200px] ">
        142,765 Computer Engineers follow this
      </p>
    </div>
  );
}
