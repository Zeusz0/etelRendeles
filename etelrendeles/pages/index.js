import Head from "next/head";
import Image from "next/image";
import Navbar from "../comps/Navbar";
import Footer from "../comps/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1>Kezdolap</h1> {/* styles.title stílus beállítása */}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur
        orci nec erat efficitur, sit amet bibendum purus eleifend. In vestibulum
        erat nulla, eu ultrices eros pharetra ac. Praesent ornare at est eu
        porta. Praesent sollicitudin ipsum sapien, et tempus ex vestibulum quis.
        Praesent tincidunt eu est vitae euismod. Vestibulum dictum bibendum
        libero, non tempus sem viverra ac. Pellentesque placerat faucibus quam.
        Morbi nec molestie nisi. Curabitur at nulla nulla.
      </p>
    </div>
  );
}
