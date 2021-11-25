import Head from "next/head"
import {PrismaClient} from "@prisma/client";
import {useState, useEffect} from "react";
import {useSession} from "next-auth/react";
import {useForm} from "react-hook-form";
import {useRouter} from "next/router";

const prisma = new PrismaClient();

const Profile = ({data}) => {
    const {data: session} = useSession();

    const {register, handleSubmit, formState} = useForm({
        defaultValues: {
            telefonszam: "",
            cim: "",
            szamlazasi_cim: "",
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

    async function saveUser(form_data) {
        console.log("Called");
        const resp = await fetch("/api/user", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
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
                <Head>
                    <title>Ételrendelés | Rendeléseim</title>
                    <meta name="keywords" content="Etelrendeles, Profil"/>
                </Head>
                <div>
                    <h1>Profil</h1>
                </div>
                <div>
                    <form onSubmit={handleSubmit(saveUser)}>
                        <input
                            hidden={session.partner}
                            defaultValue={session.partner ? session.id : ""}
                            {...register("id", { required: true })}
                        />
                        <input {...register("name", { required: true })} />
                        <input {...register("email", { required: true })} />
                        <input {...register("telefonszam", { required: true })} />
                        <input {...register("cim", { required: true })} />
                        <input {...register("szamlazasi cim", { required: true })} />
                        <p>Státusz:</p>
                        <p>Partner : Felhasználó</p>
                        <button type="submit">Mentés</button>
                        <button type="reset">Mégse</button>
                    </form>
                </div>
            </>
        )
    }
    return <></>;
}

export default Profile

export async function getServerSideProps() {
    const partnerek = await prisma.User.findMany();

    return {
        props: {
            data: partnerek,
        },
    };
}
