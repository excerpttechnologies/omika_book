// "use client";

// import React from "react";
// import Image from "next/image";
// import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
// import { FiMapPin, FiPhone, FiMail, FiGlobe } from "react-icons/fi";

// export default function Footer() {
//   const socialLinks = [
//     { icon: <FaFacebookF />, label: "Facebook", color: "#1877F2", url: "#" },
//     { icon: <FaTwitter />, label: "Twitter", color: "#1DA1F2", url: "#" },
//     { icon: <FaInstagram />, label: "Instagram", color: "#E4405F", url: "#" },
//     { icon: <FaWhatsapp />, label: "WhatsApp", color: "#25D366", url: "#" },
//     { icon: <FaLinkedinIn />, label: "LinkedIn", color: "#0A66C2", url: "#" },
//   ];

//   const companyLinks = [
//     { text: "About Us", url: "/about" },
//     { text: "Our Team", url: "/our-team" },
//     { text: "Careers", url: "/careers" },
//     { text: "Blog", url: "/blogs" },
//   ];

//   const supportLinks = [
//     { text: "Help Center", url: "/help Center" },
//     { text: "Contact Us", url: "/contact" },
//     { text: "Privacy Policy", url: "/Privacy Policy" },
//     { text: "Terms of Service", url: "/Terms of Service" },
//   ];

//   const contactInfo = [
//     { icon: <FiMapPin />, text: "B133/1, 2nd Floor, KSSIDC ITI Estate, Whitefield Main Rd, Bengaluru, Karnataka 560048" },
//     { icon: <FiPhone />, text: "+91 98765 43210" },
//     { icon: <FiMail />, text: "info@bookhub.com" },
//     { icon: <FiGlobe />, text: "www.bookhub.com" },
//   ];

//   return (
//     <footer style={{
//       backgroundColor: '#2c3e50',
//       color: '#ffffff',
//       padding: '3rem 1rem 1rem',
//       fontFamily: "'Segoe UI', 'Roboto', 'Arial', sans-serif"
//     }}>
//       <div style={{
//         maxWidth: '1400px',
//         margin: '0 auto'
//       }}>
//         {/* Main Footer Content */}
//         <div className="footer-grid" style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(3, 1fr)',
//           gap: '3rem',
//           marginBottom: '2rem'
//         }}>
//           {/* Left Section - Brand & Social */}
//           <div className="footer-brand" style={{
//             display: 'flex',
//             flexDirection: 'column',
//             gap: '1.5rem'
//           }}>
//             {/* Logo */}
//             <div style={{
//               display: 'flex',
//               alignItems: 'center',
//               gap: '1rem',
//               marginBottom: '0.5rem'
//             }}>
//               <Image
//                 src="/assets/images/booklogo.webp"
//                 alt="OM Spiritual Logo"
//                 width={50}
//                 height={50}
//                 style={{
//                   borderRadius: '50%',
//                   boxShadow: '0 4px 15px rgba(153, 187, 207, 0.3)',
//                   objectFit: 'cover'
//                 }}
//               />
//               <div>
//                 <h2 style={{
//                   fontSize: '1.8rem',
//                   fontWeight: '700',
//                   color: '#ffffff',
//                   margin: 0
//                 }}>
//                   OM Spiritual 
//                 </h2>
//                 <p style={{
//                   fontSize: '0.9rem',
//                   color: '#99bbcf',
//                   margin: 0,
//                   opacity: 0.9
//                 }}>
//                   Books & Wisdom
//                 </p>
//               </div>
//             </div>

//             {/* Description */}
//             <p className="footer-description" style={{
//               color: '#cbd5e0',
//               lineHeight: '1.6',
//               fontSize: '0.95rem',
//               margin: 0
//             }}>
//               We are dedicated to providing the best service and quality products 
//               to our customers worldwide. Join us on our journey to excellence.
//             </p>

//             {/* Social Icons */}
//             <div>
//               <h3 style={{
//                 fontSize: '1.1rem',
//                 fontWeight: '600',
//                 color: '#ffffff',
//                 marginBottom: '1rem'
//               }}>
//                 Follow Us
//               </h3>
//               <div className="social-icons" style={{
//                 display: 'flex',
//                 gap: '0.8rem',
//                 flexWrap: 'wrap'
//               }}>
//                 {socialLinks.map((social, index) => (
//                   <a
//                     key={index}
//                     href={social.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     style={{
//                       width: '40px',
//                       height: '40px',
//                       borderRadius: '8px',
//                       backgroundColor: 'rgba(255, 255, 255, 0.1)',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       textDecoration: 'none',
//                       transition: 'all 0.3s ease',
//                       color: '#ffffff',
//                       border: '1px solid rgba(255, 255, 255, 0.2)'
//                     }}
//                     onMouseEnter={(e) => {
//                       e.currentTarget.style.backgroundColor = social.color;
//                       e.currentTarget.style.transform = 'translateY(-3px)';
//                       e.currentTarget.style.boxShadow = `0 6px 15px ${social.color}40`;
//                     }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
//                       e.currentTarget.style.transform = 'translateY(0)';
//                       e.currentTarget.style.boxShadow = 'none';
//                     }}
//                     aria-label={social.label}
//                   >
//                     <div style={{ fontSize: '1.1rem' }}>
//                       {social.icon}
//                     </div>
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Center Section - Quick Links */}
//           <div className="footer-links-wrapper" style={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             flexWrap: 'wrap',
//             gap: '2rem'
//           }}>
//             {/* Company Links */}
//             <div className="footer-links-column" style={{ flex: 1, minWidth: '150px' }}>
//               <h3 style={{
//                 fontSize: '1.2rem',
//                 fontWeight: '700',
//                 color: '#ffffff',
//                 marginBottom: '1.2rem',
//                 paddingBottom: '0.5rem',
//                 borderBottom: '2px solid #99bbcf',
//                 display: 'inline-block'
//               }}>
//                 Company
//               </h3>
//               <ul style={{
//                 listStyle: 'none',
//                 padding: 0,
//                 margin: 0,
//                 display: 'flex',
//                 flexDirection: 'column',
//                 gap: '0.7rem'
//               }}>
//                 {companyLinks.map((link, index) => (
//                   <li key={index}>
//                     <a
//                       href={link.url}
//                       style={{
//                         color: '#cbd5e0',
//                         textDecoration: 'none',
//                         fontSize: '0.95rem',
//                         transition: 'all 0.3s ease',
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: '8px'
//                       }}
//                       onMouseEnter={(e) => {
//                         e.currentTarget.style.color = '#99bbcf';
//                         e.currentTarget.style.transform = 'translateX(5px)';
//                       }}
//                       onMouseLeave={(e) => {
//                         e.currentTarget.style.color = '#cbd5e0';
//                         e.currentTarget.style.transform = 'translateX(0)';
//                       }}
//                     >
//                       <span style={{
//                         width: '4px',
//                         height: '4px',
//                         backgroundColor: '#99bbcf',
//                         borderRadius: '50%',
//                         opacity: 0.7
//                       }} />
//                       {link.text}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Support Links */}
//             <div className="footer-links-column" style={{ flex: 1, minWidth: '150px' }}>
//               <h3 style={{
//                 fontSize: '1.2rem',
//                 fontWeight: '700',
//                 color: '#ffffff',
//                 marginBottom: '1.2rem',
//                 paddingBottom: '0.5rem',
//                 borderBottom: '2px solid #99bbcf',
//                 display: 'inline-block'
//               }}>
//                 Support
//               </h3>
//               <ul style={{
//                 listStyle: 'none',
//                 padding: 0,
//                 margin: 0,
//                 display: 'flex',
//                 flexDirection: 'column',
//                 gap: '0.7rem'
//               }}>
//                 {supportLinks.map((link, index) => (
//                   <li key={index}>
//                     <a
//                       href={link.url}
//                       style={{
//                         color: '#cbd5e0',
//                         textDecoration: 'none',
//                         fontSize: '0.95rem',
//                         transition: 'all 0.3s ease',
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: '8px'
//                       }}
//                       onMouseEnter={(e) => {
//                         e.currentTarget.style.color = '#99bbcf';
//                         e.currentTarget.style.transform = 'translateX(5px)';
//                       }}
//                       onMouseLeave={(e) => {
//                         e.currentTarget.style.color = '#cbd5e0';
//                         e.currentTarget.style.transform = 'translateX(0)';
//                       }}
//                     >
//                       <span style={{
//                         width: '4px',
//                         height: '4px',
//                         backgroundColor: '#99bbcf',
//                         borderRadius: '50%',
//                         opacity: 0.7
//                       }} />
//                       {link.text}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Right Section - Contact Info */}
//           <div className="footer-contact">
//             <div style={{
//               marginBottom: '1.5rem'
//             }}>
//               <h3 style={{
//                 fontSize: '1.2rem',
//                 fontWeight: '700',
//                 color: '#ffffff',
//                 marginBottom: '1.2rem',
//                 paddingBottom: '0.5rem',
//                 borderBottom: '2px solid #99bbcf',
//                 display: 'inline-block'
//               }}>
//                 Contact Info
//               </h3>
//               <div style={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 gap: '1rem'
//               }}>
//                 {contactInfo.map((info, index) => (
//                   <div key={index} style={{
//                     display: 'flex',
//                     alignItems: 'flex-start',
//                     gap: '12px'
//                   }}>
//                     <div style={{
//                       width: '32px',
//                       height: '32px',
//                       borderRadius: '6px',
//                       backgroundColor: 'rgba(153, 187, 207, 0.15)',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       flexShrink: 0,
//                       border: '1px solid rgba(153, 187, 207, 0.3)'
//                     }}>
//                       <div style={{ color: '#99bbcf', fontSize: '0.9rem' }}>
//                         {info.icon}
//                       </div>
//                     </div>
//                     <span style={{
//                       fontSize: '0.9rem',
//                       color: '#cbd5e0',
//                       lineHeight: '1.4'
//                     }}>
//                       {info.text}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <div style={{
//           height: '1px',
//           backgroundColor: 'rgba(255, 255, 255, 0.1)',
//           margin: '2rem 0'
//         }} />

