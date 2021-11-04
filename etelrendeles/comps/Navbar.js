import Link from "next/link";
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" width={128} height={80}/>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About </a>
      </Link>
      {/*Regiszrációs és Bejelentkező !!!gombok hozzáadása!!!*/}
      <Link href="/forms/Registration">
        <a>Registration</a> 
      </Link>
      <Link href="/forms/Login">
        <a>Login</a> 
      </Link>
    </nav>
  );
};

export default Navbar;
