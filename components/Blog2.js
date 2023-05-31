import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import { GiShare } from "react-icons/gi";
import { IoEyeOutline } from "react-icons/io5";
import { TfiPencilAlt } from "react-icons/tfi";
import door from "../public/door.png";
import user2 from "../public/user2.png";
export default function Blog2() {
  return (
    <div className="border rounded my-2">
      <Image src={door} alt="image" />
      <div className="p-4">
        <div className="flex items-center gap-x-2">
          <TfiPencilAlt />
          <p>Article</p>
        </div>
        <div className="flex justify-between items-start py-[10px]">
          <h1 className="text-[22px] font-[600]">
          Tax Benefits for Investment under National Pension <br /> Scheme launched by Government
          </h1>
          <button>
            <BsThreeDots size={20} />
          </button>
        </div>
        <p className="text-[#5C5C5C] text-sm md:text-[19px]">
          I’ve worked in UX for the better part of a decade. From now on, I plan
          to rei…
        </p>
        <div className="flex justify-between pt-8 items-center">
          <div className="flex gap-x-2 items-center">
            <Image src={user2} alt="user" />
            <div>
              <p className="text-[18px] font-[600]">Sarthak Kamra</p>
              <div className="md:hidden flex items-center gap-x-2 text-[14px] text-[#495057] font-[500]">
                <IoEyeOutline size={16} />
                <p>1.4k views</p>
              </div>
            </div>
          </div>
          <div className="flex gap-x-10 items-center">
            <div className="hidden md:flex items-center gap-x-2 text-[14px]">
              <IoEyeOutline size={16} />
              <p>1.4k views</p>
            </div>
            <button className="bg-[#EDEEF0] p-3 rounded-sm">
              <GiShare />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
