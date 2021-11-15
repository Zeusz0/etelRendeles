import Head from "next/head";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <>
      <Head>
        <title>Ételrendelés | Bejelentkezés</title>
        <meta name="keywords" content="Etelrendeles, Bejelentkezes" />
      </Head>
      <div>
        <h1>Bejelentkezés</h1>
        <h2>Jelentkezz be </h2>
        <button onClick={() => signIn("github")}>Sign in With GithuB</button>
      </div>
    </>
  );
};

export default Login;
