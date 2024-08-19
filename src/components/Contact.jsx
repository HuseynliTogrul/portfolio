import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import "../css/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <h2>
        Get in <span>Touch</span>
      </h2>
      <div className="contactWrapper">
        <div className="contactLeft">
          <ul>
            <li>
              <FaLocationDot />
              <p>Xırdalan ş.</p>
            </li>
            <li>
              <IoMdMail />
              <p>huseynlitogrul2002@gmail.com</p>
            </li>
            <li>
              <FaPhoneAlt />
              <p>+994 51 420 42 72</p>
            </li>
            <li>
              <FaLinkedin />
              <p>
                https://www.linkedin.com/in/to%C4%9Frul-h%C3%BCseynli-2baa28241/
              </p>
            </li>
          </ul>
        </div>
        <div className="contactRight">
          <div className="contactInput">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
          </div>
          <div className="contactTextArea">
            <textarea name="" id="" placeholder="Message"></textarea>
          </div>
          <button className="contactBtn">Send Message</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
