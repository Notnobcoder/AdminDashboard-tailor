import db from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (req: any) => {
  return Response.json({ message: "get data" });
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;
    console.log(email, password);
    const todo = await db.user.create({
      data: {
        email,
        password,
      },
    });

    console.log(todo);
    return NextResponse.json(todo); // Respond with the created todo
  } catch (error) {
    console.log("[POST TODO]", error);
    return new NextResponse("Internal Server Error", { status: 500 }); // Handle errors
  }
}
