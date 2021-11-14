import Head from "next/head";
import React, {useState} from "react";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

const Partners = (data) => {

  const [formData, setFormData] = useState({});


    async function partners(e) {
        e.preventDefault()
        const response = await fetch('/api/felhasznalok', {
            method: 'POST',
            body: JSON.stringify(formData)
        })
        console.log(formData);
    }

  return (
    <>
      <Head>
        <title>Partner éttermeink</title>
        <meta name="keywords" content="Etelrendeles, Partnerek"/>
      </Head>
      <div>
        <h1>Partner éttermeink</h1>
      </div>
      <div>
        <ul>
          <li>Pizza Monster</li>
          <li>Wok n'Go</li>
          <li>Duna Döner</li>
        </ul>
      </div>
    </> 
  );
};

export default Partners;
