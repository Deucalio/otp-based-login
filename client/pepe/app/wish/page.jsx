"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import CurrentUser from "../actions/currentUser";
import { useSession } from "next-auth/react";

const Page = () => {
  // const user = useSession();
  // console.log("user", user);

  // BOTH SIDE OF THE SAME COIN

  // const getUser = async () => {
  //   const data = await CurrentUser();
  //   console.log("data", data);
  // };

  useEffect(() => {
    getUser();
  });

  // console.log("CurrentUser",  CurrentUser());
  return (
    <div>
      <h1>Wish</h1>
      <Link href="/">Home</Link>
    </div>
  );
};

export default Page;