//         {/* Footer Bottom */}
//         <div className="footer-bottom" style={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           flexWrap: 'wrap',
//           gap: '1rem',
//           padding: '1rem 0'
//         }}>
//           <p style={{
//             color: '#cbd5e0',
//             fontSize: '0.9rem',
//             margin: 0
//           }}>
//             © {new Date().getFullYear()}{' '}
//             <a
//               href="#"
//               style={{
//                 color: '#99bbcf',
//                 textDecoration: 'none',
//                 fontWeight: '600',
//                 transition: 'all 0.3s ease'
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.color = '#ffffff';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.color = '#99bbcf';
//               }}
//             >
//               BookHub
//             </a>
//             . All rights reserved.
//           </p>

//           <div className="footer-bottom-links" style={{
//             display: 'flex',
//             gap: '1.5rem',
//             fontSize: '0.9rem',
//             flexWrap: 'wrap'
//           }}>
//             <a
//               href="#"
//               style={{
//                 color: '#cbd5e0',
//                 textDecoration: 'none',
//                 transition: 'all 0.3s ease'
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.color = '#99bbcf';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.color = '#cbd5e0';
//               }}
//             >
//               Privacy Policy
//             </a>
//             <a
//               href="#"
//               style={{
//                 color: '#cbd5e0',
//                 textDecoration: 'none',
//                 transition: 'all 0.3s ease'
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.color = '#99bbcf';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.color = '#cbd5e0';
//               }}
//             >
//               Terms of Service
//             </a>
//             <a
//               href="#"
//               style={{
//                 color: '#cbd5e0',
//                 textDecoration: 'none',
//                 transition: 'all 0.3s ease'
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.color = '#99bbcf';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.color = '#cbd5e0';
//               }}
//             >
//               Cookie Policy
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Responsive Styles */}
//       <style jsx>{`
//         /* Tablet View - 2 Columns */
//         @media (max-width: 1024px) {
//           .footer-grid {
//             grid-template-columns: repeat(2, 1fr) !important;
//             gap: 2.5rem !important;
//           }
          
//           .footer-contact {
//             grid-column: span 2;
//           }
          
//           .footer-links-wrapper {
//             gap: 3rem !important;
//           }
//         }
        
//         /* Mobile View - Single Column */
//         @media (max-width: 768px) {
//           footer {
//             padding: 2.5rem 1.5rem 1.5rem !important;
//           }
          
//           .footer-grid {
//             grid-template-columns: 1fr !important;
//             gap: 2.5rem !important;
//           }
          
//           .footer-brand,
//           .footer-contact {
//             text-align: center;
//             align-items: center;
//           }
          
//           .footer-brand > div:first-child {
//             justify-content: center;
//           }
          
//           .footer-description {
//             text-align: center;
//           }
          
//           .social-icons {
//             justify-content: center !important;
//           }
          
//           .footer-links-wrapper {
//             justify-content: center !important;
//             text-align: center;
//             gap: 2rem !important;
//           }
          
//           .footer-links-column {
//             min-width: 120px !important;
//           }
          
//           .footer-links-column h3 {
//             width: 100%;
//             text-align: center;
//           }
          
//           .footer-links-column ul {
//             align-items: center;
//           }
          
//           .footer-links-column a {
//             justify-content: center !important;
//           }
          
//           .footer-contact {
//             grid-column: span 1 !important;
//           }
          
//           .footer-contact h3 {
//             width: 100%;
//             text-align: center;
//           }
          
//           .footer-contact > div > div {
//             align-items: center;
//           }
          
//           .footer-contact span {
//             text-align: center;
//           }
          
//           .footer-bottom {
//             flex-direction: column;
//             text-align: center;
//             gap: 1.5rem !important;
//           }
          
//           .footer-bottom p {
//             text-align: center;
//           }
          
//           .footer-bottom-links {
//             justify-content: center;
//             gap: 1rem !important;
//           }
//         }
        
//         /* Small Mobile View */
//         @media (max-width: 480px) {
//           footer {
//             padding: 2rem 1rem 1rem !important;
//           }
          
//           .footer-grid {
//             gap: 2rem !important;
//           }
          
//           .footer-brand h2 {
//             font-size: 1.5rem !important;
//           }
          
//           .footer-brand p {
//             font-size: 0.85rem !important;
//           }
          
//           .footer-description {
//             font-size: 0.9rem !important;
//           }
          
//           .social-icons {
//             gap: 0.6rem !important;
//           }
          
//           .social-icons a {
//             width: 36px !important;
//             height: 36px !important;
//           }
          
//           .footer-links-wrapper {
//             flex-direction: column;
//             gap: 2rem !important;
//           }
          
//           .footer-links-column {
//             width: 100%;
//           }
          
//           .footer-links-column h3,
//           .footer-contact h3 {
//             font-size: 1.1rem !important;
//           }
          
//           .footer-bottom-links {
//             flex-direction: column;
//             gap: 0.8rem !important;
//           }
          
//           .footer-bottom p {
//             font-size: 0.85rem !important;
//           }
          
//           .footer-bottom-links a {
//             font-size: 0.85rem !important;
//           }
//         }
        
//         /* Extra Small Mobile View */
//         @media (max-width: 360px) {
//           footer {
//             padding: 1.5rem 0.8rem 1rem !important;
//           }
          
//           .footer-brand h2 {
//             font-size: 1.3rem !important;
//           }
          
//           .footer-grid {
//             gap: 1.8rem !important;
//           }
          
//           .social-icons a {
//             width: 34px !important;
//             height: 34px !important;
//             font-size: 0.95rem !important;
//           }
//         }
//       `}</style>
//     </footer>
//   );
// }
















// "use client";

// import React from "react";
// import Image from "next/image";
// import { 
//   FaFacebookF, 
//   FaTwitter, 
//   FaInstagram, 
//   FaWhatsapp, 
//   FaLinkedinIn 
// } from "react-icons/fa";
// import { 
//   FiMapPin, 
//   FiPhone, 
//   FiMail, 
//   FiGlobe 
// } from "react-icons/fi";

// interface SocialLink {
//   icon: React.ReactNode;
//   label: string;
//   color: string;
//   url: string;
// }

// interface FooterLink {
//   text: string;
//   url: string;
// }

// interface ContactInfo {
//   icon: React.ReactNode;
//   text: string;
// }

// export default function Footer(): JSX.Element {
//   const socialLinks: SocialLink[] = [
//     { icon: <FaFacebookF />, label: "Facebook", color: "#1877F2", url: "#" },
//     { icon: <FaTwitter />, label: "Twitter", color: "#1DA1F2", url: "#" },
//     { icon: <FaInstagram />, label: "Instagram", color: "#E4405F", url: "#" },
//     { icon: <FaWhatsapp />, label: "WhatsApp", color: "#25D366", url: "#" },
//     { icon: <FaLinkedinIn />, label: "LinkedIn", color: "#0A66C2", url: "#" },
//   ];

//   const companyLinks: FooterLink[] = [
//     { text: "About Us", url: "/about" },
//     { text: "Our Team", url: "/our-team" },
//     { text: "Careers", url: "/careers" },
//     { text: "Blog", url: "/blogs" },
//   ];

//   const supportLinks: FooterLink[] = [
//     { text: "Help Center", url: "/help-center" },
//     { text: "Contact Us", url: "/contact" },
//     { text: "Privacy Policy", url: "/privacy-policy" },
//     { text: "Terms of Service", url: "/terms-of-service" },
//   ];

//   const contactInfo: ContactInfo[] = [
//     { icon: <FiMapPin />, text: "B133/1, 2nd Floor, KSSIDC ITI Estate, Whitefield Main Rd, Bengaluru, Karnataka 560048" },
//     { icon: <FiPhone />, text: "+91 98765 43210" },
//     { icon: <FiMail />, text: "info@bookhub.com" },
//     { icon: <FiGlobe />, text: "www.bookhub.com" },
//   ];

//   const policyLinks: FooterLink[] = [
//     { text: "Privacy Policy", url: "/privacy-policy" },
//     { text: "Terms of Service", url: "/terms-of-service" },
//     { text: "Cookie Policy", url: "/cookie-policy" },
//   ];

//   const handleMouseEnter = (
//     e: React.MouseEvent<HTMLAnchorElement>,
//     color?: string
//   ) => {
//     const target = e.currentTarget;
//     if (color) {
//       target.style.backgroundColor = color;
//       target.style.boxShadow = `0 6px 15px ${color}40`;
//     }
//     target.style.transform = 'translateY(-3px)';
//   };

//   const handleMouseLeave = (
//     e: React.MouseEvent<HTMLAnchorElement>,
//     color?: string
//   ) => {
//     const target = e.currentTarget;
//     if (color) {
//       target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
//     }
//     target.style.transform = 'translateY(0)';
//     target.style.boxShadow = 'none';
//   };

//   const handleLinkMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
//     const target = e.currentTarget;
//     target.style.color = '#99bbcf';
//     target.style.transform = 'translateX(5px)';
//   };

//   const handleLinkMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
//     const target = e.currentTarget;
//     target.style.color = '#cbd5e0';
//     target.style.transform = 'translateX(0)';
//   };

//   const handlePolicyMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
//     e.currentTarget.style.color = '#99bbcf';
//   };

//   const handlePolicyMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
//     e.currentTarget.style.color = '#cbd5e0';
//   };

//   return (
//     <footer style={{
//       backgroundColor: '#2c3e50',
//       color: '#ffffff',
//       padding: '3rem 1rem 1rem',
//       fontFamily: "'Segoe UI', 'Roboto', 'Arial', sans-serif",
//       width: '100%',
//       marginTop: 'auto'
//     }}>
//       <div style={{
//         maxWidth: '1400px',
//         margin: '0 auto',
//         padding: '0'
//       }}>
//         {/* Main Footer Content */}
//         <div className="footer-grid" style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(3, 1fr)',
//           gap: '3rem',
//           marginBottom: '2rem',
//           padding: '0'
//         }}>
//           {/* Left Section - Brand & Social */}
//           <div className="footer-brand" style={{
//             display: 'flex',
//             flexDirection: 'column',
//             gap: '1.5rem',
//             padding: '0'
//           }}>
//             {/* Logo */}
//             <div style={{
//               display: 'flex',
//               alignItems: 'center',
//               gap: '1rem',
//               marginBottom: '0.5rem',
//               padding: '0'
//             }}>
//               <Image
//                 src="/assets/images/booklogo.webp"
//                 alt="OM Spiritual Logo"
//                 width={50}
//                 height={50}
//                 style={{
//                   borderRadius: '50%',
//                   boxShadow: '0 4px 15px rgba(153, 187, 207, 0.3)',
//                   objectFit: 'cover'
//                 }}
//               />
//               <div>
//                 <h2 style={{
//                   fontSize: '1.8rem',
//                   fontWeight: '700',
//                   color: '#ffffff',
//                   margin: 0,
//                   lineHeight: '1.2'
//                 }}>
//                   OM Spiritual 
//                 </h2>
//                 <p style={{
//                   fontSize: '0.9rem',
//                   color: '#99bbcf',
//                   margin: '0.2rem 0 0 0',
//                   opacity: 0.9
//                 }}>
//                   Books & Wisdom
//                 </p>
//               </div>
//             </div>

