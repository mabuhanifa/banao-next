import { useModal } from "@/contextAPI/context";
import { AiFillCaretDown, AiOutlineUsergroupAdd } from "react-icons/ai";
import { RiLoginBoxLine } from "react-icons/ri";
import Blog from "./Blog";
import Blog2 from "./Blog2";
import Blog3 from "./Blog3";
import Posts from "./Posts";

export default function Blogs() {
  const { setLogin, setSignup, user } = useModal();
  return (
    <div className="md:px-[200px] py-10">
      <nav className="hidden md:flex justify-between items-center border-b">
        <ul className="flex items-center gap-x-5 text-[#8A8A8A]  nav-list">
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
          {!user.name ? (
            <button
              className="flex items-center gap-x-2 font-[500] bg-[#2F6CE5] py-2 text-white rounded px-3"
              onClick={() => {
                setLogin(true);
                setSignup(false);
              }}
            >
              <AiOutlineUsergroupAdd size={20} />
              <p>Join Group</p>
            </button>
          ) : (
            <button className="flex items-center border gap-x-2 font-[500]  px-3 py-2 rounded text-gray-500">
              <RiLoginBoxLine size={20} />
              <p>Leave Group</p>
            </button>
          )}
        </div>
      </nav>

      <nav className="md:hidden flex px-4 justify-between items-center text-[14px] font-[700] ">
        <p>Posts(368)</p>
        <p className="flex items-center gap-x-2 py-2 px-2.5 bg-[#F1F3F5] rounded">
          <span>Filter: All</span>
          <span>
            <AiFillCaretDown />
          </span>
        </p>
      </nav>

      <div className="flex justify-between my-10">
        <div className="flex flex-col">
          <Blog />
          <Blog2 />
          <Blog3 />
        </div>

        <div className="hidden md:block">
          <Posts />
        </div>
      </div>
    </div>
  );
}
