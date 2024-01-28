import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <main class="register-route relative h-screen">
      <section class="relative z-10 mx-auto grid h-5/6 translate-y-11 grid-cols-8 rounded-3xl border-indigo-950 bg-black shadow-md shadow-violet-900 md:w-2/4">
        <div class="col-span-3 overflow-hidden rounded-lg">
          <img
            class="h-full rounded-3xl bg-cover"
            src="https://i.imgur.com/9pSisLC.jpg"
            alt=""
          />
        </div>
        <div class="col-span-5 overflow-scroll rounded-3xl border-fuchsia-400 py-8 pl-24 md:pl-8 lg:overflow-hidden">
          <ul class="mx-auto -ml-10 flex flex-col items-center gap-7 border-fuchsia-900 text-xl text-slate-200">
            <li class="flex flex-col gap-2">
              <p class="text-md font-semibold">Login</p>
            </li>
            <li>
              <form class="grid border-teal-700 text-xs md:text-sm" action="">
                <ul class="">
                  <li class="relative flex flex-col gap-6">
                    <input
                      placeholder="Email"
                      class="h-10 w-56 rounded-md bg-slate-900 px-3 py-1 outline-none outline-2 transition-all placeholder:opacity-50 focus:outline-indigo-900"
                      type="email"
                      name=""
                      id=""
                    />
                    <input
                      placeholder="Password"
                      class="h-10 w-56 rounded-md bg-slate-900 px-3 py-1 outline-none outline-2 placeholder:opacity-50 focus:outline-indigo-900"
                      type="password"
                      name=""
                      id=""
                    />

                    <button class="relative mx-auto mt-1 w-32 rounded-md bg-gradient-to-l from-indigo-600 to-violet-700 px-3 py-2 hover:bg-indigo-800 hover:from-indigo-700 hover:to-violet-800">
                      Login
                      <span class="loader absolute right-4 opacity-0"></span>
                    </button>
                  </li>
                  <li class="mt-4">
                    <p>
                      Don't have an account?
                      <Link href={"/register"}>
                        <span class="cursor-pointer font-semibold text-indigo-500 transition-all hover:text-indigo-700 hover:underline">
                          {" "}
                          Register{" "}
                        </span>
                      </Link>
                    </p>
                  </li>
                </ul>
              </form>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Page;