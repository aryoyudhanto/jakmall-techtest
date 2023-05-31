import _React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

import Layout from "../components/Layout";

const index = () => {
  return (
    <Layout
      number1="bg-[#FF8A00] text-white "
      number2="bg-[#FFE4B8] text-[#FF8A00] "
      number3="bg-[#FFE4B8] text-[#FF8A00] "
    >
      <div className="text-black flex items-center mx-5">
        <AiOutlineArrowLeft size={15} />
        <p className="ml-2 hover:scale-105 transition">Back to chart</p>
      </div>
      <div className="flex w-full my-5">
        <div className="w-2/3 mx-5">
          <div className="flex justify-between">
            <p className="text-5xl font-bold text-[#FF8A00]">
              Delivery details
            </p>
            <div className="items-center my-3">
              <div className="form-control">
                <label className="cursor-pointer label">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-success"
                  />
                  <span className="label-text mx-2 capitalize">
                    send as dropshipper
                  </span>
                </label>
              </div>
            </div>
          </div>
          <form>
            <div className="flex w-full my-5">
              <div className="w-2/3 mx-5">
                <input
                  type="text"
                  className="input input-bordered mb-2 w-full"
                  placeholder="Name"
                />
                <input
                  type="text"
                  className="input input-bordered mb-2 w-full"
                  placeholder="Phone Number"
                />
                <textarea
                  className="textarea textarea-bordered mb-2 w-full resize-none h-36"
                  placeholder="Delivery Address"
                />
              </div>
              <div className="w-1/3">
                <input
                  type="text"
                  className="input input-bordered mb-2 w-full"
                  placeholder="Dropshipper Name"
                />
                <input
                  type="text"
                  className="input input-bordered mb-2 w-full"
                  placeholder="Dropshipper Phone Number"
                />
              </div>
            </div>
          </form>
        </div>

        <div className="w-1/3 bg-white border-l-2 border-[#FF8A00]">
          <p className="text-3xl my-3 font-bold text-[#FF8A00] px-5">Summary</p>
          <div className="w-full h-56 px-5">
            <p className="text-black">10 items purchased</p>
          </div>
          <div className="flex justify-between px-5">
            <p className="text-sm font-normal">Cost of goods</p>
            <p className="text-lg font-bold">500,000</p>
          </div>
          <div className="flex justify-between px-5">
            <p className="text-sm font-normal">Dropshipping Fee</p>
            <p className="text-lg font-bold">5,900</p>
          </div>
          <div className="flex justify-between px-5 my-5">
            <p className="text-2xl font-bold text-[#FF8A00]">Total</p>
            <p className="text-2xl font-bold text-[#FF8A00]">505,900</p>
          </div>
          <div className="flex justify-center px-5">
            <button className="btn bg-[#FF8A00] w-full border-none hover:bg-orange-600 hover:scale-95">Continue to Payment</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;
