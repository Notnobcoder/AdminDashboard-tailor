import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name } = body;
    console.log(name);
    const storeCreate = await db.store.create({
      data: {
        name,
      },
    });

    return NextResponse.json(storeCreate, { status: 201 }); // Respond with the created store
  } catch (error) {
    console.error("[Store Creation Error]", error);
    return new NextResponse("Failed to create store", { status: 500 }); // Handle errors
  }
}

export const GET = async (req: any) => {
  try {
    const stores = await db.store.findMany();
    console.log(stores);

    return NextResponse.json(stores, { status: 200 });
  } catch (error) {
    console.error("[GET STORES]", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
};