//             {/* Description */}
//             <p className="footer-description" style={{
//               color: '#cbd5e0',
//               lineHeight: '1.6',
//               fontSize: '0.95rem',
//               margin: 0
//             }}>
//               We are dedicated to providing the best service and quality products 
//               to our customers worldwide. Join us on our journey to excellence.
//             </p>

//             {/* Social Icons */}
//             <div style={{ padding: '0' }}>
//               <h3 style={{
//                 fontSize: '1.1rem',
//                 fontWeight: '600',
//                 color: '#ffffff',
//                 marginBottom: '1rem',
//                 padding: '0'
//               }}>
//                 Follow Us
//               </h3>
//               <div className="social-icons" style={{
//                 display: 'flex',
//                 gap: '0.8rem',
//                 flexWrap: 'wrap',
//                 padding: '0'
//               }}>
//                 {socialLinks.map((social, index) => (
//                   <a
//                     key={index}
//                     href={social.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     style={{
//                       width: '40px',
//                       height: '40px',
//                       borderRadius: '8px',
//                       backgroundColor: 'rgba(255, 255, 255, 0.1)',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       textDecoration: 'none',
//                       transition: 'all 0.3s ease',
//                       color: '#ffffff',
//                       border: '1px solid rgba(255, 255, 255, 0.2)',
//                       cursor: 'pointer'
//                     }}
//                     onMouseEnter={(e) => handleMouseEnter(e, social.color)}
//                     onMouseLeave={(e) => handleMouseLeave(e, social.color)}
//                     aria-label={social.label}
//                   >
//                     <div style={{ fontSize: '1.1rem' }}>
//                       {social.icon}
//                     </div>
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Center Section - Quick Links */}
//           <div className="footer-links-wrapper" style={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             flexWrap: 'wrap',
//             gap: '2rem',
//             padding: '0'
//           }}>
//             {/* Company Links */}
//             <div className="footer-links-column" style={{ 
//               flex: 1, 
//               minWidth: '150px',
//               padding: '0'
//             }}>
//               <h3 style={{
//                 fontSize: '1.2rem',
//                 fontWeight: '700',
//                 color: '#ffffff',
//                 marginBottom: '1.2rem',
//                 paddingBottom: '0.5rem',
//                 borderBottom: '2px solid #99bbcf',
//                 display: 'inline-block',
//                 width: '100%'
//               }}>
//                 Company
//               </h3>
//               <ul style={{
//                 listStyle: 'none',
//                 padding: '0',
//                 margin: '0',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 gap: '0.7rem'
//               }}>
//                 {companyLinks.map((link, index) => (
//                   <li key={index}>
//                     <a
//                       href={link.url}
//                       style={{
//                         color: '#cbd5e0',
//                         textDecoration: 'none',
//                         fontSize: '0.95rem',
//                         transition: 'all 0.3s ease',
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: '8px',
//                         padding: '2px 0'
//                       }}
//                       onMouseEnter={handleLinkMouseEnter}
//                       onMouseLeave={handleLinkMouseLeave}
//                     >
//                       <span style={{
//                         width: '4px',
//                         height: '4px',
//                         backgroundColor: '#99bbcf',
//                         borderRadius: '50%',
//                         opacity: 0.7,
//                         flexShrink: 0
//                       }} />
//                       {link.text}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Support Links */}
//             <div className="footer-links-column" style={{ 
//               flex: 1, 
//               minWidth: '150px',
//               padding: '0'
//             }}>
//               <h3 style={{
//                 fontSize: '1.2rem',
//                 fontWeight: '700',
//                 color: '#ffffff',
//                 marginBottom: '1.2rem',
//                 paddingBottom: '0.5rem',
//                 borderBottom: '2px solid #99bbcf',
//                 display: 'inline-block',
//                 width: '100%'
//               }}>
//                 Support
//               </h3>
//               <ul style={{
//                 listStyle: 'none',
//                 padding: '0',
//                 margin: '0',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 gap: '0.7rem'
//               }}>
//                 {supportLinks.map((link, index) => (
//                   <li key={index}>
//                     <a
//                       href={link.url}
//                       style={{
//                         color: '#cbd5e0',
//                         textDecoration: 'none',
//                         fontSize: '0.95rem',
//                         transition: 'all 0.3s ease',
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: '8px',
//                         padding: '2px 0'
//                       }}
//                       onMouseEnter={handleLinkMouseEnter}
//                       onMouseLeave={handleLinkMouseLeave}
//                     >
//                       <span style={{
//                         width: '4px',
//                         height: '4px',
//                         backgroundColor: '#99bbcf',
//                         borderRadius: '50%',
//                         opacity: 0.7,
//                         flexShrink: 0
//                       }} />
//                       {link.text}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Right Section - Contact Info */}
//           <div className="footer-contact" style={{ padding: '0' }}>
//             <div style={{
//               marginBottom: '1.5rem',
//               padding: '0'
//             }}>
//               <h3 style={{
//                 fontSize: '1.2rem',
//                 fontWeight: '700',
//                 color: '#ffffff',
//                 marginBottom: '1.2rem',
//                 paddingBottom: '0.5rem',
//                 borderBottom: '2px solid #99bbcf',
//                 display: 'inline-block',
//                 width: '100%'
//               }}>
//                 Contact Info
//               </h3>
//               <div style={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 gap: '1rem',
//                 padding: '0'
//               }}>
//                 {contactInfo.map((info, index) => (
//                   <div key={index} style={{
//                     display: 'flex',
//                     alignItems: 'flex-start',
//                     gap: '12px',
//                     padding: '0'
//                   }}>
//                     <div style={{
//                       width: '32px',
//                       height: '32px',
//                       borderRadius: '6px',
//                       backgroundColor: 'rgba(153, 187, 207, 0.15)',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       flexShrink: 0,
//                       border: '1px solid rgba(153, 187, 207, 0.3)'
//                     }}>
//                       <div style={{ color: '#99bbcf', fontSize: '0.9rem' }}>
//                         {info.icon}
//                       </div>
//                     </div>
//                     <span style={{
//                       fontSize: '0.9rem',
//                       color: '#cbd5e0',
//                       lineHeight: '1.4',
//                       flex: 1
//                     }}>
//                       {info.text}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <div style={{
//           height: '1px',
//           backgroundColor: 'rgba(255, 255, 255, 0.1)',
//           margin: '2rem 0 1.5rem',
//           width: '100%'
//         }} />

//         {/* Footer Bottom */}
//         <div className="footer-bottom" style={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           flexWrap: 'wrap',
//           gap: '1rem',
//           padding: '0.5rem 0 0',
//           width: '100%'
//         }}>
//           <p style={{
//             color: '#cbd5e0',
//             fontSize: '0.9rem',
//             margin: 0,
//             padding: '0'
//           }}>
//             © {new Date().getFullYear()}{' '}
//             <a
//               href="#"
//               style={{
//                 color: '#99bbcf',
//                 textDecoration: 'none',
//                 fontWeight: '600',
//                 transition: 'all 0.3s ease'
//               }}
//               onMouseEnter={handlePolicyMouseEnter}
//               onMouseLeave={handlePolicyMouseLeave}
//             >
//               BookHub
//             </a>
//             . All rights reserved.
//           </p>

//           <div className="footer-bottom-links" style={{
//             display: 'flex',
//             gap: '1.5rem',
//             fontSize: '0.9rem',
//             flexWrap: 'wrap',
//             padding: '0',
//             margin: '0'
//           }}>
//             {policyLinks.map((link, index) => (
//               <a
//                 key={index}
//                 href={link.url}
//                 style={{
//                   color: '#cbd5e0',
//                   textDecoration: 'none',
//                   transition: 'all 0.3s ease',
//                   padding: '0',
//                   whiteSpace: 'nowrap'
//                 }}
//                 onMouseEnter={handlePolicyMouseEnter}
//                 onMouseLeave={handlePolicyMouseLeave}
//               >
//                 {link.text}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Mobile Responsive Styles */}
//       <style jsx>{`
//         /* Tablet View - 2 Columns */
//         @media (max-width: 1024px) {
//           .footer-grid {
//             grid-template-columns: repeat(2, 1fr) !important;
//             gap: 2.5rem !important;
//           }
          
//           .footer-contact {
//             grid-column: span 2;
//           }
          
//           .footer-links-wrapper {
//             gap: 3rem !important;
//           }
//         }
        
//         /* Mobile View - Single Column */
//         @media (max-width: 768px) {
//           footer {
//             padding: 2rem 1rem 1rem !important;
//           }
          
//           .footer-grid {
//             grid-template-columns: 1fr !important;
//             gap: 2.5rem !important;
//             margin-bottom: 1.5rem !important;
//           }
          
//           .footer-brand,
//           .footer-contact {
//             text-align: center;
//             align-items: center;
//           }
          
//           .footer-brand > div:first-child {
//             justify-content: center;
//           }
          
//           .footer-description {
//             text-align: center;
//           }
          
//           .social-icons {
//             justify-content: center !important;
//           }
          
//           .footer-links-wrapper {
//             justify-content: center !important;
//             text-align: center;
//             gap: 2rem !important;
//           }
          
//           .footer-links-column {
//             min-width: 120px !important;
//           }
          
//           .footer-links-column h3 {
//             width: 100%;
//             text-align: center;
//           }
          
