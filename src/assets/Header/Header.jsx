import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { motion, AnimatePresence, scale } from "motion/react";
import { useState } from "react";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [isLoginCardActive, setIsLoginCardActive] = useState(false);
  const [isPasswordHidden, setIsPasswordHidden] = useState(false);

  const handleSetIsActive = () => {
    setIsActive((prev) => !prev);
  };

  const toggleLoginCard = () => {
    setIsActive(false);
    setTimeout(() => {
      setIsLoginCardActive((prev) => !prev);
    }, 100);
  };

  const togglePasswordIcon = () => {
    setIsPasswordHidden((prev) => !prev);
  };

  return (
    <header className="flex w-full items-center gap-4 relative justify-between p-3">
      <motion.div
        className="shrink-1"
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Link to="/" className="flex items-center gap-0.5 grow-1">
          <img
            src="/Leaforae Logo.png"
            alt="Leaforae Logo"
            className="w-[clamp(3rem,7vw,70px)]"
          />
          <p className="text-[clamp(1rem,5vw,1.5rem)] font-bold text-darkGreen">
            Leaforaé
          </p>
        </Link>
      </motion.div>
      {/* Navbar for larger screens */}
      <motion.ul
        className="hidden gap-[clamp(1rem,2vw,4rem)] grow-1 justify-center sm:flex"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: -0 }}
        transition={{ delay: 0.15 }}
      >
        <CustomLink style={"text-[clamp(1rem,1vw,1rem)]"} to="/">
          Home
        </CustomLink>
        <CustomLink style={"text-[clamp(1rem,1vw,1rem)]"} to="/Product">
          Product
        </CustomLink>
        <CustomLink style={"text-[clamp(1rem,1vw,1rem)]"} to="/Blog">
          Blog
        </CustomLink>
        <CustomLink style={"text-[clamp(1rem,1vw,1rem)]"} to="/Contact">
          Contact
        </CustomLink>
      </motion.ul>

      {/* Navbar for phones */}
      <AnimatePresence>
        {isActive && (
          <motion.ul
            initial={{
              height: "0dvh",
              opacity: 0,
            }}
            animate={{
              height: "100dvh",
              opacity: 1,
            }}
            exit={{ height: "0dvh" }}
            className={
              isActive
                ? "flex flex-col items-center gap-3 w-dvw h-screen bg-darkGreen absolute top-0 right-0 p-3.5"
                : "hidden"
            }
          >
            <motion.button
              className="w-fit self-end bg-white aspect-square p-2 rounded-full cursor-pointer flex items-center justify-between"
              whileTap={{ scale: 0.9 }}
              onClick={handleSetIsActive}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
            >
              <i className="fa-solid fa-xmark"></i>
            </motion.button>
            <div className="grow-1 w-full flex flex-col items-center justify-center gap-3">
              <CustomLink
                to="/"
                style={"text-[clamp(1.5rem,3vw,1.5rem)] text-white"}
              >
                Home
              </CustomLink>
              <CustomLink
                to="/Product"
                style={"text-[clamp(1.5rem,3vw,1.5rem)] text-white"}
              >
                Product
              </CustomLink>
              <CustomLink
                to="/Blog"
                style={"text-[clamp(1.5rem,3vw,1.5rem)] text-white"}
              >
                Blog
              </CustomLink>
              <CustomLink
                to="/Contact"
                style={"text-[clamp(1.5rem,3vw,1.5rem)] text-white"}
              >
                Contact
              </CustomLink>
            </div>
            <motion.button
              className="flex items-center w-full justify-center gap-1 bg-white p-2 rounded-sm"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLoginCard}
            >
              <p className="text-[clamp(1rem,2vw,1.5rem)]">Login</p>
              <i class="fa-solid fa-right-to-bracket"></i>
            </motion.button>
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Login Button */}
      <motion.button
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.2,
          },
        }}
        onClick={toggleLoginCard}
        className="hidden bg-darkGreen gap-2 rounded-md px-4 py-2 items-center justify-center cursor-pointer sm:flex"
        whileTap={{ scale: 0.9 }}
      >
        <p className="text-white">Login</p>
        <i className="fa-solid fa-shopping-cart text-white text-sm"></i>
      </motion.button>

      {/* Hamburger Button */}
      <motion.button
        className="bg-darkGreen aspect-square h-[35px] rounded-full flex items-center justify-center cursor-pointer sm:hidden"
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.15,
          },
        }}
        whileTap={{ scale: 0.9 }}
        onClick={handleSetIsActive}
      >
        <i className="fa-solid fa-bars text-white text-[clamp(0.90rem,1vw,1.5rem)]"></i>
      </motion.button>

      {/* Login Card */}
      <AnimatePresence>
        {/* Login Card Wrapper - To make blurred background */}
        {isLoginCardActive && (
          <motion.section
            className="absolute top-0 left-0 backdrop-blur-[2px] w-full h-screen flex justify-center items-center p-3 text-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            {/* Actual Login card */}
            <motion.section className="bg-darkGreen p-6 rounded-xl flex flex-col gap-5 sm:w-100">
              {/* X / Close Button */}
              <motion.button
                className="w-fit self-end text-[clamp(12px,2vw,16px)] bg-white aspect-square p-2 rounded-full cursor-pointer flex items-center justify-between"
                whileTap={{ scale: 0.9 }}
                onClick={toggleLoginCard}
              >
                <i className="fa-solid fa-xmark"></i>
              </motion.button>

              {/* Text Container */}
              <div className="flex flex-col gap-1">
                <p className="text-white font-bold text-xl">
                  Login to Your Account
                </p>
                <p className="text-white text-xs">
                  Access your orders, track deliveries, and grow your green
                  collection.
                </p>
              </div>

              {/* Input Container */}
              <div className="flex flex-col gap-2 w-full">
                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor=""
                    className="w-fit text-white font-semibold text-sm"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="borde-0 bg-white grow-1 p-2 rounded-lg outline-0"
                  />
                </div>
                {/* Password */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor=""
                    className="w-fit text-white text-sm font-semibold"
                  >
                    Password
                  </label>
                  <div className="grow-1 p-2 rounded-lg bg-white flex items-center gap-1">
                    <input
                      type={isPasswordHidden ? "password" : "text"}
                      className="grow-1 outline-0"
                    />
                    <motion.i
                      className={
                        isPasswordHidden
                          ? "fa-solid fa-eye-slash text-gray-500 opacity-70"
                          : "fa-solid fa-eye text-gray-500 opacity-70"
                      }
                      onClick={togglePasswordIcon}
                      whileTap={{ scale: 0.4 }}
                    ></motion.i>
                  </div>
                </div>
              </div>

              {/* Login Button */}
              <motion.button
                className="w-full bg-white px-3 py-2 rounded-lg font-semibold cursor-pointer text-[clamp(1rem,1vw,1rem)]"
                whileTap={{ scale: 0.95 }}
              >
                Login
              </motion.button>

              {/* Other login choices */}
              <p className="text-white text-xs">Or</p>
              <div className="flex flex-col gap-2">
                <motion.button
                  className="flex items-center justify-center gap-1 bg-white p-3 rounded-lg"
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fa-brands fa-google"></i>
                  <p className="font-semibold text-sm">Login with Google</p>
                </motion.button>
                <motion.button
                  className="flex items-center justify-center gap-1 bg-white p-3 rounded-lg"
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fa-brands fa-facebook-f"></i>
                  <p className="font-semibold text-sm">Login with Facebook</p>
                </motion.button>
              </div>

              {/* Sign up Link */}
              <Link to={"/"} className="text-white text-sm cursor-default">
                Do not have an Account?{" "}
                <span className="font-semibold underline underline-offset-3 cursor-pointer">
                  Sign up now!
                </span>
              </Link>
            </motion.section>
          </motion.section>
        )}
      </AnimatePresence>
    </header>
  );
}

function CustomLink({ to, children, style, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <motion.li
      className={`${isActive ? "active" : ""}`}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
    >
      <Link to={to} {...props} className={style}>
        {children}
      </Link>
    </motion.li>
  );
}
