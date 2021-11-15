import Head from "next/head";
import { useState } from "react";
import { PrismaClient } from "@prisma/client";
import { useSession } from "next-auth/react";

const prisma = new PrismaClient();

const Partners = ({ data_user }) => {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return (
      <div>
        <h2>Üdv, {session.user.name}! Kitől rendeljünk?</h2>
        {data_user.map((item) => (
          <div key={item.id}>
            <a>
              <h3>{item.name}</h3>
            </a>
          </div>
        ))}
      </div>
    );
  }
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
