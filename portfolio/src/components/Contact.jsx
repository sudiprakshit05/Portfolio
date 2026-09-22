
import React, { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

import "./Contact.css";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);
    setStatus("");


    try {

      const response = await fetch(
        "http://127.0.0.1:8000/api/contact/",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(formData)
        }
      );


      const data = await response.json();


      if (response.ok) {

        setStatus("Your message has been sent successfully!");

        // Clear form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });

      } else {

        setStatus(
          data.message || "Something went wrong. Please try again."
        );

      }

    } catch (error) {

      console.error(error);

      setStatus(
        "Unable to connect to the server. Please try again later."
      );

    } finally {

      setLoading(false);

    }

  };


  return (

    <section className="contact-section" id="contact">

      <div className="contact-container">

        <div className="section-title">

          <p>GET IN TOUCH</p>

          <h2>
            Contact <span>Me</span>
          </h2>

        </div>


        <div className="contact-content">


          {/* Contact Information */}

          <motion.div
            className="contact-info"

            initial={{
              opacity: 0,
              x: -60
            }}

            whileInView={{
              opacity: 1,
              x: 0
            }}

            transition={{
              duration: 0.7
            }}

            viewport={{
              once: true
            }}
          >

            <h3>
              Let's work <span>together</span>
            </h3>

            <p>
              Have a project idea, opportunity, or just want to
              say hello? <b>You can easily mail me using the contact form , 
              or reach out to me through my social media profiles.</b>
              Feel free to send me a message.
            </p>


            <div className="contact-item">

              <FaEnvelope />

              <div>
                <h4>Email</h4>
                <p>sudiprakshit006@gmail.com</p>
              </div>

            </div>


            <div className="contact-item">

              <FaMapMarkerAlt />

              <div>
                <h4>Location</h4>
                <p>West Bengal, India</p>
              </div>

            </div>


            <div className="contact-socials">

              <a
                href="https://github.com/sudiprakshit05"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>


              <a
                href="https://www.linkedin.com/in/sudip-rakshit-a50269316/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>

            </div>

          </motion.div>


          {/* Contact Form */}

          <motion.form

            className="contact-form"

            onSubmit={handleSubmit}

            initial={{
              opacity: 0,
              x: 60
            }}

            whileInView={{
              opacity: 1,
              x: 0
            }}

            transition={{
              duration: 0.7
            }}

            viewport={{
              once: true
            }}
          >


            <div className="form-group">

              <label>Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />

            </div>


            <div className="form-group">

              <label>Email</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>


            <div className="form-group">

              <label>Subject</label>

              <input
                type="text"
                name="subject"
                placeholder="Enter subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />

            </div>


            <div className="form-group">

              <label>Message</label>

              <textarea
                name="message"
                placeholder="Write your message..."
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

            </div>


            <button type="submit" className="send-btn" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
            {status && ( <p className="form-status"> {status} </p>)}

          </motion.form>

        </div>

      </div>

    </section>

  );

}

export default Contact;
