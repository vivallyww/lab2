function Experience({ theme }) {
  return (
    <section className={`p-6 rounded-xl shadow-md border mb-6 transition-colors duration-300 ${
      theme === "dark" 
        ? "bg-[#0D1F23] border-[#2D4A53]" 
        : "bg-[#E8D8C4] border-[#C7B7A3]"
    }`}>
      <h2 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
        theme === "dark" ? "text-[#AFB3B7]" : "text-[#561C24]"
      }`}>Work Experience</h2>
      <article>
        <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
          <h3 className={`text-lg font-bold transition-colors duration-300 ${
            theme === "dark" ? "text-[#69818D]" : "text-[#6D2932]"
          }`}>Веб-дизайнер</h3>
          <span className={`text-xs font-bold px-2 py-1 rounded transition-colors duration-300 ${
            theme === "dark"
              ? "bg-[#2D4A53] text-[#AFB3B7]"
              : "bg-[#561C24] text-[#E8D8C4]"
          }`}>09.2024 – 01.2025</span>
        </div>
        <ul className={`list-disc list-inside space-y-1 transition-colors duration-300 ${
          theme === "dark" ? "text-[#AFB3B7]" : "text-[#561C24]"
        }`}>
          <li>Створення прототипу сайту в Figma</li>
          <li>Розроблення адаптивного дизайну</li>
          <li>Робота над UI-компонентами</li>
        </ul>
      </article>
    </section>
  );
}
export default Experience;