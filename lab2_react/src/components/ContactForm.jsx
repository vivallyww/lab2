import { useState, useEffect } from "react";

function ContactForm({ theme }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000); 
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100] backdrop-blur-sm p-4">
      <div className={`rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative border transition-colors duration-500 ${
        theme === "dark" 
          ? "bg-[#132E35] border-[#2D4A53]" 
          : "bg-[#F5F5F5] border-[#C7B7A3]"
      }`}>
        
        <button 
          onClick={() => setIsOpen(false)}
          className={`absolute top-4 right-4 text-3xl font-light hover:scale-110 active:scale-95 transition-all z-20 leading-none ${
            theme === "dark" ? "text-white/60 hover:text-white" : "text-[#561C24] hover:opacity-70"
          }`}
          aria-label="Закрити"
        >
          &times;
        </button>
        <div className={`p-5 transition-colors duration-300 ${
          theme === "dark" ? "bg-[#0D1F23]" : "bg-[#561C24]"
        } text-white`}>
          <h2 className="text-xl font-bold text-center uppercase tracking-widest">Зворотній зв'язок</h2>
        </div>
        
        <form 
          action="https://formspree.io/f/mlgpvvjn" 
          method="POST"
          className="p-6 space-y-4"
        >
          <div>
            <label className={`block font-black text-[10px] uppercase tracking-tighter mb-1 transition-colors duration-300 ${
              theme === "dark" ? "text-[#AFB3B7]" : "text-[#561C24]"
            }`}>
              Ваше ім'я
            </label>
            <input
              type="text"
              name="name"
              required
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#561C24] transition-colors duration-300 ${
                theme === "dark"
                  ? "bg-[#0D1F23] border-[#2D4A53] text-white"
                  : "bg-white border-[#C7B7A3] text-[#561C24]"
              }`}
            />
          </div>

          <div>
            <label className={`block font-black text-[10px] uppercase tracking-tighter mb-1 transition-colors duration-300 ${
              theme === "dark" ? "text-[#AFB3B7]" : "text-[#561C24]"
            }`}>
              Ваш Email
            </label>
            <input
              type="email"
              name="email"
              required
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#561C24] transition-colors duration-300 ${
                theme === "dark"
                  ? "bg-[#0D1F23] border-[#2D4A53] text-white"
                  : "bg-white border-[#C7B7A3] text-[#561C24]"
              }`}
            />
          </div>
          <div>
            <label className={`block font-black text-[10px] uppercase tracking-tighter mb-1 transition-colors duration-300 ${
              theme === "dark" ? "text-[#AFB3B7]" : "text-[#561C24]"
            }`}>
              Ваш телефон
            </label>
            <input
              type="tel"
              name="phone"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#561C24] transition-colors duration-300 ${
                theme === "dark"
                  ? "bg-[#0D1F23] border-[#2D4A53] text-white"
                  : "bg-white border-[#C7B7A3] text-[#561C24]"
              }`}
            />
          </div>
          <div>
            <label className={`block font-black text-[10px] uppercase tracking-tighter mb-1 transition-colors duration-300 ${
              theme === "dark" ? "text-[#AFB3B7]" : "text-[#561C24]"
            }`}>
              Повідомлення
            </label>
            <textarea
              name="message"
              required
              rows="3"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#561C24] resize-none transition-colors duration-300 ${
                theme === "dark"
                  ? "bg-[#0D1F23] border-[#2D4A53] text-white"
                  : "bg-white border-[#C7B7A3] text-[#561C24]"
              }`}
            />
          </div>

          <button
            type="submit"
            className={`w-full py-3 rounded-lg font-black uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 shadow-lg ${
              theme === "dark"
                ? "bg-[#E8D8C4] text-[#0D1F23]"
                : "bg-[#561C24] text-white"
            }`}
          >
            ВІДПРАВИТИ
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;