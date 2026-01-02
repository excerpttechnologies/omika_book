"use client";

import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from "react-icons/fi";
import "./contact.css"

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        {/* Header */}
        <div className="contact-header">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-subtitle">
            Have questions or want to collaborate? We'd love to hear from you. 
            Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info-side">
            <div className="contact-info-card">
              <h2 className="contact-info-title">Contact Information</h2>
              
              <div className="contact-info-items">
                {/* Email */}
                <div className="contact-info-item">
                  <div className="contact-info-icon email-icon">
                    <FiMail className="contact-info-icon-svg" />
                  </div>
                  <div className="contact-info-content">
                    <h3>Email Us</h3>
                    <p>hello@example.com</p>
                    <p>support@example.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="contact-info-item">
                  <div className="contact-info-icon phone-icon">
                    <FiPhone className="contact-info-icon-svg" />
                  </div>
                  <div className="contact-info-content">
                    <h3>Call Us</h3>
                    <p>+1 (555) 123-4567</p>
                    <p>+1 (555) 987-6543</p>
                  </div>
                </div>

                {/* Location */}
                <div className="contact-info-item">
                  <div className="contact-info-icon location-icon">
                    <FiMapPin className="contact-info-icon-svg" />
                  </div>
                  <div className="contact-info-content">
                    <h3>Our Office</h3>
                    <p>123 Business Street</p>
                    <p>San Francisco, CA 94107</p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="working-hours">
                <h3>Working Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-side">
            <div className="contact-form-card">
              <h2 className="contact-form-title">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="success-message">
                  <div className="success-icon-wrapper">
                    <FiCheckCircle className="success-icon" />
                  </div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for contacting us. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="form-textarea"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="submit-button"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="spinner"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FiSend className="button-icon" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

              <div className="privacy-notice">
                <p>
                  By submitting this form, you agree to our{" "}
                  <a href="#" className="privacy-link">
                    Privacy Policy
                  </a>
                  . We'll never share your information with third parties.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        {/* <div className="map-section">
          <h2 className="map-title">Find Our Location</h2>
          <div className="map-placeholder">
            <div className="map-icon-wrapper">
              <FiMapPin className="map-icon" />
            </div>
            <p className="map-text">Interactive map would be displayed here</p>
            <p className="map-address">123 Business Street, San Francisco, CA</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}