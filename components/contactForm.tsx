'use client'
import { useState } from "react";

const ContactForm = () => {

    const[fullName, setFullname] =useState("")
    const[email , setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = async (e)=>{
        e.preventDefault();
        // console.log("fullname", fullName)
        // console.log("email", email) how we display this form 
        // console.log("message", message)
        const res = await fetch("api/contact",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body: JSON.stringify({
                fullName, email,message
            })
        })

        const{msg} = await res.json()
        setError(msg)
        console.log(error)
    }
  return (
    <>
      <form className="py-4 mt-4 border-t flex flex-col gap-5" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullname">FullName</label>
          <input onChange={(e)=> setFullname(e.target.value)}  value={fullName}type="text" id="fullname" placeholder="Kobe Bryant" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input onChange={(e)=> setEmail(e.target.value)} value={email} type="text" id="email" placeholder="SomePerson@gmail.com" />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea onChange={(e) =>setMessage(e.target.value)} value={message} className="h-32" id="message" placeholder="Type your message here...">
            {" "}
          </textarea>
        </div>

        <button className="bg-green-700 p-3 text-white font-bold" type="submit">Send</button>

        <div className="bg-slate-100 flex flex-col">
          <div className="text-red-600 px-5 py-2">Error Messages</div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
