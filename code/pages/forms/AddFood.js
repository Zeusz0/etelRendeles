import { PrismaClient } from "@prisma/client";
import { useState } from "react";

const prisma = new PrismaClient();

const AddFood = ({ data }) => {
  const [formData, setFormData] = useState({});
  const [food, setFood] = useState(data);

  async function saveFood(e) {
    e.preventDefault();
    setFood([...food, formData]);
    const response = await fetch("/api/addfoodapi", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    return await response.json();
  }

  return (
    <>
      <div>
        <form onSubmit={saveFood}>
          <input
            autoComplete="name"
            type="text"
            placeholder="partner_id "
            name="partner_id "
            onChange={(e) =>
              setFormData({ ...formData, partner_id: e.target.value })
            }
            required
          />
          <input
            autoComplete="name"
            type="text"
            placeholder="nev"
            name="nev"
            onChange={(e) => setFormData({ ...formData, nev: e.target.value })}
            required
          />
          <textarea
            autoComplete="name"
            name="leiras"
            id=""
            cols="30"
            rows="10"
            placeholder="leiras"
            onChange={(e) =>
              setFormData({ ...formData, leiras: e.target.value })
            }
            required
          />
          <input
            autoComplete="0"
            type="number"
            placeholder="ar"
            name="ar"
            onChange={(e) =>
              setFormData({ ...formData, ar: parseInt(e.target.value) })
            }
            required
          />
          <input
            autoComplete="name"
            type="text"
            placeholder="kategoriak"
            name="kategoriak"
            onChange={(e) =>
              setFormData({ ...formData, kategoriak: e.target.value })
            }
            required
          />
          <button type="submit">Étel hozzáadása</button>
        </form>
      </div>
    </>
  );
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
