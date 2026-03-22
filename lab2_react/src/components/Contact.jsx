function Contact({ theme }) {
  return (
    <section className={`p-6 rounded-xl shadow-md border mb-6 transition-colors duration-300 ${
      theme === "dark" 
        ? "bg-[#0D1F23] border-[#2D4A53]" 
        : "bg-[#E8D8C4] border-[#C7B7A3]"
    }`}>
      <h2 className={`text-xl font-bold mb-3 border-b pb-1 transition-colors duration-300 ${
        theme === "dark" 
          ? "text-[#AFB3B7] border-[#69818D]" 
          : "text-[#561C24] border-[#6D2932]"
      }`}>Contact</h2>
      <div className={`space-y-1 transition-colors duration-300 ${
        theme === "dark" ? "text-[#AFB3B7]" : "text-[#561C24]"
      }`}>
        <p><span className="font-bold">Phone:</span> +380686624463</p>
        <p><span className="font-bold">Email:</span> lleasx@gmail.com</p>
      </div>
    </section>
  );
}
export default Contact;