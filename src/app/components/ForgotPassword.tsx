// "use client";

// import React, { useState } from "react";



// interface ForgotPasswordProps {
//   onBackToLogin: () => void;
//   onClose?: () => void;
// }

// export default function ForgotPassword({ onBackToLogin, onClose }: ForgotPasswordProps) {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [step, setStep] = useState(1); // 1: Email input, 2: OTP input, 3: New password
//   const [otp, setOtp] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [resetToken, setResetToken] = useState("");

//   const handleSubmitEmail = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");
//     setMessage("");
//     setIsLoading(true);

//     if (!email || !email.includes('@')) {
//       setError("Please enter your email address");
//       setIsLoading(false);
//       return;
//     }
//     setTimeout(() => {
//     setMessage(`Password reset link has been sent to ${email}. 
//     Check your email inbox. (This is a demo - no email will be sent)`);
//     setIsLoading(false);
//   }, 1500);

//     try {
//       const res = await fetch("/api/auth/forgot-password", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         setError(data.message || "Something went wrong");
//         setIsLoading(false);
//         return;
//       }

//       setMessage(data.message || "OTP sent to your email");
//       setStep(2); // Move to OTP verification step
//     } catch (err) {
//       setError("Failed to send reset email. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleVerifyOtp = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");
//     setMessage("");
//     setIsLoading(true);

//     try {
//       const res = await fetch("/api/auth/verify-otp", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, otp }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         setError(data.message || "Invalid OTP");
//         setIsLoading(false);
//         return;
//       }

//       setResetToken(data.resetToken);
//       setMessage("OTP verified! Please set your new password");
//       setStep(3); // Move to password reset step
//     } catch (err) {
//       setError("Failed to verify OTP. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleResetPassword = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");
//     setMessage("");

//     if (newPassword !== confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     if (newPassword.length < 6) {
//       setError("Password must be at least 6 characters");
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const res = await fetch("/api/auth/reset-password", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ 
//           email, 
//           newPassword, 
//           resetToken 
//         }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         setError(data.message || "Failed to reset password");
//         setIsLoading(false);
//         return;
//       }

//       setMessage("Password reset successful! You can now login with your new password");
//       setTimeout(() => {
//         onBackToLogin();
//       }, 2000);
//     } catch (err) {
//       setError("Failed to reset password. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="login-overlay">
//       <div className="login-box">
//         <button className="close-btn" onClick={() => onClose?.() || onBackToLogin()}>×</button>

//         <h2>Forgot Password</h2>
//         <p className="login-subtitle">
//           {step === 1 && "Enter your email to reset password"}
//           {step === 2 && "Enter OTP sent to your email"}
//           {step === 3 && "Set your new password"}
//         </p>

//         {message && <div className="success-message">{message}</div>}
//         {error && <div className="error-message">{error}</div>}

//         {step === 1 && (
//           <form onSubmit={handleSubmitEmail}>
//             <div className="form-group">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter your registered email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="form-input"
//               />
//             </div>

//             <button
//               type="submit"
//               className={`submit-btn ${isLoading ? "loading" : ""}`}
//               disabled={isLoading}
//             >
//               {isLoading ? (
//                 <>
//                   <div className="spinner"></div>
//                   Sending OTP...
//                 </>
//               ) : (
//                 "Send Reset Link"
//               )}
//             </button>
//           </form>
//         )}

//         {step === 2 && (
//           <form onSubmit={handleVerifyOtp}>
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="otp"
//                 placeholder="Enter 6-digit OTP"
//                 required
//                 maxLength={6}
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
//                 className="form-input"
//               />
//               <small className="otp-hint">
//                 Check your email for the OTP (check spam folder too)
//               </small>
//             </div>

//             <div className="form-group">
//               <button
//                 type="button"
//                 className="secondary-btn"
//                 onClick={() => {
//                   setStep(1);
//                   setMessage("");
//                   setError("");
//                 }}
//               >
//                 Back to Email
//               </button>
              
//               <button
//                 type="submit"
//                 className={`submit-btn ${isLoading ? "loading" : ""}`}
//                 disabled={isLoading || otp.length !== 6}
//               >
//                 {isLoading ? (
//                   <>
//                     <div className="spinner"></div>
//                     Verifying...
//                   </>
//                 ) : (
//                   "Verify OTP"
//                 )}
//               </button>
//             </div>
//           </form>
//         )}

//         {step === 3 && (
//           <form onSubmit={handleResetPassword}>
//             <div className="form-group">
//               <input
//                 type="password"
//                 name="newPassword"
//                 placeholder="New Password"
//                 required
//                 value={newPassword}
//                 onChange={(e) => setNewPassword(e.target.value)}
//                 className="form-input"
//               />
//             </div>

//             <div className="form-group">
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 placeholder="Confirm New Password"
//                 required
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 className="form-input"
//               />
//             </div>

//             <div className="form-group">
//               <button
//                 type="button"
//                 className="secondary-btn"
//                 onClick={() => setStep(2)}
//               >
//                 Back to OTP
//               </button>
              
//               <button
//                 type="submit"
//                 className={`submit-btn ${isLoading ? "loading" : ""}`}
//                 disabled={isLoading}
//               >
//                 {isLoading ? (
//                   <>
//                     <div className="spinner"></div>
//                     Resetting...
//                   </>
//                 ) : (
//                   "Reset Password"
//                 )}
//               </button>
//             </div>
//           </form>
//         )}

//         <p className="toggle-text">
//           Remember your password?{" "}
//           <span onClick={onBackToLogin} className="toggle-link">
//             Back to Login
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }











