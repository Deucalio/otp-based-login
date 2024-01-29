"use server";
import { auth, signIn, signOut } from "../../auth";

export default async function Logout() {
  return await signOut();
}
