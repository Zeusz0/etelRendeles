import Head from "next/head";
import { useState } from "react";
import { PrismaClient } from "@prisma/client";

const prisma2 = new PrismaClient();

const Login = ({ data }) => {
  return (
    <>
      <Head>
        <title>Ételrendelés | Bejelentkezés</title>
        <meta name="keywords" content="Etelrendeles, Bejelentkezes" />
      </Head>
      <div>
        <h1>Bejelentkezés</h1>
        <h2>Jelentkezz be </h2>
      </div>
      <div>
        <h1>Regisztrált felhasználóink: </h1>
        <ul>
          {data.map((item) => (
            <li key="item.id">{item.cim}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Login;

export async function getServerSideProps() {
  const USERS = await prisma2.User.findMany();

  return {
    props: {
      data: USERS,
    },
  };
}
