import Head from "next/head";
import React, { useState } from "react";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const prisma = new PrismaClient();

const Partner = ({ data }) => {
  const { data: session } = useSession();
  const [searchTerm, setSearchTerm] = useState("");
  if (session) {
    return (
      <>
        <Head>
          <title>Partner éttermeink</title>
          <meta name="keywords" content="Etelrendeles, Partnerek" />
        </Head>
        <main>
          <input
            type="text"
            placeholder="Keresés..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <ul>
            {data
              .filter((val) => {
                if (setSearchTerm == "") {
                  return val;
                } else if (
                  val.name
                    .toLowerCase()
                    .includes(searchTerm.toLocaleLowerCase())
                ) {
                  return val;
                }
              })
              .map((val, key) => {
                return (
                  <div key={key}>
                    <Link href={`../etelek/${val.id}`}>
                      <a>{val.name}</a>
                    </Link>
                  </div>
                );
              })}
          </ul>
        </main>
      </>
    );
  }
  return (
    <>
      <div>
        <h1>Kérlek jelentkezz be</h1>
      </div>
    </>
  );
};

export default Partner;

export async function getServerSideProps() {
  const partnerek = await prisma.user.findMany({
    where: {
      partner: true,
    },
  });

  return {
    props: {
      data: partnerek,
    },
  };
}
