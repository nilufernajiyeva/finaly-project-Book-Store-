import React, { useState } from "react";
import { FaPlus, FaBookOpen, FaMoneyBillWave, FaChartLine } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Seller = () => {
  const navigate = useNavigate();

  const [myBooks] = useState([
    { id: 1, title: "Thunmanhandiya", sales: 12, price: 900, status: "Active" },
    { id: 2, title: "Manikkawatha", sales: 8, price: 750, status: "Pending" },
  ]);

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "Novel",
  });

  const handlePublish = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.price) return;
    localStorage.setItem("pendingBook", JSON.stringify(formData));
    navigate("/login");
  };

  const statusColor = (s) =>
    s === "Active"
      ? "bg-emerald-500/15 text-emerald-400"
      : "bg-amber-500/15 text-amber-400";

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#050505] via-[#0d1b3e] to-black text-white">

      {/* HEADER */}
      <section className="py-20 text-center">
        <h1 className="text-5xl font-extrabold tracking-widest text-[#CC9600]">
          Seller Dashboard
        </h1>
        <p className="text-gray-400 mt-3 italic">
          Control • Publish • Earn
        </p>
      </section>

      {/* STATS */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 -mt-10">
        {[
          { icon: <FaBookOpen />, label: "Total Books", value: "2" },
          { icon: <FaChartLine />, label: "Total Sales", value: "20" },
          { icon: <FaMoneyBillWave />, label: "Revenue", value: "Rs. 1650" },
        ].map((s, i) => (
          <div
            key={i}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 shadow-xl hover:scale-105 transition"
          >
            <div className="text-[#CC9600] text-3xl mb-3">{s.icon}</div>
            <p className="text-gray-400 text-sm uppercase">{s.label}</p>
            <h3 className="text-3xl font-black mt-1">{s.value}</h3>
          </div>
        ))}
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* ADD BOOK */}
        <div className="backdrop-blur-2xl bg-white/5 border border-white/10 p-8 rounded-[40px] shadow-2xl">
          <h3 className="flex items-center gap-3 text-xl font-bold text-[#CC9600] mb-8">
            <FaPlus /> Publish New Book
          </h3>

          <form className="space-y-5" onSubmit={handlePublish}>
            <input
              placeholder="Book title"
              className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:border-[#CC9600] outline-none"
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />

            <input
              type="number"
              placeholder="Price (Rs.)"
              className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:border-[#CC9600] outline-none"
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            />

            <select
              className="w-full p-4 rounded-xl bg-black/40 border border-white/10 text-gray-300"
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            >
              <option>Novel</option>
              <option>Translation</option>
              <option>Kids</option>
            </select>

            <button className="w-full bg-gradient-to-r from-[#CC9600] to-[#ffcc33] text-black font-black py-4 rounded-xl hover:scale-105 transition">
              Publish
            </button>
          </form>
        </div>

        {/* BOOK LIST */}
        <div className="lg:col-span-2 space-y-6">
          {myBooks.map((b) => (
            <div
              key={b.id}
              className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 shadow-xl hover:scale-[1.02] transition flex justify-between"
            >
              <div className="flex gap-6">
                <div className="w-20 h-28 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900" />
                <div>
                  <h4 className="text-xl font-bold group-hover:text-[#CC9600] transition">
                    {b.title}
                  </h4>
                  <p className="font-black text-lg">Rs. {b.price}</p>
                  <span
                    className={`inline-block mt-2 px-3 py-1 text-xs rounded-full font-bold ${statusColor(
                      b.status
                    )}`}
                  >
                    {b.status}
                  </span>
                </div>
              </div>

              <div className="text-right">
                <p className="text-3xl font-black">{b.sales}</p>
                <p className="text-xs text-gray-400 uppercase">Sales</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Seller;
