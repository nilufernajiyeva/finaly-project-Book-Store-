import React from "react";

const DeliveryTeam = () => {
  const sections = [
    {
      title: "Fast City Express",
      desc: "Fast, reliable urban delivery designed to move quietly and efficiently through the city.",
      location: "Main Street · Central Hub",
      img: "/deliveryteam1.jpg",
    },
    {
      title: "Safe Suburban Logistics",
      desc: "Carefully handled deliveries beyond the city, where patience and protection matter most.",
      location: "Outer Circle · Distribution Point",
      img: "/delivery2.jpg",
    },
   
  ];

  return (
    <section className="bg-black text-white font-bona">
      {/* HEADER */}
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold leading-snug max-w-3xl text-[#FCEE59]">
          Delivery designed
          <br />
          <span className="text-white font-medium">with intention</span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-xl leading-relaxed text-[17px]">
          Every delivery follows a considered structure — nothing oversized, nothing rushed.
        </p>
      </div>

      {/* SECTIONS */}
      <div className="max-w-6xl mx-auto px-6 space-y-28">
        {sections.map((item, index) => (
          <div key={index} className="grid md:grid-cols-12 gap-12 items-center">
            {/* IMAGE */}
            <div className={`md:col-span-5 ${index % 2 !== 0 ? "md:col-start-8" : ""}`}>
              <div className="relative group">
                {/* FRAME */}
                <div className="absolute inset-0 border border-[#FCEE59]/30 translate-x-4 translate-y-4 z-0" />

                {/* IMAGE */}
                <div className="relative h-[220px] sm:h-[260px] md:h-[300px] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                  />
                  {/* OVERLAY TEXT */}
                  <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h3 className="text-yellow-400 font-bold text-sm uppercase tracking-[0.35em]">
                      {item.title}
                    </h3>
                    <p className="text-[#D6CE80] italic text-sm mt-1">{item.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* TEXT */}
            <div className={`md:col-span-6 ${index % 2 !== 0 ? "md:col-start-1" : "md:col-start-7"}`}>
              <div className="space-y-4 max-w-md">
                <h2 className="text-[#FCEE59] uppercase tracking-[0.35em] text-sm font-bold">
                  {item.title}
                </h2>

                <p className="text-[#D6CE80] italic text-[15px]">
                  {item.location}
                </p>

                <p className="text-gray-300 leading-relaxed text-[16px]">
                  {item.desc}
                </p>

                <button className="border border-yellow-400 text-yellow-400 px-6 py-2 mt-2 hover:bg-yellow-400 hover:text-black transition-all">
                  Contact Courier
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

     
    </section>
  );
};

export default DeliveryTeam;
 