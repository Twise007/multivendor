import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import styles from "../styles/styles.js";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState("");
  const [avatar, setAvatar] = useState("");


  const handleInputChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign up with us</h1>
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
                <span className="label-text text-bg-black">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Smith"
                className="input input-bordered bg-bg-white text-bg-black"
              />
            </div>
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
                placeholder="email@example.com"
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
            <div className={`grid justify-center `}>
              <div className={`${styles.normalFlex} justify-center mt-2 `}>
                <div className="inline-block rounded-full overflow-hidden">
                  {avatar ? (
                    <img
                      src={URL.createObjectURL(avatar)}
                      alt="avatar"
                      className="h-20 w-20 object-cover rounded-full"
                    />
                  ) : (
                    <RxAvatar className="h-8 w-8" />
                  )}
                </div>
              </div>
              <label
                htmlFor="file-input"
                className="label bg-bg-primary rounded-md p-3 cursor-pointer mt-2 hover:shadow-xl"
              >
                <span className="label-text text-bg-black">
                  Upload your image
                </span>
                <input
                  type="file"
                  name="avater"
                  id="file-input"
                  accept=".jpeg,.jpg,.png"
                  onChange={handleInputChange}
                  className="sr-only"
                />
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn bg-bg-btn hover:bg-bg-white hover:text-bg-btn text-bg-white duration-700 hover:border-2 hover:border-bg-btn border-bg-btn"
              >
                sign up
              </button>
            </div>
            <div>
              <label className="label ">
                <Link
                  to="/login"
                  className="label-text-alt link link-hover text-bg-black"
                >
                  Already have an account? <span className="ml-1 text-bg-btn text-bold">Sign up</span>
                </Link>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