//           .footer-links-column ul {
//             align-items: center;
//           }
          
//           .footer-links-column a {
//             justify-content: center !important;
//           }
          
//           .footer-contact {
//             grid-column: span 1 !important;
//           }
          
//           .footer-contact h3 {
//             width: 100%;
//             text-align: center;
//           }
          
//           .footer-contact > div > div {
//             align-items: center;
//           }
          
//           .footer-contact span {
//             text-align: center;
//           }
          
//           .footer-bottom {
//             flex-direction: column;
//             text-align: center;
//             gap: 1rem !important;
//             padding-top: 1rem !important;
//           }
          
//           .footer-bottom p {
//             text-align: center;
//           }
          
//           .footer-bottom-links {
//             justify-content: center;
//             gap: 1rem !important;
//           }
//         }
        
//         /* Small Mobile View */
//         @media (max-width: 480px) {
//           footer {
//             padding: 1.5rem 0.8rem 0.8rem !important;
//           }
          
//           .footer-grid {
//             gap: 2rem !important;
//             margin-bottom: 1rem !important;
//           }
          
//           .footer-brand h2 {
//             font-size: 1.5rem !important;
//           }
          
//           .footer-brand p {
//             font-size: 0.85rem !important;
//           }
          
//           .footer-description {
//             font-size: 0.9rem !important;
//           }
          
//           .social-icons {
//             gap: 0.6rem !important;
//           }
          
//           .social-icons a {
//             width: 36px !important;
//             height: 36px !important;
//           }
          
//           .footer-links-wrapper {
//             flex-direction: column;
//             gap: 2rem !important;
//           }
          
//           .footer-links-column {
//             width: 100%;
//           }
          
//           .footer-links-column h3,
//           .footer-contact h3 {
//             font-size: 1.1rem !important;
//           }
          
//           .footer-bottom {
//             gap: 0.8rem !important;
//           }
          
//           .footer-bottom p {
//             font-size: 0.85rem !important;
//           }
          
//           .footer-bottom-links {
//             flex-direction: row;
//             gap: 0.8rem !important;
//           }
          
//           .footer-bottom-links a {
//             font-size: 0.85rem !important;
//           }
//         }
        
//         /* Extra Small Mobile View */
//         @media (max-width: 360px) {
//           footer {
//             padding: 1.2rem 0.6rem 0.6rem !important;
//           }
          
//           .footer-brand h2 {
//             font-size: 1.3rem !important;
//           }
          
//           .footer-grid {
//             gap: 1.5rem !important;
//           }
          
//           .social-icons a {
//             width: 34px !important;
//             height: 34px !important;
//             font-size: 0.95rem !important;
//           }
          
//           .footer-bottom-links {
//             flex-wrap: wrap;
//             justify-content: center;
//             gap: 0.6rem 1rem !important;
//           }
          
//           .footer-bottom-links a {
//             font-size: 0.8rem !important;
//           }
//         }
//       `}</style>
//     </footer>
//   );
// }   










// "use client";

// import React from "react";
// import Image from "next/image";
// import { 
//   FaFacebookF, 
//   FaTwitter, 
//   FaInstagram, 
//   FaWhatsapp, 
//   FaLinkedinIn 
// } from "react-icons/fa";
// import { 
//   FiMapPin, 
//   FiPhone, 
//   FiMail, 
//   FiGlobe 
// } from "react-icons/fi";

// interface SocialLink {
//   icon: React.ReactNode;
//   label: string;
//   color: string;
//   url: string;
// }

// interface FooterLink {
//   text: string;
//   url: string;
// }

// interface ContactInfo {
//   icon: React.ReactNode;
//   text: string;
// }

// export default function Footer() {
//   const socialLinks: SocialLink[] = [
//     { icon: <FaFacebookF />, label: "Facebook", color: "#1877F2", url: "#" },
//     { icon: <FaTwitter />, label: "Twitter", color: "#1DA1F2", url: "#" },
//     { icon: <FaInstagram />, label: "Instagram", color: "#E4405F", url: "#" },
//     { icon: <FaWhatsapp />, label: "WhatsApp", color: "#25D366", url: "#" },
//     { icon: <FaLinkedinIn />, label: "LinkedIn", color: "#0A66C2", url: "#" },
//   ];

//   const companyLinks: FooterLink[] = [
//     { text: "About Us", url: "/about" },
//     { text: "Our Team", url: "/our-team" },
//     { text: "Careers", url: "/careers" },
//     { text: "Blog", url: "/blogs" },
//   ];

//   const supportLinks: FooterLink[] = [
//     { text: "Help Center", url: "/help-center" },
//     { text: "Contact Us", url: "/contact" },
//     { text: "Privacy Policy", url: "/privacy-policy" },
//     { text: "Terms of Service", url: "/terms-of-service" },
//   ];

//   const contactInfo: ContactInfo[] = [
//     { icon: <FiMapPin />, text: "B133/1, 2nd Floor, KSSIDC ITI Estate, Whitefield Main Rd, Bengaluru, Karnataka 560048" },
//     { icon: <FiPhone />, text: "+91 98765 43210" },
//     { icon: <FiMail />, text: "omspiritual2025@gmail.com.com" },
//     { icon: <FiGlobe />, text: "www.omspiritual2025.com" },
//   ];

//   const policyLinks: FooterLink[] = [
//     { text: "", url: "" },
//     { text: "", url: "#terms-of-service" },
//     { text: "", url: "#cookie-policy" },
//   ];

//   const handleMouseEnter = (
//     e: React.MouseEvent<HTMLAnchorElement>,
//     color?: string
//   ) => {
//     const target = e.currentTarget;
//     if (color) {
//       target.style.backgroundColor = color;
//       target.style.boxShadow = `0 6px 15px ${color}40`;
//     }
//     target.style.transform = 'translateY(-3px)';
//   };

//   const handleMouseLeave = (
//     e: React.MouseEvent<HTMLAnchorElement>,
//     color?: string
//   ) => {
//     const target = e.currentTarget;
//     if (color) {
//       target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
//     }
//     target.style.transform = 'translateY(0)';
//     target.style.boxShadow = 'none';
//   };

//   const handleLinkMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
//     const target = e.currentTarget;
//     target.style.color = '#99bbcf';
//     target.style.transform = 'translateX(5px)';
//   };

//   const handleLinkMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
//     const target = e.currentTarget;
//     target.style.color = '#cbd5e0';
//     target.style.transform = 'translateX(0)';
//   };

//   const handlePolicyMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
//     e.currentTarget.style.color = '#99bbcf';
//   };

//   const handlePolicyMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
//     e.currentTarget.style.color = '#cbd5e0';
//   };

//   return (
//     <footer style={{
//       backgroundColor: '#2c3e50',
//       color: '#ffffff',
//       padding: '3rem 1rem 1rem',
//       fontFamily: "'Segoe UI', 'Roboto', 'Arial', sans-serif",
//       width: '100%',
//       marginTop: 'auto'
//     }}>
//       <div style={{
//         maxWidth: '1400px',
//         margin: '0 auto',
//         padding: '0'
//       }}>
//         {/* Main Footer Content */}
//         <div className="footer-grid" style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(3, 1fr)',
//           gap: '3rem',
//           marginBottom: '2rem',
//           padding: '0'
//         }}>
//           {/* Left Section - Brand & Social */}
//           <div className="footer-brand" style={{
//             display: 'flex',
//             flexDirection: 'column',
//             gap: '1.5rem',
//             padding: '0'
//           }}>
//             {/* Logo */}
//             <div style={{
//               display: 'flex',
//               alignItems: 'center',
//               gap: '1rem',
//               marginBottom: '0.5rem',
//               padding: '0'
//             }}>
//               <Image
//                 src="/assets/images/booklogo.webp"
//                 alt="OM Spiritual Logo"
//                 width={50}
//                 height={50}
//                 style={{
//                   borderRadius: '50%',
//                   boxShadow: '0 4px 15px rgba(153, 187, 207, 0.3)',
//                   objectFit: 'cover'
//                 }}
//               />
//               <div>
//                 <h2 style={{
//                   fontSize: '1.8rem',
//                   fontWeight: '700',
//                   color: '#ffffff',
//                   margin: 0,
//                   lineHeight: '1.2'
//                 }}>
//                   OM Spiritual 
//                 </h2>
//                 <p style={{
//                   fontSize: '0.9rem',
//                   color: '#99bbcf',
//                   margin: '0.2rem 0 0 0',
//                   opacity: 0.9
//                 }}>
//                   Books & Wisdom
//                 </p>
//               </div>
//             </div>

//             {/* Description */}
//             <p className="footer-description" style={{
//               color: '#cbd5e0',
//               lineHeight: '1.6',
//               fontSize: '0.95rem',
//               margin: 0
//             }}>
//               We are dedicated to providing the best service and quality products 
//               to our customers worldwide. Join us on our journey to excellence.
//             </p>

