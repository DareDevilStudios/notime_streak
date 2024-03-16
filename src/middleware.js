// import { NextRequest, NextResponse } from "next/server";
import supabase from "./supabase/supabase";
// import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'



// export async function middleware(req) {
  
//   const res = NextResponse.next()
//   // Create authenticated Supabase Client.
//   const supabase = createMiddlewareClient({ req, res })
//   // Check if we have a user
//   const {
//     data: { user },
//   } = await supabase.auth.getUser()
  
// //   const {
// // data: { user },} = await supabase.auth.getUser()

// // const {
// //   data: { user },
// // } = await supabase.auth.getUser()



//   console.log(user);

  
// }

// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except:
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
//      * Feel free to modify this pattern to include more paths.
//      */
//     "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
//   ],
// };


import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextRequest, NextResponse } from "next/server";
export async function middleware(req) {
  const res = NextResponse.next()
  // Create a Supabase client instance using createMiddlewareClient
  const supabaseClient = createMiddlewareClient({ req, res });

  try {
    // Attempt to get the user from Supabase authentication
    // const { data: { user } } = await supabaseClient.auth.getUser();
    const { data: { user } } = await supabaseClient.auth.getUser();
   
    // Log the user object
    // console.log(user);
  } catch (error) {
    // Handle any errors that occur during authentication
    console.error("Error fetching user:", error);
  }
}
