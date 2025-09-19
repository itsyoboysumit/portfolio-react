import React from 'react'
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex flex-col gap-10 md:flex-row items-center border-b border-b-black font-titleFont"
    >
      {/* Left Banner */}
      <div className="w-full md:w-[60%]  lg:w-1/2 transition-all duration-500">
        <LeftBanner />
      </div>

      {/* Right Banner */}
      <div className="w-full md:w-[40%]  lg:w-1/2 transition-all duration-500 flex lg:justify-center">
        <RightBanner />
      </div>
    </section>
  );
}

export default Banner;
