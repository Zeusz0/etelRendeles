import Head from "next/head"
import React from "react";
import { withProtected } from "../hook/route"

function My_orders({auth}){
  return (
    <>
      <Head>
        <title>Ételrendelés | Rendeléseim</title>
        <meta name="keywords" content="Etelrendeles, Rendeléseim" />
      </Head>
      <div>
        <h1>Rendeléseim</h1>
      </div>
    </>
  )
}

export default withProtected(My_orders);
