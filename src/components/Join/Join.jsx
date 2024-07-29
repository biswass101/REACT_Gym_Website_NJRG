import React, { useRef } from "react";
import "./Join.css";
import emailjs from '@emailjs/browser';
const Join = () => {
  const form = useRef()
  const sendEmail = (e) => {
    console.log("clicked");
    e.preventDefault();

    emailjs
      .sendForm('service_1w5cuqf', 'template_oc5vsq7', form.current, {
        publicKey: 'IvTme9qw8et2M0bzO',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO </span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY </span>
          <span className="stroke-text">With us?</span>
        </div>
      </div>
      <div className="right-j">
        <form onSubmit={sendEmail} ref={form} action="" className="email-container">
            <input type="email" name="user_email" placeholder="Enter your Email address"/>
            <button className="btn btn-j">Join now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
