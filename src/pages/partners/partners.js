import Head from "next/head";
import { useState } from "react";
import prisma from "../../prisma";

const Partners = ({ data_user }) => {
  return (
    <div>
      <h1> Partnereink listája</h1>
      <h2>Sajnos nincs jogosultságod ehhez</h2>
    </div>
  );
};

export default Partners;

export async function getServerSideProps() {
  const users = await prisma.user.findMany({
    where: {
      partner: true,
    },
    select: {
      name: true,
    },
  });

  return {
    props: {
      data_user: users,
    },
  };
}
