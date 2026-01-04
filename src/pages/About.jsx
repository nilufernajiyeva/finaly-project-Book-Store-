import React from "react";

const About = () => {
  return (
    <div className="bg-black text-white text-bona">
      {/* Hero image */}
      <div className="relative w-full h-[60vh] md:h-screen overflow-hidden">
        <img
          src="/about.png"
          alt="About Neth BookPoint"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="text-yellow-400 text-xl sm:text-2xl font-semibold mb-4">
          About Us
        </h2>

        <p className="text-gray-300 leading-relaxed text-sm sm:text-base max-w-4xl">
          Welcome to Neth BookPoint, your trusted source for a diverse range of
          books catering to every reader’s taste. Established with the mission
          to foster a love for reading in our community, we pride ourselves on
          providing excellent service and a wide selection of books. Our journey
          began in 2012, and since then, we have grown to become a beloved
          destination for book lovers.
        </p>

        {/* Branches */}
        <h3 className="text-yellow-400 text-lg sm:text-xl font-semibold mt-12 sm:mt-16 mb-6 sm:mb-8">
          Our Branches
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 ">
          {["Kurunegala", "Kandy", "Colombo"].map((city) => (
            <div key={city}>
              <h4 className="text-base sm:text-lg font-semibold mb-2 text-[#FCEE59] text-bona">
                {city}
              </h4>
              
              {/* Sadece Main Street kısmı için özel stil */}
              <p className="text-[17px] text-[#D6CE80] text-bona">
                Main Street, City Center
              </p>
              
              {/* Diğerleri eski haliyle kalıyor */}
              <p className="text-gray-300 text-sm mt-1">
                Contact: 123-456-7890 <br />
                Operating Hours: Monday to <br />
                Saturday 9 AM – 7 PM <br />
                Sunday – Friday 9 AM – 9 PM
              </p>
              
              <p className="text-gray-400 text-sm mt-3">
                In-store shopping, Special discounts for students, Workshops,
                Study spaces
              </p>
            </div>
          ))}
        </div>

        {/* Commitment */}
        <h3 className="text-yellow-400 text-lg sm:text-xl font-semibold mt-16 sm:mt-20 mb-4">
          Our Commitment
        </h3>

        <p className="text-gray-300 leading-relaxed text-sm sm:text-base max-w-4xl">
          At Neth BookPoint, we are committed to providing a welcoming and
          inspiring environment for all book enthusiasts. Each of our branches
          is staffed with knowledgeable and friendly team members ready to
          assist you in finding the perfect book.
        </p>
      </div>
    </div>
  );
};

export default About;