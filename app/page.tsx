import ContactForm from "@/components/contactForm";

export default function Home() {
  return (
    <>
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">Booking</h1>
        <p>Please fill in the the form for booking</p>

        <ContactForm/>
    </div>
    </>
  )
}
