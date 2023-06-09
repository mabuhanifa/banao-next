import { useModal } from "@/contextAPI/context";
import Image from "next/image";
import { AiFillCaretDown } from "react-icons/ai";
import { MdSearch } from "react-icons/md";
import icon from "../public/icon.png";
import user2 from "../public/user.png";

export default function Nav() {
  const { setLogin, setSignup, user } = useModal();
  return (
    <nav className="hidden md:block">
      <div className="flex justify-around p-5 items-center">
        <div>
          <Image src={icon} alt="icon" />
        </div>
        <div>
          <div className="relative">
            <input
              type="text"
              className="rounded-full px-10 py-2 bg-[#F2F2F2] w-[360px] text-[#5C5C5C] text-[14px]"
              placeholder="Search for your favorite groups in ATG"
            />
            <MdSearch
              className="absolute top-2 left-2 text-gray-500"
              size={25}
            />
          </div>
        </div>
        {!user.name ? (
          <div>
            <button
              className="flex items-center gap-2 font-[700]"
              onClick={() => {
                setSignup(true);
                setLogin(false);
              }}
            >
              <span>Create account.</span>
              <span className="text-[#2F6CE5] ">It’s free!</span>
              <AiFillCaretDown />
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-x-4">
            <Image src={user2 } alt="user" width={36} height={36} />
            <p>Siddharth Goyal</p>
            <span>
              <AiFillCaretDown />
            </span>
          </div>
        )}
      </div>
    </nav>
  );
}
