import React from "react";

function Button(props: { children: string }) {
  return (
    <button className="bg-[#A02279] text-white py-2 md:py-4  px-6 md:px-10 rounded-[6px] md:ml-12 sm:mr-5 min-[320px]:text-base md:text-2xl   min-[320px]:absolute md:static right-16 top-8  ">
      {props.children}
    </button>
  );
}

export default Button;
