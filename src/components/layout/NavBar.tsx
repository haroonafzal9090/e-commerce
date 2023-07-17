"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Wrapper from "../shared/Wrapper";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data, mutate } = useSWR("/api/cart", { revalidateOnFocus: true });
  const { refresh } = useRouter();

  const [cartQuantity, setCartQuantity] = useState(0);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (data && !data.isLoading) {
      const totalQuantity = data?.res?.reduce(
        (total: any, item: any) => total + item.quantity,
        0
      );
      setCartQuantity(totalQuantity);
      refresh();
    }
  }, [data]);

  return (
    <Wrapper>
      <header className="relative flex items-center justify-between h-20 pr-2">
        {/* Logo */}
        <Link className="z-10" href="/">
          <Image
            src={"/images/Logo.png"}
            alt="One-Place Logo"
            width={135}
            height={23}
          />
        </Link>

        {/* Mobile Menu Toggle */}
          <button className="lg:hidden flex items-center ml-auto" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <RiCloseLine size={30} />
            ) : (
              <RiMenu3Line size={30} />
            )}
          </button>

        {/* Desktop Menu */}
        <ul className="flex text-lg gap-x-10 items-center max-lg:hidden" id="menuItems">
          <li>
            <Link href="/Female">Female</Link>
          </li>
          <li>
            <Link href="/Male">Male</Link>
          </li>
          <li>
            <Link href="/kids">Kids</Link>
          </li>
          <li>
            <Link href="/All-Products">All Products</Link>
          </li>
        </ul>

        {/* Search */}
        <div className="w-1/3 max-w-md flex items-center border rounded-md font-light overflow-hidden pl-2 max-lg:hidden">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            version="1.1"
            id="search"
            x="0px"
            y="0px"
            viewBox="0 0 24 24"
            height="15"
            width="15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31 c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02z"></path>
            </g>
          </svg>
          <input
            className="grow placeholder-black text-[0.80rem] leading-none px-1 py-1.5"
            type="search"
            placeholder="What you looking for"
          />
        </div>
            {/* Both Sign-In and Cart */}
        <div className="flex items-center gap-4">
            {/* Sign-In Button */}
        <div className=" max-lg:hidden">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <div>
              <SignInButton>
                <button className="border text-sm px-4 py-2 rounded-md hover:bg-black hover:text-white transition-all duration-300">
                  Sign in
                </button>
              </SignInButton>
            </div>
          </SignedOut>
        </div>

        {/* Cart */}
        <Link
          className="bg-slate-200 relative rounded-full p-3 max-lg:hidden"
          href="/Cart"
        >
          <svg //onClick={//updateCart}
            stroke="currentColor"
            fill="none"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <span className="flex items-center justify-center text-white text-xs w-4 h-4 bg-red-500 absolute right-0 top-0 rounded-full">
            {cartQuantity}
          </span>
        </Link>
        </div>
     

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="h-auto overflow-hidden bg-white lg:hidden absolute z-10 top-16 left-0 right-0 transition-all duration-300 mt-6">
            <div className="flex justify-center gap-4 items-center">
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
              <SignedOut>
                <div>
                  <SignInButton>
                    <button className="border text-sm px-4 py-2 rounded-md hover:bg-black hover:text-white transition-all duration-300">
                      Sign in
                    </button>
                  </SignInButton>
                </div>
              </SignedOut>

              <Link
                className="bg-slate-200 relative rounded-full p-3 lg:hidden"
                href="/Cart"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2.5"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <span className="flex items-center justify-center text-white text-xs w-4 h-4 bg-red-500 absolute right-0 top-0 rounded-full">
                  {cartQuantity}
                </span>
              </Link>
            </div>
            <ul className="flex flex-col items-center text-lg gap-y-6 py-6 lg:hidden">
              <li>
                <Link href="/Female">Female</Link>
              </li>
              <li>
                <Link href="/Male">Male</Link>
              </li>
              <li>
                <Link href="/kids">Kids</Link>
              </li>
              <li>
                <Link href="/All-Products">All Products</Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </Wrapper>
  );
};

export default Navbar;
