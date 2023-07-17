"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Image as IImage } from "sanity";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";
import Wrapper from "../shared/Wrapper";
import Link from "next/link";
import Image from "next/image";

export const getProductData = async () => {
  const res = await client.fetch(`*[_type=="product"]{
    title,
    image,
    _id,
    description,
    price,
    category -> {
      name
    }
  }`); // [] brackets used for condition. type means document-type and name should be same as on schema
  return res;
};

interface IProduct {
  _id: string;
  title: string;
  description: string;
  price: number;
  image: IImage;
  category: {
    name: string;
  };
}

const ProductSector = async () => {
  const data: IProduct[] = await getProductData();

  return (
    <section className="mt-28">
      <Wrapper>
        <div className="flex flex-col items-center mb- mt-10">
          <span className="text-blue-600 font-semibold pb-3.5 text-sm ">PRODUCTS</span>
          <h1 className="text-3xl font-bold text-center pb-8">Check What We Have</h1>
        </div>
        <div className="mt-10">
          <div>
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={40}
              breakpoints={{
                1024: { slidesPerView: 3 },
                640: { slidesPerView: 2 },
              }}
              slidesPerView={1}
              // navigation
              // pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {data.map((item, i) => (
                <SwiperSlide key={i}>
                  <Link href={`/product/${item._id}`}>
                    <div className="flex flex-col lg:items-start items-center hover:scale-95 transition-all duration-500">
                      <div>
                        <Image
                          src={urlForImage(item.image).url()}
                          alt="product"
                          width={388}
                          height={400}
                        />
                      </div>
                      <div className="mt-4">
                        <h1 className="text-lg font-medium">{item.description}</h1>
                        <h2 className="text-xl font-semibold">${item.price}</h2>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default ProductSector;
