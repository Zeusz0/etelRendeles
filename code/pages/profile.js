import Head from "next/head";
import { PrismaClient } from "@prisma/client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

const prisma = new PrismaClient();

const Profile = ({ data }) => {
  const { data: session } = useSession();
  const currentUser = data.filter((user) => user.id === session.id);
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      name: currentUser.map((item) => item.name),
      email: currentUser.map((item) => item.email),
      telefonszam: currentUser.map((item) => item.telefonszam),
      cim: currentUser.map((item) => item.cim),
      szamlazasi_cim: currentUser.map((item) => item.szamlazasi_cim),
    },
  });

  const router = useRouter();

  async function saveUser(form_data) {
    console.log("Called");
    const resp = await fetch("/api/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form_data),
    });

    if (resp.ok) {
      router.back();
    }
  }

  if (session) {
    return (
      <>
        <Head>
          <title>Ételrendelés | Rendeléseim</title>
          <meta name="keywords" content="Etelrendeles, Profil" />
        </Head>
        <div>
          <h1>Profil: {data.name}</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit(saveUser)}>
            <input
              hidden={session}
              defaultValue={session.partner ? session.id : ""}
              {...register("id", { required: true })}
            />
            <label>Név:</label>
            <input {...register("name", { required: true })} />
            <label>E-mail cím:</label>
            <input {...register("email", { required: true })} />
            <label>Telefonszám:</label>
            <input {...register("telefonszam", { required: true })} />
            <label>Lakcím:</label>
            <input {...register("cim", { required: true })} />
            <label>Számlázási cím:</label>
            <input {...register("szamlazasi_cim", { required: true })} />
            <input
              hidden={session.partner}
              defaultValue={session.partner ? session.id : ""}
              {...register("id", { required: true })}
            />
            <p>
              Státusz:{" "}
              {currentUser.map((item) => item.partner) ? "Partner" : "Látogató"}
            </p>
            <button type="submit">Mentés</button>
            <button type="reset">Összes mező törlése</button>
          </form>
        </div>
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

export default Profile;

export async function getServerSideProps() {
  const User = await prisma.user.findMany();

  return {
    props: {
      data: User,
    },
  };
}
