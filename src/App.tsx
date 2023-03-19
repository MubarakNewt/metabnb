import React from "react";
import "./App.css";
import "./index.css";
import img1 from "./img/Group4028.png";
import img2 from "./img/Group1.png";
import img3 from "./img/Group4038.png";
import img4 from "./img/Subtract.png";
import frame1 from "./img/Frame1.png";
import frame2 from "./img/Frame2.png";
import frame3 from "./img/Frame3.png";
import frame4 from "./img/Frame4.png";
import frame5 from "./img/Frame5.png";
import frame6 from "./img/Frame6.png";
import frame7 from "./img/Frame7.png";
import frame8 from "./img/Frame8.png";
import frame9 from "./img/Frame9.png";

import star from "./img/Star.png";

import Nav from "./components/Nav";
// import img1 from "./img/Vector.png";

function App() {
  const imgArr = [
    frame1,
    frame2,
    frame3,
    frame4,
    frame5,
    frame6,
    frame7,
    frame8,
  ];

  return (
    <div className="text-neutral-800 bg-slate-100  w-screen  md:pt-20 pt-5  md:mt-[80px] mt-[40px]  ">
      <Nav />
      <main className="">
        <div className="flex md:flex-row flex-col justify-between w-full md:px-[20rem] px-10">
          <div className="flex flex-col md:w-3/5 w-full md:px-0 px-10 md:pt-20 pt-10">
            <h1 className=" text-4xl md:text-9xl md:mb-0 mb-5">
              Rent a <span className="text-[#A02279]">Place</span> away from{" "}
              <span className="text-[#A02279]">Home</span> in the{" "}
              <span className="text-[#A02279]">Metaverse</span>{" "}
            </h1>
            <p className="text-1sm md:text-1xl">
              we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone
            </p>
            <div className="md:pt-10 pt-5 w-full flex justify-center">
              <input
                type="text"
                placeholder="search for location"
                className="md:h-[4rem] h-10 md:w-[45rem] w-[20rem] md:px-5 px-2 md:py-2 py-2 outline-none"
              />
              <button className="h-10  md:h-[4rem] md:w-[20rem] rounded px-3 md:px-6 py-2 text-white bg-[#A02279]">
                Search
              </button>
            </div>
          </div>
          <div className="flex justify-center md:pt-0 pt-10">
            <img src={img1} className="h-[20rem] md:h-[50rem]"></img>
          </div>
        </div>
        <div className="md:h-20 h-10 w-screen  bg-[#A02279] mt-20 flex justify-around items-center">
          <div className="flex items-center">
            <img src={img2} alt="image" className="md:h-12 h-8" />
            <p className="text-white md:text-4xl text-1xl">MBToken</p>
          </div>
          <div className="flex items-center">
            <img src={img3} alt="image" className="md:h-12 h-8" />
            <p className="text-white md:text-4xl text-1xl">METAMASK</p>
          </div>
          <div className="flex items-center">
            <img src={img4} alt="image" className="md:h-12 h-8" />
            <p className="text-white md:text-4xl text-1xl">openSea</p>
          </div>
        </div>
        <div>
          <h2 className="md:text-6xl text-2xl flex justify-center font-bold mt-10">
            Inspiration for your next adventure
          </h2>
          <div className="flex justify-center flex-row flex-wrap mt-10">
            {imgArr.map((img) => (
              <div className="border-2 border-[#D7D7D7] rounded-[15px] mx-5 my-5 p-5">
                <img
                  src={img}
                  alt="houses"
                  className="md:h-[30rem] h-[20rem]"
                ></img>
                <div className="flex md:flex-row flex-col pt-5">
                  <div className="flex flex-col md:w-2/5">
                    <p className="">Desert King</p>
                    <p>2345km away</p>
                    <div className="flex flex-row mt-1">
                      <img src={star} alt="" className="h-[12px] w-[12px] " />
                      <img src={star} alt="" className="h-[12px] w-[12px] " />
                      <img src={star} alt="" className="h-[12px] w-[12px] " />
                      <img src={star} alt="" className="h-[12px] w-[12px] " />
                      <img src={star} alt="" className="h-[12px] w-[12px] " />
                    </div>
                  </div>
                  <div className="flex flex-col flex-wrap md:w-3/5">
                    <p>1MBT per night</p>
                    <p>available for two weeks stay</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-row bg-[#A02279] px-[10rem] py-[5rem] place-items-center justify-between">
          <div className="flex flex-col w-2/5">
            <h2 className="text-6xl text-white mb-10">Metabnb NFTs</h2>
            <p className=" text-white">
              Discover our NFT gift cards collection. Loyal customers gets
              amazing gift cards which are traded as NFTs. These NFTs gives our
              cutomer access to loads of our exclusive services.
            </p>
            <button className="mt-10 h-10  md:h-[4rem] md:w-[15rem] rounded-[6px] px-3 md:px-6 py-2 text-[#A02279] bg-white">
                Search
              </button>
          </div>
          <img src={frame9} alt="" className="h-[50rem]" />
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
