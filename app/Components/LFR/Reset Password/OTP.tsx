"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../../public/assets/Component 4.png";

function OTP() {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [isOtpValid, setIsOtpValid] = useState<boolean | null>(null);
  const [loginAttempted, setLoginAttempted] = useState<boolean>(false);
  const correctOtp = "777777";

  const handleOtpChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value.length === 1 && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleLoginClick = () => {
    setLoginAttempted(true);
    const enteredOtp = otp.join("");
    const isOtpCorrect = enteredOtp === correctOtp;

    setIsOtpValid(isOtpCorrect);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-white">
      <div className="bg- p-10 rounded-lg">
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
            <Image src={logo} alt="Logo" width={40} height={40} />
          </div>
        </div>

        <h2 className="text-center text-3xl font-bold mb-2">
          Enter OTP <span>🔑</span>
        </h2>
        <p className="text-center font-normal text-xs text-gray-400 mb-8">
          Enter the 6-digit code sent to your email.
        </p>

        <div className="flex justify-center gap-2 mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              className={`w-12 px-2 py-2 border rounded-lg text-center focus:outline-none focus:ring-4 focus:border-transparent ${
                isOtpValid === null
                  ? ""
                  : isOtpValid
                  ? "ring-green-300 border-green-500"
                  : "ring-red-300 border-red-500"
              }`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              placeholder="0"
            />
          ))}
        </div>

        {loginAttempted && !isOtpValid && (
          <p className="text-red-500 text-xs mt-1 text-center">
            Please enter the correct OTP
          </p>
        )}
        {isOtpValid ? (
          <a href="/Reset/Password">
            <button
              onClick={handleLoginClick}
              className="w-full bg-button hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mt-6"
            >
              Verify OTP
            </button>
          </a>
        ) : (
          <button
            onClick={handleLoginClick}
            className="w-full bg-button hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mt-6"
          >
            Verify OTP
          </button>
        )}

        <p className="text-center text-gray-600 mt-6">
          Remember your Password ?{" "}
          <a href="/" className="text-button hover:underline">
            Back
          </a>
        </p>
      </div>
    </div>
  );
}

export default OTP;
