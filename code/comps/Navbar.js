import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
