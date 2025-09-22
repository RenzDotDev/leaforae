import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  const handleSetIsActive = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <header className="flex w-full gap-2 relative">
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        whileTap={{ scale: 0.9 }}
        className="grow-1"
      >
        <Link to="/" className="flex items-center gap-0.5 grow-1">
          <img
            src="/Leaforae Logo.png"
            alt="Leaforae Logo"
            className="h-[45px]"
          />
          <p className="text-2xl font-bold text-darkGreen">Leaforaé</p>
        </Link>
      </motion.div>

      {/* Navbar for larger screens */}
      <ul className="hidden gap-3">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/Product">Product</CustomLink>
        <CustomLink to="/Blog">Blog</CustomLink>
        <CustomLink to="/Contact">Contact</CustomLink>
      </ul>

      {/* Navbar for phones */}
      <AnimatePresence>
        {isActive && (
          <motion.ul
            initial={{
              opacity: 0,
              x: 100,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{ opacity: 0, x: 100 }}
            className={
              isActive
                ? "flex flex-col gap-3 h-[90dvh] bg-darkGreen w-[80dvh] absolute top-12 right-0 rounded-lg p-6"
                : "hidden"
            }
          >
            <CustomLink to="/" style={"text-lg text-white"}>
              Home
            </CustomLink>
            <CustomLink to="/Product" style={"text-lg text-white"}>
              Product
            </CustomLink>
            <CustomLink to="/Blog" style={"text-lg text-white"}>
              Blog
            </CustomLink>
            <CustomLink to="/Contact" style={"text-lg text-white"}>
              Contact
            </CustomLink>
          </motion.ul>
        )}
      </AnimatePresence>
      <motion.button
        className="hidden bg-darkGreen aspect-square h-[40px] rounded-full items-center justify-center cursor-pointer sm:flex"
        whileTap={{ scale: 0.9 }}
      >
        <i className="fa-solid fa-shopping-cart"></i>
      </motion.button>

      <motion.button
        className="bg-darkGreen aspect-square h-[40px] rounded-full flex items-center justify-center cursor-pointer"
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.1,
          },
        }}
        whileTap={{ scale: 0.9 }}
        onClick={handleSetIsActive}
      >
        <i className="fa-solid fa-bars text-white"></i>
      </motion.button>
    </header>
  );
}

function CustomLink({ to, children, style, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <motion.li
      className={`${isActive ? "active" : ""}`}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
    >
      <Link to={to} {...props} className={style}>
        {children}
      </Link>
    </motion.li>
  );
}
