import Hero from "./components/Hero";
import About from "./components/About";
import Contacts from "./components/Contacts"
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="bg-gray-950 text-white font-sans">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </main>
  );
}
export default App;