function Skills({ theme }) {
  const hardSkills = ["Figma", "Canva", "Photoshop", "HTML", "CSS", "PHP", "C", "C#"];
  const softSkills = ["Командна робота", "Уважність", "Відповідальність", "Швидке навчання"];

  return (
    <section className={`p-6 rounded-xl shadow-md border mb-6 transition-colors duration-300 ${
      theme === "dark" 
        ? "bg-[#0D1F23] border-[#2D4A53]" 
        : "bg-[#E8D8C4] border-[#C7B7A3]"
    }`}>
      <h2 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
        theme === "dark" ? "text-[#AFB3B7]" : "text-[#561C24]"
      }`}>Skills</h2>
      <div className="mb-4">
        <h3 className={`text-md font-semibold mb-2 italic transition-colors duration-300 ${
          theme === "dark" ? "text-[#69818D]" : "text-[#6D2932]"
        }`}>Hard Skills</h3>
        <div className="flex flex-wrap gap-2">
          {hardSkills.map(s => (
            <span key={s} className={`px-3 py-1 rounded-lg text-sm font-bold transition-all duration-300 ${
              theme === "dark"
                ? "bg-[#2D4A53] text-[#AFB3B7] hover:bg-[#69818D] hover:text-[#0D1F23]"
                : "bg-[#C7B7A3] text-[#561C24] hover:bg-[#6D2932] hover:text-[#E8D8C4]"
            }`}>
              {s}
            </span>
          ))}
        </div>
      </div>
      <div>
        <h3 className={`text-md font-semibold mb-2 italic transition-colors duration-300 ${
          theme === "dark" ? "text-[#69818D]" : "text-[#6D2932]"
        }`}>Soft Skills</h3>
        <div className="flex flex-wrap gap-2">
          {softSkills.map(s => (
            <span key={s} className={`px-3 py-1 rounded-lg text-sm border transition-colors duration-300 ${
              theme === "dark"
                ? "bg-[#132E35] text-[#AFB3B7] border-[#2D4A53]"
                : "bg-[#561C24]/10 text-[#561C24] border-[#561C24]/20"
            }`}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Skills;