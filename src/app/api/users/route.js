import { NextResponse } from "next/server";
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userName: String,
    userEmail: { type: String, unique: true },
    userImageUrl:String,
    events:Array
},{ strict: false });


const userModel = mongoose.models.users || mongoose.model('users', userSchema);

export async function POST(_req) {
    try {
        await mongoose.connect("mongodb+srv://thrishakannan25:Thrisha3*@cluster0.2wvunqh.mongodb.net/notimestreak")
        const data = await _req.json();
        
        const userData = new userModel(data);
        await userData.save();

        console.log("UserData:", userData); 

        return NextResponse.json({ message: 'User Registered Successfully', userData });

    } catch (error) {
        console.log("Error:", error);
        return NextResponse.json({ error: error });
    }
}
