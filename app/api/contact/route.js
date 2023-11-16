import { NextResponse } from "next/server"

export async function POST(req){
    const{fullName, email, message} = await req.json()
        console.log("fullname", fullName)
        console.log("email", email) 
        console.log("message", message)
        
    return NextResponse.json({msg: ["hi from Contact ROute"]})
}