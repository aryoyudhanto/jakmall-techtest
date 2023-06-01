import _React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useForm, SubmitHandler } from "react-hook-form";

import Layout from "../components/Layout";

interface FormValues {
  email: string;
  phoneNumber: string;
  deliveryAddress: string;
  dropshipperName: string;
  dropshipperPhoneNumber: string;
}

const index = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>();
  const dropshipperPhoneNumber = watch("dropshipperPhoneNumber")  
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [dropFee, setDropFee] = useState<string>("");
  const deliveryAddress = watch("deliveryAddress", "");
  const dropshipperName = watch("dropshipperName")
  const phone = watch("phoneNumber");
  const navigate = useNavigate();
  const email = watch("email")

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    navigate('/payment')
  };

  function toogleDrop() {
    if (isDisabled === false) {
      setIsDisabled(true);
      setDropFee("");
    }
    if (isDisabled === true) {
      setIsDisabled(false);
      setDropFee("5,900");
    }
  }
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
      <form onSubmit={handleSubmit(onSubmit)}>
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
                      onChange={() => toogleDrop()}
                      onClick={() => toogleDrop()}
                    />
                    <span className="label-text mx-2 capitalize">
                      send as dropshipper
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="flex w-full my-5">
              <div className="w-2/3 mr-5">
                <input
                  type="text"
                  className={`input mb-2 w-full ${
                    errors.email
                      ? "input-error"
                      : email
                      ? "input-success"
                      : "input-bordered"
                  }`}
                  
                  placeholder="Email"
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                <input
                  type="text"
                  className={`input input-bordered mb-2 w-full ${
                    errors.phoneNumber
                      ? "input-error"
                      : phone
                      ? "input-success"
                      : "input-bordered"
                  }`}
                  placeholder="Phone Number"
                  {...register("phoneNumber", {
                    required: true,
                    pattern: {
                      value: /^[\d-+()]{6,20}$/,
                      message: "Phone Number must be a number",
                    },
                  })}
                />
                <textarea
                  className={`textarea textarea-bordered w-full resize-none h-36 ${
                    errors.deliveryAddress
                      ? "textarea-error"
                      : deliveryAddress
                      ? "textarea-success"
                      : "textarea-bordered"
                  }`}
                  placeholder="Delivery Address"
                  {...register("deliveryAddress", {
                    required: true,
                    maxLength: {
                      value: 120,
                      message: "Maximum 120 characters allowed.",
                    },
                  })}
                />
                <span className="text-xs">
                  {120 - deliveryAddress.length} characters remaining
                </span>
              </div>
              <div className="w-1/3">
                <input
                  disabled={isDisabled}
                  type="text"
                  className={`input input-bordered mb-2 w-full ${
                    errors.dropshipperName
                      ? "input-error"
                      : dropshipperName
                      ? "input-success"
                      : "input-bordered"
                  }`}
                  placeholder="Dropshipper Name"
                  {...register("dropshipperName", { required: false })}
                />
                <input
                  disabled={isDisabled}
                  type="text"
                  className={`input input-bordered mb-2 w-full ${
                    errors.dropshipperPhoneNumber
                      ? "input-error"
                      : dropshipperPhoneNumber
                      ? "input-success"
                      : "input-bordered"
                  }`}
                  placeholder="Dropshipper Phone Number"
                  {...register("dropshipperPhoneNumber", { required: false })}
                />
              </div>
            </div>
          </div>
          <div className="w-1/3 bg-white border-l-2 border-[#FF8A00]">
            <p className="text-3xl my-3 font-bold text-[#FF8A00] px-5">
              Summary
            </p>
            <div className="w-full h-56 px-5">
              <p className="text-black">10 items purchased</p>
            </div>
            <div className="flex justify-between px-5">
              <p className="text-sm font-normal">Cost of goods</p>
              <p className="text-lg font-bold">500,000</p>
            </div>
            {dropFee !== "" ? (
              <div className="flex justify-between px-5">
                <p className="text-sm font-normal">Dropshipping Fee</p>
                <p className="text-lg font-bold">5,900</p>
              </div>
            ) : null}
            <div className="flex justify-between px-5 my-5">
              <p className="text-2xl font-bold text-[#FF8A00]">Total</p>
              <p className="text-2xl font-bold text-[#FF8A00]">
                {dropFee !== "" ? "505,900" : "500,000"}
              </p>
            </div>
            <div className="flex justify-center px-5">
              <button
                className="btn bg-[#FF8A00] w-full border-none hover:bg-orange-600 hover:scale-95 normal-case text-lg"
                type="submit"
              >
                Continue to Payment
              </button>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default index;
