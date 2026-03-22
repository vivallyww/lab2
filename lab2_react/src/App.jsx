import { useEffect, useState } from "react";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Languages from "./components/Languages";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import ContactForm from "./components/ContactForm";

function App() {
  const getInitialTheme = () => {
    const hour = new Date().getHours();
    return hour >= 7 && hour < 21 ? "light" : "dark";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`min-h-screen py-10 px-4 flex justify-center items-center transition-colors duration-300 ${
      theme === "dark" ? "bg-[#0D1F23]" : "bg-gray-100"
    }`}>
      <button 
        onClick={toggleTheme}
        className="fixed top-5 right-5 z-50 px-4 py-2 rounded font-medium transition-all duration-300 shadow-lg"
        style={{
          backgroundColor: theme === "dark" ? "#69818D" : "#6D2932",
          color: theme === "dark" ? "#0D1F23" : "white"
        }}
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>

      <div className={`max-w-5xl w-full rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row transition-colors duration-300 ${
        theme === "dark" 
          ? "bg-[#132E35] border border-[#2D4A53]" 
          : "bg-white border border-[#C7B7A3]"
      }`}>
        
        <aside className={`md:w-1/3 p-8 transition-colors duration-300 ${
          theme === "dark" ? "bg-[#0D1F23] text-[#AFB3B7]" : "bg-[#561C24] text-[#E8D8C4]"
        }`}>
          <div className="space-y-10">
            
            <div className={`pb-6 transition-colors duration-300 ${
              theme === "dark" ? "border-b border-[#2D4A53]" : "border-b border-[#C7B7A3]/30"
            }`}>
              <h1 className={`text-3xl font-bold uppercase tracking-tighter ${
                theme === "dark" ? "text-[#AFB3B7]" : "text-white"
              }`}>
                Olesia <br /> Samodielova
              </h1>
              <p className={`mt-2 italic ${
                theme === "dark" ? "text-[#69818D]" : "text-[#C7B7A3]"
              }`}>
                Junior Web Designer / Front-End Developer
              </p>
            </div>

            <Contact theme={theme} />
            <Languages theme={theme} />
            <Skills theme={theme} />

          </div>
        </aside>

        <main className={`md:w-2/3 p-8 md:p-12 flex flex-col justify-between transition-colors duration-300 ${
          theme === "dark" ? "bg-[#132E35]" : "bg-white"
        }`}>
          
          <div className="space-y-12">

            <section>
              <div className={`flex items-center gap-4 mb-6 ${
                theme === "dark" ? "text-[#AFB3B7]" : "text-[#561C24]"
              }`}>
                <h2 className="text-2xl font-black uppercase tracking-widest">
                  Experience
                </h2>
                <div className={`h-[2px] flex-grow ${
                  theme === "dark" ? "bg-[#2D4A53]" : "bg-[#6D2932]/20"
                }`}></div>
              </div>
              <Experience theme={theme} />
            </section>

            <section>
              <div className={`flex items-center gap-4 mb-6 ${
                theme === "dark" ? "text-[#AFB3B7]" : "text-[#561C24]"
              }`}>
                <h2 className="text-2xl font-black uppercase tracking-widest">
                  Education
                </h2>
                <div className={`h-[2px] flex-grow ${
                  theme === "dark" ? "bg-[#2D4A53]" : "bg-[#6D2932]/20"
                }`}></div>
              </div>
              <Education theme={theme} />
            </section>
            <Reviews theme={theme} />

          </div>
          <Footer theme={theme} />
        </main>
      </div>
      <ContactForm theme={theme} />
    </div>
  );
}

export default App;