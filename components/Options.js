
export default function Options({option}) {
  return (
    <div
      className={
        option
          ? "flex flex-col text-left absolute border py-3 px-2 gap-2 bg-white right-0 top-[40px]"
          : "hidden"
      }
    >
      <p>Edit</p>
      <p>Report</p>
      <p>Other</p>
    </div>
  );
}
