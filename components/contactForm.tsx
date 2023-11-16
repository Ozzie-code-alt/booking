const ContactForm = () => {
  return (
    <>
      <form className="py-4 mt-4 border-t flex flex-col gap-5">
        <div>
          <label htmlFor="fullname">FullName</label>
          <input type="text" id="fullname" placeholder="Kobe Bryant" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="SomePerson@gmail.com" />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Type your message here...">
            {" "}
          </textarea>
        </div>

        <button type="submit">Send</button>

        <div>
          <div>Error Messages</div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
