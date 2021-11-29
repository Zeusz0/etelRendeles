import { PrismaClient } from "@prisma/client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useForm, Controller } from "react-hook-form";
import { TextField, Checkbox } from "@material-ui/core";

const NewPartner = () => {
  const { data: session } = useSession();

  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      checkbox: true,
    },
  });

  const router = useRouter();

  async function newPartner() {
    const resp = await fetch("/api/partner", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(session.id),
    });

    if (resp.ok) {
      router.back();
    }
  }

  if (!session) {
    return <div>Loading</div>;
  }

  if (session.partner || session.admin) {
    return (
      <>
        <h1>
          Semmi oka itt lenni! Maga már {session.admin ? "Admin" : "Partner"} !
        </h1>
      </>
    );
  }

  if (!session.partner) {
    return (
      <>
        <h1>
          Biztos Partnerré akar válni? Ha IGEN döntése nem megváltoztatható
        </h1>
        <div>
          <form onSubmit={handleSubmit(newPartner)}>
            <Controller
              name="checkbox"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <Checkbox {...field} />}
            />
            <input type="submit" />
          </form>
        </div>
      </>
    );
  }

  return <></>;
};

export default NewPartner;
