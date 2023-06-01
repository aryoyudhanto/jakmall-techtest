import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import React, { FC, LabelHTMLAttributes } from "react";
import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri";

interface LayoutProps extends LabelHTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  number1: string;
  number2: string;
  number3: string;
}

const Layout: FC<LayoutProps> = ({ children, number1, number2, number3 }) => {
  return (
    <div className="relative">
      <div className="z-0 w-full h-screen flex flex-col overflow-auto bg-[#FFFAE6]">
        <div className="h-screen overflow-auto">
          <div className="absolute top-3 md:top-10 flex justify-center z-10 w-full">
            <div className="flex bg-[#FFFAE6] rounded-2xl h-12 w-2/3 md:w-1/4 items-center justify-center p-1" >
              <div className={`font-bold ${number1} w-5 h-5 md:w-6 md:h-6 rounded-full flex justify-center items-center mr-1 md:mr-2 text-xs md:text-sm`}>
                <RiNumber1 />
              </div>
              <Link to={"/"}>
                <p className="text-[#FF8A00] capitalize hover:scale-105 transition text-xs md:text-base">delivery</p>
              </Link>
              <div className="text-[#FF8A00] mx-1 md:mx-2 text-xs md:text-sm">
                <AiOutlineRight/>
              </div>
              <div className={`font-bold ${number2} w-5 h-5 md:w-6 md:h-6 rounded-full flex justify-center items-center mr-1 md:mr-2 text-xs md:text-sm`}>
                <RiNumber2/>
              </div>
              <Link to={"/"}>
                <p className="text-[#FF8A00] capitalize hover:scale-105 transition text-xs md:text-base">payment</p>
              </Link>
              <div className="text-[#FF8A00] mx-1 md:mx-2 text-xs md:text-sm">
                <AiOutlineRight />
              </div>
              <div className={`font-bold ${number3} w-5 h-5 md:w-6 md:h-6 rounded-full flex justify-center items-center mr-1 md:mr-2 text-xs md:text-sm`}>
                <RiNumber3  />
              </div>{" "}
              <Link to={"/"}>
                <p className="text-[#FF8A00] capitalize hover:scale-105 transition text-xs md:text-base">finish</p>
              </Link>
            </div>
          </div>
          <div className="absolute w-screen h-full">
            <div className="bg-white my-7 mx-5 md:my-14 md:mx-20 rounded-2xl p-7">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;