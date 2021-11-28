import { PrismaClient } from "@prisma/client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

const prisma = new PrismaClient();

const AddFood = ({ data }) => {
  const { data: session } = useSession();

  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      kategoriak: "asd",
      ar: 1200,
    },
  });

  const router = useRouter();

  useEffect(() => {
    if (
      session !== undefined &&
      (session === null || (!session.partner && !session.admin))
    ) {
      router.push("/");
    }
  }, [router, session]);

  async function saveFood(form_data) {
    console.log("Called");
    const resp = await fetch("/api/food", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form_data),
    });

    if (resp.ok) {
      router.back();
    }
  }

  if (!session) {
    return <div>Loading</div>;
  }

  if (session.admin || session.partner) {
    return (
      <>
        <div>
          <form onSubmit={handleSubmit(saveFood)}>
            <input
              hidden={session.partner}
              defaultValue={session.partner ? session.id : ""}
              {...register("partner_id", { required: true })}
            />
            <input {...register("nev", { required: true })} />
            <input
              type="number"
              {...register("ar", { required: true, valueAsNumber: true })}
            />
            <input {...register("kategoriak", { required: true })} />
            <input {...register("leiras", { required: true })} />

            <button type="submit">Étel hozzáadása</button>
          </form>
        </div>
      </>
    );
  }

  return <></>;
};

export default AddFood;

export async function getServerSideProps() {
  const aruk = await prisma.aru.findMany();

  return {
    props: {
      data: aruk,
    },
  };
}
