import "./App.css";
import Footer from "./layouts/Footer";
import Main from "./layouts/Main";

function App() {
  return (
    <div>
      <div className="flex flex-col pt-6 px-20 dark:bg-[#252128] h-full">
        <Main />
      </div>

      <Footer />
    </div>
  );
}

export default App;
