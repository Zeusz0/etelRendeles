import Head from "next/head";
import { useState } from "react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Registration = ({ data }) => {
  const [formData, setFormData] = useState({});

  return (
    <>
      <Head>
        <title>Ételrendelés | Regisztráció</title>
        <meta name="keywords" content="Etelrendeles, Regisztracio" />
      </Head>
      <div>
        <h1>Regisztráció</h1>
      </div>
      <div>
        <h1>Regisztrált felhasználóink: </h1>
        <ul>
          {data.map((item) => (
            <>
              <div key="item.id">{item.name}</div>
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Registration;

export async function getServerSideProps() {
  const users = await prisma.user.findMany();

  return {
    props: {
      data: users,
    },
  };
}