//             {/* Social Icons */}
//             <div style={{ padding: '0' }}>
//               <h3 style={{
//                 fontSize: '1.1rem',
//                 fontWeight: '600',
//                 color: '#ffffff',
//                 marginBottom: '1rem',
//                 padding: '0'
//               }}>
//                 Follow Us
//               </h3>
//               <div className="social-icons" style={{
//                 display: 'flex',
//                 gap: '0.8rem',
//                 flexWrap: 'wrap',
//                 padding: '0'
//               }}>
//                 {socialLinks.map((social, index) => (
//                   <a
//                     key={index}
//                     href={social.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     style={{
//                       width: '40px',
//                       height: '40px',
//                       borderRadius: '8px',
//                       backgroundColor: 'rgba(255, 255, 255, 0.1)',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       textDecoration: 'none',
//                       transition: 'all 0.3s ease',
//                       color: '#ffffff',
//                       border: '1px solid rgba(255, 255, 255, 0.2)',
//                       cursor: 'pointer'
//                     }}
//                     onMouseEnter={(e) => handleMouseEnter(e, social.color)}
//                     onMouseLeave={(e) => handleMouseLeave(e, social.color)}
//                     aria-label={social.label}
//                   >
//                     <div style={{ fontSize: '1.1rem' }}>
//                       {social.icon}
//                     </div>
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Center Section - Quick Links */}
//           <div className="footer-links-wrapper" style={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             flexWrap: 'wrap',
//             gap: '2rem',
//             padding: '0'
//           }}>
//             {/* Company Links */}
//             <div className="footer-links-column" style={{ 
//               flex: 1, 
//               minWidth: '150px',
//               padding: '0'
//             }}>
//               <h3 style={{
//                 fontSize: '1.2rem',
//                 fontWeight: '700',
//                 color: '#ffffff',
//                 marginBottom: '1.2rem',
//                 paddingBottom: '0.5rem',
//                 borderBottom: '2px solid #99bbcf',
//                 display: 'inline-block',
//                 width: '100%'
//               }}>
//                 Company
//               </h3>
//               <ul style={{
//                 listStyle: 'none',
//                 padding: '0',
//                 margin: '0',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 gap: '0.7rem'
//               }}>
//                 {companyLinks.map((link, index) => (
//                   <li key={index}>
//                     <a
//                       href={link.url}
//                       style={{
//                         color: '#cbd5e0',
//                         textDecoration: 'none',
//                         fontSize: '0.95rem',
//                         transition: 'all 0.3s ease',
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: '8px',
//                         padding: '2px 0'
//                       }}
//                       onMouseEnter={handleLinkMouseEnter}
//                       onMouseLeave={handleLinkMouseLeave}
//                     >
//                       <span style={{
//                         width: '4px',
//                         height: '4px',
//                         backgroundColor: '#99bbcf',
//                         borderRadius: '50%',
//                         opacity: 0.7,
//                         flexShrink: 0
//                       }} />
//                       {link.text}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Support Links */}
//             <div className="footer-links-column" style={{ 
//               flex: 1, 
//               minWidth: '150px',
//               padding: '0'
//             }}>
//               <h3 style={{
//                 fontSize: '1.2rem',
//                 fontWeight: '700',
//                 color: '#ffffff',
//                 marginBottom: '1.2rem',
//                 paddingBottom: '0.5rem',
//                 borderBottom: '2px solid #99bbcf',
//                 display: 'inline-block',
//                 width: '100%'
//               }}>
//                 Support
//               </h3>
//               <ul style={{
//                 listStyle: 'none',
//                 padding: '0',
//                 margin: '0',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 gap: '0.7rem'
//               }}>
//                 {supportLinks.map((link, index) => (
//                   <li key={index}>
//                     <a
//                       href={link.url}
//                       style={{
//                         color: '#cbd5e0',
//                         textDecoration: 'none',
//                         fontSize: '0.95rem',
//                         transition: 'all 0.3s ease',
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: '8px',
//                         padding: '2px 0'
//                       }}
//                       onMouseEnter={handleLinkMouseEnter}
//                       onMouseLeave={handleLinkMouseLeave}
//                     >
//                       <span style={{
//                         width: '4px',
//                         height: '4px',
//                         backgroundColor: '#99bbcf',
//                         borderRadius: '50%',
//                         opacity: 0.7,
//                         flexShrink: 0
//                       }} />
//                       {link.text}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Right Section - Contact Info */}
//           <div className="footer-contact" style={{ padding: '0' }}>
//             <div style={{
//               marginBottom: '1.5rem',
//               padding: '0'
//             }}>
//               <h3 style={{
//                 fontSize: '1.2rem',
//                 fontWeight: '700',
//                 color: '#ffffff',
//                 marginBottom: '1.2rem',
//                 paddingBottom: '0.5rem',
//                 borderBottom: '2px solid #99bbcf',
//                 display: 'inline-block',
//                 width: '100%'
//               }}>
//                 Contact Info
//               </h3>
//               <div style={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 gap: '1rem',
//                 padding: '0'
//               }}>
//                 {contactInfo.map((info, index) => (
//                   <div key={index} style={{
//                     display: 'flex',
//                     alignItems: 'flex-start',
//                     gap: '12px',
//                     padding: '0'
//                   }}>
//                     <div style={{
//                       width: '32px',
//                       height: '32px',
//                       borderRadius: '6px',
//                       backgroundColor: 'rgba(153, 187, 207, 0.15)',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       flexShrink: 0,
//                       border: '1px solid rgba(153, 187, 207, 0.3)'
//                     }}>
//                       <div style={{ color: '#99bbcf', fontSize: '0.9rem' }}>
//                         {info.icon}
//                       </div>
//                     </div>
//                     <span style={{
//                       fontSize: '0.9rem',
//                       color: '#cbd5e0',
//                       lineHeight: '1.4',
//                       flex: 1
//                     }}>
//                       {info.text}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <div style={{
//           height: '1px',
//           backgroundColor: 'rgba(255, 255, 255, 0.1)',
//           margin: '2rem 0 1.5rem',
//           width: '100%'
//         }} />

//         {/* Footer Bottom */}
//         <div className="footer-bottom" style={{
//           display: 'center',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           flexWrap: 'wrap',
//           // gap: '1rem',
//           // padding: '0.5rem 0 0',
//           width: '100%'
//         }}>
//           <p style={{
//             color: '#cbd5e0',
//             fontSize: '0.9rem',
//             margin: '0 0 0 500px',
//             padding: '0'
//           }}>
//             © {new Date().getFullYear()}{' '}
//             <a
//               href="#"
//               style={{
//                 color: '#99bbcf',
//                 textDecoration: 'none',
//                 fontWeight: '600',
//                 transition: 'all 0.3s ease'
//               }}
//               onMouseEnter={handlePolicyMouseEnter}
//               onMouseLeave={handlePolicyMouseLeave}
//             >
//               BookHub
//             </a>
//             . All rights reserved.
//           </p>

//           <div className="footer-bottom-links" style={{
//             display: 'flex',
//             gap: '1.5rem',
//             fontSize: '0.9rem',
//             flexWrap: 'wrap',
//             padding: '0',
//             margin: '0',
         
//           }}>
//             {policyLinks.map((link, index) => (
//               <a
//                 key={index}
//                 href={link.url}
//                 style={{
//                   color: '#cbd5e0',
//                   textDecoration: 'none',
//                   transition: 'all 0.3s ease',
//                   padding: '0',
//                   whiteSpace: 'nowrap'
//                 }}
//                 onMouseEnter={handlePolicyMouseEnter}
//                 onMouseLeave={handlePolicyMouseLeave}
//               >
//                 {link.text}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Mobile Responsive Styles */}
//       <style jsx>{`
//         /* Tablet View - 2 Columns */
//         @media (max-width: 1024px) {
//           .footer-grid {
//             grid-template-columns: repeat(2, 1fr) !important;
//             gap: 2.5rem !important;
//           }
          
//           .footer-contact {
//             grid-column: span 2;
//           }
          
//           .footer-links-wrapper {
//             gap: 3rem !important;
//           }
//         }
        
//         /* Mobile View - Single Column */
//         @media (max-width: 768px) {
//           footer {
//             padding: 2rem 1rem 1rem !important;
//           }
          
//           .footer-grid {
//             grid-template-columns: 1fr !important;
//             gap: 2.5rem !important;
//             margin-bottom: 1.5rem !important;
//           }
          
//           .footer-brand,
//           .footer-contact {
//             text-align: center;
//             align-items: center;
//           }
          
//           .footer-brand > div:first-child {
//             justify-content: center;
//           }
          
//           .footer-description {
//             text-align: center;
//           }
          
//           .social-icons {
//             justify-content: center !important;
//           }
          
//           .footer-links-wrapper {
//             justify-content: center !important;
//             text-align: center;
//             gap: 2rem !important;
//           }
          
//           .footer-links-column {
//             min-width: 120px !important;
//           }
          
//           .footer-links-column h3 {
//             width: 100%;
//             text-align: center;
//           }
          
//           .footer-links-column ul {
//             align-items: center;
//           }
          
//           .footer-links-column a {
//             justify-content: center !important;
//           }
          
//           .footer-contact {
//             grid-column: span 1 !important;
//           }
          
//           .footer-contact h3 {
//             width: 100%;
//             text-align: center;
//           }
          
//           .footer-contact > div > div {
//             align-items: center;
//           }
          
//           .footer-contact span {
//             text-align: center;
//           }
          
//           .footer-bottom {
//             flex-direction: column;
//             text-align: center;
//             gap: 1rem !important;
//             padding-top: 1rem !important;
//           }
          
//           .footer-bottom p {
//             text-align: center;
//           }
          
//           .footer-bottom-links {
//             justify-content: center;
//             gap: 1rem !important;
//           }
//         }
        
//         /* Small Mobile View */
//         @media (max-width: 480px) {
//           footer {
//             padding: 1.5rem 0.8rem 0.8rem !important;
//           }
          
//           .footer-grid {
//             gap: 2rem !important;
//             margin-bottom: 1rem !important;
//           }
          
//           .footer-brand h2 {
//             font-size: 1.5rem !important;
//           }
          
//           .footer-brand p {
//             font-size: 0.85rem !important;
//           }
          
//           .footer-description {
//             font-size: 0.9rem !important;
//           }
          
//           .social-icons {
//             gap: 0.6rem !important;
//           }
          
//           .social-icons a {
//             width: 36px !important;
//             height: 36px !important;
//           }
          
//           .footer-links-wrapper {
//             flex-direction: column;
//             gap: 2rem !important;
//           }
          
//           .footer-links-column {
//             width: 100%;
//           }
          
//           .footer-links-column h3,
//           .footer-contact h3 {
//             font-size: 1.1rem !important;
//           }
          
//           .footer-bottom {
//             gap: 0.8rem !important;
//           }
          
//           .footer-bottom p {
//             font-size: 0.85rem !important;
//           }
          
//           .footer-bottom-links {
//             flex-direction: row;
//             gap: 0.8rem !important;
//           }
          
//           .footer-bottom-links a {
//             font-size: 0.85rem !important;
//           }
//         }
        
//         /* Extra Small Mobile View */
//         @media (max-width: 360px) {
//           footer {
//             padding: 1.2rem 0.6rem 0.6rem !important;
//           }
          
//           .footer-brand h2 {
//             font-size: 1.3rem !important;
//           }
          
//           .footer-grid {
//             gap: 1.5rem !important;
//           }
          
