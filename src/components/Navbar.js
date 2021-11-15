import Link from "next/link";
import Image from "next/image";
import { signIn, useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: sessionData } = useSession();
  const user = sessionData?.user;

  return (
    <nav style={{ justifyContent: "space-between" }}>
      <Link href="/" passHref>
        <a>
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
        </a>
      </Link>
      <div>
        <Link href="/">
          <a>Kezdőlap</a>
        </Link>
        <Link href="/about">
          <a>Rólunk</a>
        </Link>
        <Link href="/partners/partners">
          <a>Partner éttermeink</a>
        </Link>
        {user ? (
          <>
            <p>Loggend in as {user.name}</p>
            <button onClick={signOut}>Kijelentkezés</button>
          </>
        ) : (
          <button onClick={signIn}>Bejelentkezés</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
