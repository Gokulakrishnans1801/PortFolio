import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_tirsgwj", "template_r300hvr", form.current, {
        publicKey: "Ggji_cwwmtNBCA1j7",
      })
      .then(
        () => {
          toast.success("Email send successfully", {
            position: "bottom-center",
            autoClose: 5000,
          });
          alert("Email send successfully");
        },
        (error) => {
          toast.error("Email not send. Try again.", {
            position: "bottom-center",
            autoClose: 5000,
          });
          alert("Email not send. Try again");
        }
      );
  };

  return (
    // <form ref={form} onSubmit={sendEmail}>
    //   <label>Name</label>
    //   <input type="text" name="from_name" />
    //   <label>Email</label>
    //   <input type="email" name="from_email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>

    <section className="contact" id="contact">
      <h2 className="heading">
        Contact <span>Me!</span>
      </h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="input-box">
          <div className="input-field">
            <input
              type="text"
              placeholder="Full Name"
              name="from_name"
              required
            />
            <span className="focus"></span>
          </div>
          <div className="input-field">
            <input
              type="text"
              placeholder="Email Address"
              name="from_email"
              required
            />
            <span className="focus"></span>
          </div>
        </div>

        <div className="input-box">
          <div className="input-field">
            <input type="number" placeholder="Mobile Number" />
            <span className="focus"></span>
          </div>
          <div className="input-field">
            <input type="text" placeholder="Email Subject" />
            <span className="focus"></span>
          </div>
        </div>
        <div className="textarea-field">
          <textarea
            id=""
            cols="40"
            rows="10"
            placeholder="Your Message"
            required
            name="message"
          ></textarea>
          <span className="focus"></span>
        </div>
        <div className="btn-box btns">
          <input type="submit" className="btn" value="send" />
        </div>
      </form>
    </section>
  );
};

export default Contact;
