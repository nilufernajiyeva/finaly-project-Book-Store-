import React from "react";

const Notifications = () => {
  return (
    <main className="flex-1 bg-white font-serif">
      <div className="w-full py-12 md:py-20 border-b border-gray-100 px-6">
        <h1 className="text-center text-[22px] md:text-[32px] font-bold text-black leading-tight">
          Notifications for <span className="text-[#CC9600]">user1@bookpoint.com</span>
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
        <h2 className="text-[20px] md:text-[26px] font-medium text-[#1A1A1A] mb-10">
          No messages found.
        </h2>

        <div className="max-w-[400px] w-full flex justify-center">
          <img 
            src="/cat.png" 
            alt="Notification Illustration" 
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </main>
  );
};

export default Notifications;