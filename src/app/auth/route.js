import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from 'next/server';
import mongoose from "mongoose";

export async function GET(request,response) {
    mongoose.connect("mongodb+srv://1rinshad1:1234567890@cluster0.vzopx7c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        .then(() => {
            console.log('Connected to the Database');
            return NextResponse.json({ message: 'Form submitted successfully!' });
        })
        .catch((err) => {
            console.log('Error connecting to the Database');
            console.log(err);
        });


    
    

    return Response.json({ age: 144 });

}