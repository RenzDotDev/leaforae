import React from "react";

function Footer() {
  return (
    <footer className="p-3 flex items-end">
      <p className="w-full h-full max-h-[100px] rounded-2xl px-3 bg-darkGreen py-4 text-center text-[clamp(0.75rem,2vw,1rem)] text-white flex items-center justify-center">
        © {new Date().getFullYear()} GreenLeaf Plant Shop. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
