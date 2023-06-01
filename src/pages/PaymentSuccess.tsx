import _React, { useState, useEffect } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

import Layout from "../components/Layout";

const PaymentSuccess = () => {
    const [orderId, setOrderId] = useState<string>("")

    useEffect(() => {
        randomOrderID()
    }, [])    

    function randomOrderID(){
        const char = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ'; 
        const length = 5; 
        let code = '';
      
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * char.length);
          const randomChar = char.charAt(randomIndex);
          code += randomChar;
        }
      
        setOrderId(code)
      }

  return (
    <Layout
      number1="bg-[#FF8A00] text-white "
      number2="bg-[#FF8A00] text-white "
      number3="bg-[#FF8A00] text-white "
    >
      <div className="md:flex w-full md:my-5">
        <div className="flex w-full md:w-2/3 md:mx-5 justify-center items-center">
          <div className="my-7 md:my-5">
            <p className="text-3xl md:text-5xl font-bold text-[#FF8A00]">Thank you</p>
            <p className="mt-10 md:mt-12 text-sm md:text-base font-semibold">Order ID: {orderId}</p>
            <p className="mt-1 text-sm md:text-base">
              Your order wil be delivered today with GO-SEND
            </p>
            <div className="text-black flex items-center mt-10 md:mt-12 text-sm md:text-base">
              <AiOutlineArrowLeft />
              <Link to={"/"}>
                <p className="hover:scale-105 transition text-sm md:text-base">Go to homepage</p>
              </Link>
            </div>
          </div>
        </div>
        <hr className="md:hidden border border-[#FF8A00]"/>
        <div className="w-full md:w-1/3 bg-white md:border-l-2 border-[#FF8A00]">
          <p className="text-2xl md:text-3xl my-3 font-bold text-[#FF8A00] md:px-5">Summary</p>
          <div className="w-full h-64 md:h-72 md:px-5">
            <p className="text-black text-xs md:text-base">10 items purchased</p>
            <hr className="my-5" />
            <p className="text-xs md:text-sm">Delivery estimation</p>
            <p className="text-green-500 text-sm md:text-base">Today by GO-SEND</p>
            <hr className="my-5" />
            <p className="text-xs md:text-sm">Payment method</p>
            <p className="text-green-500 text-sm md:text-base">Bank Transfer</p>
          </div>
          <div className="flex justify-between md:px-5">
            <p className="text-sm font-normal">Cost of goods</p>
            <p className="text-base font-bold">500,000</p>
          </div>
          <div className="flex justify-between md:px-5">
            <p className="text-sm font-normal">Dropshipping Fee</p>
            <p className="text-base font-bold">5,900</p>
          </div>
          <div className="flex justify-between md:px-5">
            <p className="text-sm font-normal">
              <span className="font-bold">GO-SEND</span> shipment
            </p>
            <p className="text-lg font-bold">15,000</p>
          </div>
          <div className="flex justify-between px-0 md:px-5 my-2 md:my-5">
            <p className="text-2xl font-bold text-[#FF8A00]">Total</p>
            <p className="text-2xl font-bold text-[#FF8A00]">505,900</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PaymentSuccess;