//           .social-icons a {
//             width: 34px !important;
//             height: 34px !important;
//             font-size: 0.95rem !important;
//           }
          
//           .footer-bottom-links {
//             flex-wrap: wrap;
//             justify-content: center;
//             gap: 0.6rem 1rem !important;
//           }
          
//           .footer-bottom-links a {
//             font-size: 0.8rem !important;
//           }
//         }
//       `}</style>
//     </footer>
//   );
// }















// "use client";

// import React from "react";
// import Image from "next/image";
// import { 
//   FaFacebookF, 
//   FaTwitter, 
//   FaInstagram, 
//   FaWhatsapp, 
//   FaLinkedinIn 
// } from "react-icons/fa";
// import { 
//   FiMapPin, 
//   FiPhone, 
//   FiMail, 
//   FiGlobe 
// } from "react-icons/fi";

// interface SocialLink {
//   icon: React.ReactNode;
//   label: string;
//   color: string;
//   url: string;
// }

// interface FooterLink {
//   text: string;
//   url: string;
// }

// interface ContactInfo {
//   icon: React.ReactNode;
//   text: string;
// }

// export default function Footer() {
//   const socialLinks: SocialLink[] = [
//     { icon: <FaFacebookF />, label: "Facebook", color: "#1877F2", url: "#" },
//     { icon: <FaTwitter />, label: "Twitter", color: "#1DA1F2", url: "#" },
//     { icon: <FaInstagram />, label: "Instagram", color: "#E4405F", url: "#" },
//     { icon: <FaWhatsapp />, label: "WhatsApp", color: "#25D366", url: "#" },
//     { icon: <FaLinkedinIn />, label: "LinkedIn", color: "#0A66C2", url: "#" },
//   ];

//   const companyLinks: FooterLink[] = [
//     { text: "About Us", url: "/about" },
//     { text: "Our Team", url: "/our-team" },
//     { text: "Careers", url: "/careers" },
//     { text: "Blog", url: "/blogs" },
//   ];

//   const supportLinks: FooterLink[] = [
//     { text: "Help Center", url: "/help-center" },
//     { text: "Contact Us", url: "/contact" },
//     { text: "Privacy Policy", url: "/privacy-policy" },
//     { text: "Terms of Service", url: "/terms-of-service" },
//   ];

//   const contactInfo: ContactInfo[] = [
//     { icon: <FiMapPin />, text: "B133/1, 2nd Floor, KSSIDC ITI Estate, Whitefield Main Rd, Bengaluru, Karnataka 560048" },
//     { icon: <FiPhone />, text: "+91 98765 43210" },
//     { icon: <FiMail />, text: "omspiritual2025@gmail.com.com" },
//     { icon: <FiGlobe />, text: "www.omspiritual2025.com" },
//   ];

//   const policyLinks: FooterLink[] = [
//     { text: "", url: "" },
//     { text: "", url: "#terms-of-service" },
//     { text: "", url: "#cookie-policy" },
//   ];

//   const handleMouseEnter = (
//     e: React.MouseEvent<HTMLAnchorElement>,
//     color?: string
//   ) => {
//     const target = e.currentTarget;
//     if (color) {
//       target.style.backgroundColor = color;
//       target.style.boxShadow = `0 6px 15px ${color}40`;
//     }
//     target.style.transform = 'translateY(-3px)';
//   };

//   const handleMouseLeave = (
//     e: React.MouseEvent<HTMLAnchorElement>,
//     color?: string
//   ) => {
//     const target = e.currentTarget;
//     if (color) {
//       target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
//     }
//     target.style.transform = 'translateY(0)';
//     target.style.boxShadow = 'none';
//   };

//   const handleLinkMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
//     const target = e.currentTarget;
//     target.style.color = '#99bbcf';
//     target.style.transform = 'translateX(5px)';
//   };

//   const handleLinkMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
//     const target = e.currentTarget;
//     target.style.color = '#cbd5e0';
//     target.style.transform = 'translateX(0)';
//   };

//   const handlePolicyMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
//     e.currentTarget.style.color = '#99bbcf';
//   };

//   const handlePolicyMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
//     e.currentTarget.style.color = '#cbd5e0';
//   };

//   return (
//     <footer style={{
//       backgroundColor: '#2c3e50',
//       color: '#ffffff',
//       padding: '3rem 1rem 1rem',
//       fontFamily: "'Segoe UI', 'Roboto', 'Arial', sans-serif",
//       width: '100%',
//       marginTop: 'auto'
//     }}>
//       <div style={{
//         maxWidth: '1400px',
//         margin: '0 auto',
//         padding: '0',
      
//       }}>
//         {/* Main Footer Content */}
//         <div className="footer-grid" style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(3, 1fr)',
//           gap: '3rem',
//           marginBottom: '2rem',
//           padding: '0'
//         }}>
//           {/* Left Section - Brand & Social */}
//           <div className="footer-brand" style={{
//             display: 'flex',
//             flexDirection: 'column',
//             gap: '1.5rem',
//             padding: '0'
//           }}>
//             {/* Logo */}
//             <div style={{
//               display: 'flex',
//               alignItems: 'center',
//               gap: '1rem',
//               marginBottom: '0.5rem',
//               padding: '0'
//             }}>
//               <Image
//                 src="/assets/images/booklogo.webp"
//                 alt="OM Spiritual Logo"
//                 width={50}
//                 height={50}
//                 style={{
//                   borderRadius: '50%',
//                   boxShadow: '0 4px 15px rgba(153, 187, 207, 0.3)',
//                   objectFit: 'cover'
//                 }}
//               />
//               <div>
//                 <h2 style={{
//                   fontSize: '1.8rem',
//                   fontWeight: '700',
//                   color: '#ffffff',
//                   margin: 0,
//                   lineHeight: '1.2'
//                 }}>
//                   OM Spiritual 
//                 </h2>
//                 <p style={{
//                   fontSize: '0.9rem',
//                   color: '#99bbcf',
//                   margin: '0.2rem 0 0 0',
//                   opacity: 0.9
//                 }}>
//                   Books & Wisdom
//                 </p>
//               </div>
//             </div>

//             {/* Description */}
//             <p className="footer-description" style={{
//               color: '#cbd5e0',
//               lineHeight: '1.6',
//               fontSize: '0.95rem',
//               margin: 0
//             }}>
//               We are dedicated to providing the best service and quality products 
//               to our customers worldwide. Join us on our journey to excellence.
//             </p>

//             {/* Social Icons */}
//             <div style={{ padding: '0' }}>
//               <h3 style={{
//                 fontSize: '1.1rem',
//                 fontWeight: '600',
//                 color: '#ffffff',
//                 marginBottom: '1rem',
//                 padding: '0'
//               }}>
//                 Follow Us
//               </h3>
//               <div className="social-icons" style={{
//                 display: 'flex',
//                 gap: '0.8rem',
//                 flexWrap: 'wrap',
//                 padding: '0'
//               }}>
//                 {socialLinks.map((social, index) => (
//                   <a
//                     key={index}
//                     href={social.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     style={{
//                       width: '40px',
//                       height: '40px',
//                       borderRadius: '8px',
//                       backgroundColor: 'rgba(255, 255, 255, 0.1)',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       textDecoration: 'none',
//                       transition: 'all 0.3s ease',
//                       color: '#ffffff',
//                       border: '1px solid rgba(255, 255, 255, 0.2)',
//                       cursor: 'pointer'
//                     }}
//                     onMouseEnter={(e) => handleMouseEnter(e, social.color)}
//                     onMouseLeave={(e) => handleMouseLeave(e, social.color)}
//                     aria-label={social.label}
//                   >
//                     <div style={{ fontSize: '1.1rem' }}>
//                       {social.icon}
//                     </div>
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Center Section - Quick Links */}
//           <div className="footer-links-wrapper" style={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             flexWrap: 'wrap',
//             gap: '2rem',
//             padding: '0'
//           }}>
//             {/* Company Links */}
//             <div className="footer-links-column" style={{ 
//               flex: 1, 
//               minWidth: '150px',
//               padding: '0'
//             }}>
//               <h3 style={{
//                 fontSize: '1.2rem',
//                 fontWeight: '700',
//                 color: '#ffffff',
//                 marginBottom: '1.2rem',
//                 paddingBottom: '0.5rem',
//                 borderBottom: '2px solid #99bbcf',
//                 display: 'inline-block',
//                 width: '100%'
//               }}>
//                 Company
//               </h3>
//               <ul style={{
//                 listStyle: 'none',
//                 padding: '0',
//                 margin: '0',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 gap: '0.7rem'
//               }}>
//                 {companyLinks.map((link, index) => (
//                   <li key={index}>
//                     <a
//                       href={link.url}
//                       style={{
//                         color: '#cbd5e0',
//                         textDecoration: 'none',
//                         fontSize: '0.95rem',
//                         transition: 'all 0.3s ease',
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: '8px',
//                         padding: '2px 0'
//                       }}
//                       onMouseEnter={handleLinkMouseEnter}
//                       onMouseLeave={handleLinkMouseLeave}
//                     >
//                       <span style={{
//                         width: '4px',
//                         height: '4px',
//                         backgroundColor: '#99bbcf',
//                         borderRadius: '50%',
//                         opacity: 0.7,
//                         flexShrink: 0
//                       }} />
//                       {link.text}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Support Links */}
//             <div className="footer-links-column" style={{ 
//               flex: 1, 
//               minWidth: '150px',
//               padding: '0'
//             }}>
//               <h3 style={{
//                 fontSize: '1.2rem',
//                 fontWeight: '700',
//                 color: '#ffffff',
//                 marginBottom: '1.2rem',
//                 paddingBottom: '0.5rem',
//                 borderBottom: '2px solid #99bbcf',
//                 display: 'inline-block',
//                 width: '100%'
//               }}>
//                 Support
//               </h3>
//               <ul style={{
//                 listStyle: 'none',
//                 padding: '0',
//                 margin: '0',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 gap: '0.7rem'
//               }}>
//                 {supportLinks.map((link, index) => (
//                   <li key={index}>
//                     <a
//                       href={link.url}
//                       style={{
//                         color: '#cbd5e0',
//                         textDecoration: 'none',
//                         fontSize: '0.95rem',
//                         transition: 'all 0.3s ease',
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: '8px',
//                         padding: '2px 0'
//                       }}
//                       onMouseEnter={handleLinkMouseEnter}
//                       onMouseLeave={handleLinkMouseLeave}
//                     >
//                       <span style={{
//                         width: '4px',
//                         height: '4px',
//                         backgroundColor: '#99bbcf',
//                         borderRadius: '50%',
//                         opacity: 0.7,
//                         flexShrink: 0
//                       }} />
//                       {link.text}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Right Section - Contact Info */}
//           <div className="footer-contact" style={{ padding: '0' }}>
//             <div style={{
//               marginBottom: '1.5rem',
//               padding: '0'
//             }}>
//               <h3 style={{
//                 fontSize: '1.2rem',
//                 fontWeight: '700',
//                 color: '#ffffff',
//                 marginBottom: '1.2rem',
//                 paddingBottom: '0.5rem',
//                 borderBottom: '2px solid #99bbcf',
//                 display: 'inline-block',
//                 width: '100%'
//               }}>
//                 Contact Info
//               </h3>
//               <div style={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 gap: '1rem',
//                 padding: '0'
//               }}>
//                 {contactInfo.map((info, index) => (
//                   <div key={index} style={{
//                     display: 'flex',
//                     alignItems: 'flex-start',
//                     gap: '12px',
//                     padding: '0'
//                   }}>
//                     <div style={{
//                       width: '32px',
//                       height: '32px',
//                       borderRadius: '6px',
//                       backgroundColor: 'rgba(153, 187, 207, 0.15)',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       flexShrink: 0,
//                       border: '1px solid rgba(153, 187, 207, 0.3)'
//                     }}>
//                       <div style={{ color: '#99bbcf', fontSize: '0.9rem' }}>
//                         {info.icon}
//                       </div>
//                     </div>
//                     <span style={{
//                       fontSize: '0.9rem',
//                       color: '#cbd5e0',
//                       lineHeight: '1.4',
//                       flex: 1
//                     }}>
//                       {info.text}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <div style={{
//           height: '1px',
//           backgroundColor: 'rgba(255, 255, 255, 0.1)',
//           margin: '2rem 0 1.5rem',
//           width: '100%'
//         }} />

