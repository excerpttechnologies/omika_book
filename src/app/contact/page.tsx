"use client";

import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend, FiUser, FiMessageSquare, FiGlobe } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaTwitter, FaLinkedin } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = "Invalid phone number (10 digits required)";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      // Format phone number as user types
      const numbers = value.replace(/\D/g, '');
      let formatted = numbers;
      if (numbers.length > 3 && numbers.length <= 6) {
        formatted = `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
      } else if (numbers.length > 6) {
        formatted = `${numbers.slice(0, 3)}-${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
      }
      setFormData({ ...formData, [name]: formatted });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setErrors({});

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(false);
    }, 3000);
  };

  const socialLinks = [
    { icon: <FaFacebook />, label: "Facebook", color: "#1877F2", url: "#" },
    { icon: <FaInstagram />, label: "Instagram", color: "#E4405F", url: "#" },
    { icon: <FaYoutube />, label: "YouTube", color: "#FF0000", url: "#" },
    { icon: <FaWhatsapp />, label: "WhatsApp", color: "#25D366", url: "#" },
    { icon: <FaTwitter />, label: "Twitter", color: "#1DA1F2", url: "#" },
    { icon: <FaLinkedin />, label: "LinkedIn", color: "#0A66C2", url: "#" },
  ];

  const contactInfo = [
    { icon: <FiMapPin />, label: "Address", info: "123 Book Street, San Francisco, CA 94107" },
    { icon: <FiPhone />, label: "Phone", info: "+1 (555) 123-4567" },
    { icon: <FiMail />, label: "Email", info: "support@bookhub.com" },
    { icon: <FiGlobe />, label: "Website", info: "www.bookhub.com" },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      padding: '2rem 1rem',
      fontFamily: "'Segoe UI', 'Roboto', 'Arial', sans-serif"
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            fontWeight: '800',
            color: '#2c3e50',
            marginBottom: '0.5rem'
          }}>
            Contact Us
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: '#4a5568',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Get in touch with us. We're here to help!
          </p>
        </div>

        {/* Main Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          alignItems: 'start'
        }}>
          {/* Left Side - Contact Form */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '15px',
            padding: '2rem',
            boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
            border: '1px solid #e2e8f0'
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#2c3e50',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <FiSend style={{ color: '#99bbcf' }} />
              Send us a Message
            </h2>

            {isSubmitted ? (
              <div style={{
                textAlign: 'center',
                padding: '2rem',
                backgroundColor: '#f0f9f4',
                borderRadius: '10px',
                border: '1px solid #c6f6d5'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  backgroundColor: '#48bb78',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  color: 'white'
                }}>
                  ✓
                </div>
                <h3 style={{ color: '#22543d', marginBottom: '0.5rem' }}>
                  Message Sent Successfully!
                </h3>
                <p style={{ color: '#4a5568' }}>
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {/* Name Field */}
                <div>
                  <label
                    style={{
                      display: 'flex',
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      color: '#2c3e50',
                      marginBottom: '0.4rem',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <FiUser style={{ fontSize: '0.9rem', color: '#99bbcf' }} />
                    Full Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      fontSize: '1rem',
                      border: `2px solid ${errors.name ? '#fc8181' : '#e2e8f0'}`,
                      borderRadius: '8px',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      backgroundColor: '#f8fafc'
                    }}
                    placeholder="Enter your full name"
                    onFocus={(e) => {
                      e.target.style.borderColor = '#99bbcf';
                      e.target.style.backgroundColor = '#ffffff';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = errors.name ? '#fc8181' : '#e2e8f0';
                      e.target.style.backgroundColor = '#f8fafc';
                    }}
                  />
                  {errors.name && (
                    <p style={{ color: '#e53e3e', fontSize: '0.85rem', marginTop: '0.3rem' }}>
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    style={{
                      display: 'flex',
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      color: '#2c3e50',
                      marginBottom: '0.4rem',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <FiMail style={{ fontSize: '0.9rem', color: '#99bbcf' }} />
                    Email Address *
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      fontSize: '1rem',
                      border: `2px solid ${errors.email ? '#fc8181' : '#e2e8f0'}`,
                      borderRadius: '8px',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      backgroundColor: '#f8fafc'
                    }}
                    placeholder="your@email.com"
                    onFocus={(e) => {
                      e.target.style.borderColor = '#99bbcf';
                      e.target.style.backgroundColor = '#ffffff';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = errors.email ? '#fc8181' : '#e2e8f0';
                      e.target.style.backgroundColor = '#f8fafc';
                    }}
                  />
                  {errors.email && (
                    <p style={{ color: '#e53e3e', fontSize: '0.85rem', marginTop: '0.3rem' }}>
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label
                    style={{
                      display: 'flex',
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      color: '#2c3e50',
                      marginBottom: '0.4rem',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <FiPhone style={{ fontSize: '0.9rem', color: '#99bbcf' }} />
                    Phone Number *
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      fontSize: '1rem',
                      border: `2px solid ${errors.phone ? '#fc8181' : '#e2e8f0'}`,
                      borderRadius: '8px',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      backgroundColor: '#f8fafc'
                    }}
                    placeholder="123-456-7890"
                    onFocus={(e) => {
                      e.target.style.borderColor = '#99bbcf';
                      e.target.style.backgroundColor = '#ffffff';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = errors.phone ? '#fc8181' : '#e2e8f0';
                      e.target.style.backgroundColor = '#f8fafc';
                    }}
                  />
                  {errors.phone && (
                    <p style={{ color: '#e53e3e', fontSize: '0.85rem', marginTop: '0.3rem' }}>
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    style={{
                      display: 'flex',
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      color: '#2c3e50',
                      marginBottom: '0.4rem',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <FiMessageSquare style={{ fontSize: '0.9rem', color: '#99bbcf' }} />
                    Message *
                  </label>

                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      fontSize: '1rem',
                      border: `2px solid ${errors.message ? '#fc8181' : '#e2e8f0'}`,
                      borderRadius: '8px',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      backgroundColor: '#f8fafc',
                      resize: 'vertical',
                      minHeight: '120px'
                    }}
                    placeholder="How can we help you?"
                    onFocus={(e) => {
                      e.target.style.borderColor = '#99bbcf';
                      e.target.style.backgroundColor = '#ffffff';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = errors.message ? '#fc8181' : '#e2e8f0';
                      e.target.style.backgroundColor = '#f8fafc';
                    }}
                  />
                  {errors.message && (
                    <p style={{ color: '#e53e3e', fontSize: '0.85rem', marginTop: '0.3rem' }}>
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    marginTop: '0.5rem',
                    padding: '14px 24px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'white',
                    backgroundColor: isSubmitting ? '#a0aec0' : '#2c3e50',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'all 0.3s ease',
                    width: '100%'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.backgroundColor = '#1a202c';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.backgroundColor = '#2c3e50';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div style={{
                        width: '18px',
                        height: '18px',
                        border: '2px solid rgba(255,255,255,0.3)',
                        borderTop: '2px solid white',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                      }} />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend style={{ fontSize: '1.1rem' }} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Side - Google Map & Contact Info */}
          <div>
            {/* Google Map */}
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '15px',
              padding: '1.5rem',
              boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
              border: '1px solid #e2e8f0',
              marginBottom: '1.5rem'
            }}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#2c3e50',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <FiMapPin style={{ color: '#99bbcf' }} />
                Our Location
              </h2>

              {/* Google Maps Embed */}
              <div style={{
                height: '250px',
                borderRadius: '10px',
                overflow: 'hidden',
                border: '1px solid #e2e8f0'
              }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0353875248135!2d-122.419416684682!3d37.774929779759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c0b9f2c3f%3A0x5e7c2a5a5a5a5a5a!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '15px',
              padding: '1.5rem',
              boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
              border: '1px solid #e2e8f0'
            }}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#2c3e50',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                Contact Information
              </h2>

              {/* Contact Details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                {contactInfo.map((item, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px'
                  }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(153, 187, 207, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      border: '1px solid rgba(153, 187, 207, 0.3)'
                    }}>
                      <div style={{ color: '#99bbcf', fontSize: '1rem' }}>
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <p style={{
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        color: '#2c3e50',
                        marginBottom: '0.2rem'
                      }}>
                        {item.label}
                      </p>
                      <p style={{ fontSize: '0.95rem', color: '#4a5568' }}>
                        {item.info}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media Links */}
              <div>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#2c3e50',
                  marginBottom: '0.8rem'
                }}>
                  Connect With Us
                </h3>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.8rem'
                }}>
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(153, 187, 207, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        color: social.color,
                        border: '1px solid rgba(153, 187, 207, 0.3)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = social.color;
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.color = 'white';
                        e.currentTarget.style.borderColor = social.color;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(153, 187, 207, 0.15)';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.color = social.color;
                        e.currentTarget.style.borderColor = 'rgba(153, 187, 207, 0.3)';
                      }}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div style={{ fontSize: '1.2rem' }}>
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div style={{
          textAlign: 'center',
          marginTop: '3rem',
          padding: '1.5rem',
          color: '#718096',
          fontSize: '0.9rem',
          borderTop: '1px solid #e2e8f0'
        }}>
          <p>
            We typically respond within 24 hours on business days.
          </p>
        </div>

        {/* Animation Styles */}
        <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          @media (max-width: 768px) {
            div[style*="gridTemplateColumns: 1fr 1fr"] {
              grid-template-columns: 1fr;
              gap: 1.5rem;
            }
            
            div[style*="padding: 2rem"] {
              padding: 1.5rem;
            }
            
            h1[style*="fontSize: clamp(2rem"] {
              font-size: 1.8rem !important;
            }
            
            div[style*="height: 250px"] {
              height: 200px;
            }
          }
          
          @media (max-width: 480px) {
            div[style*="padding: 2rem 1rem"] {
              padding: 1rem 0.5rem;
            }
            
            div[style*="padding: 1.5rem"] {
              padding: 1rem;
            }
            
            input[style*="padding: 12px 14px"],
            textarea[style*="padding: 12px 14px"] {
              padding: 10px 12px;
            }
            
            button[style*="padding: 14px 24px"] {
              padding: 12px 20px;
            }
          }
        `}</style>
      </div>
    </div>
  );
}