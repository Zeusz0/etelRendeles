import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="logo"></div>
      <Link href="/">
        <a>Kezdőlap</a>
      </Link>
      <Link href="/about">
        <a>Rólunk</a>
      </Link>
      <Link href="/forms/Registration">
        <a>Regisztráció</a>
      </Link>
      <Link href="/forms/Login">
        <a>Bejelentkezés</a>
      </Link>
      <Link href="/partners/partners">
        <a>Partner éttermeink</a>
      </Link>
    </nav>
  );
};

export default Navbar;
