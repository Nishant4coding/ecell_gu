import React, { useEffect, useState } from "react";

export default function Avirat() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    function counter(id, start, end, duration, updateFunction) {
      let current = start;
      const range = end - start;
      const increment = end > start ? 1 : -1;
      const step = Math.abs(Math.floor(duration / range));

      function updateCount() {
        if (current !== end) {
          current += increment;
          updateFunction(current);
          requestAnimationFrame(updateCount);
        }
      }

      updateCount();
    }

    counter("count1", 0, 100, 100, setCount1);
    counter("count2", 0,  10, 2000, setCount2);
    counter("count3", 0, 20, 3000, setCount3);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="w-100% h-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        className=" inset-0 w-full h-screen object-cover"
      >
        <source
          src="https://ik.imagekit.io/xzx78nph7/Avirat-intro.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-opacity-50 z-10">
        <img src="/galgotaisLogo.png" alt="" className="z-10" />
        <div className="font-montserrat font-extrabold text-white text-7xl">
          E-Cell
        </div>
        <span className="font-montserrat font-semibold text-white text-3xl">
          presents
        </span>
        <img src="/Avirat/text-avirat.png" alt="" />
        <div className="font-montserrat font-extrabold text-orange-500 text-6xl mt-20">BUSINESS</div>
        <span className="font-montserrat font-extrabold text-white text-3xl">BHARAT EXPO 2023</span>
      </div>
    </div>
      <div className=" items-center justify-center  fc fcc gap-10 lg:gap-40 text-orange-500 text-6xl p-5 font-extrabold bg-white flex flex-col md:flex-row">
        <div className="   font-Poppins leading-[0.8em]">
          {count1}+
          <br />
          <span className="text-[0.5em] font-bold font-Plus Jakarta Sans leading-relaxed">
            Startups
          </span>
        </div>
        <div className="  font-Poppins leading-[0.8em]">
          {count2}+
          <br />
          <span className="text-[0.5em] font-bold  font-Plus Jakarta Sans leading-relaxed">
            Speakers
          </span>
        </div>
        <div className=" font-Poppins leading-[0.8em]">
          {count3}+
          <br />
          <span className="text-[0.5em] font-bold font-Plus Jakarta Sans leading-relaxed">
            Awards
          </span>
        </div>
      </div>
    </div>
  );
}
