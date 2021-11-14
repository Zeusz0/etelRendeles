import { useRouter } from "next/dist/client/router";
import React from "react";
import useAuth from "../hook/auth";
import Link from "next/link"

export default function AppLayout({ children}) {
  const auth = useAuth();

  const router = useRouter();

  const {logout} = auth;
  if (auth.user) {
    return (
      <main>
        <nav>
            <div className="logo"> 
            <img src="logo.png" alt="Logo" width="90" height="70"/>
            </div>
            <Link href="/">
              <a>Kezdőlap</a>
            </Link>
            <Link href="/about">
              <a>Rólunk</a>
            </Link>
          <Link href="/profile">
            <a>{auth.user?.displayName}</a>
          </Link>
          <Link href="/my_orders">
            <a>Rendeléseim</a>
          </Link>
          <button onClick={logout}>Kijelentkezés</button>
        </nav>
        {children}
      </main>
    );
  } else {
    return (
      <main>
        <nav>
          <div className="logo">
          <img src="logo.png" alt="Logo"/>
          </div>
          <Link href="/">
            <a>Kezdőlap</a>
          </Link>
          <Link href="/about">
            <a >Rólunk</a>
          </Link>
          <Link href="/registration">
            <a>Regisztráció</a>
          </Link>
          <Link href="/login">
            <a>Bejelentkezés</a>
          </Link>
          <Link href="/partners/partners">
            <a>Partner éttermeink</a>
          </Link>
        </nav>
        {children}
      </main>
    );
  }
}