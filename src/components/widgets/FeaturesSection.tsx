import React from "react";
import Image from "next/image";
import Wrapper from "../shared/Wrapper";

const FeaturesSection = () => {
  return (
    <section className="mt-28 flex flex-col items-end">
      <Wrapper>
        <div className="flex flex-col items-end">
        <h1 className="max-w-[720px] z-10 sm:text-[2.75rem] text-[2.50rem] font-bold tracking-wide leading-tight ">
          Unique and Authentic Vintage Designer Jewellery
        </h1>
        </div>
        <div className="flex xl:flex-row flex-col bg-[#fbfcff] mt-10">
          <div className="flex-1 relative items-center justify-between grid grid-cols-2 max-xl:-x-4 max-xl:gap-y-8 xl:mt-0 md:mt-4 sm:mt-8 mt-16 max-xl:mb-16">
            <div className="xl:w-2/3 w-11/12">
              <h2 className="text-lg leading-tight font-semibold">
                Using Good Quality Materials
              </h2>
              <p className="mt-2 text-black/80 font-light">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </p>
            </div>
            <div className="xl:w-2/3 w-11/12">
              <h2 className="text-lg leading-tight font-semibold">
                100% Handmade Products
              </h2>
              <p className="mt-2 text-black/80 font-light">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </p>
            </div>
            <div className="xl:w-2/3 w-11/12">
              <h2 className="text-lg leading-tight font-semibold">
                Modern Fashion Design
              </h2>
              <p className="mt-2 text-black/80 font-light">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </p>
            </div>
            <div className="xl:w-2/3 w-11/12">
              <h2 className="text-lg leading-tight font-semibold">
                Discount for Bulk Orders
              </h2>
              <p className="mt-2 text-black/80 font-light">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </p>
            </div>
            <h1 className="absolute xl:max-w-2xl xl:text-[7rem] sm:text-8xl text-7xl leading-none font-black opacity-5">
              Different From Others
            </h1>
          </div>
          <div className="flex-1 sm:flex-row flex-col flex items-center gap-10">
            <Image
              className="h-[350px] w-[300px]"
              src={"/images/feature.webp"}
              alt="product"
              height={400}
              width={325}
            />
            <div className="space-y-4">
              <p className="leading-relaxed font-light">
                This piece is ethically crafted in our small family-owned
                workshop in Peru with unmatched attention to detail and care.
                The Natural color is the actual natural color of the fiber,
                undyed and 100% traceable.
              </p>
              <button className="flex justify-center items-center bg-black text-sm text-white font-semibold px-16 py-2.5">
                See All Product
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default FeaturesSection;
