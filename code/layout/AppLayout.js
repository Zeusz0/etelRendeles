import { useRouter } from "next/dist/client/router";
import React from "react";
import useAuth from "../hook/auth";
import Link from "next/link"

export default function AppLayout({ children}) {
  const auth = useAuth();

  const router = useRouter();

  const {logout} = auth;
  if (router.pathname !== "/login") {
    return (
      <main>
        <nav>
            <div className="logo">
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
        </nav>
        {children}
      </main>
    );
  }
}