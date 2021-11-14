import Head from "next/head"
import { withProtected } from "../hook/route"

function Profile({auth}){
  return (
    <>
      <Head>
        <title>Ételrendelés | Rendeléseim</title>
        <meta name="keywords" content="Etelrendeles, Profil" />
      </Head>
      <div>
        <h1>Profil</h1>
      </div>
    </>
  )
}


export default withProtected(Profile);
