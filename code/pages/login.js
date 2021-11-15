import Head from "next/head"
import React, {useState} from "react"
import { withPublic } from "../hook/route"


function Login({auth}) {
  const {user, loginWithGoogle, error} = auth;

    const [formData, setFormData] = useState({});


    async function login(e) {
        e.preventDefault()
        const response = await fetch('/api/auth/sign-in', {
            method: 'POST',
            body: JSON.stringify(formData)
        })
        console.log(formData);
    }

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

          <form className="loginForm" onSubmit={login}>
              <input className="szovegdoboz2" type="email" placeholder="E-mail cím" name="email"
                     onChange={e => setFormData({...formData, email: e.target.value})}/>
              <input className="szovegdoboz2" type="password" placeholder="Jelszó" name="password"
                     onChange={e => setFormData({...formData, password: e.target.value})}/>
              <button className="buttonLogin" type="submit">Bejelentkezés</button>

          </form>

          <button className="buttonGoogle" onClick={loginWithGoogle}>Bejelentkezés Google fiókkal</button>
          {error ?? <h1>{error}</h1>}

      </div>
    </>
  );

}

export default withPublic(Login);

