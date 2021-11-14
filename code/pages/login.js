import Head from "next/head"
import React from "react"
import { withPublic } from "../hook/route"


function Login({auth}) {
  const {user, loginWithGoogle, error} = auth;
  return (
    <>
      <Head>
        <title>Ételrendelés | Bejelentkezés</title>
        <meta name="keywords" content="Etelrendeles, Bejelentkezes" />
      </Head>
      <div>
        <h1>Bejelentkezés</h1>
      </div>
      <div>
        {error ?? <h1>{error}</h1>}
        <button onClick={loginWithGoogle}>Bejelentkezés Google fiókkal</button>
        {console.log(user)}
        <h1>{user?.uid}</h1>
      </div>
    </>
  );

}

export default withPublic(Login);

