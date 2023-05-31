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
          <div className="absolute top-10 flex justify-center z-10 w-full">
            <div className="flex bg-[#FFFAE6] rounded-2xl h-12 w-1/4 items-center justify-center">
              <div className={`font-bold ${number1} w-6 h-6 rounded-full flex justify-center items-center mr-2`}>
                <RiNumber1 size={13} />
              </div>
              <Link to={"/"}>
                <p className="text-[#FF8A00] capitalize hover:scale-105 transition">delivery</p>
              </Link>
              <div className="text-[#FF8A00] mx-2">
                <AiOutlineRight size={12} />
              </div>
              <div className={`font-bold ${number2} w-6 h-6 rounded-full flex justify-center items-center mr-2`}>
                <RiNumber2 size={13} />
              </div>
              <Link to={"/"}>
                <p className="text-[#FF8A00] capitalize hover:scale-105 transition">payment</p>
              </Link>
              <div className="text-[#FF8A00] mx-2">
                <AiOutlineRight size={12} />
              </div>
              <div className={`font-bold ${number3} w-6 h-6 rounded-full flex justify-center items-center mr-2`}>
                <RiNumber3 size={13} />
              </div>{" "}
              <Link to={"/"}>
                <p className="text-[#FF8A00] capitalize hover:scale-105 transition">finish</p>
              </Link>
            </div>
          </div>
          <div className="absolute w-screen h-full">
            <div className="bg-white my-14 mx-20 rounded-2xl p-7">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
