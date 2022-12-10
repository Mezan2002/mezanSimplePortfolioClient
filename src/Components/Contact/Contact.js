import React, { useRef } from "react";
import contactFormImage from "../../assets/images/contact.png";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1v929vn",
        "template_s1zjdjb",
        form.current,
        "YJcwIzmfm27N48akI"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Thanks For Contacting Me!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="my-20 container mx-auto" id="contact">
      <div>
        <h2 className="text-center text-xl md:text-4xl font-bold mb-5 md:mb-10">
          Get In Touch
        </h2>
      </div>
      <div className="lg:grid lg:grid-cols-2 gap-5">
        <div>
          <img className="rounded-xl" src={contactFormImage} alt="" />
        </div>
        <div className="md:pl-5 px-2 md:px-0 md:mt-24">
          <h4 className="md:text-2xl text-xl md:mb-10 hidden md:block font-bold">
            Contact Me
          </h4>
          <form ref={form} onSubmit={sendEmail}>
            <input
              className="border-b-2 inputForm w-full py-3 pl-2 focus:outline-none text-xl"
              type="text"
              name="user_name"
              placeholder="your name"
              required
            />
            <input
              className="mt-10 border-b-2 inputForm w-full py-3 pl-2 focus:outline-none text-xl"
              type="email"
              name="user_email"
              placeholder="your email"
              required
            />
            <input
              className="mt-10 border-b-2 inputForm w-full py-3 pl-2 focus:outline-none text-xl"
              type="text"
              name="message"
              placeholder="your message"
              required
            />
            <input
              type="submit"
              value="Submit"
              className="btn mt-20 btn-block"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
