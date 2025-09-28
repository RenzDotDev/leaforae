import React from "react";

import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

function SignUpPage() {
  return (
    <div className="w-full h-full grid grid-cols-1 grid-rows-[repeat(2,100dvh)] md:grid-cols-2 md:grid-rows-[repeat(1,100dvh)] gap-3">
      <section className="p-3">
        <ImageSection />
      </section>
      <section className="p-3">
        <SignupCard />
      </section>
    </div>
  );
}

export default SignUpPage;

function ImageSection() {
  return (
    <motion.div
      initial={{ height: "0" }}
      animate={{ height: "100%" }}
      exit={{ height: "0" }}
      className="h-full w-full bg-amber-50 bg-[url('/signupImage.jpg')] bg-cover bg-center rounded-2xl flex flex-col justify-between p-4"
    >
      <div className="flex items-center">
        <img src="/Leaforae Logo.png" alt="" className="size-20" />
        <p className="text-white font-semibold text-2xl">Leaforaé</p>
      </div>
      <div className="bg-white w-full h-fit p-3 rounded-xl flex flex-col gap-1">
        <p className="text-2xl font-semibold">
          Bring Home the <span className="text-darkGreen">Green</span>
        </p>
        <p className="text-sm">
          Join our community of plant lovers and make your home greener,
          fresher, and healthier.
        </p>
      </div>
    </motion.div>
  );
}

function SignupCard({ toggleLoginCard }) {
  const [isHidden, setIsHidden] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isDisabled = password.trim() === "" || email.trim() === "";

  const toggleShowPass = () => {
    setIsHidden((prev) => !prev);
  };

  return (
    <motion.section
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.1 }}
      className="flex items-center justify-center backdrop-blur-sm w-full h-full top-0 left-0 z-20"
    >
      <motion.form
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.1 }}
        action=""
        onSubmit={(e) => e.preventDefault()}
        className="p-4 rounded-2xl w-full h-full text-center justify-center items-center flex flex-col gap-4 max-w-[350px]"
      >
        {/* Close Login Card Button */}
        <div className="w-full flex justify-end">
          <Link to={"/"}>
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0.2 }}
              whileTap={{ scale: 0.9 }}
              className="aspect-square h-[35px] bg-darkGreen flex items-center justify-center rounded-full cursor-pointer"
            >
              <i className="fa-solid fa-home text-white"></i>
            </motion.button>
          </Link>
        </div>

        {/* Login Text Container */}
        <div>
          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ delay: 0.22 }}
            className="text-[clamp(1.5rem,2vw,1.5rem)] font-semibold"
          >
            Log In to <span className="text-darkGreen">Leaforaé</span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ delay: 0.24 }}
            className="text-sm"
          >
            Sign in and keep blooming with our latest plant finds.
          </motion.p>
        </div>

        {/* Input Container */}
        <div className="flex flex-col gap-2 w-full">
          {/* Enail */}
          <div className="flex flex-col items-start gap-1">
            <motion.label
              className="w-full text-start text-sm font-[500]"
              htmlFor="emailInput"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0.26 }}
            >
              Email
            </motion.label>
            <motion.input
              className="w-full p-2 bg-white rounded-lg outline-0 text-sm border border-darkGreen"
              type="email"
              name=""
              id="emailInput"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0.28 }}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="flex flex-col items-start gap-1 ">
            <motion.label
              htmlFor="passwordInput"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full text-start text-sm font-[500]"
            >
              Password
            </motion.label>
            <motion.div
              className="flex items-center gap-1 bg-white w-full p-2 rounded-lg  border border-darkGreen"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0.32 }}
            >
              <input
                className="outline-0 text-sm h-full w-full"
                type={isHidden ? "password" : "text"}
                name=""
                id="passwordInput"
                onChange={(e) => setPassword(e.target.value)}
              />
              <motion.i
                whileTap={{ scale: 0.9 }}
                onClick={toggleShowPass}
                className={`fa-solid ${
                  isHidden ? "fa-eye-slash" : "fa-eye"
                } text-gray-400 cursor-pointer`}
              ></motion.i>
            </motion.div>
          </div>
        </div>

        {/* Login Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ delay: 0.34 }}
          whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
          disabled={isDisabled}
          className="bg-green p-2 text-white rounded-lg w-full font-semibold cursor-pointer disabled:bg-[#7a935290] disabled:cursor-not-allowed disabled:text-[#f2f2f290]"
        >
          Login
        </motion.button>

        {/* Other Login Option */}
        <motion.p
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ delay: 0.36 }}
          className="text-white text-xs font-semibold"
        >
          Or
        </motion.p>
        <div className="flex flex-col gap-2 w-full">
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ delay: 0.38 }}
            whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
            disabled={isDisabled}
            className="flex gap-1 justify-center items-center bg-green p-2 rounded-lg cursor-pointer disabled:bg-[#7a935290] disabled:cursor-not-allowed disabled:text-[#f2f2f290]"
          >
            <i className="fa-brands fa-google text-white"></i>
            <p className="text-white font-semibold">Login with Google</p>
          </motion.button>
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ delay: 0.4 }}
            whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
            disabled={isDisabled}
            className="flex gap-1 justify-center items-center bg-green p-2 rounded-lg w-full cursor-pointer disabled:bg-[#7a935290] disabled:cursor-not-allowed disabled:text-[#f2f2f290]"
          >
            <i className="fa-brands fa-facebook text-white"></i>
            <p className="text-white font-semibold">Login with Facebook</p>
          </motion.button>
        </div>

        {/* Sign Up Page Link */}
        <motion.p
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ delay: 0.42 }}
          className="text-sm"
        >
          Already have an account?{" "}
          <span>
            <Link to={"/"} className="text-blue-500 underline">
              Login here!
            </Link>
          </span>
        </motion.p>
      </motion.form>
    </motion.section>
  );
}
