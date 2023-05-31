import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { IoMdClose } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { RiFacebookCircleFill } from "react-icons/ri";
import signin from "../public/signin.png";
export default function Signup({ view, setSignup, setLogin }) {
  if (!view) return null;
  const closeSignup = (e) => {
    if (e.target.id === "container") {
      setSignup((m) => !m);
    }
  };
  return (
    <div
      onClick={closeSignup}
      id="container"
      className="flex justify-center md:p-52 backdrop-blur-sm fixed inset-0 top-40 md:top-0"
    >
      <div className="w-[736px] h-[530px] bg-white rounded-[8px]">
      <div className="hidden md:flex justify-center bg-[#EFFFF4] py-[17px] px-0 rounded-[8px] relative">
          <p className="text-[14px] text-[#008A45] font-[500]">
            Let&apos;s learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </p>
          <button
            className="h-7 w-7 rounded-full bg-gray-600 text-white flex justify-center items-center absolute top-[-35px] right-[-20px]"
            onClick={() => setSignup(false)}
          >
            <span>
              <IoMdClose />
            </span>
          </button>
        </div>

        <div className="my-6 px-[36px] flex justify-around md:justify-between items-center text-[14px] ">
          <h2 className="text-[24px] font-[700]">Create Account</h2>
          <h4 className="hidden md:flex items-center gap-x-1 ">
            <span>Already have an account? </span>
            <button
              onClick={() => {
                setLogin(true);
                setSignup(false);
              }}
              className="text-[#2F6CE5] font-[600]"
            >
              Sign In
            </button>
          </h4>
          <button
            onClick={() => setSignup(false)}
            className="md:hidden h-7 w-7 rounded-full bg-gray-600 text-white flex justify-center items-center"
          >
            <span>
              <IoMdClose />
            </span>
          </button>
        </div>

        <div className="px-[36px] flex justify-center md:justify-between">
          <div>
            <form>
              <div className="w-[320px] flex">
                <input
                  type="text"
                  placeholder="First Name"
                  className="bg-[#F7F8FA] px-3 py-[11px] border rounded w-[160px] placeholder-[#8A8A8A] font-[500]"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="bg-[#F7F8FA] px-3 py-[11px] border rounded w-[160px] placeholder-[#8A8A8A] font-[500]"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Email"
                  className="bg-[#F7F8FA] px-3 py-[11px] border-l border-r w-[320px] placeholder-[#8A8A8A] font-[500]"
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Password"
                  className="bg-[#F7F8FA] px-3 py-[11px] border w-[320px] placeholder-[#8A8A8A] font-[500]"
                />
                <span className="absolute top-[13px] right-8">
                  <IoEyeOutline className="text-black/[.5]" size={20} />
                </span>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Confirm Password"
                  className="bg-[#F7F8FA] px-3 py-[11px] border-l border-r border-b rounded w-[320px] placeholder-[#8A8A8A] font-[500]"
                />
              </div>
            </form>
            <div className="flex items-center justify-between mt-[19px]">
              <button className="w-[150px] bg-[#2F6CE5] py-3 rounded-full text-white md:w-[320px]  text-[14px]">
                Create Account
              </button>
              <button
                onClick={() => {
                  setLogin(true);
                  setSignup(false);
                }}
                className="border-b border-[#495057] text-[#495057] font-[500] md:hidden"
              >
                or, Sign In
              </button>
            </div>
            <div className="mt-5">
              <div>
                <button className="flex items-center gap-x-2 py-[11px] border rounded w-[320px] justify-center my-2 text-[14px]">
                  <span>
                    <RiFacebookCircleFill
                      className="text-[#2F6CE5]"
                      size={20}
                    />
                  </span>
                  <span>Sign up with Facebook</span>
                </button>
              </div>
              <div>
                <button className="flex items-center gap-x-2 py-[11px] border rounded w-[320px] justify-center my-2 text-[14px]">
                  <span>
                    <FcGoogle size={20} />
                  </span>
                  <span>Sign up with Google</span>
                </button>
              </div>
            </div>
            <p className="md:hidden text-[11px] text-black/[0.5] mt-8">
              By signing up, you agree to our Terms & <br /> conditions, Privacy
              policy
            </p>
          </div>
          <div className="hidden md:block">
            <Image src={signin} alt="signin" height={320} width={320} />
            <p className="text-[11px] text-black/[0.5] pl-5 mt-8">
              By signing up, you agree to our Terms & conditions, Privacy policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
