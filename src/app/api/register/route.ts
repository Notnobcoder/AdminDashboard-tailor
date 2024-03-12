// export const POST = async (req: any) => {
//   const requstData = await req.json();
//   const { email } = requstData;
//   return Response.json({ message: email });
// };

export const GET = async (req: any) => {
  return Response.json({ message: "get data" });
};

import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // detsrtucture todoTitle from the incoming request
    const { email, password } = await req.json();
    console.log(email, password);

    // if (!todoTitle) {
    //   return new NextResponse("Title required", { status: 400 });
    // }

    // Create and save todo on the database
    const todo = await db.user.create({
      data: {
        email: email,
        password: password,
      },
    });

    return NextResponse.json(todo, { status: 200 }); // Respond with the created todo
  } catch (error) {
    console.log("[POST TODO]", error);
    return new NextResponse("Internal Server Error", { status: 500 }); // Handle errors
  }
}
