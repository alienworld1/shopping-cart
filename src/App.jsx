import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}