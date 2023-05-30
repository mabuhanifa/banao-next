import Image from "next/image";
import leisure from "../public/leisure.png";

export default function Topics() {
  return (
    <div className="flex items-center justify-between my-3">
      <div className="flex items-center gap-x-2">
        <Image
          src={leisure}
          alt="leisure"
          width={36}
          height={36}
          className="rounded-lg"
        />
        <h4> Leisure</h4>
      </div>
      <button className="bg-[#EDEEF0] text-black px-3 py-1 rounded-[14px] text-[12px]">
        Follow
      </button>
    </div>
  );
}
