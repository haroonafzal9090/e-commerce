import { Image as IImage } from "sanity";
import { client } from "../../../sanity/lib/client";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import Wrapper from "@/components/shared/Wrapper";
import Link from "next/link";

 const getProductData = async () => {
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
  _id : string,
  title: string;
  description: string;
  price: number;
  image: IImage;
  category: {
    name: string;
  };
}

export default async function Home() {
  const data: IProduct[] = await getProductData();
  console.log(data);

  return (
    <section className="mt-14">
      <Wrapper>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 xxs:grid-cols-1 justify-start gap-x-10 gap-y-16 ">
          {data.map((item,i) => {
            // const link = item.description.split(" ").join("-")
            return (
            <div key={i} className="mx-auto space-y-2">
              <Link href={`/product/${item._id}`}>
              <Image
                src={urlForImage(item.image).url()}
                alt="product"
                width={250}
                height={270}
              />
              <h1 className="font-semibold mt-2">{item.description}</h1>
              <h2 className="text-[#888] text-xl font-semibold mb-2">{item.title}</h2>
              <h4 className="text-xl font-semibold">${item.price}</h4>
              </Link>
            </div>
          )})}
        </div>
      </Wrapper>
    </section>
  );
}
