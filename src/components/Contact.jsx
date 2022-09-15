import React from "react";
import illustration from "../images/illustration.png";
import { useState } from "react";

export default function () {
  const [name, setName] = useState("");
  const [object, setObject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <section id="contact">
        <div className="header">
          <h1>Contact</h1>
          <h3>Get in touch</h3>
        </div>
        <div className="container">
          <form>
            <div>
              <input
                type="text"
                placeholder="Enter name..."
                value={name}
                onChange={(e) => { setName(e.target.value) }}
              />
              <input
                type="text"
                placeholder="Enter object..."
                value={object}
                onChange={(e) => { setObject(e.target.value) }}
              />
            </div>
            <input
              type="email"
              placeholder="Enter email..."
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
            />
            <textarea
              type="text"
              placeholder="Enter message..."
              value={message}
              onChange={(e) => { setMessage(e.target.value) }}
              rows={6}
            />
            <button>Send message</button>
          </form>
          <div className="illustration">
            <img src={illustration} />
          </div>
        </div>
      </section>
    </>
  )
}