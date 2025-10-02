import React, { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/contact", form);
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("Error sending message.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 mt-10 sm:mt-14 md:mt-16">
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-md p-8 rounded-xl w-full max-w-lg" // Changed max-w-md to max-w-lg
      >
        <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
        <input
          className="w-full mb-4 p-3 rounded bg-white/20 border border-white/30 focus:outline-none focus:border-purple-400 transition"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="w-full mb-4 p-3 rounded bg-white/20 border border-white/30 focus:outline-none focus:border-purple-400 transition"
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <textarea
          className="w-full mb-4 p-3 rounded bg-white/20 border border-white/30 focus:outline-none focus:border-purple-400 transition"
          placeholder="Message"
          rows="5"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 transition rounded py-3 font-semibold"
        >
          Send
        </button>
        {status && <p className="mt-4 text-center text-sm">{status}</p>}
      </form>
    </div>
  );
}