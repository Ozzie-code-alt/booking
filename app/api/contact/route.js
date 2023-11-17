import connectDB from "@/app/lib/db";
import { NextResponse } from "next/server";
import Contact from "@/app/models/contact";
import { error } from "console";
import mongoose from "mongoose";

export async function POST(req) {
  const { fullName, email, message } = await req.json();
  try {
    await connectDB();
    await Contact.create({fullName, email, message });
    console.log("Works")
    
    return NextResponse.json({
      msg: ["Message sent succesfully"],
      success: true,
    });
  } catch (err) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(e.message);
      }
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json(err);
    }
  }
}
