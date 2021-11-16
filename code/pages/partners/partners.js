import Head from "next/head";
import React, { useState } from "react";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";

const prisma = new PrismaClient();

const Partner = ({ data }) => {
  return (
    <>
      <Head>
        <title>Partner éttermeink</title>
        <meta name="keywords" content="Etelrendeles, Partnerek" />
      </Head>
      <main>
        <ul>
          {data.map((item) => (
            <li key="item.id">
              <Link href={`../etelek/${item.id}`}>
                <a>{item.name}</a>
              </Link>
            </li>
          ))}
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
