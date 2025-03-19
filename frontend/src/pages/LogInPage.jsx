import React, { useState } from "react";
import FormInput from "../components/FormInput";
import {
  faUser,
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const LogInPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-50">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-teal-700 mb-6">
          Log in to your account
        </h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="font-bold">
              Email Address
            </label>
            <FormInput
              type="email"
              name="email"
              placeholder="Email"
              iconFa={faEnvelope}
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password" className="font-bold">
              Password
            </label>
            <FormInput
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              toggleIcon={showPassword ? faEye : faEyeSlash}
              onToggle={() => setShowPassword(!showPassword)}
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <Link to="/">
            <Button className="w-full" text="Log In" />
          </Link>
          <p className="text-center text-gray-600">
            Create new account?{" "}
            <Link to="/signup">
              <span className="text-emerald-500 cursor-pointer hover:underline">
                Register
              </span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LogInPage;
