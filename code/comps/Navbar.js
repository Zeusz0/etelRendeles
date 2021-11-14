









//EZ NEM HASZNÁLATOS NAVBAR... A LAYOUT/APPLAYOUT-BAN TALÁLHATÓ AZ IGAZI, HASZNÁLHATÓ NAVBAR
//SORRY DE IGY TUDTAM MEGVALÓSÍTANI



// import { useRouter } from "next/dist/client/router";
// import React from "react";
// import useAuth from "../hook/auth";
//
// export default function Navbar({ children }) {
//   const auth = useAuth();
//
//   const router = useRouter();
//
//   if (router.pathname !== "/login") {
//     return (
//       <main>
//         <nav
//           style={{
//             background: "blue",
//             color: "white",
//             padding: "10px",
//             display: "flex",
//             justifyContent: "space-between",
//           }}
//         >
//           <span>This is default layout</span>
//           <span>{auth.user?.displayName}</span>
//         </nav>
//         {children}
//       </main>
//     );
//   } else {
//     return children;
//   }
// }



// import Link from "next/link";
// import Image from "next/image";
//
// const Navbar = () => {
//   return (
//     <nav>
//       <div className="logo">
//       </div>
//       <Link href="/">
//         <a>Kezdőlap</a>
//       </Link>
//       <Link href="/about">
//         <a >Rólunk</a>
//       </Link>
//       <Link href="/registration">
//         <a>Regisztráció</a>
//       </Link>
//       <Link href="/login">
//         <a>Bejelentkezés</a>
//       </Link>
//     </nav>
//   );
// };
//
// export default Navbar;
