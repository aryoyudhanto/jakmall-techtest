import { useForm, SubmitHandler } from "react-hook-form";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import _React, { useState } from "react";

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
  const dropshipperPhoneNumber = watch("dropshipperPhoneNumber");
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const deliveryAddress = watch("deliveryAddress", "");
  const [dropFee, setDropFee] = useState<string>("");
  const dropshipperName = watch("dropshipperName");
  const phone = watch("phoneNumber");
  const navigate = useNavigate();
  const email = watch("email");

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    navigate("/payment");
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
      <div className="text-black flex items-center my-8 mx-2 md:my-0 md:mx-5 text-xs md:text-base">
        <AiOutlineArrowLeft />
        <p className="ml-2 hover:scale-105 transition inter">Back to chart</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:flex w-full my-0 md:my-5">
          <div className="w-full md:w-2/3 md:mx-5">
            <div className="md:flex md:justify-between">
              <p className="text-3xl md:text-5xl font-bold text-[#FF8A00] montserrat">
                Delivery details
              </p>
              <div className="items-center my-1 md:my-3">
                <div className="form-control">
                  <label className="cursor-pointer md:label">
                    <input
                      type="checkbox"
                      className="w-[0.7rem] h-[0.7rem] md:checkbox md:checkbox-success"
                      onChange={() => toogleDrop()}
                      onClick={() => toogleDrop()}
                    />
                    <span className="label-text mx-1 md:mx-2 text-[11px] md:text-base inter">
                      Send as dropshipper
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="md:flex w-full my-5">
              <div className="w-full md:w-2/3 mx-0 md:mr-5">
                <input
                  type="text"
                  className={`input mb-2 w-full font-semibold inter ${
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
                  className={`input input-bordered mb-2 w-full font-semibold inter ${
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
                  className={`textarea textarea-bordered w-full resize-none h-36 font-semibold inter ${
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
                <span className="text-[10px] md:text-xs inter">
                  {120 - deliveryAddress.length} characters remaining
                </span>
              </div>
              {isDisabled === true ? (
                <div className="w-full md:w-1/3 my-5 md:my-0">
                  <input
                    disabled={isDisabled}
                    type="text"
                    className={`input input-bordered mb-2 w-full font-semibold inter`}
                    placeholder="Dropshipper Name"
                    {...register("dropshipperName", { required: false })}
                  />
                  <input
                    disabled={isDisabled}
                    type="text"
                    className={`input input-bordered mb-2 w-full font-semibold inter`}
                    placeholder="Dropshipper Phone Number"
                    {...register("dropshipperPhoneNumber", { required: false })}
                  />
                </div>
              ) : (
                <div className="w-full md:w-1/3 my-5 md:my-0">
                  <input
                    disabled={isDisabled}
                    type="text"
                    className={`input input-bordered mb-2 w-full font-semibold inter ${
                      errors.dropshipperName
                        ? "textarea-error"
                        : dropshipperName
                        ? "textarea-success"
                        : "textarea-bordered"
                    }`}
                    placeholder="Dropshipper Name"
                    {...register("dropshipperName", { required: true })}
                  />
                  <input
                    disabled={isDisabled}
                    type="text"
                    className={`input input-bordered mb-2 w-full font-semibold inter ${
                      errors.dropshipperPhoneNumber
                        ? "textarea-error"
                        : dropshipperPhoneNumber
                        ? "textarea-success"
                        : "textarea-bordered"
                    }`}
                    placeholder="Dropshipper Phone Number"
                    {...register("dropshipperPhoneNumber", {
                      required: true,
                      pattern: {
                        value: /^[\d-+()]{6,20}$/,
                        message: "Phone Number must be a number",
                      },
                    })}
                  />
                </div>
              )}
            </div>
          </div>
          <hr className="md:hidden border border-[#FF8A00]" />
          <div className="w-full md:w-1/3 bg-white md:border-l-2 md:border-[#FF8A00]">
            <p className="text-2xl md:text-3xl my-3 font-bold text-[#FF8A00] px-0 md:px-5">
              Summary
            </p>
            <div className="w-full h-48 md:h-56 px-0 md:px-5">
              <p className="text-black text-xs md:text-base inter">
                10 items purchased
              </p>
            </div>
            <div className="flex justify-between px-0 md:px-5">
              <p className="text-sm font-normal inter">Cost of goods</p>
              <p className="text-base md:text-lg font-bold inter">500,000</p>
            </div>
            {dropFee !== "" ? (
              <div className="flex justify-between px-0 md:px-5">
                <p className="text-sm font-normal inter">Dropshipping Fee</p>
                <p className="text-base md:text-lg font-bold inter">5,900</p>
              </div>
            ) : null}
            <div className="flex justify-between px-0 md:px-5 my-2 md:my-5">
              <p className="text-2xl font-bold text-[#FF8A00] montserrat">Total</p>
              <p className="text-2xl font-bold text-[#FF8A00] montserrat">
                {dropFee !== "" ? "505,900" : "500,000"}
              </p>
            </div>
            <div className="flex justify-center px-0 md:px-5">
              <button
                className="btn bg-[#FF8A00] w-full border-none hover:bg-orange-600 hover:scale-95 normal-case text-lg inter"
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
