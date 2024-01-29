"use client";
import React, { useEffect, useState } from "react";
import { auth, signOut } from "../auth";
import { useSession } from "next-auth/react";
import Logout from "./actions/logout";
import CurrentUser from "./actions/currentUser";
import { Asul } from "next/font/google";
import { get } from "mongoose";
import Link from "next/link";

const Page = () => {
  const [user, setUser] = useState(null);
  // const loggedInData = async () => {
  //   "use server";
  //   const data = await auth();
  //   console.log("data", data);
  // };
  // const { data } = useSession();
  // console.log("data", data);
  const getUser = async () => {
    const data = await CurrentUser();
    console.log("data", data);
    setUser(data);
  };
  useEffect(() => {
    getUser();
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    Logout();
  };

  return (
    <div className="h-screen bg-black text-white">
      <p>Hello {user?.user?.name}</p>
      <Link href="/wish">
        <p>Wish</p>
      </Link>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Page;
