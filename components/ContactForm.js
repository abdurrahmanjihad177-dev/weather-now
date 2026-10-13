"use client";
import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    e.target.reset();
  }

  const input = "w-full border rounded px-3 py-2 focus:outline-sky-500";

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow">
      <input className={input} type="text" placeholder="Your Name" required />
      <input className={input} type="email" placeholder="Your Email" required />
      <textarea className={input} rows="5" placeholder="Your Message" required />
      <button className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded">
        Send Message
      </button>
      {sent && <p className="text-green-600">✅ আপনার মেসেজ পাঠানো হয়েছে!</p>}
    </form>
  );
}
