import React from "react";
import telegram from "../img/telegram.png";
import instagram from "../img/instagram.png";

const Footer = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-3xl font-semibold text-white mb-2">
              TopTest.uz
            </h1>
            <p className="text-sm text-blue-100">
              Siz uchun eng yaxshi test va bilim sinovlari platformasi.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-center lg:text-right">
            Created by Abdusattorov
          </h2>
          <div className="flex justify-center lg:justify-start items-center space-x-6">
            <a
              href="https://t.me/Abdusattorov_Asilbek"
              className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-400 to-green-400 rounded-full shadow-md transition-all duration-300 hover:scale-105"
            >
              <img className="w-6 h-6" src={telegram} alt="telegram-logo" />
            </a>
            <a
              href="https://www.instagram.com/abdusattorov_1307/?__pwa=1#"
              className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full shadow-md transition-all duration-300 hover:scale-105"
            >
              <img className="w-6 h-6" src={instagram} alt="instagram-logo" />
            </a>
            
            <div className="flex justify-center">
              <button
                onClick={scrollToTop}
                className="relative flex items-center justify-center w-12 h-12 bg-transparent text-red-700 border-[3px] border-blue-900 rounded-full shadow-md transition-all duration-300 hover:bg-blue-800 hover:scale-105"
              >
                  <div className="absolute top-2 text-6xl">&#770;</div>
              </button>
            </div>
          </div>
        </div>
        {/* Scroll to top button */}
        {/* <div className="mt-6 flex justify-center">
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center w-12 h-12 bg-blue-700 text-white rounded-full shadow-md transition-all duration-300 hover:bg-blue-800 hover:scale-105"
          >
            <span className="text-5xl">&#770;</span>
          </button>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
