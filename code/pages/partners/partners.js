import Head from "next/head";
import { useState } from "react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Partners = ({ data }) => {
  return (
    <div>
      <h1> Partnereink listája</h1>
      {data.map((item) => (
        <div key={item.id}>
          <a>
            <h3>{item.name}</h3>
          </a>
        </div>
      ))}
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
      data: users,
    },
  };
}
