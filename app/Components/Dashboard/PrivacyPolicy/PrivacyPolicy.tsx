"use client";
import React from "react";
import { routes } from "@/app/Routes/routes";
import { useRouter } from "next/navigation";

const PrivacyPolicy = () => {
  const router = useRouter();

  const handleDashboard = () => {
    router.push(routes.dashboard);
  };

  const handlePrivacyPolicy = () => {
    router.push(routes.privacyPolicy);
  };

  return (
    <div>
      {/* Breadcrumbs */}
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items space-x-1 md:space-x-2 rtl:space-x-reverse my-4 text-base">
          <li className="inline-flex items-center">
            <a
              onClick={handleDashboard}
              className="inline-flex items-center  text-black hover:text-blue-600 underline cursor-pointer"
            >
              Dashoboard
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <a
                onClick={handlePrivacyPolicy}
                className="ms-1  text-gray-500 hover:text-blue-600 md:ms-2  cursor-pointer"
              >
                Privacy policy
              </a>
            </div>
          </li>
        </ol>
      </nav>

      <div className="flex flex-col w-full h-fit bg-white rounded-lg shadow-md">
        <div className="text-lg font-medium p-4">Privacy Policy</div>

        <hr className="" />

        <div className="flex flex-col p-4 text-sm text-gray-500 gap-6">
          <p className="font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            malesuada, libero nec ultricies luctus, nisl elit tincidunt nunc,
            vel molestie risus elit sit amet nisl. Nullam nec quam a nunc
            ultrices luctus. Praesent auctor. Nullam nec quam a nunc ultrices
            luctus. Praesent auctor.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            malesuada, libero nec ultricies luctus, nisl elit tincidunt nunc,
            vel molestie risus elit sit amet nisl. Nullam nec quam a nunc
            ultrices luctus. Praesent auctor, nunc nec luctus euismod, libero
            nunc tincidunt odio, id tincidunt justo nunc nec nunc. Nullam nec
            quam a nunc ultrices luctus. Praesent auctor, nunc nec luctus
            euismod, libero nunc tincidunt odio, id tincidunt justo nunc nec
            nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            malesuada, libero nec ultricies luctus, nisl elit tincidunt nunc,
            vel molestie risus elit sit amet nisl. Nullam nec quam a nunc
            ultrices luctus. Praesent auctor, nunc nec luctus euismod, libero
            nunc tincidunt odio, id tincidunt justo nunc nec nunc. Nullam nec
            quam a nunc ultrices luctus. Praesent auctor, nunc nec luctus
            euismod, libero nunc tincidunt odio, id tincidunt justo nunc nec
            nunc.
          </p>

          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            malesuada, libero nec ultricies luctus, nisl elit tincidunt nunc,
            vel molestie risus elit sit amet nisl. Nullam nec quam a nunc
            ultrices luctus. Praesent auctor.
          </p>

          <p className="text-black font-medium inline-flex items-center gap-2">
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.3183 0.366151C18.9434 0.0185748 18.3356 0.0185748 17.9607 0.366151L6.45988 11.0287L2.03915 6.93022C1.66428 6.58264 1.05651 6.58268 0.68157 6.93022C0.306664 7.27776 0.306664 7.84122 0.68157 8.1888L5.78109 12.9165C6.15585 13.264 6.76407 13.2638 7.13867 12.9165L19.3183 1.62477C19.6932 1.27722 19.6932 0.713726 19.3183 0.366151Z"
                fill="#22B573"
              />
            </svg>
            Orci tempor ut risus pretium fringilla odio. Purus diam in id eget
            augue elementum. Accumsan curabitur felis
          </p>
          <p className="text-black font-medium inline-flex items-center gap-2">
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.3183 0.366151C18.9434 0.0185748 18.3356 0.0185748 17.9607 0.366151L6.45988 11.0287L2.03915 6.93022C1.66428 6.58264 1.05651 6.58268 0.68157 6.93022C0.306664 7.27776 0.306664 7.84122 0.68157 8.1888L5.78109 12.9165C6.15585 13.264 6.76407 13.2638 7.13867 12.9165L19.3183 1.62477C19.6932 1.27722 19.6932 0.713726 19.3183 0.366151Z"
                fill="#22B573"
              />
            </svg>
            Orci tempor ut risus pretium fringilla odio. Purus diam in id eget
            augue elementum. Accumsan curabitur felis
          </p>
          <p className="text-black font-medium inline-flex items-center gap-2">
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.3183 0.366151C18.9434 0.0185748 18.3356 0.0185748 17.9607 0.366151L6.45988 11.0287L2.03915 6.93022C1.66428 6.58264 1.05651 6.58268 0.68157 6.93022C0.306664 7.27776 0.306664 7.84122 0.68157 8.1888L5.78109 12.9165C6.15585 13.264 6.76407 13.2638 7.13867 12.9165L19.3183 1.62477C19.6932 1.27722 19.6932 0.713726 19.3183 0.366151Z"
                fill="#22B573"
              />
            </svg>
            Orci tempor ut risus pretium fringilla odio. Purus diam in id eget
            augue elementum. Accumsan curabitur felis
          </p>
          <p className="text-black font-medium inline-flex items-center gap-2">
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.3183 0.366151C18.9434 0.0185748 18.3356 0.0185748 17.9607 0.366151L6.45988 11.0287L2.03915 6.93022C1.66428 6.58264 1.05651 6.58268 0.68157 6.93022C0.306664 7.27776 0.306664 7.84122 0.68157 8.1888L5.78109 12.9165C6.15585 13.264 6.76407 13.2638 7.13867 12.9165L19.3183 1.62477C19.6932 1.27722 19.6932 0.713726 19.3183 0.366151Z"
                fill="#22B573"
              />
            </svg>
            Orci tempor ut risus pretium fringilla odio. Purus diam in id eget
            augue elementum. Accumsan curabitur felis
          </p>
          
          <p> Orci tempor ut risus pretium fringilla odio. Purus diam in id eget augue elementum. Accumsan curabitur felis mattis at purus faucibus tellus vestibulum. Lorem ipsum dolor sit amet consectetur. Phasellus sit nisi bibendum scelerisque consequat. Orci tempor ut risus pretium fringilla odio. Purus diam in id eget augue elementum. Accumsan curabitur felis mattis at purus faucibus tellus vestibulum. </p>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
