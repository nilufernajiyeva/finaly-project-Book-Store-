import React, { useState } from "react";
import BookCard from "../common/BookCard";
import { useCart } from "../context/CartContext";

const Shop = () => {
  const { setIsCartOpen } = useCart();

  // 1. Data Strukturu (Bunu gələcəkdə API-dan çəkəcəksən)
  const [books, setBooks] = useState([
    { _id: "1", title: "Thunmanhandiya", author: "Manjula", category: "Novel", price: 900, imageUrl: "/book1.png" },
    { _id: "2", title: "Manikkawatha", author: "Mahinda", category: "Novel", price: 750, imageUrl: "/book2.png" },
    { _id: "3", title: "The Book Thief", author: "Markus", category: "Translations", price: 850, imageUrl: "/book3.png" },
    { _id: "4", title: "Kids Story", author: "Sunil", category: "Kids' Stories", price: 600, imageUrl: "/book4.png" },
  ]);

  // 2. State-lər (Filtr və Axtarış üçün)
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["All", "Novel", "Translations", "Kids' Stories"];

  // 3. Filtrləmə Məntiqi
  const filteredBooks = books.filter((book) => {
    const matchesCategory = selectedCategory === "All" || book.category === selectedCategory;
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="shop-container pt-24 px-10">
      
      {/* BAŞLIQ HİSSƏSİ (Header) */}
      <section className="shop-header mb-10 bg-black text-white p-12">
        <h1 className="text-5xl font-bold">Explore All Books Here</h1>
      </section>

      {/* FİLTR VƏ AXTARIŞ PANELİ (Sidebar və ya Topbar) */}
      <section className="filters-section mb-10">
        <div className="flex flex-col md:flex-row gap-6">
          
          {/* Axtarış Inputu */}
          <input 
            type="text" 
            placeholder="Search books..." 
            className="p-3 border border-gray-300 rounded"
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Kateqoriya Seçimləri */}
          <div className="categories-grid grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <div 
                key={cat} 
                onClick={() => setSelectedCategory(cat)}
                className={`cursor-pointer p-4 border rounded flex items-center gap-2 ${selectedCategory === cat ? 'bg-gray-100 border-black' : 'bg-white'}`}
              >
                <input type="checkbox" checked={selectedCategory === cat} readOnly />
                <span>{cat}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* MƏLUMAT SƏTRİ */}
      <div className="info-bar mb-6 text-gray-500">
        Filtered Books: {selectedCategory} ({filteredBooks.length} items found)
      </div>

      {/* KİTABLARIN SİYAHISI (Grid) */}
      <section className="books-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredBooks.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </section>

      {/* SƏBƏT DÜYMƏSİ (Floating Action Button) */}
      <button 
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-10 right-10 bg-yellow-600 p-5 rounded-full shadow-2xl text-white"
      >
        Cart
      </button>

    </div>
  );
};

export default Shop;