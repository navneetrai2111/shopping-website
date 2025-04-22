import React from "react";

interface PropsType {
  img: string;
  title: string;
  mainTitle: string;
  price: string;
}

const Slides: React.FC<PropsType> = ({ img, title, mainTitle, price }) => {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
      <img
        src={img}
        alt={title}
        className="w-full h-full object-fill rounded-lg"
      />
      <div
        className="absolute left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[350px]
        top-[50%] -translate-y-[50%] space-y-2 lg:space-y-4 bg-[#ffffffa2] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none"
      >
        <h3 className="text-red-400 text-[24px] lg:text-[28px] font-semibold">
          {title}
        </h3>
        <h2 className="text-black text-[20px] lg:text-[24px] font-bold">
          {mainTitle}
        </h2>
        <p className="text-gray-700 text-[16px] lg:text-[18px] font-medium">
          {price}
        </p>
      </div>
    </div>
  );
};

export default Slides;