"use client";

import React, { useState } from 'react';


interface ForgotPasswordProps {
  onBackToLogin: () => void;
  onClose?: () => void;
}

export default function ForgotPassword({ onBackToLogin, onClose }: ForgotPasswordProps) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setIsLoading(true);

    // Basic email validation
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      setIsLoading(false);
      return;
    }

    try {
      // Option 1: Call your API
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        // If the API returns an error message, use it
        setError(data.message || 'Failed to send reset link');
        return;
      }

      // Success response
      setMessage(data.message || 'Reset link sent successfully! Check your email.');
      
      // Store in localStorage for demo (client-side only)
      const resetToken = data.demoToken || `demo_${Date.now()}`;
      const resetRequests = JSON.parse(localStorage.getItem('resetRequests') || '{}');
      resetRequests[resetToken] = {
        email,
        expires: Date.now() + 3600000, // 1 hour
        createdAt: new Date().toISOString()
      };
      localStorage.setItem('resetRequests', JSON.stringify(resetRequests));
      
      // For demo: log the token to console
      console.log('Demo Reset Token (for testing):', resetToken);

    } catch (err) {
      console.error('Network error:', err);
      // If API call fails, show a demo message
      setMessage(`📧 Demo: A password reset link would be sent to ${email} if this were a real system.`);
      
      // For demo purposes, simulate a token
      const demoToken = `demo_fallback_${Date.now()}`;
      console.log('Demo token (fallback):', demoToken);
      
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-overlay">
      <div className="login-box">
        <button className="close-btn" onClick={() => onClose?.()}>×</button>
        
        <h2>Reset Password</h2>
        <p className="login-subtitle">
          Enter your email address and we'll send you a link to reset your password.
        </p>
        
        {error && (
          <div className="error-message" style={{ 
            backgroundColor: '#f8d7da', 
            color: '#721c24',
            padding: '12px',
            borderRadius: '6px',
            marginBottom: '20px',
            border: '1px solid #f5c6cb'
          }}>
            {error}
          </div>
        )}
        
        {message && (
          <div className="success-message" style={{ 
            backgroundColor: '#d4edda', 
            color: '#155724',
            padding: '12px',
            borderRadius: '6px',
            marginBottom: '20px',
            border: '1px solid #c3e6cb'
          }}>
            {message}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              style={{ width: '100%', padding: '12px', marginBottom: '15px' }}
            />
          </div>
          
          <button 
            type="submit" 
            className={`submit-btn ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#3498db',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            {isLoading ? (
              <>
                <div className="spinner" style={{
                  display: 'inline-block',
                  width: '16px',
                  height: '16px',
                  marginRight: '8px',
                  border: '2px solid #f3f3f3',
                  borderTop: '2px solid #3498db',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite'
                }}></div>
                Sending Reset Link...
              </>
            ) : (
              'Send Reset Link'
            )}
          </button>
        </form>
        
        <p className="toggle-text" style={{ 
          textAlign: 'center', 
          marginTop: '20px',
          fontSize: '14px',
          color: '#666'
        }}>
          Remember your password?
          <span 
            onClick={onBackToLogin} 
            className="toggle-link" 
            style={{ 
              cursor: 'pointer',
              color: '#3498db',
              fontWeight: 'bold',
              marginLeft: '5px'
            }}
          >
            Back to Login
          </span>
        </p>
      </div>
    </div>
  );
}