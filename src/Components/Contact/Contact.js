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
    <div className="my-20 container mx-auto px-5" id="contact">
      <div>
        <h2 className="text-center text-xl md:text-4xl font-bold mb-5 md:mb-10 text-white">
          Get In Touch
        </h2>
      </div>
      <div className="md:grid md:grid-cols-2 gap-5">
        <div className="md:mb-0 mb-5">
          <div className="card glass w-full mx-auto">
            <figure>
              <img
                src={contactFormImage}
                className="w-11/12 mt-5 rounded-xl"
                alt=""
              />
            </figure>
            <div className="card-body text-white">
              <h2 className="card-title">Mezanur Rahman</h2>
              <p className="">Junior Web Developer</p>
              <div className="">
                <p className="my-3">
                  phone: 01828569660 <br /> email: mezanurrahman200212@gmail.com{" "}
                  <br />
                  Location: Rangpur, Bangladesh
                </p>
              </div>
              <div className="">
                <h5 className="text-xl font-bold mb-2">Find Me On</h5>
                <div className="flex items-center">
                  <a
                    className="mr-3"
                    href="https://web.facebook.com/mezanurrahman2002/"
                  >
                    <i class="fa-brands fa-facebook text-3xl"></i>
                  </a>
                  <a className="mr-3" href="https://github.com/Mezan2002">
                    <i class="fa-brands fa-github text-3xl"></i>
                  </a>
                  <a
                    className="mr-3"
                    href="https://www.linkedin.com/in/mezanurrahman2002/"
                  >
                    <i class="fa-brands fa-linkedin text-3xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:pl-5 px-2 md:px-0 ">
          <div className="card glass">
            <div className="card-body">
              <h4 className="md:text-2xl text-xl md:mb-10 hidden md:block font-bold text-white">
                Contact Me
              </h4>
              <form ref={form} onSubmit={sendEmail}>
                <div>
                  <label className="label">
                    <span className="label-text text-white">Your Name</span>
                  </label>
                  <input
                    className="border-b-2 inputForm w-full py-3 px-5 focus:outline-none text-xl
                     rounded-md"
                    type="text"
                    name="user_name"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-white">Your Email</span>
                  </label>
                  <input
                    className="border-b-2 inputForm w-full py-3 px-5 focus:outline-none text-xl
                     rounded-md"
                    type="email"
                    name="user_email"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-white">Subject</span>
                  </label>
                  <input
                    className="border-b-2 inputForm w-full py-3 px-5 focus:outline-none text-xl
                     rounded-md"
                    type="text"
                    name="email_subject"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Your Message</span>
                  </label>
                  <textarea
                    name="message"
                    className="textarea textarea-bordered h-40"
                  ></textarea>
                </div>
                <input
                  type="submit"
                  value="Submit"
                  className="btn glass btn-block mt-20"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
