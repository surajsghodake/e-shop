import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import NewsLetter from "@/components/NewsLetter";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>E-SHOP.COM - All Styles on one page!</title>
        <meta
          name="description"
          content="E-SHOP.COM - All Styles on one page!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Image width={1400} height={440} src="/banner.jpg" alt="banner" />
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Welcome to E-Shop.com
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table.
            </p>
          </div>
          <div className="flex flex-wrap ms-0 md:mx-16 justify-center -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg m-5">
              <Link href={"/tshirts"} legacyBehavior>
                <a className="block relative rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="m-auto md:mx-0 h-[36vh] md:h-[40vh] block"
                    src="https://assets.ajio.com/medias/sys_master/root/20230623/jKE3/6495603fa9b42d15c9bdcbd6/-1117Wx1400H-464998809-grey-MODEL.jpg"
                  />
                </a>
              </Link>
              <div className="mt-4 text-center md:text-left">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  T-shirts
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Wear the code
                </h2>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg m-5">
              <Link href={"/hoodies"} legacyBehavior>
                <a className="block relative rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="m-auto md:mx-0 h-[36vh] md:h-[40vh] block"
                    src="https://m.media-amazon.com/images/I/719p1iFqdrL._SY679_.jpg"
                  />
                </a>
              </Link>
              <div className="mt-4 text-center md:text-left">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Hoodies
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Stylish Hoodies
                </h2>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg m-5">
              <Link href={"/shoes"} legacyBehavior>
                <a className="block relative rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="m-auto md:mx-0 h-[36vh] md:h-[40vh] block"
                    src="https://rukminim2.flixcart.com/image/450/500/xif0q/shoe/p/f/k/7-na-rng-854-grey-41-bruton-grey-original-imagzye9vqcxhegh.jpeg?q=90&crop=false"
                  />
                </a>
              </Link>
              <div className="mt-4 text-center md:text-left">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Shoes
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Sports Shoes
                </h2>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg m-5">
              <Link href={"/pants"} legacyBehavior>
                <a className="block relative rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="m-auto md:mx-0 h-[36vh] md:h-[40vh] block"
                    src="https://m.media-amazon.com/images/I/41POYPLx34L._SX679_.jpg"
                  />
                </a>
              </Link>
              <div className="mt-4 text-center md:text-left">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Pants
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Comfortable Pants
                </h2>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg m-5">
              <Link href={"/pants"} legacyBehavior>
                <a className="block relative rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="m-auto md:mx-0 h-[36vh] md:h-[40vh] block"
                    src="https://m.media-amazon.com/images/I/51TcDh8lUNL._AC_UL320_.jpg"
                  />
                </a>
              </Link>
              <div className="mt-4 text-center md:text-left">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Goggles
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  I will fit on face!
                </h2>
              </div>
            </div>
          </div>

          <NewsLetter />
        </div>
      </section>
    </>
  );
}
