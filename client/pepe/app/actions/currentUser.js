"use server";
import { auth } from "../../auth";

export default async function CurrentUser() {
  const data = await auth();
  console.log("data", data);
  return data;
}
