"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Success = () => {
  return (
    <div class="col-span-5 overflow-scroll rounded-3xl border-fuchsia-400 py-12 pl-24 md:pl-8 lg:overflow-hidden">
      <ul class="mx-auto -ml-10 flex flex-col items-center gap-4 border-fuchsia-900 text-lg text-slate-200 ">
        <li class="flex flex-col gap-2">
          <p class="text-md font-semibold">Success</p>
          <div class="flex flex-row gap-3">
            <span class="h-2 w-14 rounded-3xl bg-indigo-950"></span>
            <span class="h-2 w-14 rounded-3xl bg-indigo-950"></span>
            <span class="h-2 w-14 rounded-3xl bg-indigo-700"></span>
          </div>
        </li>
        <li>
          <form class="grid border-teal-700 text-xs " action="">
            <ul class="">
              <li class="w-72 mt-2 md:w-64">
                <p>
                  Welcome Onboard! To continue, click the button below to
                  proceed to your account settings.
                </p>
              </li>
              <li class="flex mt-7 justify-center">
                <button class="bg-green-700 hover:bg-green-800 transition-all  text-white  py-3 px-6 rounded">
                  Finish Registration
                </button>
              </li>
            </ul>
          </form>
        </li>
      </ul>
    </div>
  );
};

const OTPVerification = () => {
  const mainRef = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      mainRef.current.classList.remove("opacity-0");
    }, 500);
  });

  return (
    <div class="opacity-0 transition-all duration-300 col-span-5 overflow-scroll rounded-3xl border-fuchsia-400 py-12 pl-24 md:pl-8 lg:overflow-hidden">
      <ul class="mx-auto -ml-10 flex flex-col items-center gap-4 border-fuchsia-900 text-lg text-slate-200">
        <li class="flex flex-col gap-2">
          <p class="text-md font-semibold">Verification</p>
          <div class="flex flex-row gap-3">
            <span class="h-2 w-14 rounded-3xl bg-indigo-950"></span>
            <span class="h-2 w-14 rounded-3xl bg-indigo-700"></span>
            <span class="h-2 w-14 rounded-3xl bg-slate-800"></span>
          </div>
        </li>
        <li>
          <form class="grid border-teal-700 text-xs" action="">
            <ul class="">
              <li class="text-xs">
                <p>Code sent to</p>
              </li>
              <li class="flex flex-col gap-1">
                <input
                  disabled
                  placeholder="captain.price@gmail.com"
                  class="h-10 w-60 rounded-md  bg-gray-900 px-3 py-1 outline-none outline-2 placeholder:opacity-50 focus:outline-indigo-900"
                  type="text"
                  name=""
                  id=""
                />
                <span
                  class="text-right text-xs 
                 underline text-rose-800 font-semibold -translate-x-1 cursor-pointer hover:text-red-900 transition-all duration-300"
                >
                  Change email
                </span>

                <div class="flex flex-row items-center justify-center gap-3">
                  <input
                    placeholder="Code"
                    class="mt-4 h-10 w-32 rounded-md border-slate-700 bg-slate-900 px-3 py-1 outline-none outline-2 placeholder:opacity-50 focus:outline-indigo-900"
                    type="number"
                    name=""
                    id=""
                  />
                  <button class="mt-4 h-10 w-24 rounded-md bg-blue-900 text-xs transition-all duration-500 hover:bg-blue-950">
                    Resend
                  </button>
                </div>

                <button class="mx-auto mt-10 w-32 px-3 py-2 rounded-md bg-gradient-to-l from-indigo-600 to-violet-700  hover:bg-indigo-800 hover:from-indigo-700 hover:to-violet-800">
                  Register
                </button>
              </li>
            </ul>
          </form>
        </li>
      </ul>
    </div>
  );
};

const Register = () => {
  return (
    <div class="col-span-5 overflow-scroll rounded-3xl border-fuchsia-400 py-8 pl-24 md:pl-8 lg:overflow-hidden">
      <ul class="mx-auto -ml-10 flex flex-col items-center gap-4 border-fuchsia-900 text-lg text-slate-200">
        <li class="flex flex-col gap-2">
          <p class="text-md font-semibold">Register</p>
          <div class="flex flex-row gap-3">
            <span class="h-2 w-14 rounded-3xl bg-indigo-700"></span>
            <span class="h-2 w-14 rounded-3xl bg-slate-800"></span>
            <span class="h-2 w-14 rounded-3xl bg-slate-800"></span>
          </div>
        </li>
        <li>
          <form class="grid border-teal-700 text-xs " action="">
            <ul class="">
              <li class="relative flex flex-col gap-6">
                <input
                  placeholder="First Name"
                  class="h-10 w-56 rounded-md border-slate-700 bg-slate-900 px-3 py-1 outline-none outline-2 placeholder:opacity-50 focus:outline-indigo-900"
                  type="text"
                  name=""
                  id=""
                />
                <input
                  placeholder="Last Name"
                  class="h-10 w-56 rounded-md  bg-slate-900 px-3 py-1 outline-none outline-2 placeholder:opacity-50 focus:outline-indigo-900"
                  type="text"
                  name=""
                  id=""
                />
                {/* border-2 border-rose-700  */}
                <input
                  placeholder="Email"
                  class="h-10 w-56 rounded-md  bg-slate-900 px-3 py-1 outline-none outline-2 transition-all placeholder:opacity-50 focus:outline-indigo-900"
                  type="email"
                  name=""
                  id=""
                />
                <input
                  placeholder="Password"
                  class="h-10 w-56 rounded-md  bg-slate-900 px-3 py-1 outline-none outline-2 placeholder:opacity-50 focus:outline-indigo-900"
                  type="password"
                  name=""
                  id=""
                />
                {/* <span class="absolute top-[10.7rem] text-xs text-rose-500">Invalid Email Address</span>  */}

                <button class="relative mx-auto mt-1 w-32 rounded-md bg-gradient-to-l from-indigo-600 to-violet-700 px-3 py-2 hover:bg-indigo-800 hover:from-indigo-700 hover:to-violet-800">
                  Next
                  <span class="loader absolute right-4 opacity-0"></span>
                </button>
              </li>
              <li class="md:mt-4 ml-4">
                <p>
                  Already have an account?{" "}
                  <Link href={"/login"}>
                    <span class="cursor-pointer font-semibold text-indigo-500 transition-all hover:text-indigo-700 hover:underline">
                      Sign in
                    </span>
                  </Link>
                </p>
              </li>
            </ul>
          </form>
        </li>
      </ul>
    </div>
  );
};

const Page = () => {
  return (
    <main className="register-route relative h-screen">
      <section class="relative z-10 mx-auto grid h-5/6 translate-y-11 grid-cols-8 rounded-3xl border-indigo-950 bg-black shadow-md shadow-violet-900 md:w-2/4">
        <div class="col-span-3 overflow-hidden rounded-lg">
          <img
            class="h-full rounded-3xl bg-cover"
            src="https://i.imgur.com/9pSisLC.jpg"
            alt=""
          />
        </div>
        {/* second Div */}
        <Register />
        {/* <OTPVerification /> */}
        {/* <Success /> */}
      </section>
    </main>
  );
};

export default Page;
