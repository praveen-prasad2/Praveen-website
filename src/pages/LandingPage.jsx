import React from "react";
import { SiInstagram } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";

function LandingPage() {
  return (
    <div className="w-screen h-screen bg-[url('/bg.jpeg')] bg-cover flex items-center justify-center">
      <div class="absolute inset-0 bg-black bg-opacity-90"></div>
      <div class="relative z-10 p-4">
        <div className=" text-white poppins-semibold text-[40px] py-10">
          Coming Soon<span className="animate-blink">.</span>
          <span className="animate-blink animation-delay-150">.</span>
          <span className="animate-blink animation-delay-300">.</span>
        </div>
        <div className="flex flex-row items-center gap-2 justify-center text-[20px] poppins-regular">
          <p className="text-white">Follow on</p>
          <a href="https://www.instagram.com/uglymallu/">
            <SiInstagram className="text-white text-[20px]" />
          </a>
          <a href="https://x.com/uglymallu">
            <BsTwitterX className="text-white text-[20px]" />
          </a>
          <a href="https://www.linkedin.com/in/praveen-prasad-14764b231/">
            <IoLogoLinkedin className="text-white text-[20px]" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
