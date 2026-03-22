function Languages({ theme }) {
  return (
    <section className={`p-6 rounded-xl shadow-md border mb-6 transition-colors duration-300 ${
      theme === "dark" 
        ? "bg-[#0D1F23] border-[#2D4A53]" 
        : "bg-[#E8D8C4] border-[#C7B7A3]"
    }`}>
      <h2 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
        theme === "dark" ? "text-[#AFB3B7]" : "text-[#561C24]"
      }`}>Languages</h2>
      <div className={`transition-colors duration-300 ${
        theme === "dark" ? "text-[#AFB3B7]" : "text-[#561C24]"
      }`}>
        <p><span className="font-bold">Англійська:</span> B1</p>
        <p><span className="font-bold">Українська:</span> Рідна</p>
      </div>
    </section>
  );
}
export default Languages;