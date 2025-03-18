import React, { useState } from "react";
import FormInput from "../components/FormInput";
import {
  faUser,
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-50">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-emerald-500 mb-6">
          Create your account
        </h2>
        <form className="space-y-4">
          <FormInput
            type="text"
            name="username"
            placeholder="Username"
            iconFa={faUser}
            value={formData.username}
            onChange={handleChange}
          />
          <FormInput
            type="email"
            name="email"
            placeholder="Email"
            iconFa={faEnvelope}
            value={formData.email}
            onChange={handleChange}
          />
          <FormInput
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            toggleIcon={showPassword ? faEye : faEyeSlash}
            onToggle={() => setShowPassword(!showPassword)}
            value={formData.password}
            onChange={handleChange}
          />
          <FormInput
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            toggleIcon={showConfirmPassword ? faEye : faEyeSlash}
            onToggle={() => setShowConfirmPassword(!showConfirmPassword)}
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <button className="w-full bg-emerald-500 text-white font-semibold py-2 rounded-xl hover:bg-emerald-600 transition">
            Sign Up
          </button>
          <p className="text-center text-gray-600">
            Already have an account?{" "}
            <span className="text-emerald-500 cursor-pointer hover:underline">
              Sign in
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
