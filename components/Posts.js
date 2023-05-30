import { AiOutlineInfoCircle } from "react-icons/ai";
import { HiPencil } from "react-icons/hi";
import { MdOutlineLocationOn } from "react-icons/md";

export default function Posts() {
  return (
    <div>
      <div className="flex items-center justify-between gap-2 w-[243px] border-b">
        <div className="flex gap-2 items-center py-2 ">
          <MdOutlineLocationOn size={16} />
          <input type="text" placeholder="Noida, India" className="placeholder-black outline-0"/>
        </div>
        <HiPencil size={16} />
      </div>
      <div className="flex items-start gap-x-2 text-[12px] text-[#9CA3AF] mt-8">
        <span>
          <AiOutlineInfoCircle size={14} className="mt-1"/>
        </span>
        <div>
          Your location will help us serve better <br />
          and extend a personalised experience.
        </div>
      </div>
    </div>
  );
}
