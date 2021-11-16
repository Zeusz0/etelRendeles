import Head from "next/head";
import React, { useState } from "react";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";

const prisma = new PrismaClient();

const Partner = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
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
                val.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
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

          {/*data.map((item) => (
            <li key="item.id">
              <Link href={`../etelek/${item.id}`}>
                <a>{item.name}</a>
              </Link>
            </li>
          ))*/}
        </ul>
      </main>
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
