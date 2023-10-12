export default function Skills() {
  return (
    <div className="my-10">
      <h2 className="dark:text-[#AEBCCF] text-[#1F2937] font-semibold text-5xl py-6 ">
        Skills
      </h2>
      <div className="flex justify-between gap-20">
        <div className=" w-[300]">
          <h6 className="font-medium text-3xl text-[#4338CA] dark:text-[#B7AAFF] pb-6">
            JavaScript
          </h6>
          <p className="font-normal text-xs text-[#6B7280] dark:text-white">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className=" w-[300]">
          <h6 className="font-medium text-[#4338CA] text-3xl dark:text-[#B7AAFF] pb-6">
            React.Js
          </h6>
          <p className="font-normal text-xs text-[#6B7280] dark:text-white">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className=" w-[300]">
          <h6 className="font-medium text-3xl text-[#4338CA] dark:text-[#B7AAFF] pb-6">
            Node.Js
          </h6>
          <p className="font-normal text-xs text-[#6B7280] dark:text-white">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}
