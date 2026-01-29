// "use client";

// import React, { useState } from "react";
// import { FiMail, FiPhone, FiMapPin, FiSend, FiUser, FiMessageSquare, FiGlobe } from "react-icons/fi";
// import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaTwitter, FaLinkedin } from "react-icons/fa";

// interface FormData {
//   name: string;
//   email: string;
//   phone: string;
//   message: string;
// }

// export default function Contact() {
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState<Partial<FormData>>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const validateForm = () => {
//     const newErrors: Partial<FormData> = {};

//     if (!formData.name.trim()) newErrors.name = "Name is required";
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = "Invalid email format";
//     }
//     if (!formData.phone.trim()) {
//       newErrors.phone = "Phone number is required";
//     } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
//       newErrors.phone = "Invalid phone number (10 digits required)";
//     }
//     if (!formData.message.trim()) newErrors.message = "Message is required";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;

//     if (name === 'phone') {
//       // Format phone number as user types
//       const numbers = value.replace(/\D/g, '');
//       let formatted = numbers;
//       if (numbers.length > 3 && numbers.length <= 6) {
//         formatted = `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
//       } else if (numbers.length > 6) {
//         formatted = `${numbers.slice(0, 3)}-${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
//       }
//       setFormData({ ...formData, [name]: formatted });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }

//     // Clear error when user starts typing
//     if (errors[name as keyof FormData]) {
//       setErrors({ ...errors, [name]: undefined });
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     setIsSubmitting(true);

//     // Simulate API call
//     await new Promise((resolve) => setTimeout(resolve, 1500));

//     setIsSubmitted(true);
//     setFormData({ name: "", email: "", phone: "", message: "" });
//     setErrors({});

//     setTimeout(() => {
//       setIsSubmitting(false);
//       setIsSubmitted(false);
//     }, 3000);
//   };

//   const socialLinks = [
//     { icon: <FaFacebook />, label: "Facebook", color: "#1877F2", url: "#" },
//     { icon: <FaInstagram />, label: "Instagram", color: "#E4405F", url: "#" },
//     { icon: <FaYoutube />, label: "YouTube", color: "#FF0000", url: "#" },
//     { icon: <FaWhatsapp />, label: "WhatsApp", color: "#25D366", url: "#" },
//     { icon: <FaTwitter />, label: "Twitter", color: "#1DA1F2", url: "#" },
//     { icon: <FaLinkedin />, label: "LinkedIn", color: "#0A66C2", url: "#" },
//   ];

//   const contactInfo = [
//     { icon: <FiMapPin />, label: "Address", info: "123 Book Street, San Francisco, CA 94107" },
//     { icon: <FiPhone />, label: "Phone", info: "+1 (555) 123-4567" },
//     { icon: <FiMail />, label: "Email", info: "support@bookhub.com" },
//     { icon: <FiGlobe />, label: "Website", info: "www.bookhub.com" },
//   ];

//   return (
//     <div style={{
//       minHeight: '100vh',
//       backgroundColor: '#f8fafc',
//       padding: '2rem 1rem',
//       fontFamily: "'Segoe UI', 'Roboto', 'Arial', sans-serif"
//     }}>
//       <div style={{
//         maxWidth: '1200px',
//         margin: '0 auto'
//       }}>
//         {/* Header */}
//         <div style={{
//           textAlign: 'center',
//           marginBottom: '3rem'
//         }}>
//           <h1 style={{
//             fontSize: 'clamp(2rem, 4vw, 2.8rem)',
//             fontWeight: '800',
//             color: '#2c3e50',
//             marginBottom: '0.5rem'
//           }}>
//             Contact Us
//           </h1>
//           <p style={{
//             fontSize: '1.1rem',
//             color: '#4a5568',
//             maxWidth: '600px',
//             margin: '0 auto'
//           }}>
//             Get in touch with us. We're here to help!
//           </p>
//         </div>

//         {/* Main Content Grid */}
//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: '1fr 1fr',
//           gap: '2rem',
//           alignItems: 'start'
//         }}>
//           {/* Left Side - Contact Form */}
//           <div style={{
//             backgroundColor: '#ffffff',
//             borderRadius: '15px',
//             padding: '2rem',
//             boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
//             border: '1px solid #e2e8f0'
//           }}>
//             <h2 style={{
//               fontSize: '1.5rem',
//               fontWeight: '700',
//               color: '#2c3e50',
//               marginBottom: '1.5rem',
//               display: 'flex',
//               alignItems: 'center',
//               gap: '10px'
//             }}>
//               <FiSend style={{ color: '#99bbcf' }} />
//               Send us a Message
//             </h2>

//             {isSubmitted ? (
//               <div style={{
//                 textAlign: 'center',
//                 padding: '2rem',
//                 backgroundColor: '#f0f9f4',
//                 borderRadius: '10px',
//                 border: '1px solid #c6f6d5'
//               }}>
//                 <div style={{
//                   width: '50px',
//                   height: '50px',
//                   borderRadius: '50%',
//                   backgroundColor: '#48bb78',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   margin: '0 auto 1rem',
//                   color: 'white'
//                 }}>
//                   ✓
//                 </div>
//                 <h3 style={{ color: '#22543d', marginBottom: '0.5rem' }}>
//                   Message Sent Successfully!
//                 </h3>
//                 <p style={{ color: '#4a5568' }}>
//                   We'll get back to you within 24 hours.
//                 </p>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
//                 {/* Name Field */}
//                 <div>
//                   <label
//                     style={{
//                       display: 'flex',
//                       fontSize: '0.95rem',
//                       fontWeight: '600',
//                       color: '#2c3e50',
//                       marginBottom: '0.4rem',
//                       alignItems: 'center',
//                       gap: '6px'
//                     }}
//                   >
//                     <FiUser style={{ fontSize: '0.9rem', color: '#99bbcf' }} />
//                     Full Name *
//                   </label>

//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     style={{
//                       width: '100%',
//                       padding: '12px 14px',
//                       fontSize: '1rem',
//                       border: `2px solid ${errors.name ? '#fc8181' : '#e2e8f0'}`,
//                       borderRadius: '8px',
//                       outline: 'none',
//                       transition: 'all 0.3s ease',
//                       backgroundColor: '#f8fafc'
//                     }}
//                     placeholder="Enter your full name"
//                     onFocus={(e) => {
//                       e.target.style.borderColor = '#99bbcf';
//                       e.target.style.backgroundColor = '#ffffff';
//                     }}
//                     onBlur={(e) => {
//                       e.target.style.borderColor = errors.name ? '#fc8181' : '#e2e8f0';
//                       e.target.style.backgroundColor = '#f8fafc';
//                     }}
//                   />
//                   {errors.name && (
//                     <p style={{ color: '#e53e3e', fontSize: '0.85rem', marginTop: '0.3rem' }}>
//                       {errors.name}
//                     </p>
//                   )}
//                 </div>

//                 {/* Email Field */}
//                 <div>
//                   <label
//                     style={{
//                       display: 'flex',
//                       fontSize: '0.95rem',
//                       fontWeight: '600',
//                       color: '#2c3e50',
//                       marginBottom: '0.4rem',
//                       alignItems: 'center',
//                       gap: '6px'
//                     }}
//                   >
//                     <FiMail style={{ fontSize: '0.9rem', color: '#99bbcf' }} />
//                     Email Address *
//                   </label>

//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     style={{
//                       width: '100%',
//                       padding: '12px 14px',
//                       fontSize: '1rem',
//                       border: `2px solid ${errors.email ? '#fc8181' : '#e2e8f0'}`,
//                       borderRadius: '8px',
//                       outline: 'none',
//                       transition: 'all 0.3s ease',
//                       backgroundColor: '#f8fafc'
//                     }}
//                     placeholder="your@email.com"
//                     onFocus={(e) => {
//                       e.target.style.borderColor = '#99bbcf';
//                       e.target.style.backgroundColor = '#ffffff';
//                     }}
//                     onBlur={(e) => {
//                       e.target.style.borderColor = errors.email ? '#fc8181' : '#e2e8f0';
//                       e.target.style.backgroundColor = '#f8fafc';
//                     }}
//                   />
//                   {errors.email && (
//                     <p style={{ color: '#e53e3e', fontSize: '0.85rem', marginTop: '0.3rem' }}>
//                       {errors.email}
//                     </p>
//                   )}
//                 </div>

//                 {/* Phone Field */}
//                 <div>
//                   <label
//                     style={{
//                       display: 'flex',
//                       fontSize: '0.95rem',
//                       fontWeight: '600',
//                       color: '#2c3e50',
//                       marginBottom: '0.4rem',
//                       alignItems: 'center',
//                       gap: '6px'
//                     }}
//                   >
//                     <FiPhone style={{ fontSize: '0.9rem', color: '#99bbcf' }} />
//                     Phone Number *
//                   </label>

//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     style={{
//                       width: '100%',
//                       padding: '12px 14px',
//                       fontSize: '1rem',
//                       border: `2px solid ${errors.phone ? '#fc8181' : '#e2e8f0'}`,
//                       borderRadius: '8px',
//                       outline: 'none',
//                       transition: 'all 0.3s ease',
//                       backgroundColor: '#f8fafc'
//                     }}
//                     placeholder="123-456-7890"
//                     onFocus={(e) => {
//                       e.target.style.borderColor = '#99bbcf';
//                       e.target.style.backgroundColor = '#ffffff';
//                     }}
//                     onBlur={(e) => {
//                       e.target.style.borderColor = errors.phone ? '#fc8181' : '#e2e8f0';
//                       e.target.style.backgroundColor = '#f8fafc';
//                     }}
//                   />
//                   {errors.phone && (
//                     <p style={{ color: '#e53e3e', fontSize: '0.85rem', marginTop: '0.3rem' }}>
//                       {errors.phone}
//                     </p>
//                   )}
//                 </div>

//                 {/* Message Field */}
//                 <div>
//                   <label
//                     style={{
//                       display: 'flex',
//                       fontSize: '0.95rem',
//                       fontWeight: '600',
//                       color: '#2c3e50',
//                       marginBottom: '0.4rem',
//                       alignItems: 'center',
//                       gap: '6px'
//                     }}
//                   >
//                     <FiMessageSquare style={{ fontSize: '0.9rem', color: '#99bbcf' }} />
//                     Message *
//                   </label>

//                   <textarea
//                     name="message"
//                     rows={4}
//                     value={formData.message}
//                     onChange={handleChange}
//                     style={{
//                       width: '100%',
//                       padding: '12px 14px',
//                       fontSize: '1rem',
//                       border: `2px solid ${errors.message ? '#fc8181' : '#e2e8f0'}`,
//                       borderRadius: '8px',
//                       outline: 'none',
//                       transition: 'all 0.3s ease',
//                       backgroundColor: '#f8fafc',
//                       resize: 'vertical',
//                       minHeight: '120px'
//                     }}
//                     placeholder="How can we help you?"
//                     onFocus={(e) => {
//                       e.target.style.borderColor = '#99bbcf';
//                       e.target.style.backgroundColor = '#ffffff';
//                     }}
//                     onBlur={(e) => {
//                       e.target.style.borderColor = errors.message ? '#fc8181' : '#e2e8f0';
//                       e.target.style.backgroundColor = '#f8fafc';
//                     }}
//                   />
//                   {errors.message && (
//                     <p style={{ color: '#e53e3e', fontSize: '0.85rem', marginTop: '0.3rem' }}>
//                       {errors.message}
//                     </p>
//                   )}
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   style={{
//                     marginTop: '0.5rem',
//                     padding: '14px 24px',
//                     fontSize: '1rem',
//                     fontWeight: '600',
//                     color: 'white',
//                     backgroundColor: isSubmitting ? '#a0aec0' : '#2c3e50',
//                     border: 'none',
//                     borderRadius: '8px',
//                     cursor: isSubmitting ? 'not-allowed' : 'pointer',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     gap: '8px',
//                     transition: 'all 0.3s ease',
//                     width: '100%'
//                   }}
//                   onMouseEnter={(e) => {
//                     if (!isSubmitting) {
//                       e.currentTarget.style.backgroundColor = '#1a202c';
//                       e.currentTarget.style.transform = 'translateY(-1px)';
//                     }
//                   }}
//                   onMouseLeave={(e) => {
//                     if (!isSubmitting) {
//                       e.currentTarget.style.backgroundColor = '#2c3e50';
//                       e.currentTarget.style.transform = 'translateY(0)';
//                     }
//                   }}
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <div style={{
//                         width: '18px',
//                         height: '18px',
//                         border: '2px solid rgba(255,255,255,0.3)',
//                         borderTop: '2px solid white',
//                         borderRadius: '50%',
//                         animation: 'spin 1s linear infinite'
//                       }} />
//                       Sending...
//                     </>
//                   ) : (
//                     <>
//                       <FiSend style={{ fontSize: '1.1rem' }} />
//                       Send Message
//                     </>
//                   )}
//                 </button>
//               </form>
//             )}
//           </div>

//           {/* Right Side - Google Map & Contact Info */}
//           <div>
//             {/* Google Map */}
//             <div style={{
//               backgroundColor: '#ffffff',
//               borderRadius: '15px',
//               padding: '1.5rem',
//               boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
//               border: '1px solid #e2e8f0',
//               marginBottom: '1.5rem'
//             }}>
//               <h2 style={{
//                 fontSize: '1.5rem',
//                 fontWeight: '700',
//                 color: '#2c3e50',
//                 marginBottom: '1rem',
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '10px'
//               }}>
//                 <FiMapPin style={{ color: '#99bbcf' }} />
//                 Our Location
//               </h2>

//               {/* Google Maps Embed */}
//               <div style={{
//                 height: '250px',
//                 borderRadius: '10px',
//                 overflow: 'hidden',
//                 border: '1px solid #e2e8f0'
//               }}>
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0353875248135!2d-122.419416684682!3d37.774929779759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c0b9f2c3f%3A0x5e7c2a5a5a5a5a5a!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   title="Google Maps Location"
//                 />
//               </div>
//             </div>

//             {/* Contact Information */}
//             <div style={{
//               backgroundColor: '#ffffff',
//               borderRadius: '15px',
//               padding: '1.5rem',
//               boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
//               border: '1px solid #e2e8f0'
//             }}>
//               <h2 style={{
//                 fontSize: '1.5rem',
//                 fontWeight: '700',
//                 color: '#2c3e50',
//                 marginBottom: '1rem',
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '10px'
//               }}>
//                 Contact Information
//               </h2>

//               {/* Contact Details */}
//               <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
//                 {contactInfo.map((item, index) => (
//                   <div key={index} style={{
//                     display: 'flex',
//                     alignItems: 'flex-start',
//                     gap: '12px'
//                   }}>
//                     <div style={{
//                       width: '36px',
//                       height: '36px',
//                       borderRadius: '8px',
//                       backgroundColor: 'rgba(153, 187, 207, 0.15)',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       flexShrink: 0,
//                       border: '1px solid rgba(153, 187, 207, 0.3)'
//                     }}>
//                       <div style={{ color: '#99bbcf', fontSize: '1rem' }}>
//                         {item.icon}
//                       </div>
//                     </div>
//                     <div>
//                       <p style={{
//                         fontSize: '0.9rem',
//                         fontWeight: '600',
//                         color: '#2c3e50',
//                         marginBottom: '0.2rem'
//                       }}>
//                         {item.label}
//                       </p>
//                       <p style={{ fontSize: '0.95rem', color: '#4a5568' }}>
//                         {item.info}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Social Media Links */}
//               <div>
//                 <h3 style={{
//                   fontSize: '1.1rem',
//                   fontWeight: '600',
//                   color: '#2c3e50',
//                   marginBottom: '0.8rem'
//                 }}>
//                   Connect With Us
//                 </h3>
//                 <div style={{
//                   display: 'flex',
//                   flexWrap: 'wrap',
//                   gap: '0.8rem'
//                 }}>
//                   {socialLinks.map((social, index) => (
//                     <a
//                       key={index}
//                       href={social.url}
//                       style={{
//                         width: '40px',
//                         height: '40px',
//                         borderRadius: '8px',
//                         backgroundColor: 'rgba(153, 187, 207, 0.15)',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         textDecoration: 'none',
//                         transition: 'all 0.3s ease',
//                         color: social.color,
//                         border: '1px solid rgba(153, 187, 207, 0.3)'
//                       }}
//                       onMouseEnter={(e) => {
//                         e.currentTarget.style.backgroundColor = social.color;
//                         e.currentTarget.style.transform = 'translateY(-2px)';
//                         e.currentTarget.style.color = 'white';
//                         e.currentTarget.style.borderColor = social.color;
//                       }}
//                       onMouseLeave={(e) => {
//                         e.currentTarget.style.backgroundColor = 'rgba(153, 187, 207, 0.15)';
//                         e.currentTarget.style.transform = 'translateY(0)';
//                         e.currentTarget.style.color = social.color;
//                         e.currentTarget.style.borderColor = 'rgba(153, 187, 207, 0.3)';
//                       }}
//                       aria-label={social.label}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <div style={{ fontSize: '1.2rem' }}>
//                         {social.icon}
//                       </div>
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Footer Note */}
//         <div style={{
//           textAlign: 'center',
//           marginTop: '3rem',
//           padding: '1.5rem',
//           color: '#718096',
//           fontSize: '0.9rem',
//           borderTop: '1px solid #e2e8f0'
//         }}>
//           <p>
//             We typically respond within 24 hours on business days.
//           </p>
//         </div>

//         {/* Animation Styles */}
//         <style jsx>{`
//           @keyframes spin {
//             0% { transform: rotate(0deg); }
//             100% { transform: rotate(360deg); }
//           }
          
//           @media (max-width: 768px) {
//             div[style*="gridTemplateColumns: 1fr 1fr"] {
//               grid-template-columns: 1fr;
//               gap: 1.5rem;
//             }
            
//             div[style*="padding: 2rem"] {
//               padding: 1.5rem;
//             }
            
//             h1[style*="fontSize: clamp(2rem"] {
//               font-size: 1.8rem !important;
//             }
            
//             div[style*="height: 250px"] {
//               height: 200px;
//             }
//           }
          
//           @media (max-width: 480px) {
//             div[style*="padding: 2rem 1rem"] {
//               padding: 1rem 0.5rem;
//             }
            
//             div[style*="padding: 1.5rem"] {
//               padding: 1rem;
//             }
            
//             input[style*="padding: 12px 14px"],
//             textarea[style*="padding: 12px 14px"] {
//               padding: 10px 12px;
//             }
            
//             button[style*="padding: 14px 24px"] {
//               padding: 12px 20px;
//             }
//           }
//         `}</style>
//       </div>
//     </div>
//   );
// }

















// "use client";

// import React, { useState } from "react";
// import { FiMail, FiPhone, FiMapPin, FiSend, FiUser, FiMessageSquare, FiClock } from "react-icons/fi";

// interface FormData {
//   name: string;
//   email: string;
//   phone: string;
//   message: string;
// }

// export default function Contact() {
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState<Partial<FormData>>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const validateForm = () => {
//     const newErrors: Partial<FormData> = {};

//     if (!formData.name.trim()) newErrors.name = "Required";
//     if (!formData.email.trim()) {
//       newErrors.email = "Required";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = "Invalid email";
//     }
//     if (!formData.phone.trim()) {
//       newErrors.phone = "Required";
//     } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
//       newErrors.phone = "10 digits required";
//     }
//     if (!formData.message.trim()) newErrors.message = "Required";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;

//     if (name === 'phone') {
//       const numbers = value.replace(/\D/g, '');
//       let formatted = numbers;
//       if (numbers.length > 3 && numbers.length <= 6) {
//         formatted = `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
//       } else if (numbers.length > 6) {
//         formatted = `${numbers.slice(0, 3)}-${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
//       }
//       setFormData({ ...formData, [name]: formatted });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }

//     if (errors[name as keyof FormData]) {
//       setErrors({ ...errors, [name]: undefined });
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!validateForm()) return;
//     setIsSubmitting(true);
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     setIsSubmitted(true);
//     setFormData({ name: "", email: "", phone: "", message: "" });
//     setErrors({});
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setIsSubmitted(false);
//     }, 3000);
//   };

//   return (
//     <div style={{ padding: "15px", backgroundColor: "#fff", minHeight: "100vh" }}>
//       <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        
//         {/* Header */}
//         <div style={{ textAlign: "center", marginBottom: "25px" }}>
//           <h1 style={{ fontSize: "24px", fontWeight: "600", color: "#333", marginBottom: "5px" }}>Contact Us</h1>
//           <p style={{ fontSize: "14px", color: "#666" }}>Get in touch with our team</p>
//         </div>

//         {/* Main Content */}
//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "25px" }}>
          
//           {/* Left Form */}
//           <div>
//             <div style={{ backgroundColor: "#f9f9f9", padding: "18px", borderRadius: "8px", border: "1px solid #e0e0e0" }}>
              
//               <h2 style={{ fontSize: "16px", fontWeight: "600", color: "#333", marginBottom: "18px", display: "flex", alignItems: "center", gap: "6px" }}>
//                 <FiSend style={{ color: "#4285f4" }} /> Send Message
//               </h2>

//               {isSubmitted ? (
//                 <div style={{ textAlign: "center", padding: "20px", backgroundColor: "#e8f5e9", borderRadius: "6px" }}>
//                   <div style={{ fontSize: "36px", color: "#4caf50", marginBottom: "10px" }}>✓</div>
//                   <h3 style={{ color: "#2e7d32", marginBottom: "5px" }}>Message Sent!</h3>
//                   <p style={{ color: "#666", fontSize: "14px" }}>We'll contact you soon.</p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  
//                   {/* Name */}
//                   <div>
//                     <label style={{ display: "flex", fontSize: "13px", color: "#555", marginBottom: "4px", alignItems: "center", gap: "4px" }}>
//                       <FiUser style={{ fontSize: "12px" }} /> Name *
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       style={{ width: "100%", padding: "8px 10px", fontSize: "14px", border: `1px solid ${errors.name ? "#ff4444" : "#ccc"}`, borderRadius: "4px" }}
//                       placeholder="Your name"
//                     />
//                     {errors.name && <p style={{ color: "#ff4444", fontSize: "11px", marginTop: "2px" }}>{errors.name}</p>}
//                   </div>

//                   {/* Email */}
//                   <div>
//                     <label style={{ display: "flex", fontSize: "13px", color: "#555", marginBottom: "4px", alignItems: "center", gap: "4px" }}>
//                       <FiMail style={{ fontSize: "12px" }} /> Email *
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       style={{ width: "100%", padding: "8px 10px", fontSize: "14px", border: `1px solid ${errors.email ? "#ff4444" : "#ccc"}`, borderRadius: "4px" }}
//                       placeholder="your@email.com"
//                     />
//                     {errors.email && <p style={{ color: "#ff4444", fontSize: "11px", marginTop: "2px" }}>{errors.email}</p>}
//                   </div>

//                   {/* Phone */}
//                   <div>
//                     <label style={{ display: "flex", fontSize: "13px", color: "#555", marginBottom: "4px", alignItems: "center", gap: "4px" }}>
//                       <FiPhone style={{ fontSize: "12px" }} /> Phone *
//                     </label>
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       style={{ width: "100%", padding: "8px 10px", fontSize: "14px", border: `1px solid ${errors.phone ? "#ff4444" : "#ccc"}`, borderRadius: "4px" }}
//                       placeholder="123-456-7890"
//                     />
//                     {errors.phone && <p style={{ color: "#ff4444", fontSize: "11px", marginTop: "2px" }}>{errors.phone}</p>}
//                   </div>

//                   {/* Message */}
//                   <div>
//                     <label style={{ display: "flex", fontSize: "13px", color: "#555", marginBottom: "4px", alignItems: "center", gap: "4px" }}>
//                       <FiMessageSquare style={{ fontSize: "12px" }} /> Message *
//                     </label>
//                     <textarea
//                       name="message"
//                       rows={3}
//                       value={formData.message}
//                       onChange={handleChange}
//                       style={{ width: "100%", padding: "8px 10px", fontSize: "14px", border: `1px solid ${errors.message ? "#ff4444" : "#ccc"}`, borderRadius: "4px", resize: "vertical" }}
//                       placeholder="Your message..."
//                     />
//                     {errors.message && <p style={{ color: "#ff4444", fontSize: "11px", marginTop: "2px" }}>{errors.message}</p>}
//                   </div>

//                   {/* Submit */}
//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     style={{
//                       marginTop: "5px",
//                       padding: "10px",
//                       fontSize: "14px",
//                       color: "white",
//                       backgroundColor: isSubmitting ? "#999" : "#333",
//                       border: "none",
//                       borderRadius: "4px",
//                       cursor: isSubmitting ? "not-allowed" : "pointer"
//                     }}
//                   >
//                     {isSubmitting ? "Sending..." : "Send Message"}
//                   </button>
//                 </form>
//               )}
//             </div>
//           </div>

//           {/* Right Side - Combined Map & Contact Info */}
//           <div>
//             <div style={{ 
//               backgroundColor: "#f9f9f9", 
//               padding: "18px", 
//               borderRadius: "8px", 
//               border: "1px solid #e0e0e0",
//               height: "100%"
//             }}>
              
//               {/* Title */}
//               <h2 style={{ 
//                 fontSize: "16px", 
//                 fontWeight: "600", 
//                 color: "#333", 
//                 marginBottom: "18px", 
//                 display: "flex", 
//                 alignItems: "center", 
//                 gap: "6px" 
//               }}>
//                 <FiMapPin style={{ color: "#4285f4" }} /> Our Location & Contact
//               </h2>

//               {/* Map Section */}
//               <div style={{ marginBottom: "20px" }}>
//                 <div style={{ 
//                   height: "180px", 
//                   borderRadius: "6px", 
//                   overflow: "hidden", 
//                   border: "1px solid #ddd",
//                   marginBottom: "15px"
//                 }}>
//                   <iframe
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0353875248135!2d-122.419416684682!3d37.774929779759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c0b9f2c3f%3A0x5e7c2a5a5a5a5a5a!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
//                     width="100%"
//                     height="100%"
//                     style={{ border: 0 }}
//                     allowFullScreen
//                     loading="lazy"
//                     title="Location"
//                   />
//                 </div>
//               </div>

//               {/* Contact Information - Vertical List */}
//               <div style={{ 
//                 display: "flex", 
//                 flexDirection: "column", 
//                 gap: "14px"
//               }}>
                
//                 {/* Address */}
//                 <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
//                   <div style={{ 
//                     width: "32px", 
//                     height: "32px", 
//                     borderRadius: "6px", 
//                     backgroundColor: "#e8f0fe", 
//                     display: "flex", 
//                     alignItems: "center", 
//                     justifyContent: "center",
//                     flexShrink: 0
//                   }}>
//                     <FiMapPin style={{ color: "#4285f4", fontSize: "16px" }} />
//                   </div>
//                   <div style={{ flex: 1 }}>
//                     <p style={{ fontSize: "13px", fontWeight: "500", color: "#333", marginBottom: "2px" }}>Address</p>
//                     <p style={{ fontSize: "13px", color: "#666", lineHeight: "1.4" }}>
//                       123 Book Street,<br />
//                       San Francisco, CA 94107
//                     </p>
//                   </div>
//                 </div>

//                 {/* Phone */}
//                 <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
//                   <div style={{ 
//                     width: "32px", 
//                     height: "32px", 
//                     borderRadius: "6px", 
//                     backgroundColor: "#e8f0fe", 
//                     display: "flex", 
//                     alignItems: "center", 
//                     justifyContent: "center",
//                     flexShrink: 0
//                   }}>
//                     <FiPhone style={{ color: "#4285f4", fontSize: "16px" }} />
//                   </div>
//                   <div style={{ flex: 1 }}>
//                     <p style={{ fontSize: "13px", fontWeight: "500", color: "#333", marginBottom: "2px" }}>Phone</p>
//                     <p style={{ fontSize: "13px", color: "#666" }}>+1 (555) 123-4567</p>
//                   </div>
//                 </div>

//                 {/* Email */}
//                 <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
//                   <div style={{ 
//                     width: "32px", 
//                     height: "32px", 
//                     borderRadius: "6px", 
//                     backgroundColor: "#e8f0fe", 
//                     display: "flex", 
//                     alignItems: "center", 
//                     justifyContent: "center",
//                     flexShrink: 0
//                   }}>
//                     <FiMail style={{ color: "#4285f4", fontSize: "16px" }} />
//                   </div>
//                   <div style={{ flex: 1 }}>
//                     <p style={{ fontSize: "13px", fontWeight: "500", color: "#333", marginBottom: "2px" }}>Email</p>
//                     <p style={{ fontSize: "13px", color: "#666" }}>support@bookhub.com</p>
//                   </div>
//                 </div>

//                 {/* Business Hours */}
//                 <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
//                   <div style={{ 
//                     width: "32px", 
//                     height: "32px", 
//                     borderRadius: "6px", 
//                     backgroundColor: "#e8f0fe", 
//                     display: "flex", 
//                     alignItems: "center", 
//                     justifyContent: "center",
//                     flexShrink: 0
//                   }}>
//                     <FiClock style={{ color: "#4285f4", fontSize: "16px" }} />
//                   </div>
//                   <div style={{ flex: 1 }}>
//                     <p style={{ fontSize: "13px", fontWeight: "500", color: "#333", marginBottom: "2px" }}>Business Hours</p>
//                     <div>
//                       <p style={{ fontSize: "13px", color: "#666", marginBottom: "2px" }}>Mon - Fri: 9:00 AM - 6:00 PM</p>
//                       <p style={{ fontSize: "13px", color: "#666" }}>Sat: 10:00 AM - 4:00 PM</p>
//                     </div>
//                   </div>
//                 </div>

//               </div>

//               {/* Quick Response Note */}
//               <div style={{ 
//                 marginTop: "20px", 
//                 padding: "12px", 
//                 backgroundColor: "#f0f7ff", 
//                 borderRadius: "6px",
//                 borderLeft: "3px solid #4285f4"
//               }}>
//                 <p style={{ fontSize: "13px", color: "#333", margin: 0 }}>
//                   <span style={{ fontWeight: "500" }}>Quick Response:</span> We typically respond within 24 hours.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <div style={{ 
//           textAlign: "center", 
//           marginTop: "25px", 
//           paddingTop: "15px", 
//           fontSize: "12px", 
//           color: "#888", 
//           borderTop: "1px solid #eee" 
//         }}>
//           <p>© 2024 BookHub. All rights reserved.</p>
//         </div>

//         {/* Responsive */}
//         <style jsx>{`
//           @media (max-width: 768px) {
//             div[style*="gridTemplateColumns: 1fr 1fr"] {
//               grid-template-columns: 1fr;
//             }
//           }
//         `}</style>
//       </div>
//     </div>
//   );
// }



















"use client";

import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend, FiUser, FiMessageSquare, FiClock } from "react-icons/fi";

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

    if (!formData.name.trim()) newErrors.name = "Required";
    if (!formData.email.trim()) {
      newErrors.email = "Required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = "10 digits required";
    }
    if (!formData.message.trim()) newErrors.message = "Required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === 'phone') {
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

    if (errors[name as keyof FormData]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setErrors({});
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div style={{
      padding: "20px",
      backgroundColor: "#ffffff",
      minHeight: "100vh",
      fontFamily: "'Inter', sans-serif"
    }}>
      <div style={{
        maxWidth: "1400px",
        margin: "0 auto"
      }}>
        
        {/* Header */}
        <div style={{
          textAlign: "center",
          marginBottom: "40px"
        }}>
          <h1 style={{
            fontSize: "28px",
            fontWeight: "700",
            color: "#af461d",
            marginBottom: "8px"
          }}>
            Contact Us
          </h1>
          <p style={{
            fontSize: "15px",
            color: "#e1691e"
          }}>
            Get in touch with our team
          </p>
        </div>

        {/* Horizontal Layout - All Sections Side by Side */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "20px",
          alignItems: "start"
        }}>
          
          {/* Send Message Section */}
          <div style={{
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            padding: "25px",
            border: "1px solid #e2e8f0",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            height: "100%"
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "20px"
            }}>
              <div style={{
                width: "40px",
                height: "40px",
                borderRadius: "8px",
                backgroundColor: "#e0e7ff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <FiSend style={{ color: "#4f46e5", fontSize: "18px" }} />
              </div>
              <h2 style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#1a202c",
                margin: 0
              }}>
                Send Message
              </h2>
            </div>

            {isSubmitted ? (
              <div style={{
                textAlign: "center",
                padding: "20px",
                backgroundColor: "#f0fdf4",
                borderRadius: "6px",
                border: "1px solid #bbf7d0"
              }}>
                <div style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#22c55e",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 10px",
                  color: "white",
                  fontSize: "20px"
                }}>
                  ✓
                </div>
                <h3 style={{
                  color: "#166534",
                  marginBottom: "5px",
                  fontSize: "16px",
                  fontWeight: "600"
                }}>
                  Message Sent!
                </h3>
                <p style={{
                  color: "#4b5563",
                  fontSize: "14px"
                }}>
                  We'll respond soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px"
                }}>
                  
                  {/* Name Field */}
                  <div>
                    <label style={{
                      display: "block",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#4a5568",
                      marginBottom: "4px"
                    }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "10px 12px",
                        fontSize: "14px",
                        border: `1px solid ${errors.name ? "#f87171" : "#e2e8f0"}`,
                        borderRadius: "6px",
                        outline: "none",
                        backgroundColor: "#fff"
                      }}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p style={{
                        color: "#dc2626",
                        fontSize: "12px",
                        marginTop: "3px"
                      }}>
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label style={{
                      display: "block",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#4a5568",
                      marginBottom: "4px"
                    }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "10px 12px",
                        fontSize: "14px",
                        border: `1px solid ${errors.email ? "#f87171" : "#e2e8f0"}`,
                        borderRadius: "6px",
                        outline: "none",
                        backgroundColor: "#fff"
                      }}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p style={{
                        color: "#dc2626",
                        fontSize: "12px",
                        marginTop: "3px"
                      }}>
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label style={{
                      display: "block",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#4a5568",
                      marginBottom: "4px"
                    }}>
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "10px 12px",
                        fontSize: "14px",
                        border: `1px solid ${errors.phone ? "#f87171" : "#e2e8f0"}`,
                        borderRadius: "6px",
                        outline: "none",
                        backgroundColor: "#fff"
                      }}
                      placeholder="123-456-7890"
                    />
                    {errors.phone && (
                      <p style={{
                        color: "#dc2626",
                        fontSize: "12px",
                        marginTop: "3px"
                      }}>
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label style={{
                      display: "block",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#4a5568",
                      marginBottom: "4px"
                    }}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "10px 12px",
                        fontSize: "14px",
                        border: `1px solid ${errors.message ? "#f87171" : "#e2e8f0"}`,
                        borderRadius: "6px",
                        outline: "none",
                        backgroundColor: "#fff",
                        resize: "vertical"
                      }}
                      placeholder="Your message..."
                    />
                    {errors.message && (
                      <p style={{
                        color: "#dc2626",
                        fontSize: "12px",
                        marginTop: "3px"
                      }}>
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      width: "100%",
                      padding: "12px",
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "white",
                      backgroundColor: isSubmitting ? "#9ca3af" : "#4f46e5",
                      border: "none",
                      borderRadius: "6px",
                      cursor: isSubmitting ? "not-allowed" : "pointer",
                      marginTop: "5px"
                    }}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Our Location Section */}
          <div style={{
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            padding: "25px",
            border: "1px solid #e2e8f0",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            height: "100%"
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "20px"
            }}>
              <div style={{
                width: "40px",
                height: "40px",
                borderRadius: "8px",
                backgroundColor: "#e0e7ff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <FiMapPin style={{ color: "#4f46e5", fontSize: "18px" }} />
              </div>
              <h2 style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#1a202c",
                margin: 0
              }}>
                Our Location
              </h2>
            </div>

            <div style={{
              height: "180px",
              borderRadius: "6px",
              overflow: "hidden",
              border: "1px solid #e5e7eb",
              marginBottom: "15px"
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0353875248135!2d-122.419416684682!3d37.774929779759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c0b9f2c3f%3A0x5e7c2a5a5a5a5a5a!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Our Location"
              />
            </div>
            
            <div style={{
              padding: "12px",
              backgroundColor: "#f8fafc",
              borderRadius: "6px"
            }}>
              <p style={{
                fontSize: "14px",
                color: "#4b5563",
                margin: "0 0 5px 0",
                fontWeight: "500"
              }}>
                📍 Address:
              </p>
              <p style={{
                fontSize: "14px",
                color: "#4b5563",
                margin: 0,
                lineHeight: "1.4"
              }}>
                123 Book Street<br />
                San Francisco, CA 94107<br />
                United States
              </p>
            </div>

            <div style={{
              marginTop: "15px",
              padding: "10px",
              backgroundColor: "#f0f9ff",
              borderRadius: "6px",
              borderLeft: "3px solid #3b82f6"
            }}>
              <p style={{
                fontSize: "13px",
                color: "#1e40af",
                margin: 0,
                fontWeight: "500"
              }}>
                {/* 🚗 Parking Available */}
              </p>
            </div>
          </div>

          {/* Contact Details Section */}
          <div style={{
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            padding: "25px",
            border: "1px solid #e2e8f0",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            height: "100%"
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "20px"
            }}>
              <div style={{
                width: "40px",
                height: "40px",
                borderRadius: "8px",
                backgroundColor: "#e0e7ff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <FiPhone style={{ color: "#4f46e5", fontSize: "18px" }} />
              </div>
              <h2 style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#1a202c",
                margin: 0
              }}>
                Contact Details
              </h2>
            </div>

            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              marginBottom: "20px"
            }}>
              
              {/* Phone */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "12px"
              }}>
                <div style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "6px",
                  backgroundColor: "#f0f9ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}>
                  <FiPhone style={{ color: "#3b82f6", fontSize: "16px" }} />
                </div>
                <div>
                  <p style={{
                    fontSize: "13px",
                    color: "#6b7280",
                    margin: "0 0 2px 0"
                  }}>
                    Phone Number
                  </p>
                  <p style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    color: "#1f2937",
                    margin: 0
                  }}>
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>

              {/* Email */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "12px"
              }}>
                <div style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "6px",
                  backgroundColor: "#f0f9ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}>
                  <FiMail style={{ color: "#3b82f6", fontSize: "16px" }} />
                </div>
                <div>
                  <p style={{
                    fontSize: "13px",
                    color: "#6b7280",
                    margin: "0 0 2px 0"
                  }}>
                    Email Address
                  </p>
                  <p style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    color: "#1f2937",
                    margin: 0
                  }}>
                    support@bookhub.com
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "12px"
              }}>
                <div style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "6px",
                  backgroundColor: "#f0f9ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}>
                  <FiClock style={{ color: "#3b82f6", fontSize: "16px" }} />
                </div>
                <div>
                  <p style={{
                    fontSize: "13px",
                    color: "#6b7280",
                    margin: "0 0 2px 0"
                  }}>
                    Business Hours
                  </p>
                  <div>
                    <p style={{
                      fontSize: "14px",
                      color: "#1f2937",
                      margin: "2px 0"
                    }}>
                      Mon-Fri: 9:00 AM - 6:00 PM
                    </p>
                    <p style={{
                      fontSize: "14px",
                      color: "#1f2937",
                      margin: "2px 0 0 0"
                    }}>
                      Sat: 10:00 AM - 4:00 PM
                    </p>
                    <p style={{
                      fontSize: "14px",
                      color: "#1f2937",
                      margin: "2px 0 0 0"
                    }}>
                      Sun: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div style={{
              padding: "12px",
              backgroundColor: "#fef2f2",
              borderRadius: "6px",
              borderLeft: "3px solid #dc2626",
              marginTop: "10px"
            }}>
              <p style={{
                fontSize: "13px",
                color: "#7f1d1d",
                margin: 0,
                fontWeight: "500"
              }}>
                🚨 Emergency Contact:
              </p>
              <p style={{
                fontSize: "14px",
                color: "#7f1d1d",
                margin: "3px 0 0 0"
              }}>
                +1 (555) 987-6543
              </p>
            </div>

            {/* Response Time */}
            <div style={{
              marginTop: "15px",
              padding: "10px",
              backgroundColor: "#f8fafc",
              borderRadius: "6px"
            }}>
              <p style={{
                fontSize: "13px",
                color: "#4b5563",
                margin: 0,
                textAlign: "center"
              }}>
                <span style={{ fontWeight: "500" }}>Response Time:</span> 24 hours
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          textAlign: "center",
          marginTop: "40px",
          paddingTop: "20px",
          borderTop: "1px solid #e5e7eb"
        }}>
          <p style={{
            fontSize: "14px",
            color: "#6b7280",
            margin: "0 0 5px 0"
          }}>
            © 2024 BookHub. All rights reserved.
          </p>
          <p style={{
            fontSize: "13px",
            color: "#9ca3af",
            margin: 0
          }}>
            Need immediate assistance? Call our support line.
          </p>
        </div>

        {/* Responsive */}
        <style jsx>{`
          @media (max-width: 1100px) {
            div[style*="gridTemplateColumns: 1fr 1fr 1fr"] {
              grid-template-columns: 1fr 1fr;
            }
          }
          
          @media (max-width: 768px) {
            div[style*="gridTemplateColumns: 1fr 1fr 1fr"] {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </div>
    </div>
  );
}