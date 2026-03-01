function Skills() {
  const hardSkills = ["Figma", "Canva", "Photoshop", "HTML", "CSS", "PHP", "C", "C#"];
  const softSkills = ["Командна робота", "Уважність", "Відповідальність", "Швидке навчання"];

  return (
    <section className="bg-[#E8D8C4] p-6 rounded-xl shadow-md border border-[#C7B7A3] mb-6">
      <h2 className="text-xl font-bold text-[#561C24] mb-4">Skills</h2>
      <div className="mb-4">
        <h3 className="text-md font-semibold text-[#6D2932] mb-2 italic">Hard Skills</h3>
        <div className="flex flex-wrap gap-2">
          {hardSkills.map(s => (
            <span key={s} className="bg-[#C7B7A3] text-[#561C24] px-3 py-1 rounded-lg text-sm font-bold border border-[#6D2932]/20 hover:bg-[#6D2932] hover:text-[#E8D8C4] transition-colors">
              {s}
            </span>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-md font-semibold text-[#6D2932] mb-2 italic">Soft Skills</h3>
        <div className="flex flex-wrap gap-2">
          {softSkills.map(s => (
            <span key={s} className="bg-[#561C24]/10 text-[#561C24] px-3 py-1 rounded-lg text-sm border border-[#561C24]/20">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Skills;