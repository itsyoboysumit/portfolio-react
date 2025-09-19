import React from "react";
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className=" lg:w-[73%] lgl:w-[65%] flex justify-center items-center relative">
      <img
        src={bannerImg}
        alt="banner"
        className="object-contain rounded-xl shadow-shadowOne " 
      />
    </div>
  );
};

export default RightBanner;
