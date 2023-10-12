import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="flex justify-between py-10">
      <div className="w-[63.68px] h-[62px] font-semibold text-2xl p-3  text-center bg-[#EEEBFF] text-[#7B61FF] dark:bg-[#4731D3] border-none rounded-full dark:text-[#8F88FF]">
        G
      </div>
      <Navbar />
    </div>
  );
};
export default Header;
