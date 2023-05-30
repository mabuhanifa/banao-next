import { AiFillCaretDown, AiOutlineUsergroupAdd } from "react-icons/ai";
import Blog from "./Blog";
import Posts from "./Posts";

export default function Blogs() {
  return (
    <div className="px-[200px] py-10">
      <nav className="flex justify-between items-center border-b">
        <ul className="flex gap-x-5 text-[#8A8A8A]  nav-list">
          <li className="text-black border-b border-black ">All Posts(32)</li>
          <li>Article</li>
          <li>Event</li>
          <li>Education</li>
          <li>Job</li>
        </ul>
        <div className="flex gap-x-5 items-center">
          <button className="flex items-center gap-x-2 font-[500] bg-[#EDEEF0] py-2 rounded px-3">
            <p>Write a Post</p>
            <span>
              <AiFillCaretDown size={20} />
            </span>
          </button>
          <button className="flex items-center gap-x-2 font-[500] bg-[#2F6CE5] py-2 text-white rounded px-3">
            <AiOutlineUsergroupAdd size={20} />
            <p>Join Group</p>
          </button>
        </div>
      </nav>

      <div className="flex justify-between my-10">
        <div className="flex flex-col">
          <Blog />
          <Blog />
        </div>
        <Posts />
      </div>
    </div>
  );
}
