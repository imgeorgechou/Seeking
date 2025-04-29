import React from "react";

export const Banner = ({ src }) => {
  return (
    <div className="lg:w-[95%] lg:m-auto lg:mt-10">
      <img src={src} alt="banner" />
    </div>
  );
};
