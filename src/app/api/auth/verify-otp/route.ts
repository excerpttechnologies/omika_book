import { NextResponse } from "next/server";
import User from "@/src/app/api/models/User";
import  {connectDB}  from "@/src/app/lib/connectDB";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  await connectDB();

  try {
    const { email, otp } = await req.json();

    const user = await User.findOne({ 
      email,
      resetPasswordExpires: { $gt: new Date() }
    });

    if (!user) {
      return NextResponse.json(
        { message: "Invalid or expired OTP" },
        { status: 400 }
      );
    }

    if (user.resetPasswordOtp !== otp) {
      return NextResponse.json(
        { message: "Invalid OTP" },
        { status: 400 }
      );
    }

    // Create a JWT token for password reset
    const resetToken = jwt.sign(
      { 
        userId: user._id,
        email: user.email,
        purpose: "password_reset" 
      },
      process.env.JWT_SECRET!,
      { expiresIn: "10m" }
    );

    return NextResponse.json({
      message: "OTP verified successfully",
      resetToken,
    });
  } catch (error) {
    console.error("Verify OTP error:", error);
    return NextResponse.json(
      { message: "Error verifying OTP" },
      { status: 500 }
    );
  }
}