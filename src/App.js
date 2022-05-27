import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="h-screen bg-gray-200 font-poppins">
      <Header />
      <div className="flex flex-col items-center pt-16 text-center">
        <h1 className="text-5xl font-light">Popular Pro Stock Vectors</h1>
        <h2 className="pt-5 text-lg text-gray-500">
          High quality Vectors with worry-free licensing for <br /> personal and
          commercial use.
        </h2>
      </div>
      <SearchBox />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
