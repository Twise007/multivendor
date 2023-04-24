import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../styles/styles.js";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState("");

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now to your account</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-bg-white text-bg-black">
          <div className="card-body ">
            <div className="form-control  ">
              <label className="label">
                <span className="label-text text-bg-black">Email</span>
              </label>
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
                className="input input-bordered bg-bg-white text-bg-black"
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text text-bg-black">Password</span>
              </label>
              <input
                type={visible ? "text" : "password"}
                name="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="input input-bordered bg-bg-white text-bg-black"
              />
              {visible ? (
                <AiOutlineEye
                  className="absolute right-2 top-12 cursor-pointer"
                  size={25}
                  onClick={() => setVisible(false)}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className="absolute right-2 top-12 cursor-pointer"
                  size={25}
                  onClick={() => setVisible(true)}
                />
              )}
            </div>
            <div className={`flex justify-between `}>
              <div className={`${styles.normalFlex}`}>
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  className="h-4 w-4 rounded cursor-pointer text-blue-600 focus:ring-blue-500 border-gray-300 "
                />
                <label className="label ml-2">
                  <span className="label-text text-bg-black">Remember me</span>
                </label>
              </div>
              <label className="label ">
                <Link
                  to="/forgot-password"
                  className="label-text-alt link link-hover text-bg-black"
                >
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn bg-bg-btn hover:bg-bg-white hover:text-bg-btn text-bg-white duration-700 hover:border-2 hover:border-bg-btn border-bg-btn"
              >
                Login
              </button>
            </div>
            <div>
              <label className="label ">
                <Link
                  to="/sign-up"
                  className="label-text-alt link link-hover text-bg-black"
                >
                  Don't have an account?{" "}
                  <span className="ml-1 text-bg-btn text-bold">Sign up</span>
                </Link>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
