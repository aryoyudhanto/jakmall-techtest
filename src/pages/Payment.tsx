import { Link, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import _React, { useState } from "react";

import Layout from "../components/Layout";

const Payment = () => {
  const [colorShip1, setColorShip1] = useState<string>("");
  const [colorShip2, setColorShip2] = useState<string>("");
  const [colorShip3, setColorShip3] = useState<string>("");

  const [colorPay1, setColorPay1] = useState<string>("");
  const [colorPay2, setColorPay2] = useState<string>("");
  const [colorPay3, setColorPay3] = useState<string>("");

  const [shipMet, setShipMet] = useState<string>("");
  const [shipCost, setShipCost] = useState<number>();
  const [shipEst, setShipEst] = useState<string>("");
  const [pay, setPay] = useState<string>("");
  const navigate = useNavigate();

  function toogleShip1() {
    if (colorShip1 === ``) {
      setColorShip1("1BD97B");
      setShipMet("GO-SEND");
      setShipCost(15000);
      setShipEst("Today");
    }
    if (colorShip1 === `1BD97B`) {
      setColorShip1("");
      setShipMet("");
      setShipCost(0);
      setShipEst("");
    }
    if (colorShip2 === `1BD97B`) {
      setColorShip2("");
      setShipMet("");
      setShipCost(0);
      setShipEst("");
    }
    if (colorShip3 === `1BD97B`) {
      setColorShip3("");
      setShipMet("");
      setShipCost(0);
      setShipEst("");
    }
  }
  function toogleShip2() {
    if (colorShip1 === `1BD97B`) {
      setColorShip1("");
      setShipMet("");
      setShipCost(0);
      setShipEst("");
    }
    if (colorShip2 === ``) {
      setColorShip2("1BD97B");
      setShipMet("JNE");
      setShipCost(9000);
      setShipEst("2 day");
    }
    if (colorShip2 === `1BD97B`) {
      setColorShip2("");
      setShipMet("");
      setShipCost(0);
      setShipEst("");
    }
    if (colorShip3 === `1BD97B`) {
      setColorShip3("");
      setShipMet("");
      setShipCost(0);
      setShipEst("");
    }
  }
  function toogleShip3() {
    if (colorShip1 === `1BD97B`) {
      setColorShip1("");
      setShipMet("");
      setShipCost(0);
      setShipEst("");
    }
    if (colorShip2 === `1BD97B`) {
      setColorShip2("");
      setShipMet("");
      setShipCost(0);
      setShipEst("");
    }
    if (colorShip3 === ``) {
      setColorShip3("1BD97B");
      setShipMet("Personal Courier");
      setShipCost(29000);
      setShipEst("1 day");
    }
    if (colorShip3 === `#1BD97B`) {
      setColorShip3("");
      setShipMet("");
      setShipCost(0);
      setShipEst("");
    }
  }
  function tooglePay1() {
    if (colorPay1 === ``) {
      setColorPay1("1BD97B");
      setPay("e-Wallet");
    }
    if (colorPay1 === `1BD97B`) {
      setColorPay1("");
      setPay("");
    }
    if (colorPay2 === `1BD97B`) {
      setColorPay2("");
      setPay("");
    }
    if (colorPay3 === `1BD97B`) {
      setColorPay3("");
      setPay("");
    }
  }
  function tooglePay2() {
    if (colorPay1 === `1BD97B`) {
      setColorPay1("");
      setPay("");
    }
    if (colorPay2 === ``) {
      setColorPay2("1BD97B");
      setPay("Bank Transfer");
    }
    if (colorPay2 === `1BD97B`) {
      setColorPay2("");
      setPay("");
    }
    if (colorPay3 === `1BD97B`) {
      setColorPay3("");
      setPay("");
    }
  }
  function tooglePay3() {
    if (colorPay1 === `1BD97B`) {
      setColorPay1("");
      setPay("");
    }
    if (colorPay2 === `1BD97B`) {
      setColorPay2("");
      setPay("");
    }
    if (colorPay3 === ``) {
      setColorPay3("1BD97B");
      setPay("Virtual account");
    }
    if (colorPay3 === `1BD97B`) {
      setColorPay3("");
      setPay("");
    }
  }
  return (
    <Layout
      number1="bg-[#FF8A00] text-white "
      number2="bg-[#FF8A00] text-white "
      number3="bg-[#FFE4B8] text-[#FF8A00] "
    >
      <div className="text-black flex items-center my-8 mx-2 md:my-0 md:mx-5 text-xs md:text-base">
        <AiOutlineArrowLeft />
        <Link to={"/"}>
          <p className="ml-2 hover:scale-105 transition inter">Back to delivery</p>
        </Link>
      </div>
      <div className="md:flex w-full my-0 md:my-5">
        <div className="w-full md:w-2/3 md:mx-5">
          <div className="my-auto">
            <p className="text-3xl md:text-5xl font-bold text-[#FF8A00] montserrat">Shipment</p>
            <div className="flex justify-center md:justify-normal w-full my-8">
              <div
                className={`w-1/3 md:w-1/4 border-2 p-2 mr-3 border-[${colorShip1}] bg-[${colorShip1}] bg-opacity-10 hover:cursor-pointer hover:scale-95 transition`}
                onClick={() => toogleShip1()}
              >
                <p className="text-xs md:text-sm inter">GO-SEND</p>
                <p className="text-sm font-semibold inter">15,000</p>
              </div>
              <div
                className={`w-1/3 md:w-1/4 border-2 p-2 mr-3 border-[${colorShip2}] bg-[${colorShip2}] bg-opacity-10 hover:cursor-pointer hover:scale-95 transition`}
                onClick={() => toogleShip2()}
              >
                <p className="text-xs md:text-sm inter">JNE</p>
                <p className="text-sm font-semibold inter">9,000</p>
              </div>
              <div
                className={`w-1/3 md:w-1/4 border-2 p-2 border-[${colorShip3}] bg-[${colorShip3}] bg-opacity-10 hover:cursor-pointer hover:scale-95 transition`}
                onClick={() => toogleShip3()}
              >
                <p className="text-xs md:text-sm inter">Personal Courier</p>
                <p className="text-sm font-semibold inter">29,000</p>
              </div>
            </div>
          </div>
          <div className="my-10">
            <p className="text-3xl md:text-5xl font-bold text-[#FF8A00] montserrat">Payment</p>
            <div className="flex justify-center md:justify-normal w-full my-8">
              <div
                className={`w-1/3 md:w-1/4 border-2 p-2 mr-3 border-[${colorPay1}] bg-[${colorPay1}] bg-opacity-10 hover:cursor-pointer hover:scale-95 transition`}
                onClick={() => tooglePay1()}
              >
                <p className="text-xs md:text-sm inter">e-Wallet</p>
                <p className="text-xs md:text-sm font-semibold inter">1,500,000 left</p>
              </div>
              <div
                className={`w-1/3 md:w-1/4 border-2 p-2 mr-3 border-[${colorPay2}] bg-[${colorPay2}] bg-opacity-10 hover:cursor-pointer hover:scale-95 transition`}
                onClick={() => tooglePay2()}
              >
                <p className="text-xs md:text-sm inter">Bank Transfer</p>
                <p className="break-words text-xs md:text-sm font-semibold inter">123-456-7890123-4</p>
              </div>
              <div
                className={`w-1/3 md:w-1/4 border-2 p-2 border-[${colorPay3}] bg-[${colorPay3}] bg-opacity-10 hover:cursor-pointer hover:scale-95 transition`}
                onClick={() => tooglePay3()}
              >
                <p className="text-xs md:text-sm inter">Virtual accounnt</p>
                <p className="break-words text-xs md:text-sm font-semibold inter">8808123456789123</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="md:hidden border border-[#FF8A00]"/>
        <div className="w-full md:w-1/3 bg-white md:border-l-2 border-[#FF8A00]">
          <p className="text-2xl md:text-3xl my-3 font-bold text-[#FF8A00] px-0 md:px-5 montserrat">Summary</p>
          <div className="w-full h-48 md:h-56 md:px-5">
            <p className="text-black text-xs md:text-base inter">10 items purchased</p>
            <hr className="my-5" />
            <p className="text-xs md:text-sm inter">Delivery estimation</p>
            {shipEst ? (
              <>
                <p className="text-green-500 text-sm md:text-base inter">
                  {shipEst} by {shipMet}
                </p>
              </>
            ) : <p className="text-sm md:text-base text-red-500 inter">
            Choose shipping method
          </p>}
          </div>
          <div className="flex justify-between md:px-5">
            <p className="text-sm font-normal inter">Cost of goods</p>
            <p className="text-base font-bold inter">500,000</p>
          </div>
          <div className="flex justify-between md:px-5">
            <p className="text-sm font-normal inter">Dropshipping Fee</p>
            <p className="text-base font-bold inter">5,900</p>
          </div>
          <div className="flex justify-between md:px-5">
            {shipMet ? (
              <>
                <p className="text-sm font-normal">
                  <span className="font-bold inter">{shipMet}</span> shipment
                </p>
                <p className="text-lg font-bold inter">{shipCost}</p>
              </>
            ) : null}
          </div>
          <div className="flex justify-between px-0 md:px-5 my-2 md:my-5">
            <p className="text-2xl font-bold text-[#FF8A00] montserrat">Total</p>
            <p className="text-2xl font-bold text-[#FF8A00] montserrat">
              {shipCost
                ? (500000 + 5900 + shipCost).toLocaleString()
                : "505,900"}
            </p>
          </div>
          <div className="flex justify-center md:px-5">
            <button
            disabled={shipMet&&pay? false : true}
              className="btn bg-[#FF8A00] w-full border-none hover:bg-orange-600 hover:scale-95 normal-case text-lg inter"
              onClick={() => navigate("/payment+success")}
            >
              Pay with {pay}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Payment;
