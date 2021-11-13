import Head from "next/head";
import { useState } from "react";

const Registration = () => {
  const [formData, setFormData] = useState({})


  return (
    <>
      <Head>
        <title>Ételrendelés | Regisztráció</title>
        <meta name="keywords" content="Etelrendeles, Regisztracio" />
      </Head>
      <div>
        <h1>Regisztráció</h1>
      </div>
    </>
  )
}

export default Registration;

export async function getServerSideProps(){

}


