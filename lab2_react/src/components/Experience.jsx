function Experience() {
  return (
    <section className="bg-[#E8D8C4] p-6 rounded-xl shadow-md border border-[#C7B7A3] mb-6">
      <h2 className="text-xl font-bold text-[#561C24] mb-4">Work Experience</h2>
      <article>
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-bold text-[#6D2932]">Веб-дизайнер</h3>
          <span className="text-xs font-bold bg-[#561C24] text-[#E8D8C4] px-2 py-1 rounded">09.2024 – 01.2025</span>
        </div>
        <ul className="list-disc list-inside text-[#561C24] space-y-1">
          <li>Створення прототипу сайту в Figma</li>
          <li>Розроблення адаптивного дизайну</li>
          <li>Робота над UI-компонентами</li>
        </ul>
      </article>
    </section>
  );
}
export default Experience;