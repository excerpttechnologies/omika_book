// import { NextRequest, NextResponse } from 'next/server';

// export async function POST(request: NextRequest) {
//   try {
//     const { email } = await request.json();

//     if (!email) {
//       return NextResponse.json(
//         { message: 'Email is required' },
//         { status: 400 }
//       );
//     }

//     // Here you would typically:
//     // 1. Check if user exists in your database
//     // 2. Generate a reset token
//     // 3. Save token to database with expiration
//     // 4. Send email with reset link

//     // For now, let's simulate a success response
//     console.log(`Password reset requested for email: ${email}`);
    
//     // Simulate email sending
//     const resetToken = Math.random().toString(36).substring(2) + Date.now().toString(36);
    
//     // Store in localStorage for demo purposes (in real app, use database)
//     // In production, you'd store this in a database
//     const resetRequests = JSON.parse(localStorage.getItem('resetRequests') || '{}');
//     resetRequests[resetToken] = {
//       email,
//       expires: Date.now() + 3600000, // 1 hour from now
//     };
    
//     // Note: localStorage can't be accessed in API routes directly
//     // This is just for demo. In real app, use database.

//     return NextResponse.json({
//       message: 'Reset link sent to your email',
//       resetToken, // For demo only - don't send token in production
//     });
    
//   } catch (error) {
//     console.error('Forgot password error:', error);
//     return NextResponse.json(
//       { message: 'Internal server error' },
//       { status: 500 }
//     );
//   }
// }










import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { message: 'Email is required' },
        { status: 400 }
      );
    }

    // For demo purposes - log to console
    console.log(`🔐 Password reset requested for: ${email}`);
    
    // Generate a demo token (in real app, use crypto.randomBytes or similar)
    const resetToken = `demo_${Math.random().toString(36).substring(2)}_${Date.now()}`;
    
    // In a real application, you would:
    // 1. Check if email exists in your database
    // 2. Generate a secure token
    // 3. Store token in database with expiration
    // 4. Send email using Nodemailer, SendGrid, etc.

    return NextResponse.json({
      success: true,
      message: 'If this email exists in our system, you will receive a reset link shortly.',
      demoToken: resetToken, // Remove this in production
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Forgot password error:', error);
    return NextResponse.json(
      { 
        message: 'Something went wrong. Please try again later.',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}