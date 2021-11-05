import Link from "next/link";
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" width={128} height={80}/>
      </div>
      <Link href="/">
        <a>Kezdőlap</a>
      </Link>
      <Link href="/about">
        <a>Rólunk</a>
      </Link>
      {/*Regiszrációs és Bejelentkező !!!gombok hozzáadása!!!*/}
      <Link href="/forms/Registration">
        <a>Regisztráció</a> 
      </Link>
      <Link href="/forms/Login">
        <a>Bejelentkezés</a> 
      </Link>
    </nav>
  );
};

export default Navbar;
