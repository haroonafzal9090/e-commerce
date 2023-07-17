import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";

const PromotionSector = () => {
  return (
    <section className="mt-28">
      <Wrapper>
        <div className="flex flex-col items-center mb-8">
          <span className="text-blue-600 font-semibold pb-3.5 text-sm ">
            PROMOTIONS
          </span>
          <h1 className="text-3xl font-bold text-center pb-8">
            Our Promotions Events
          </h1>
        </div>
        {/* Main Flex Box */}
        <div className="mb-10 h-fit flex lg:flex-row flex-col gap-4 max-w-[1400px]">
          {/* Left Side */}
          <div className="flex-[2_1] space-y-6  ">
            {/* 1st Div */}
            <div className="bg-[#d6d6d8] flex justify-between max-sm:flex-col max-sm:items-center max-sm:pt-4 ">
              <div className="flex flex-col justify-center px-6 ">
                <h3 className="font-bold text-3xl">
                  GET UP TO
                  <span className="text-4xl font-bold ml-2">60%</span>
                </h3>
                <p>For the summer season</p>
              </div>
              <div className="w-[282px]">
                <Image
                  className="shrink-0 mx-auto h-52"
                  src={"/images/event1.webp"}
                  alt="event"
                  width={282}
                  height={218}
                />
              </div>
            </div>
            {/* 2nd Div */}
            <div className="bg-black h-48 flex flex-col justify-center ">
              <div className="text-white flex flex-col items-center overflow-hidden">
                <h3 className="font-semibold text-4xl ">GET 30% OFF</h3>
                <p className="mt-4 text-sm mb-1">USE PROMO CODE</p>
                <button className=" mx-auto bg-[#474747] font-semibold w-fit tracking-[0.3rem] min-[450px]:px-12 px-2 py-1.5 rounded-lg">
                  DINEWEEKENDSALE
                </button>
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div className="flex-1 flex sm:flex-row flex-col shrink-0 gap-4">
            {/* 1st Div */}
            <div className="bg-[#efe1c7] flex-1 flex flex-col justify-between items-center ">
              <div className="pt-6">
                <div className="pl-4">
                  <p>Flex Sweatshirt</p>
                </div>
                <div className="space-x-3 px-4">
                  {" "}
                  <span className="line-through">$100.00</span>
                  <span className="text-lg font-semibold">$75.00</span>
                </div>
              </div>
              <div className="w-[282px]">
                <Image
                  className="mx-auto h-80 shrink-0"
                  src={"/images/event2.webp"}
                  alt="event-2"
                  width={282}
                  height={362}
                />
              </div>
            </div>
            {/* 2nd Div */}
            <div className="bg-[#d6d6d8] flex-1 flex flex-col items-center justify-between">
              <div className="pt-6">
                <div className="pl-4">
                  <p>Flex Push Button Bomber</p>
                </div>
                <div className="px-4 space-x-3 ">
                  {" "}
                  <span className="line-through">$225.00</span>
                  <span className="text-lg font-semibold">$190.00</span>
                </div>
              </div>
              <div className="w-[282px]">
                <Image
                  className="h-80 mx-auto shrink-0"
                  src={"/images/event3.webp"}
                  alt="event-2"
                  width={282}
                  height={362}
                />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default PromotionSector;
