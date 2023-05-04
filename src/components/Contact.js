import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="Contact">
      <img
        className="avatar"
        src="https://randomuser.me/api/portraits/men/20.jpg"
        alt="Theodore Holmes "
      />
      <div className="identity">
        <div className="name">Theodore Holmes</div>
        <div className="status ">
          <div className="status-online"></div> online
        </div>
      </div>
    </div>
  );
}

export default Contact;
