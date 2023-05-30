export default function Login() {
  return (
    <div className="bg-gray-400 flex justify-center p-52 ">
      <div className="w-[736px] h-[513px] bg-white rounded-[8px]">
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

        <div className="px-[36px]">
          <form>
            <div className="w-[320px] flex">
              <input
                type="text"
                placeholder="First Name"
                className="bg-[#F7F8FA] px-3 py-4 border rounded w-[160px] placeholder-[#8A8A8A] font-[500]"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="bg-[#F7F8FA] px-3 py-4 border rounded w-[160px] placeholder-[#8A8A8A] font-[500]"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Email"
                className="bg-[#F7F8FA] px-3 py-4 border-l border-r w-[320px] placeholder-[#8A8A8A] font-[500]"
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Password"
                className="bg-[#F7F8FA] px-3 py-4 border w-[320px] placeholder-[#8A8A8A] font-[500]"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Confirm Password"
                className="bg-[#F7F8FA] px-3 py-4 border-l border-r rounded w-[320px] placeholder-[#8A8A8A] font-[500]"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
