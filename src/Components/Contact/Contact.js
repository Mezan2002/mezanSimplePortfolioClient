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
          <div className="card glass w-8/12 mx-auto">
            <figure>
              <img
                src={contactFormImage}
                className="w-11/12 mt-5 rounded-xl"
                alt=""
              />
            </figure>
            <div className="card-body text-white">
              <h2 className="card-title">Mezanur Rahman</h2>
              <p>Junior Web Developer</p>
              <p>
                I am avabilable to work as a junior web developer. Connect with
                me via and call in to my account.
              </p>
              <p className="mt-5">
                phone: 01828569660 <br /> email: mezanurrahman200212@gmail.com
              </p>
              <div className="card-actions">
                <h5 className="text-xl font-bold block">Find Me On</h5>
                <div>
                  <p>
                    <i class="fa-brands fa-facebook"></i>
                  </p>
                  <p>
                    <i class="fa-brands fa-github"></i>
                  </p>
                  <p>
                    <i class="fa-brands fa-linkedin"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
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
