import { NextResponse, NextRequest } from "next/server";

export async function GET(request) {
  return NextResponse.json({
    messsage: "hello world",
  });
}