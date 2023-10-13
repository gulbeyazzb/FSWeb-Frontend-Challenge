import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="flex items-center md:justify-between py-10">
      <div className="hidden md:inline-block w-12 md:w-[63.68px] md:h-[62px] font-semibold text-2xl md:p-3 p-2 text-center  bg-[#EEEBFF] text-[#7B61FF] dark:bg-[#4731D3] border-none rounded-full dark:text-[#8F88FF]">
        G
      </div>
      <Navbar />
    </div>
  );
};
export default Header;
