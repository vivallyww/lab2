import "./App.css";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Languages from "./components/Languages";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Contact />
        <Education />
        <Languages />
        <Experience />
        <Skills />
      </main>
      <Footer />
    </>
  );
}

export default App;