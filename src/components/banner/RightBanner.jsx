import React from 'react';
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      {/* Background box */}
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center z-0"></div>

      {/* Foreground image */}
      <img
        className="w-[350px] h-[370px]  translate-x-7 opacity-90  md:w-[320px] md:h-[380px] md:translate-x-10 lgl:w-[500px] lgl:h-[600px] z-10 relative lg:translate-x-10"
        src={bannerImg}
        alt="bannerImg"
      />
    </div>
  );
};

export default RightBanner;
