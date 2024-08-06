import User from "../model/userSchema.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken.js";
import { generateOtp } from "../utils/otpGenerator.js";
import { sendOtpSms } from "../service/smsService.js";
import { Otp } from "../model/otpSchema.js";

// @desc    Login user credentials
// @route   POST /api/auth/login
export const login = async (req, res) => {
  const { email, password } = req.body;
  const existingUser = await User.findOne({ email });
  if (!existingUser) {
    res.status(401).json({ message: "Invalid credentials" });
    return;
  }
  console.log(existingUser)
  bcrypt.compare(password, existingUser.password, function (err, result) {
    
    console.log(result);
    if (!err) {
      const token = generateToken(result);
      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "Strict",
        maxAge: 3600000, // 1 hour
      });

      res.status(200).json({ message: "User created successfully", token });
    }else{
      res.status(400).json({ message: "Incorrect Password", token });
    }
  });
};

// @desc    Sign up user credentials
// @route   POST /api/auth/signup
export const signUp = async (req, res) => {
  const { userName, email, password, dob, phoneNumber, confirmPassword } =
    req.body;
  console.log(req.body);

  if (
    !email ||
    !password ||
    !userName ||
    !confirmPassword ||
    !dob ||
    !phoneNumber
  ) {
    return res.status(403).json({ message: "Fill all credentials" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(403).json({ message: "Email already exists" });
      return;
    }

    // Generate and send OTP
    // const otp = generateOtp();
    // await sendOtpSms("+91 " + phoneNumber, otp);
    const otp = 1234;
    const expiresAt = new Date(Date.now() + 120 * 1000);
    const otpEntry = Otp({
      email,
      otp,
      expiresAt,
    });
    await otpEntry.save();

    return res
      .status(200)
      .json({ message: "OTP sent, please verify", session: req.session });

    // const user = await User.create({
    //   userName,
    //   email,
    //   password,
    //   dob,
    //   phoneNumber,
    //   block: true,
    //   isAdmin: false,
    // });

    // if (user) {
    //   const token = generateToken(user);
    //   res.status(200).json({ message: "User created successfully", token });
    // }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

// @desc    logout user credentials
// @route   GET /route/logout
export const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.redirect("/");
    }
    // Clear the session cookie
    res.clearCookie("connect.sid");
    res.redirect("/login");
  });
};

// @desc    Verify OTP and finalize user creation
// @route   POST /api/auth/verify-otp
export const verifyOtp = async (req, res) => {
  const { otp } = req.body;
  const { formData } = req.body;

  if (!otp) {
    return res.status(400).json({ message: "Please provide the OTP" });
  }

  const otpEntry = await Otp.findOne({ email: formData.email, otp });
  if (otpEntry && otpEntry.expiresAt > Date.now()) {
    // OTP is valid
    const otpEntry = await Otp.deleteOne({ email: formData.email, otp });
    try {
      // const { userName, email, password, dob, phoneNumber } =
      //   req.session.userDetails;

      const newUser = await User.create({
        userName: formData.userName,
        email: formData.email,
        password: formData.password,
        dob: formData.dob,
        phoneNumber: formData.phoneNumber,
        block: false,
        isAdmin: false,
      });

      const token = generateToken(newUser._id);
      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "Strict",
        maxAge: 3600000, // 1 hour
      });

      return res
        .status(201)
        .json({ message: "User created successfully", token });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Server error" });
    }
  } else {
    // OTP is invalid or expired
    return res.status(401).json({ message: "Invalid Expired" });
  }
  if (storedOtp !== otp) {
    return res.status(401).json({ message: "Invalid OTP" });
  }
};
