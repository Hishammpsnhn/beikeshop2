// services/smsService.js
import twilio from 'twilio';

const client = twilio(process.env.TWILIO_SID,process.env.TWILIO_AUTH_TOKEN );

export const sendOtpSms = async (to, otp) => {
  try {
    await client.messages.create({
      body: `Your OTP code is ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to,
    });
  } catch (error) {
    console.error('Error sending OTP SMS:', error);
  }
};