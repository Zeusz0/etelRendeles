import Head from "next/head"
import {withProtected} from "../hook/route"
import useAuth from "../hook/auth";
import React from "react";

function Profile() {

    const auth = useAuth({auth});
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
                <form onSubmit={""}>
                    <input type="text" placeholder={auth.user?.displayName} name="name" disabled/>
                    <input type="email" placeholder={auth.user?.email} name="email" disabled/>
                    <input type="tel" placeholder={auth.user?.tel ?? "Telefonszám"} name="tel"
                           onChange={e => setFormData({...formData, tel: e.target.value})}/>
                    <textarea name="cim" cols="30" rows="3" placeholder={auth.user?.address ?? "Szállítási cím"}
                              onChange={e => setFormData({...formData, address: e.target.value})}/>
                    <textarea name="szmlazasicim" cols="30" rows="3"
                              placeholder={auth.user?.billingAddress ?? "Szállítási cím"}
                              onChange={e => setFormData({...formData, billingAddress: e.target.value})}/>
                    <p>Státusz:</p>
                    <p>{auth.user?.partner ? "Partner" : "Felhasználó"}</p>
                    <button type="submit">Mentés</button>
                    <button type="reset">Mégse</button>
                </form>
            </div>

        </>
    )
}


export default withProtected(Profile);
