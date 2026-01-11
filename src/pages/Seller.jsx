import React, { useState } from 'react';
import { FaPlus, FaBook, FaMoneyBillWave, FaChartLine } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Seller = () => {
  const navigate = useNavigate();
  const [myBooks] = useState([
    { id: 1, title: "Thunmanhandiya", sales: 12, price: 900, status: "Active" },
    { id: 2, title: "Manikkawatha", sales: 8, price: 750, status: "Pending" },
  ]);
  const [formData, setFormData] = useState({ 
    title: '', 
    price: '', 
    category: 'Novel' 
  });

  const handlePublish = (e) => {
    e.preventDefault();
    
    if (!formData.title || !formData.price) {
      alert("Please fill in all fields!");
      return;
    }
    const pendingData = {
      ...formData,
      status: "Pending",
      sales: 0,
      id: Date.now()
    };
    
    localStorage.setItem('pendingBook', JSON.stringify(pendingData));
    alert("Book details saved! Please login to publish.");
    navigate('/login');
  };

  return (
    <main className="min-h-screen bg-white font-bona pb-20">
      <section className="w-full bg-[#0d1b3e] py-16 px-6 text-center text-white relative">
        <h1 className="text-4xl md:text-5xl font-bold text-[#CC9600] mb-4 uppercase tracking-widest">
          Seller Dashboard
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto italic">
          Manage your books and track your sales.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <div className="bg-[#050505] text-white p-8 rounded-[40px] shadow-2xl sticky top-24 border border-gray-800">
              <h3 className="text-2xl font-bold text-[#CC9600] mb-8 flex items-center gap-3 uppercase">
                <FaPlus size={20} /> Add New Book
              </h3>
              
              <form className="space-y-5" onSubmit={handlePublish}>
                <div>
                  <label className="text-sm text-gray-400 mb-2 block uppercase font-bold">Book Title</label>
                  <input 
                    type="text" 
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    className="w-full bg-white/10 border border-white/20 rounded-xl p-4 outline-none focus:border-[#CC9600] text-white" 
                    placeholder="Book Name" 
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-400 mb-2 block uppercase font-bold">Price (Rs.)</label>
                  <input 
                    type="number" 
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                    className="w-full bg-white/10 border border-white/20 rounded-xl p-4 outline-none focus:border-[#CC9600] text-white" 
                    placeholder="900" 
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-400 mb-2 block uppercase font-bold">Category</label>
                  <select 
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="w-full bg-white/10 border border-white/20 rounded-xl p-4 outline-none focus:border-[#CC9600] text-gray-400"
                  >
                    <option value="Novel">Novel</option>
                    <option value="Translation">Translation</option>
                    <option value="Kids">Kids' Stories</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-[#CC9600] text-black font-black py-4 rounded-xl mt-4 hover:scale-105 transition-all uppercase tracking-widest">
                  Publish Book
                </button>
              </form>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-black mb-8 border-b-4 border-[#CC9600] inline-block pb-2">
              My Active Listings
            </h3>
            <div className="space-y-6">
              {myBooks.map((book) => (
                <div key={book.id} className="bg-white border border-gray-100 p-6 rounded-[30px] shadow-md flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-28 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                      <img src="/placeholder-book.png" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{book.title}</h4>
                      <p className="text-[#CC9600] font-black italic text-lg">Rs. {book.price}/=</p>
                      <span className="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full font-bold uppercase mt-2 inline-block">
                        {book.status}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 text-sm font-bold uppercase">Sales</p>
                    <p className="text-2xl font-black text-black">{book.sales}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Seller;