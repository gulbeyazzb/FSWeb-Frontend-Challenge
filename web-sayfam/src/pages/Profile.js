import line from "../Assets/Vector 2.png";

export default function Profile() {
  return (
    <div className="my-4">
      <img src={line}></img>
      <h2 className="dark:text-[#AEBCCF] text[#1F2937] font-semibold text-5xl py-6">
        Profile
      </h2>
      <div className="flex justify-between">
        <div className="flex">
          <div>
            <h6 className="font-medium text-3xl text-[#4338CA] dark:text-[#B7AAFF] pb-6">
              Profile
            </h6>
            <div className="flex gap-10">
              <ul className="w-[30%] text-lg font-semibold">
                <li className=" dark:text-white ">Doğum tarihi</li>
                <li className=" dark:text-white ">İkamet Şehri</li>
                <li className=" dark:text-white ">Eğitim Durumu</li>
                <li className=" dark:text-white ">Tercih Ettiği Rol</li>
              </ul>
              <ul className="text-lg font-normal">
                <li className=" dark:text-white ">24.03.1996</li>
                <li className=" dark:text-white ">Ankara</li>
                <li className=" dark:text-white ">
                  Hacettepe Ünv. Biyoloji Lisans, 2016 Frontend
                </li>
                <li className=" dark:text-white ">UI</li>
              </ul>
              <p className="font-normal text-xs dark:text-white"></p>
            </div>
          </div>
        </div>
        <div className="w-[576.9px] ">
          <h6 className="font-medium text-3xl text-[#4338CA] dark:text-[#B7AAFF] pb-6">
            About Me
          </h6>
          <p className="font-normal text-lg text-[#6B7280] dark:text-white mb-2 w-[400px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aut, odit laborum aliquam voluptatum nisi mollitia.
          </p>

          <p className="font-normal text-lg text-[#6B7280] dark:text-white w-[400px]">
            Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
            deserunt quam temporibus cumque magnam!
          </p>
        </div>
      </div>
    </div>
  );
}