//         {/* Footer Bottom */}
//         <div className="footer-bottom" style={{
//           display: 'center',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           flexWrap: 'wrap',
//           width: '100%'
//         }}>
//           <p style={{
//             color: '#cbd5e0',
//             fontSize: '0.9rem',
//             margin: '0 0 0 500px',
//             padding: '0'
//           }}>
//             © {new Date().getFullYear()}{' '}
//             <a
//               href="#"
//               style={{
//                 color: '#99bbcf',
//                 textDecoration: 'none',
//                 fontWeight: '600',
//                 transition: 'all 0.3s ease'
//               }}
//               onMouseEnter={handlePolicyMouseEnter}
//               onMouseLeave={handlePolicyMouseLeave}
//             >
//               BookHub
//             </a>
//             . All rights reserved.
//           </p>

//           <div className="footer-bottom-links" style={{
//             display: 'flex',
//             gap: '1.5rem',
//             fontSize: '0.9rem',
//             flexWrap: 'wrap',
//             padding: '0',
//             margin: '0',
//           }}>
//             {policyLinks.map((link, index) => (
//               <a
//                 key={index}
//                 href={link.url}
//                 style={{
//                   color: '#cbd5e0',
//                   textDecoration: 'none',
//                   transition: 'all 0.3s ease',
//                   padding: '0',
//                   whiteSpace: 'nowrap'
//                 }}
//                 onMouseEnter={handlePolicyMouseEnter}
//                 onMouseLeave={handlePolicyMouseLeave}
//               >
//                 {link.text}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Mobile Responsive Styles */}
//       <style jsx>{`
//         /* Tablet View - 2 Columns */
//         @media (max-width: 1024px) {
//           .footer-grid {
//             grid-template-columns: repeat(2, 1fr) !important;
//             gap: 2.5rem !important;
//           }
          
//           .footer-contact {
//             grid-column: span 2;
//           }
          
//           .footer-links-wrapper {
//             gap: 3rem !important;
//           }
//         }
        
//         /* Mobile View - Single Column */
//         @media (max-width: 768px) {
//           footer {
//             padding: 2rem 1rem 1rem !important;
//           }
          
//           .footer-grid {
//             grid-template-columns: 1fr !important;
//             gap: 2.5rem !important;
//             margin-bottom: 1.5rem !important;
//           }
          
//           .footer-brand,
//           .footer-contact {
//             text-align: center;
//             align-items: center;
//           }
          
//           .footer-brand > div:first-child {
//             justify-content: center;
//           }
          
//           .footer-description {
//             text-align: center;
//           }
          
//           .social-icons {
//             justify-content: center !important;
//           }
          
//           .footer-links-wrapper {
//             justify-content: center !important;
//             text-align: center;
//             gap: 2rem !important;
//           }
          
//           .footer-links-column {
//             min-width: 120px !important;
//           }
          
//           .footer-links-column h3 {
//             width: 100%;
//             text-align: center;
//           }
          
//           .footer-links-column ul {
//             align-items: center;
//           }
          
//           .footer-links-column a {
//             justify-content: center !important;
//           }
          
//           .footer-contact {
//             grid-column: span 1 !important;
//           }
          
//           .footer-contact h3 {
//             width: 100%;
//             text-align: center;
//           }
          
//           .footer-contact > div > div {
//             align-items: center;
//           }
          
//           .footer-contact span {
//             text-align: center;
//           }
          
//           .footer-bottom {
//             flex-direction: column;
//             text-align: center;
//             gap: 1rem !important;
//             padding-top: 1rem !important;
//           }
          
//           .footer-bottom p {
//             text-align: center;
//             margin: 0 !important;
//           }
          
//           .footer-bottom-links {
//             justify-content: center;
//             gap: 1rem !important;
//           }
//         }
        
//         /* Small Mobile View */
//         @media (max-width: 480px) {
//           footer {
//             padding: 1.5rem 0.8rem 0.8rem !important;
//           }
          
//           .footer-grid {
//             gap: 2rem !important;
//             margin-bottom: 1rem !important;
//           }
          
//           .footer-brand h2 {
//             font-size: 1.5rem !important;
//           }
          
//           .footer-brand p {
//             font-size: 0.85rem !important;
//           }
          
//           .footer-description {
//             font-size: 0.9rem !important;
//           }
          
//           .social-icons {
//             gap: 0.6rem !important;
//           }
          
//           .social-icons a {
//             width: 36px !important;
//             height: 36px !important;
//           }
          
//           .footer-links-wrapper {
//             flex-direction: column;
//             gap: 2rem !important;
//           }
          
//           .footer-links-column {
//             width: 100%;
//           }
          
//           .footer-links-column h3,
//           .footer-contact h3 {
//             font-size: 1.1rem !important;
//           }
          
//           .footer-bottom {
//             gap: 0.8rem !important;
//           }
          
//           .footer-bottom p {
//             font-size: 0.85rem !important;
//           }
          
//           .footer-bottom-links {
//             flex-direction: row;
//             gap: 0.8rem !important;
//           }
          
//           .footer-bottom-links a {
//             font-size: 0.85rem !important;
//           }
//         }
        
//         /* Extra Small Mobile View */
//         @media (max-width: 360px) {
//           footer {
//             padding: 1.2rem 0.6rem 0.6rem !important;
//           }
          
//           .footer-brand h2 {
//             font-size: 1.3rem !important;
//           }
          
//           .footer-grid {
//             gap: 1.5rem !important;
//           }
          
//           .social-icons a {
//             width: 34px !important;
//             height: 34px !important;
//             font-size: 0.95rem !important;
//           }
          
//           .footer-bottom-links {
//             flex-wrap: wrap;
//             justify-content: center;
//             gap: 0.6rem 1rem !important;
//           }
          
//           .footer-bottom-links a {
//             font-size: 0.8rem !important;
//           }
//         }
//       `}</style>
//     </footer>
//   );
// }










"use client";

import React from "react";
import Image from "next/image";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaWhatsapp, 
  FaLinkedinIn 
} from "react-icons/fa";
import { 
  FiMapPin, 
  FiPhone, 
  FiMail, 
  FiGlobe 
} from "react-icons/fi";

interface SocialLink {
  icon: React.ReactNode;
  label: string;
  color: string;
  url: string;
}

interface FooterLink {
  text: string;
  url: string;
}

interface ContactInfo {
  icon: React.ReactNode;
  text: string;
}

