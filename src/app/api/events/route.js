import { NextResponse } from "next/server";
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userName: String,
    userEmail: { type: String, unique: true },
    userImageUrl: String,
    events: Array // Define events as an array
}, { strict: false });

const userModel = mongoose.models.users || mongoose.model('users', userSchema);

export async function POST(_req) {
    try {
        await mongoose.connect("mongodb+srv://thrishakannan25:Thrisha3*@cluster0.2wvunqh.mongodb.net/notimestreak")
        const data = await _req.json();
        console.log(data)

        const userEmail = data.userEmail;
        const eventObject = data.events;

        // Find the user document based on userEmail
        let user = await userModel.findOne({ userEmail });


        const numberOfFields = Object.keys(eventObject).length;
        const mark = numberOfFields * 5;

        if (!user) {
            // If user not found, create a new user
            user = new userModel({
                userEmail,
                events: [] // Initialize events as an empty array
            });
        } else if (!user.events) {
            // If events array is not defined, initialize it
            user.events = [];
        }

        // Push the event object to the events array
        eventObject.mark=mark
        user.events.push(eventObject);
        await user.save();

        return NextResponse.json({ message: 'Event added successfully', user });

    } catch (error) {
        console.log("Error:", error);
        return NextResponse.json({ error: error });
    }
}
