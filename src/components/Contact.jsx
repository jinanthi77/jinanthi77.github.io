import { useState } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { SiGithub, SiBehance, SiGmail } from "react-icons/si";
import siteConfig from "../config.js";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!siteConfig.contactFormEndpoint) {
      // No form backend configured — fall back to opening the visitor's
      // email app with the message pre-filled.
      const body = encodeURIComponent(
        `${form.message}\n\n— ${form.name} (${form.email})`
      );
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}&su=Portfolio%20contact&body=${body}`,
        "_blank"
      );
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(siteConfig.contactFormEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" }); // clear the form
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container contact__inner">
        <form className="contact__form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            required
            value={form.message}
            onChange={handleChange}
          />
          <button className="btn btn--submit" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Submit"}
          </button>
          {status === "sent" && <p className="contact__status">Thanks — your message was sent!</p>}
          {status === "error" && <p className="contact__status contact__status--error">Something went wrong. Please try again.</p>}
        </form>

        <div className="contact__side">
          <h2 className="section-heading">Let's Connect</h2>
          <p className="section-subheading">Send Me a Quick Message</p>

          <ul className="contact__social">
            <li>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </a>
            </li>
            <li>
              <a href={siteConfig.social.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <SiGithub size={28} />
              </a>
            </li>
            <li>
              <a href={siteConfig.social.behance} target="_blank" rel="noreferrer" aria-label="Behance">
                <SiBehance size={28} />
              </a>
            </li>
            <li>
              <a 
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}`}
                target="_blank"
                rel="noreferrer"
                aria-label="Email">
                <SiGmail size={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
