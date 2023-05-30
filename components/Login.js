import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOutline } from "react-icons/io5";
import { RiFacebookCircleFill } from "react-icons/ri";
import signin from "../public/signin.png";

export default function Login() {
  return (
    <div className="bg-gray-400 flex justify-center p-52 ">
      <div className="w-[736px] h-[530px] bg-white rounded-[8px]">
        <div className="flex justify-center bg-[#EFFFF4] py-[17px] px-0 rounded-[8px]">
          <p className="text-[14px] text-[#008A45] font-[500]">
            Let&apos;s learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </p>
        </div>

        <div className="my-6 px-[36px] flex justify-between items-center text-[14px] ">
          <h2 className="text-[24px] font-[700]">Create Account</h2>
          <h4 className="flex items-center gap-x-1 ">
            <span>Already have an account? </span>
            <button className="text-[#2F6CE5] font-[600]">Sign In</button>
          </h4>
        </div>

        <div className="px-[36px] flex">
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
                  <IoEyeOutline className="text-black/[.5]" size={20}/>
                </span>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Confirm Password"
                  className="bg-[#F7F8FA] px-3 py-[11px] border-l border-r border-b rounded w-[320px] placeholder-[#8A8A8A] font-[500]"
                />
              </div>
              <input
                type="button"
                value="Create Account"
                className="bg-[#2F6CE5] py-3 rounded-full text-white w-[320px] mt-[19px] text-[14px]"
              />
            </form>
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
          </div>
          <div>
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
