import { NextRequest, NextResponse } from "next/server";
import { BACKEND_API } from "@/constants/constants";

export async function GET() {
  try {
    // Fetch data from backend
    const res = await fetch(`${BACKEND_API}/portfolio`, {
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `Failed to fetch data: ${res.status}` },
        { status: res.status }
      );
    }

    const data: unknown = await res.json();
    // console.log("data", data);

    return NextResponse.json( data );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error", details: error },
      { status: 500 }
    );
  }
}