import "./App.css";
import Footer from "./layouts/Footer";
import Main from "./layouts/Main";

function App() {
  return (
    <div className="dark:bg-[#252128]">
      <div className=" flex flex-col pt-6 sm:px-20 px-2 h-full xl:w-[1200px] m-auto">
        <Main />
      </div>

      <Footer />
    </div>
  );
}

export default App;
