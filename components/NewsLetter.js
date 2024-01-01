import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center justify-center m-auto h-[40vw] px-[140px] py-0 mb-[100px] gap-[30px] bg-gradient-to-b from-green-200 mt-14">
      <h1 className="text-[#454545] font-bold text-6xl">
        Get Exclusive Offers on Your Email
      </h1>
      <p className="text-[#454545]">
        Subscribe to our newsletter and stay updated
      </p>
      <div className="flex items-center justify-between bg-white w-[730px] h-[70px] border border-[#e3e3e3] rounded-full">
        <input
          type="email"
          className="w-[500px] ml-[32px] border-none outline-none text-[#343333]"
          placeholder="Your Email id"
        />
        <button className="w-[210px] h-[70px] rounded-full bg-black cursor-pointer text-white">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
