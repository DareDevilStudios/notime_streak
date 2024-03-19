// import connectMongo from "../../../lib/mongodb";
// import { NextResponse } from "next/server";
// import User from "@/lib/schemas/users"
//
// export async function GET() {
//     try {
//         await connectMongo();
//         let result = await User.find();
//         console.log("result", result)
//         return NextResponse.json({ data: result });
//     } catch (error) {
//         console.log("error", error)
//         return NextResponse.json({ error: error });
//     }
// }