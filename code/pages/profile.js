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
                <form className="profileForm" onSubmit={""}>
                    <input className="szovegdoboz2" type="text" placeholder={auth.user?.displayName} name="name" disabled/>
                    <input className="szovegdoboz2" type="email" placeholder={auth.user?.email} name="email" disabled/>
                    <input className="szovegdoboz2" type="tel" placeholder={auth.user?.tel ?? "Telefonszám"} name="tel"
                           onChange={e => setFormData({...formData, tel: e.target.value})}/>
                    <textarea className="szovegdoboz2" name="cim" cols="30" rows="3" placeholder={auth.user?.address ?? "Szállítási cím"}
                              onChange={e => setFormData({...formData, address: e.target.value})}/>
                    <textarea  className="szovegdoboz2" name="szmlazasicim" cols="30" rows="3"
                              placeholder={auth.user?.billingAddress ?? "Számlázási cím"}
                              onChange={e => setFormData({...formData, billingAddress: e.target.value})}/>
                    <p>Státusz: {auth.user?.partner ? "Partner" : "Felhasználó"}</p>
                    <button className="buttonSave" type="submit">Mentés</button>
                    <button className="buttonCancel" type="reset">Mégse</button>
                </form>
            </div>

        </>
    )
}


export default withProtected(Profile);
