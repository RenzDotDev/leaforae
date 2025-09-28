import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

function HeroSection() {
  const [activeStatus, setActiveStatus] = useState({
    loginCard: false,
    navigationCard: false,
  });

  const toggleActiveComponent = (key) => {
    setActiveStatus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const toggleLoginCard = () => {
    // Closes the navigation bar first
    toggleActiveComponent("navigationCard");

    setTimeout(() => {
      toggleActiveComponent("loginCard");
    }, 300);
  };

  return (
    <div className="relative w-full h-full p-3 grid grid-cols-1 grid-rows-[auto_1fr]">
      {/* Header */}
      <Header
        toggleNavigationBar={() => toggleActiveComponent("navigationCard")}
        toggleLoginCard={() => toggleActiveComponent("loginCard")}
      />
      {/* Main Content */}
      <MainContent />

      {/* Login Card Toggle */}
      <AnimatePresence>
        {activeStatus.loginCard && (
          <LoginCard
            toggleLoginCard={() => toggleActiveComponent("loginCard")}
          />
        )}
      </AnimatePresence>

      {/* Navigation Bar Toggle */}
      <AnimatePresence>
        {activeStatus.navigationCard && (
          <NavigationBarCard
            toggleNavigationBar={() => toggleActiveComponent("navigationCard")}
            toggleLoginCard={() => toggleLoginCard()}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default HeroSection;

// Header
function Header({ toggleNavigationBar, toggleLoginCard }) {
  const links = [
    {
      name: "Home",
      link: "",
    },
    {
      name: "Products",
      link: "/Product",
    },
    {
      name: "Blogs",
      link: "/Blog",
    },
    {
      name: "Contact Us",
      link: "Contact",
    },
  ];

  return (
    <header className="flex items-center justify-between w-full gap-3 py-4">
      {/* Logo */}
      <section className="flex items-center w-fit">
        <img
          src="/Leaforae Logo.png"
          alt=""
          className="h-[clamp(40px,10vw,50px)]"
        />
        <p className="text-[clamp(1.5rem,calc(2vw+0.75rem),2rem)] text-darkGreen font-bold">
          Leaforaé
        </p>
      </section>

      {/* Navigation Bar (Larger Screen) */}
      <nav className="hidden lg:flex grow-1 gap-4 justify-end items-center">
        {links.map((link, index) => {
          return (
            <Link
              key={index}
              to={link.link}
              className={`text-sm w-fit
                ${
                  link.name === "Home"
                    ? "text-darkGreen font-semibold px-1 border-b-2 border-b-darkGreen"
                    : ""
                }`}
            >
              {link.name}
            </Link>
          );
        })}

        <button
          onClick={toggleLoginCard}
          className="bg-darkGreen text-white text-sm px-3 py-2 rounded-lg cursor-pointer"
        >
          Login Now
        </button>
      </nav>

      {/* Hamburger Button */}
      <button
        onClick={toggleNavigationBar}
        className="cursor-pointer bg-darkGreen aspect-square h-[30px] sm:h-[35px] flex justify-center items-center rounded-full lg:hidden"
      >
        <i className="fa-solid fa-bars text-white text-sm sm:text-lg"></i>
      </button>
    </header>
  );
}

// Main Content
function MainContent() {
  return (
    <section className="w-full h-full relative overflow-hidden rounded-2xl p-2 sm:px-5 pt-[20vh] text-center">
      {/* Background Image */}
      <div className="absolute z-[1] h-full w-full top-0 left-0">
        <img
          src="/HeroSectionImage.png"
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="absolute top-0 left-0 bg-linear-to-t from-darkGreen to-[#00000025] w-full h-full z-[2]"></div>

      {/* Text */}
      <div className="relative z-10 flex flex-col items-center gap-2">
        {/* Header */}
        <p
          className="text-[clamp(2rem,calc(3vw+1rem),3rem)] text-white font-semibold"
          style={{
            lineHeight: "40px",
          }}
        >
          Find your best <br className="sm:hidden" /> Green Companion
        </p>

        {/* Sub-Header */}
        <p className="text-sm text-white lg:text-lg">
          Browse plants that suits you!
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-[500px] bg-white p-3 gap-2 flex items-center rounded-full">
          <input type="text" className="outline-0 grow-1 text-sm" />
          <i className="fa-solid fa-search text-gray-500"></i>
        </div>
      </div>
    </section>
  );
}

// Navigation Bar Card
function NavigationBarCard({ toggleNavigationBar, toggleLoginCard }) {
  const links = [
    {
      name: "Home",
      link: "",
    },
    {
      name: "Products",
      link: "/Product",
    },
    {
      name: "Blogs",
      link: "/Blog",
    },
    {
      name: "Contact Us",
      link: "Contact",
    },
  ];

  return (
    <motion.section
      className="fixed top-0 left-0 bg-darkGreen w-full h-full z-20 p-4 flex flex-col"
      initial={{ height: "0", opacity: 0 }}
      animate={{ height: "100dvh", opacity: 1 }}
      exit={{ height: "0", opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Close Navigation Bar Button */}
      <div className="w-full flex justify-end">
        <motion.button
          className="w-[35px] aspect-square bg-white rounded-full flex items-center justify-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          onClick={toggleNavigationBar}
        >
          <i className="fa-solid fa-xmark"></i>
        </motion.button>
      </div>

      {/* Navigation Links */}
      <nav className=" flex flex-col grow-1 gap-4 justify-center items-center">
        {links.map((link, index) => {
          return (
            <Link
              key={index}
              to={link.link}
              className={`
                text-2xl w-fit text-white overflow-hidden 
                ${link.name === "Home" ? "font-bold px-1" : ""}`}
            >
              <motion.p
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -200, opacity: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {link.name}
              </motion.p>
            </Link>
          );
        })}
      </nav>

      {/* Login Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleLoginCard}
        className="bg-white w-full text-text-color font-semibold text-sm px-3 py-2 rounded-lg cursor-pointer"
      >
        Login Now
      </motion.button>
    </motion.section>
  );
}

// Login Card
function LoginCard({ toggleLoginCard }) {
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
      className="fixed flex items-center justify-center backdrop-blur-sm w-full h-full top-0 left-0 z-20 p-5"
    >
      <motion.form
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.1 }}
        action=""
        onSubmit={(e) => e.preventDefault()}
        className="bg-darkGreen p-4 rounded-2xl w-full max-w-[350px] text-center flex flex-col gap-4"
      >
        {/* Close Login Card Button */}
        <div className="w-full flex justify-end">
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ delay: 0.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleLoginCard}
            className="aspect-square h-[35px] flex items-center justify-center rounded-full cursor-pointer"
          >
            <i className="fa-solid fa-xmark text-white"></i>
          </motion.button>
        </div>

        {/* Login Text Container */}
        <div>
          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ delay: 0.22 }}
            className="text-white text-[clamp(1.5rem,2vw,1.5rem)] font-semibold"
          >
            Log In to Leaforaé
          </motion.p>
          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ delay: 0.24 }}
            className="text-[#f2f2f290] text-sm"
          >
            Sign in and keep blooming with our latest plant finds.
          </motion.p>
        </div>

        {/* Input Container */}
        <div className="flex flex-col gap-2 w-full">
          {/* Enail */}
          <div className="flex flex-col items-start gap-1">
            <motion.label
              className="w-full text-start text-sm text-white font-[500]"
              htmlFor="emailInput"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0.26 }}
            >
              Email
            </motion.label>
            <motion.input
              className="w-full p-2 bg-white rounded-lg outline-0 text-sm"
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
          <div className="flex flex-col items-start gap-1">
            <motion.label
              htmlFor="passwordInput"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full text-start text-sm text-white font-[500]"
            >
              Password
            </motion.label>
            <motion.div
              className="flex items-center gap-1 bg-white w-full p-2 rounded-lg"
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
          className="bg-green p-2 text-white rounded-lg font-semibold cursor-pointer disabled:bg-[#7a935250] disabled:cursor-not-allowed disabled:text-[#f2f2f250]"
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
        <div className="flex flex-col gap-2">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ delay: 0.38 }}
            whileTap={{ scale: 0.9 }}
            className="flex gap-1 justify-center items-center bg-green p-2 rounded-lg"
          >
            <i className="fa-brands fa-google text-white"></i>
            <p className="text-white font-semibold">Login with Google</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ delay: 0.4 }}
            whileTap={{ scale: 0.9 }}
            className="flex gap-1 justify-center items-center bg-green p-2 rounded-lg w-full"
          >
            <i className="fa-brands fa-facebook text-white"></i>
            <p className="text-white font-semibold">Login with Facebook</p>
          </motion.div>
        </div>

        {/* Sign Up Page Link */}
        <motion.p
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ delay: 0.42 }}
          className="text-white text-sm"
        >
          Don't have an account?{" "}
          <span>
            <Link to={"/Signup"} className="text-blue-300 underline">
              Sign up here!
            </Link>
          </span>
        </motion.p>
      </motion.form>
    </motion.section>
  );
}
