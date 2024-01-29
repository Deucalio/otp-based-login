"use server";
import { auth, signIn, signOut } from "../../auth";

export default async function Login(data) {
  const user = await signIn("credentials", {
    email: data.email,
    password: data.password,
  });

  return user;
}
