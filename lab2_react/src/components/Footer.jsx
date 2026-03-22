import { useEffect } from "react";

function Footer({ theme }) {

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;

    localStorage.setItem("userAgent", userAgent);
    localStorage.setItem("platform", platform);
  }, []);

  return (
    <footer className={`text-center py-8 text-sm opacity-80 transition-colors duration-300 ${
      theme === "dark" ? "text-[#69818D]" : "text-[#6D2932]"
    }`}>
      <p>© 2026 Olesia Samodielova</p>

      <div className="mt-2 text-xs">
        <p><b>Browser:</b> {localStorage.getItem("userAgent")}</p>
        <p><b>OS:</b> {localStorage.getItem("platform")}</p>
      </div>
    </footer>
  );
}

export default Footer;