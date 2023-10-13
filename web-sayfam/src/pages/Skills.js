export default function Skills() {
  return (
    <div className="md:my-10 my-2">
      <h2 className="dark:text-[#AEBCCF] text-[#1F2937] font-semibold md:text-5xl text-4xl py-6 ">
        Skills
      </h2>
      <div className="md:flex md:justify-between md:gap-20">
        <div className=" w-[300]">
          <h6 className="font-medium md:text-3xl text-xl text-[#4338CA] dark:text-[#B7AAFF] pb-6">
            JavaScript
          </h6>
          <p className="font-normal text-xs text-[#6B7280] dark:text-white">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className=" w-[300]">
          <h6 className="font-medium text-[#4338CA] md:text-3xl text-xl dark:text-[#B7AAFF] pb-6">
            React.Js
          </h6>
          <p className="font-normal text-xs text-[#6B7280] dark:text-white">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className=" w-[300]">
          <h6 className="font-medium md:text-3xl text-xl text-[#4338CA] dark:text-[#B7AAFF] pb-6">
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
