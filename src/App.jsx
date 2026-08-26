import Navbar from "./componentes/Navbar";
import Hero from "./componentes/Hero";
import About from "./componentes/About";
import Skills from "./componentes/Skills";
import Projects from "./componentes/Projects";
import Experience from "./componentes/Experience";
import Process from "./componentes/Process";
import Contact from "./componentes/Contact";
import Footer from "./componentes/Footer";

export default function App() {
  return <div className="min-h-screen overflow-hidden bg-[#09090b] text-zinc-100"><Navbar /><main><Hero /><About /><Skills /><Projects /><Experience /><Process /><Contact /></main><Footer /></div>;
}
