// @ts-nocheck
"use server";

import prismadb from "@/lib/db";
import { NextResponse } from "next/server";

export const Register = async (data) => {
  const { email, password } = data;
  console.log(email);
  console.log(password);
  const store = await prismadb.user.create({
    data: {
      email,
      password,
    },
  });
  return NextResponse.json(store);
};