export default function Footer() {
  const socialLinks: SocialLink[] = [
    { icon: <FaFacebookF />, label: "Facebook", color: "#1877F2", url: "#" },
    { icon: <FaTwitter />, label: "Twitter", color: "#1DA1F2", url: "#" },
    { icon: <FaInstagram />, label: "Instagram", color: "#E4405F", url: "#" },
    { icon: <FaWhatsapp />, label: "WhatsApp", color: "#25D366", url: "#" },
    { icon: <FaLinkedinIn />, label: "LinkedIn", color: "#0A66C2", url: "#" },
  ];

  const companyLinks: FooterLink[] = [
    { text: "About Us", url: "/about" },
    { text: "Books", url: "/books" },
    // { text: "", url: "/careers" },
    { text: "Blog", url: "/blogs" },
  ];

  const supportLinks: FooterLink[] = [
    { text: "Help Center", url: "/help-center" },
    // { text: "Contact Us", url: "/contact" },
    { text: "Privacy Policy", url: "/privacy-policy" },
    { text: "Terms of Service", url: "/terms-of-service" },
  ];

  const contactInfo: ContactInfo[] = [
    { icon: <FiMapPin />, text: "B133/1, 2nd Floor, KSSIDC ITI Estate, Whitefield Main Rd, Bengaluru, Karnataka 560048" },
    { icon: <FiPhone />, text: "+91 98765 43210" },
    { icon: <FiMail />, text: "omspiritual2025@gmail.com.com" },
    { icon: <FiGlobe />, text: "www.omspiritual2025.com" },
  ];

  const policyLinks: FooterLink[] = [
    { text: "", url: "#privacy-policy" },
    { text: "", url: "#terms-of-service" },
    { text: "", url: "#cookie-policy" },
  ];

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLAnchorElement>,
    color?: string
  ) => {
    const target = e.currentTarget;
    if (color) {
      target.style.backgroundColor = color;
      target.style.boxShadow = `0 6px 15px ${color}40`;
    }
    target.style.transform = 'translateY(-3px)';
  };

  const handleMouseLeave = (
    e: React.MouseEvent<HTMLAnchorElement>,
    color?: string
  ) => {
    const target = e.currentTarget;
    if (color) {
      target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    }
    target.style.transform = 'translateY(0)';
    target.style.boxShadow = 'none';
  };

  const handleLinkMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    target.style.color = '#99bbcf';
    target.style.transform = 'translateX(5px)';
  };

  const handleLinkMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    target.style.color = '#cbd5e0';
    target.style.transform = 'translateX(0)';
  };

  const handlePolicyMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = '#99bbcf';
  };

  const handlePolicyMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = '#cbd5e0';
  };

  return (
    <footer style={{
      backgroundColor: '#2c3e50',
      color: '#ffffff',
      padding: '3rem 0 1rem',
      fontFamily: "'Segoe UI', 'Roboto', 'Arial', sans-serif",
      width: '100%',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        {/* Main Footer Content */}
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '3rem',
          marginBottom: '2rem'
        }}>
          {/* Left Section - Brand & Social */}
          <div className="footer-brand" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            {/* Logo */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '0.5rem'
            }}>
              <Image
                src="/assets/images/booklogo.webp"
                alt="OM Spiritual Logo"
                width={50}
                height={50}
                style={{
                  borderRadius: '50%',
                  boxShadow: '0 4px 15px rgba(153, 187, 207, 0.3)',
                  objectFit: 'cover'
                }}
              />
              <div>
                <h2 style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  color: '#ffffff',
                  margin: 0,
                  lineHeight: '1.2'
                }}>
                  OM Spiritual 
                </h2>
                <p style={{
                  fontSize: '0.9rem',
                  color: '#99bbcf',
                  margin: '0.2rem 0 0 0',
                  opacity: 0.9
                }}>
                  Books & Wisdom
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="footer-description" style={{
              color: '#cbd5e0',
              lineHeight: '1.6',
              fontSize: '0.95rem',
              margin: 0
            }}>
              We are dedicated to providing the best service and quality products 
              to our customers worldwide. Join us on our journey to excellence.
            </p>

            {/* Social Icons */}
            <div>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                color: '#ffffff',
                marginBottom: '1rem'
              }}>
                Follow Us
              </h3>
              <div className="social-icons" style={{
                display: 'flex',
                gap: '0.8rem',
                flexWrap: 'wrap'
              }}>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      color: '#ffffff',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => handleMouseEnter(e, social.color)}
                    onMouseLeave={(e) => handleMouseLeave(e, social.color)}
                    aria-label={social.label}
                  >
                    <div style={{ fontSize: '1.1rem' }}>
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Center Section - Quick Links */}
          <div className="footer-links-wrapper" style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            gap: '2rem'
          }}>
            {/* Company Links */}
            <div className="footer-links-column" style={{ 
              flex: 1, 
              minWidth: '150px'
            }}>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: '700',
                color: '#ffffff',
                marginBottom: '1.2rem',
                paddingBottom: '0.5rem',
                borderBottom: '2px solid #99bbcf',
                display: 'inline-block'
              }}>
                Company
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: '0',
                margin: '0',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.7rem'
              }}>
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      style={{
                        color: '#cbd5e0',
                        textDecoration: 'none',
                        fontSize: '0.95rem',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '2px 0'
                      }}
                      onMouseEnter={handleLinkMouseEnter}
                      onMouseLeave={handleLinkMouseLeave}
                    >
                      <span style={{
                        width: '4px',
                        height: '4px',
                        backgroundColor: '#99bbcf',
                        borderRadius: '50%',
                        opacity: 0.7,
                        flexShrink: 0
                      }} />
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div className="footer-links-column" style={{ 
              flex: 1, 
              minWidth: '150px'
            }}>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: '700',
                color: '#ffffff',
                marginBottom: '1.2rem',
                paddingBottom: '0.5rem',
                borderBottom: '2px solid #99bbcf',
                display: 'inline-block'
              }}>
                Support
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: '0',
                margin: '0',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.7rem'
              }}>
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      style={{
                        color: '#cbd5e0',
                        textDecoration: 'none',
                        fontSize: '0.95rem',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '2px 0'
                      }}
                      onMouseEnter={handleLinkMouseEnter}
                      onMouseLeave={handleLinkMouseLeave}
                    >
                      <span style={{
                        width: '4px',
                        height: '4px',
                        backgroundColor: '#99bbcf',
                        borderRadius: '50%',
                        opacity: 0.7,
                        flexShrink: 0
                      }} />
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Section - Contact Info */}
          <div className="footer-contact">
            <div style={{
              marginBottom: '1.5rem'
            }}>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: '700',
                color: '#ffffff',
                marginBottom: '1.2rem',
                paddingBottom: '0.5rem',
                borderBottom: '2px solid #99bbcf',
                display: 'inline-block'
              }}>
                Contact Info
              </h3>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                {contactInfo.map((info, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px'
                  }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(153, 187, 207, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      border: '1px solid rgba(153, 187, 207, 0.3)'
                    }}>
                      <div style={{ color: '#99bbcf', fontSize: '0.9rem' }}>
                        {info.icon}
                      </div>
                    </div>
                    <span style={{
                      fontSize: '0.9rem',
                      color: '#cbd5e0',
                      lineHeight: '1.4',
                      flex: 1
                    }}>
                      {info.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          height: '1px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          margin: '2rem 0 1.5rem',
          width: '100%'
        }} />

        {/* Footer Bottom */}
        <div className="footer-bottom" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          width: '100%'
        }}>
          <p style={{
            color: '#cbd5e0',
            fontSize: '0.9rem',
            margin: 0
          }}>
            © {new Date().getFullYear()}{' '}
            <a
              href="#"
              style={{
                color: '#99bbcf',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={handlePolicyMouseEnter}
              onMouseLeave={handlePolicyMouseLeave}
            >
              BookHub
            </a>
            . All rights reserved.
          </p>

          <div className="footer-bottom-links" style={{
            display: 'center',
            gap: '1.5rem',
            fontSize: '0.9rem',
            flexWrap: 'wrap'
          }}>
            {policyLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                style={{
                  color: '#cbd5e0',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={handlePolicyMouseEnter}
                onMouseLeave={handlePolicyMouseLeave}
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Responsive Styles */}
      <style jsx>{`
        /* Tablet View - 2 Columns */
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2.5rem !important;
          }
          
          .footer-contact {
            grid-column: span 2;
          }
          
          .footer-links-wrapper {
            gap: 3rem !important;
          }
        }
        
        /* Mobile View - Single Column */
        @media (max-width: 768px) {
          footer {
            padding: 2rem 1rem 1rem !important;
          }
          
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
            margin-bottom: 1.5rem !important;
          }
          
          .footer-brand,
          .footer-contact {
            text-align: center;
            align-items: center;
          }
          
          .footer-brand > div:first-child {
            justify-content: center;
          }
          
          .footer-description {
            text-align: center;
          }
          
          .social-icons {
            justify-content: center !important;
          }
          
          .footer-links-wrapper {
            justify-content: center !important;
            text-align: center;
            gap: 2rem !important;
          }
          
          .footer-links-column {
            min-width: 120px !important;
          }
          
          .footer-links-column h3 {
            width: 100%;
            text-align: center;
          }
          
          .footer-links-column ul {
            align-items: center;
          }
          
          .footer-links-column a {
            justify-content: center !important;
          }
          
          .footer-contact {
            grid-column: span 1 !important;
          }
          
          .footer-contact h3 {
            width: 100%;
            text-align: center;
          }
          
          .footer-contact > div > div {
            align-items: center;
          }
          
          .footer-contact span {
            text-align: center;
          }
          
          .footer-bottom {
            flex-direction: column;
            text-align: center;
            gap: 1rem !important;
            padding-top: 1rem !important;
          }
          
          .footer-bottom p {
            text-align: center;
            margin: 0 !important;
          }
          
          .footer-bottom-links {
            justify-content: center;
            gap: 1rem !important;
          }
        }
        
        /* Small Mobile View */
        @media (max-width: 480px) {
          footer {
            padding: 1.5rem 0.8rem 0.8rem !important;
          }
          
          .footer-grid {
            gap: 2rem !important;
            margin-bottom: 1rem !important;
          }
          
          .footer-brand h2 {
            font-size: 1.5rem !important;
          }
          
          .footer-brand p {
            font-size: 0.85rem !important;
          }
          
          .footer-description {
            font-size: 0.9rem !important;
          }
          
          .social-icons {
            gap: 0.6rem !important;
          }
          
          .social-icons a {
            width: 36px !important;
            height: 36px !important;
          }
          
          .footer-links-wrapper {
            flex-direction: column;
            gap: 2rem !important;
          }
          
          .footer-links-column {
            width: 100%;
          }
          
          .footer-links-column h3,
          .footer-contact h3 {
            font-size: 1.1rem !important;
          }
          
          .footer-bottom {
            gap: 0.8rem !important;
          }
          
          .footer-bottom p {
            font-size: 0.85rem !important;
          }
          
          .footer-bottom-links {
            flex-direction: row;
            gap: 0.8rem !important;
          }
          
          .footer-bottom-links a {
            font-size: 0.85rem !important;
          }
        }
        
        /* Extra Small Mobile View */
        @media (max-width: 360px) {
          footer {
            padding: 1.2rem 0.6rem 0.6rem !important;
          }
          
          .footer-brand h2 {
            font-size: 1.3rem !important;
          }
          
          .footer-grid {
            gap: 1.5rem !important;
          }
          
          .social-icons a {
            width: 34px !important;
            height: 34px !important;
            font-size: 0.95rem !important;
          }
          
          .footer-bottom-links {
            flex-wrap: wrap;
            justify-content: center;
            gap: 0.6rem 1rem !important;
          }
          
          .footer-bottom-links a {
            font-size: 0.8rem !important;
          }
        }
      `}</style>
    </footer>
  );
}