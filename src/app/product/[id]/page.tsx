import Wrapper from "@/components/shared/Wrapper";
import { client } from "../../../../sanity/lib/client";
import { Image as IImage } from "sanity";
import Image from "next/image";
import { urlForImage } from "../../../../sanity/lib/image";
import AddProductButton from "@/components/cart/AddToCart";

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

const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const getProductData = async () => {
    const res: IProduct[] = await client.fetch(
      `*[_type=="product" && _id=="${params.id}"]{
        title,
        image,
        _id,
        description,
        price,
        category -> {
          name
        }
      }`
    );
    return res;
  };

  const data = await getProductData();
  console.log(data);

  return (
    <main className="bg-slate-50/30 mt-24 ">
      <Wrapper>
        {/* 1st Div */}
        <div className="flex lg:flex-row flex-col gap-x-7">
          <div className="flex flex-[2_1] max-w-screen-lg gap-8">
            <div className="flex flex-col"></div>
            <div>
              <Image
                className="shrink-0"
                src={urlForImage(data[0].image).url()}
                alt="product"
                width={115}
                height={100}
              />
            </div>
            <div className="w-full mr-10">
              <Image
                src={urlForImage(data[0].image).url()}
                alt="product"
                width={900}
                height={900}
              />
            </div>
          </div>
          <div className="flex-1 max-w-lg">
            <div className="flex flex-col gap-7 w-fit py-14 lg:mx-auto"></div>
            <div className="mb-10">
              <h1 className="text-3xl tracking-wide">{data[0].description}</h1>
              <h3 className="text-xl font-semibold opacity-30">
                {data[0].title}
              </h3>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-base">SELECT SIZE</h3>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center text-[#666] font-bold hover:shadow-[0_0_15px_0_#b2b2b2] rounded-full cursor-pointer">
                  XS
                </div>
                <div className="w-10 h-10 flex items-center justify-center text-[#666] font-bold hover:shadow-[0_0_15px_0_#b2b2b2] rounded-full cursor-pointer">
                  S
                </div>
                <div className="w-10 h-10 flex items-center justify-center text-[#666] font-bold hover:shadow-[0_0_15px_0_#b2b2b2] rounded-full cursor-pointer">
                  M
                </div>
                <div className="w-10 h-10 flex items-center justify-center text-[#666] font-bold hover:shadow-[0_0_15px_0_#b2b2b2] rounded-full cursor-pointer">
                  L
                </div>
                <div className="w-10 h-10 flex items-center justify-center text-[#666] font-bold hover:shadow-[0_0_15px_0_#b2b2b2] rounded-full cursor-pointer">
                  XL
                </div>
              </div>
              <div className="flex items-end ">
                <AddProductButton data={data} />
              </div>
            </div>
          </div>
        </div>
        {/* 2nd Div */}
        <div className="bg-white flex flex-col gap-8 mt-28 sm:px-14 py-28 gap-y-10">
          <div className="flex items-center border-b-2 border-[#c4c4c4] relative">
            <h3 className="absolute text-2xl font-semibold">
              Product Information
            </h3>
            <h1 className="text-[#f2f3f7] xl:text-[7rem] sm:text-8xl min-[410px]:text-7xl text-5xl leading-none font-black max-[310px]:mb-4">
              Overview
            </h1>
          </div>
          <div className="flex sm:flex-row flex-col max-sm:space-y-2 justify-between">
            <h3 className="text-[#666] flex-1 font-semibold">
              PRODUCT DETAILS
            </h3>
            <p className="flex-[2_1] font-light leading-7 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="flex sm:flex-row flex-col max-sm:space-y-2 justify-between">
            <h3 className="text-[#666] flex-1 font-semibold">
              PRODUCT DETAILS
            </h3>
            <ul className="flex-[2_1] flex flex-col list-disc list-inside gap-1 text-lg">
              <li className="font-semibold">Hand wash using cold water.</li>
              <li className="font-semibold">Do not using bleach.</li>
              <li className="font-semibold">Hang it to dry.</li>
              <li className="font-semibold">Iron on low temperature.</li>
            </ul>
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

export default ProductDetails;
