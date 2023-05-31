import { useModal } from "@/contextAPI/context";
import { FiArrowLeft } from "react-icons/fi";
import { HiOutlinePencil } from "react-icons/hi";
import Login from "./Login";
import Signup from "./Signup";

export default function Hero() {
  const { login, setLogin, signup, setSignup } = useModal();
  return (
    <div className="h-[440px] bg-gr">
      <div className="md:hidden flex justify-between items-center pl-4 pr-4 pt-4 text-white">
        <button>
          <FiArrowLeft size={20} />
        </button>
        <button
          className="border border-white p-2 rounded"
          onClick={() => setLogin(true)}
        >
          Join Group
        </button>
      </div>
      <h1 className="pl-4 text-white text-[36px] font-[700] md:pl-[200px] pt-72">
        Computer Engineering
      </h1>
      <p className="pl-4 text-white md:pl-[200px] ">
        142,765 Computer Engineers follow this
      </p>
      <div className="md:hidden">
        <button className="bg-gradient-to-r from-[#FF5C5C] to-[#F0568A]  fixed bottom-10 right-5 text-white h-[54px] w-[54px] flex justify-center items-center rounded-full">
          <HiOutlinePencil size={20} />
        </button>
      </div>

      <Login view={login} setLogin={setLogin} setSignup={setSignup} />
      <Signup view={signup} setSignup={setSignup} setLogin={setLogin} />
    </div>
  );
}
