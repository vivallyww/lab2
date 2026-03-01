import Header from "./components/Header";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Languages from "./components/Languages";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#E8D8C4] py-10 px-4 flex justify-center items-center">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-[#C7B7A3]">
        <aside className="md:w-1/3 bg-[#561C24] text-[#E8D8C4] p-8">
          <div className="space-y-10">

            <div className="border-b border-[#C7B7A3]/30 pb-6">
               <h1 className="text-3xl font-bold uppercase tracking-tighter text-white">
                 Olesia <br /> Samodielova
               </h1>
               <p className="text-[#C7B7A3] mt-2 italic">Junior Web Designer / Front-End Developer</p>
            </div>
            <Contact />
            <Languages />
            <Skills />
          </div>
        </aside>

        <main className="md:w-2/3 p-8 md:p-12 flex flex-col justify-between">
          <div className="space-y-12">

            <section>
              <div className="flex items-center gap-4 mb-6 text-[#561C24]">
                <h2 className="text-2xl font-black uppercase tracking-widest">Experience</h2>
                <div className="h-[2px] flex-grow bg-[#6D2932]/20"></div>
              </div>
              <Experience />
            </section>

            <section>
              <div className="flex items-center gap-4 mb-6 text-[#561C24]">
                <h2 className="text-2xl font-black uppercase tracking-widest">Education</h2>
                <div className="h-[2px] flex-grow bg-[#6D2932]/20"></div>
              </div>
              <Education />
            </section>
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
export default App;