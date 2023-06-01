import _React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

import Layout from "../components/Layout";
import { Link } from "react-router-dom";

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
  const [pay, setPay] = useState<string>("")

  function toogleShip1() {
    if (colorShip1 === ``) {
      setColorShip1("[#1BD97B]");
      setShipMet("GO-SEND");
      setShipCost(15000);
      setShipEst("Today");
    }
    if (colorShip1 === `[#1BD97B]`) {
      setColorShip1("");
    }
    if (colorShip2 === `[#1BD97B]`) {
      setColorShip2("");
      setShipMet("");
    }
    if (colorShip3 === `[#1BD97B]`) {
      setColorShip3("");
    }
  }
  function toogleShip2() {
    if (colorShip1 === `[#1BD97B]`) {
      setColorShip1("");
    }
    if (colorShip2 === ``) {
      setColorShip2("[#1BD97B]");
      setShipMet("JNE");
      setShipCost(9000);
      setShipEst("2 day");
    }
    if (colorShip2 === `[#1BD97B]`) {
      setColorShip2("");
    }
    if (colorShip3 === `[#1BD97B]`) {
      setColorShip3("");
    }
  }
  function toogleShip3() {
    if (colorShip1 === `[#1BD97B]`) {
      setColorShip1("");
    }
    if (colorShip2 === `[#1BD97B]`) {
      setColorShip2("");
    }
    if (colorShip3 === ``) {
      setColorShip3("[#1BD97B]");
      setShipMet("Personal Courier");
      setShipCost(29000);
      setShipEst("1 day");
    }
    if (colorShip3 === `[#1BD97B]`) {
      setColorShip3("");
    }
  }
  function tooglePay1() {
    if (colorPay1 === ``) {
      setColorPay1("[#1BD97B]");
      setPay("e-Wallet")
    }
    if (colorPay1 === `[#1BD97B]`) {
      setColorPay1("");
    }
    if (colorPay2 === `[#1BD97B]`) {
      setColorPay2("");
    }
    if (colorPay3 === `[#1BD97B]`) {
      setColorPay3("");
    }
  }
  function tooglePay2() {
    if (colorPay1 === `[#1BD97B]`) {
      setColorPay1("");
    }
    if (colorPay2 === ``) {
      setColorPay2("[#1BD97B]");
      setPay("Bank Transfer")
    }
    if (colorPay2 === `[#1BD97B]`) {
      setColorPay2("");
    }
    if (colorPay3 === `[#1BD97B]`) {
      setColorPay3("");
    }
  }
  function tooglePay3() {
    if (colorPay1 === `[#1BD97B]`) {
      setColorPay1("");
    }
    if (colorPay2 === `[#1BD97B]`) {
      setColorPay2("");
    }
    if (colorPay3 === ``) {
      setColorPay3("[#1BD97B]");
      setPay("Virtual account")
    }
    if (colorPay3 === `[#1BD97B]`) {
      setColorPay3("");
    }
  }

  return (
    <Layout
      number1="bg-[#FF8A00] text-white "
      number2="bg-[#FF8A00] text-white "
      number3="bg-[#FFE4B8] text-[#FF8A00] "
    >
      <div className="text-black flex items-center mx-5">
        <AiOutlineArrowLeft size={15} />
        <Link to={"/"}>
          <p className="ml-2 hover:scale-105 transition">Back to delivery</p>
        </Link>
      </div>
      <div className="flex w-full my-5">
        <div className="w-2/3 mx-5">
          <div className="my-auto">
            <p className="text-5xl font-bold text-[#FF8A00]">Shipment</p>
            <div className="flex w-full my-8">
              <div
                className={`w-1/4 border-2 p-2 mr-3 border-${colorShip1} bg-${colorShip1} bg-opacity-10 hover:cursor-pointer hover:scale-95 transition`}
                onClick={() => toogleShip1()}
              >
                <p className="text-sm">GO-SEND</p>
                <p className="text-sm font-semibold">15,000</p>
              </div>
              <div
                className={`w-1/4 border-2 p-2 mr-3 border-${colorShip2} bg-${colorShip2} bg-opacity-10 hover:cursor-pointer hover:scale-95 transition`}
                onClick={() => toogleShip2()}
              >
                <p className="text-sm">JNE</p>
                <p className="text-sm font-semibold">9,000</p>
              </div>
              <div
                className={`w-1/4 border-2 p-2 mr-3 border-${colorShip3} bg-${colorShip3} bg-opacity-10 hover:cursor-pointer hover:scale-95 transition`}
                onClick={() => toogleShip3()}
              >
                <p className="text-sm">Personal Courier</p>
                <p className="text-sm font-semibold">29,000</p>
              </div>
            </div>
          </div>
          <div className="my-10">
            <p className="text-5xl font-bold text-[#FF8A00]">Payment</p>
            <div className="flex w-full my-8">
              <div
                className={`w-1/4 border-2 p-2 mr-3 border-${colorPay1} bg-${colorPay1} bg-opacity-10 hover:cursor-pointer hover:scale-95 transition`}
                onClick={() => tooglePay1()}
              >
                <p className="text-sm">e-Wallet</p>
                <p className="text-sm font-semibold">1,500,000 left</p>
              </div>
              <div
                className={`w-1/4 border-2 p-2 mr-3 border-${colorPay2} bg-${colorPay2} bg-opacity-10 hover:cursor-pointer hover:scale-95 transition`}
                onClick={() => tooglePay2()}
              >
                <p className="text-sm">Bank Transfer</p>
                <p className="text-sm font-semibold">123-456-7890123-4</p>
              </div>
              <div
                className={`w-1/4 border-2 p-2 mr-3 border-${colorPay3} bg-${colorPay3} bg-opacity-10 hover:cursor-pointer hover:scale-95 transition`}
                onClick={() => tooglePay3()}
              >
                <p className="text-sm">Virtual accounnt</p>
                <p className="text-sm font-semibold">8808123456789123</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 bg-white border-l-2 border-[#FF8A00]">
          <p className="text-3xl my-3 font-bold text-[#FF8A00] px-5">Summary</p>
          <div className="w-full h-56 px-5">
            <p className="text-black">10 items purchased</p>
            <hr className="my-5" />
            <p className="text-sm">Delivery estimation</p>
            {shipEst ? (
              <>
                <p className="text-green-500">
                  {shipEst} by {shipMet}
                </p>
              </>
            ) : null}
          </div>
          <div className="flex justify-between px-5">
            <p className="text-sm font-normal">Cost of goods</p>
            <p className="text-lg font-bold">500,000</p>
          </div>
          <div className="flex justify-between px-5">
            <p className="text-sm font-normal">Dropshipping Fee</p>
            <p className="text-lg font-bold">5,900</p>
          </div>
          <div className="flex justify-between px-5">
            {shipMet ? (
              <>
                <p className="text-sm font-normal">
                  <span className="font-bold">{shipMet}</span> shipment
                </p>
                <p className="text-lg font-bold">{shipCost}</p>
              </>
            ) : null}
          </div>
          <div className="flex justify-between px-5 my-5">
            <p className="text-2xl font-bold text-[#FF8A00]">Total</p>
            <p className="text-2xl font-bold text-[#FF8A00]">{shipCost? (500000+5900+shipCost).toLocaleString() : "505,900"}</p>
          </div>
          <div className="flex justify-center px-5">
            <button className="btn bg-[#FF8A00] w-full border-none hover:bg-orange-600 hover:scale-95 normal-case text-lg">
              Pay with {pay}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Payment;
