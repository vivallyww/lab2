function Education({ theme }) {
  return (
    <section className={`p-6 rounded-xl shadow-md border mb-6 transform transition-all duration-300 hover:translate-y-[-4px] ${
      theme === "dark" 
        ? "bg-[#0D1F23] border-[#2D4A53]" 
        : "bg-[#E8D8C4] border-[#C7B7A3]"
    }`}>
      <h2 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
        theme === "dark" ? "text-[#AFB3B7]" : "text-[#561C24]"
      }`}>Education</h2>
      <p className={`font-mono text-sm transition-colors duration-300 ${
        theme === "dark" ? "text-[#69818D]" : "text-[#6D2932]"
      }`}>2023–2027</p>
      <p className={`text-lg font-bold transition-colors duration-300 ${
        theme === "dark" ? "text-[#AFB3B7]" : "text-[#561C24]"
      }`}>Львівська політехніка</p>
      <p className={`transition-colors duration-300 ${
        theme === "dark" ? "text-[#69818D]" : "text-[#6D2932]"
      }`}>Кібербезпека</p>
    </section>
  );
}
export default Education;