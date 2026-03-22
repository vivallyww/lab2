import { useEffect, useState } from "react";

function Reviews({ theme }) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/23/comments");
        const data = await response.json();
        setReviews(data.slice(0, 4));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return (
      <section className={`p-6 rounded-xl shadow-md border mb-6 transition-colors duration-300 ${
        theme === "dark" 
          ? "bg-[#0D1F23] border-[#2D4A53]" 
          : "bg-[#E8D8C4] border-[#C7B7A3]"
      }`}>
        <h2 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
          theme === "dark" ? "text-[#AFB3B7]" : "text-[#561C24]"
        }`}>Відгуки</h2>
        <p className={theme === "dark" ? "text-[#69818D]" : "text-[#561C24]"}>Завантаження...</p>
      </section>
    );
  }

  return (
    <section className={`p-6 rounded-xl shadow-md border mb-6 transition-colors duration-300 ${
      theme === "dark" 
        ? "bg-[#0D1F23] border-[#2D4A53]" 
        : "bg-[#E8D8C4] border-[#C7B7A3]"
    }`}>
      <h2 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
        theme === "dark" ? "text-[#AFB3B7]" : "text-[#561C24]"
      }`}>Відгуки</h2>
      <div className="space-y-3">
        {reviews.map((review) => (
          <div key={review.id} className={`p-3 rounded-lg transition-colors duration-300 ${
            theme === "dark" 
              ? "bg-[#132E35] border border-[#2D4A53]" 
              : "bg-[#C7B7A3]/20 border border-[#C7B7A3]"
          }`}>
            <p className={`font-bold text-sm transition-colors duration-300 ${
              theme === "dark" ? "text-[#AFB3B7]" : "text-[#561C24]"
            }`}>{review.name}</p>
            <p className={`text-xs transition-colors duration-300 ${
              theme === "dark" ? "text-[#69818D]" : "text-[#6D2932]"
            }`}>{review.email}</p>
            <p className={`text-sm mt-1 transition-colors duration-300 ${
              theme === "dark" ? "text-[#AFB3B7]" : "text-[#561C24]"
            }`}>{review.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;