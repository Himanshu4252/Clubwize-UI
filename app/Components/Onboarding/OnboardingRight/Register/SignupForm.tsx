"use client";
import { FormEvent, useState } from "react";
// import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from "next/navigation";
import Check from "../../../../../public/LFR/img/check.png";
import Exclamation from "../../../../../public/LFR/img/exclamation.png";
import eye from "../../../../../public/LFR/img/eye.png";
import view from "../../../../../public/LFR/img/view.png";
import Image from "next/image";

const schema = z.object({
  email: z.string().email('Invalid email format').nonempty('Email is required'),
  password: z.string().min(6, 'Password must be at least 6 characters').nonempty('Password is required'),
  confirmPassword: z.string().nonempty('Confirm Password is required')
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords must match',
  path: ['confirmPassword'],
});

type FormData = z.infer<typeof schema>;

const SignupForm = () => {
  // Link : https://codepen.io/Marshjek/pen/KQZVBQ

  const { register, handleSubmit: handleFormSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });


  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean | null>(null);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean | null>(null);
  const [loginAttempted, setLoginAttempted] = useState<boolean>(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false); 
  const router = useRouter();

  // const handleSubmit = async (e: FormEvent) => {
  //   e.preventDefault();
  //   setLoginAttempted(true);

  //   alert("Signup form submitted");
  //   return

  //   if (password !== confirmPassword) {
  //     alert("Passwords do not match!");
  //     return;
  //   }

  //   const response = await fetch("/api/auth/signup", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ email, password }),
  //   });

  //   if (response.ok) {
  //     router.push("/login"); // Redirect to login after successful signup
  //   } else {
  //     alert("Error signing up");
  //   }
  // };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit(data => console.log(data))}>

        {/* Email Field */}
      <div className="mb-4 relative"> 
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email Address
        </label>
        <input
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-4 focus:border-transparent ${
            isEmailValid === null
              ? ""
              : isEmailValid
              ? "ring-green-300 border-green-500"
              : "ring-red-300 border-red-500"
          }`}
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
        />
        {isEmailValid !== null && (
          <span className="absolute right-3 top-10">
            {isEmailValid ? (
              <Image
                src={Check}
                alt="check"
                width={45}
                height={45}
                className="text-green-500"
              />
            ) : (
              <Image
                src={Exclamation}
                alt="Exclamation"
                width={25}
                height={25}
                className="text-red-500"
              />
            )}
          </span>
        )}
          {errors.email && <p className="text-red-500 text-xs mt-1"> {errors.email.message}</p>}

        {loginAttempted && !isEmailValid && (
          <p className="text-red-500 text-xs mt-1">
            Please enter a valid email address
          </p>
        )}
      </div>

        {/* Password Field */}
      <div className="mb-6 relative">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-4 focus:border-transparent ${
            isPasswordValid === null
              ? ""
              : isPasswordValid
              ? "ring-green-300 border-green-500"
              : "ring-red-300 border-red-500"
          }`}
          type={isPasswordVisible ? "text" : "password"}
          {...register('password')}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />
        <span
          className="absolute right-3 top-9 cursor-pointer"
          onClick={togglePasswordVisibility}
        >
          
          {isPasswordVisible ? (
            <Image src={view} alt="eye" width={20} />
          ) : (
            <Image src={eye} alt="eye" width={20} />
          )}
        </span>
        {errors.password && <p className="text-red-500 text-xs mt-1"> {errors.password.message}</p>}
        {loginAttempted && !isPasswordValid && (
          <p className="text-red-500 text-xs mt-1">
            Please enter the correct password
          </p>
        )}
       
      </div>
      
        {/* Confirm Password */}
      <div className="mb-6 relative">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="confirmPassword"
        >
          Password
        </label>
        <input
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-4 focus:border-transparent ${
            isPasswordValid === null
              ? ""
              : isPasswordValid
              ? "ring-green-300 border-green-500"
              : "ring-red-300 border-red-500"
          }`}
          type={isPasswordVisible ? "text" : "password"}
          {...register('confirmPassword')}
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Enter Confirm Password"
        />
        <span
          className="absolute right-3 top-9 cursor-pointer"
          onClick={togglePasswordVisibility}
        >
          
          {isPasswordVisible ? (
            <Image src={view} alt="eye" width={20} />
          ) : (
            <Image src={eye} alt="eye" width={20} />
          )}
        </span>
        {errors.confirmPassword && <p className="text-red-500 text-xs mt-1"> {errors.confirmPassword.message}</p>}
       
       
      </div>

      <button className="w-full bg-button hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg">
        Continue with Clubwize
      </button>

      <p className="text-center text-gray-600 mt-6">
        Already have an Account?
        {" "}
        <a href="/" className="text-button hover:underline">
         Login
        </a>
      </p>
      {/* <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                    Email Address
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter email'
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Enter password'
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="confirmPassword">
                    Confirm Password
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder='Enter Confirm password'
                    required
                />
            </div>
            <div className="flex flex-col items-center justify-between">
                <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Continue with Clubwize
                </button>

                <p className="text-sm">
                    Already have an account? <a href="/login" className="text-blue-500 hover:text-blue-700">Login here</a>
                </p>
            </div>
        </form> */}
    </form>
    </div>
  );
};

export default SignupForm;