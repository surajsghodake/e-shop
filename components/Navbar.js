import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { MdOutlineShoppingBag, MdAccountCircle } from "react-icons/md";

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  // console.log(cart, addToCart, removeFromCart, clearCart, subTotal);
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  const ref = useRef();
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-between items-center shadow-md py-1 bg-green-100 sticky top-0 z-10">
      <div className="logo mx-5">
        <Link href={"/"}>
          <Image width={225} height={60} src="/logo.jpeg" alt="logo" />
        </Link>
        {/* <span className="ml-3 text-xl">E-SHOP.COM</span> */}
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-6 font-bold">
          <Link href={"/tshirts"}>
            <li className="hover:text-green-900">Tshirts</li>
          </Link>
          <Link href={"/pants"}>
            <li className="hover:text-green-900">Pants</li>
          </Link>
          <Link href={"/hoodies"}>
            <li className="hover:text-green-900">Hoodies</li>
          </Link>
          <Link href={"/shoes"}>
            <li className="hover:text-green-900">Shoes</li>
          </Link>
          <Link href={"/goggles"}>
            <li className="hover:text-green-900">Goggles</li>
          </Link>
        </ul>
      </div>
      <div className="flex cart absolute right-0 mx-4 top-4 cursor-pointer">
        <Link href={"/login"}>
          <MdAccountCircle className="text-xl md:text-3xl mx-2" />
        </Link>
        <BsCart3 onClick={toggleCart} className="text-xl md:text-3xl" />
      </div>
      <div
        ref={ref}
        className={`w-72 z-10 h-[100vh] sideCart absolute top-0 right-0 bg-gradient-to-r from-blue-100 to-green-200 p-8 transform transition-transform ${
          Object.keys(cart).length !== 0 ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-5 right-5 cursor-pointer text-2xl text-green-800"
        >
          <AiOutlineClose />
        </span>
        <ol className="list-decimal font-semibold">
          {Object.keys(cart).length === 0 && (
            <div className="mt-4 font-semibold">Your cart is empty</div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="item flex my-4">
                  <div className="w-2/3 ">
                    {cart[k].name}({cart[k].size}/{cart[k].variant})
                  </div>
                  <div className="flex items-center justify-center w-1/3 text-lg">
                    <CiSquareMinus
                      onClick={() => {
                        removeFromCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        );
                      }}
                      className="cursor-pointer text-green-600"
                    />{" "}
                    <span className="mx-2">{cart[k].qty}</span>
                    <CiSquarePlus
                      onClick={() => {
                        addToCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        );
                      }}
                      className="cursor-pointer text-green-600"
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <div className="mt-16 font-bold my-4">Subtotal: ₹{subTotal}</div>
        <div className="flex">
          <Link href={"/checkout"}>
            <button className="flex mr-2 text-white bg-green-500 border-0 py-2 px-2 focus:outline-none hover:bg-green-700 rounded text-lg">
              <MdOutlineShoppingBag className="m-1" />
              Checkout
            </button>
          </Link>
          <button
            onClick={clearCart}
            className="flex text-white bg-green-500 border-0 py-2 px-2 focus:outline-none hover:bg-green-700 rounded text-lg"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
