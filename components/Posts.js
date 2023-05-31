import Image from "next/image";
import { AiFillLike, AiOutlineInfoCircle } from "react-icons/ai";
import { HiPencil } from "react-icons/hi";
import { MdOutlineLocationOn } from "react-icons/md";
import activism from "../public/activism.png";
import mba from "../public/mba.png";
import philosophy from "../public/philosophy.png";
import Topics from "./Topics";

export default function Posts() {
  return (
    <div>
      <div className="flex items-center justify-between gap-2 w-[243px] border-b">
        <div className="flex gap-2 items-center py-2 ">
          <MdOutlineLocationOn size={16} />
          <input
            type="text"
            placeholder="Noida, India"
            className="placeholder-black outline-0"
          />
        </div>
        <HiPencil size={16} />
      </div>
      <div className="flex items-start gap-x-2 text-[12px] text-[#9CA3AF] mt-8">
        <span>
          <AiOutlineInfoCircle size={14} className="mt-1" />
        </span>
        <div>
          Your location will help us serve better <br />
          and extend a personalised experience.
        </div>
      </div>

      <div className="flex items-center gap-x-2 mt-10 mb-5">
        <span>
          <AiFillLike />
        </span>
        <p>RECOMMENDED GROUPS</p>
      </div>
      <div className="flex flex-col mt-8">
        <Topics />
        <div className="flex items-center justify-between my-3">
          <div className="flex items-center gap-x-2">
            <Image
              src={activism}
              alt="leisure"
              width={36}
              height={36}
              className="rounded-lg"
            />
            <h4> Activism</h4>
          </div>
          <button className="bg-[#EDEEF0] text-black px-3 py-1 rounded-[14px] text-[12px]">
            Follow
          </button>
        </div>
        <div className="flex items-center justify-between my-3">
          <div className="flex items-center gap-x-2">
            <Image
              src={mba}
              alt="leisure"
              width={36}
              height={36}
              className="rounded-lg"
            />
            <h4> MBA</h4>
          </div>
          <button className="bg-[#EDEEF0] text-black px-3 py-1 rounded-[14px] text-[12px]">
            Follow
          </button>
        </div>
        <div className="flex items-center justify-between my-3">
          <div className="flex items-center gap-x-2">
            <Image
              src={philosophy}
              alt="leisure"
              width={36}
              height={36}
              className="rounded-lg"
            />
            <h4> Philosophy</h4>
          </div>
          <button className="bg-[#EDEEF0] text-black px-3 py-1 rounded-[14px] text-[12px]">
            Follow
          </button>
        </div>
      </div>
      <div>
        <div className="flex justify-end mt-10">
          <button className="text-[#2F6CE5] text-[12px]">See More...</button>
        </div>
      </div>
    </div>
  );
}
