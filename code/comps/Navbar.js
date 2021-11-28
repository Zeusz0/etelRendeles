import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav>
      <div className="logo"></div>
      <Link href="/">
        <a>Kezdőlap</a>
      </Link>
      <Link href="/about">
        <a>Rólunk</a>
      </Link>
      {session && (
        <>
          {session.partner && (
            <Link href="/forms/Registration">
              <a>Regisztrált felhasználóink</a>
            </Link>
          )}
          <Link href="/partners/partners">
            <a>Partner éttermeink</a>
          </Link>

          <Link href="/profile">
            <a>Profil</a>
          </Link>
          <Link href="/my_orders">
            <a>Rendeléseim</a>
          </Link>
          <a onClick={() => signOut()}>Kijelentkezés</a>
        </>
      )}
      {!session && <a onClick={() => signIn()}>Bejelentkezés</a>}
    </nav>
  );
};

export default Navbar;
