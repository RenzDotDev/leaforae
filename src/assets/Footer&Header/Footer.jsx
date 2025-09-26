import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-darkGreen py-4 text-center text-sm text-white flex items-center justify-center">
      © {new Date().getFullYear()} GreenLeaf Plant Shop. All rights reserved.
    </footer>
  );
}

export default Footer;
