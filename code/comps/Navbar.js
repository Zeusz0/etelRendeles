import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  if (session) {
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
          <a>Regisztrált felhasználóink</a>
        </Link>
        <Link href="/partners/partners">
          <a>Partner éttermeink</a>
        </Link>
        <a onClick={() => signOut()}>Sign out</a>
      </nav>
    );
  }
  return (
    <nav>
      <Link href="/">
        <a>Kezdőlap</a>
      </Link>
      <Link href="/about">
        <a>Rólunk</a>
      </Link>
      <a onClick={() => signIn()}>Bejelentkezés</a>
    </nav>
  );
};

export default Navbar;
