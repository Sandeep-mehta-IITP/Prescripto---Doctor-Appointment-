import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isConfPassFocused, setIsConfPassFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfPassword, setShowConfPassword] = useState(false);
  const [name, setName] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <form className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </p>
        <p>
          Please {state === "Sign Up" ? "sign up" : "log in"} to book
          appointment
        </p>
        {/*------Full Name-------*/}
        {state === "Sign Up" && (
          <div className="w-full">
            <p>Full Name:</p>
            <input
              type="text"
              placeholder="Enter Your Full-Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border border-zinc-300 rounded w-full p-2 mt-1 text-gray-800 font-medium"
            />
          </div>
        )}

        {/*------Email-------*/}
        <div className="w-full">
          <p>Email:</p>
          <input
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-zinc-300 rounded w-full p-2 mt-1 text-gray-800 font-medium"
          />
        </div>

        {/*------Password-------*/}
        <div className="w-full relative">
          <p>Password:</p>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(false)}
            required
            className="border border-zinc-300 rounded w-full p-2 mt-1 text-gray-800 font-medium"
          />

          {isPasswordFocused && (
            <button
              type="button"
              onMouseDown={(e) => {
                e.preventDefault(); // prevent focus loss
                setShowPassword((prev) => !prev);
              }}
              className="absolute right-3 top-[36px] text-gray-500 cursor-pointer"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          )}
        </div>

        {/*--------Confirm password--------*/}
        {state === "Sign Up" && (
          <div className="w-full relative">
            <p>Confirm Password:</p>
            <input
              type={showConfPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onFocus={() => setIsConfPassFocused(true)}
              onBlur={() => setIsConfPassFocused(false)}
              required
              className="border border-zinc-300 rounded w-full p-2 mt-1 text-gray-800 font-medium"
            />
            {isConfPassFocused && (
              <button
                type="button"
                onMouseDown={(e) => {
                  e.preventDefault(); // prevent focus loss
                  setShowConfPassword((prev) => !prev);
                }}
                className="absolute right-3 top-[36px] text-gray-500 cursor-pointer"
              >
                {showConfPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            )}
          </div>
        )}

        <button className="bg-primary w-full py-2 rounded-md text-white text-base cursor-pointer">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>

        {state === "Sign Up" ? (
          <p>
            Already have an account?{" "}
            <span
              className="text-primary underline cursor-pointer"
              onClick={() => setState("Login")}
            >
              Login here
            </span>
          </p>
        ) : (
          <p>
            Create an new account?{" "}
            <span
              className="text-primary underline cursor-pointer"
              onClick={() => setState("Sign Up")}
            >
              click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
