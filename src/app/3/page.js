"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../page.module.css";

const places = [
  { name: "Karibik", answer: "nächstes Jahr vielleicht" },
  { name: "Schwarzwald", answer: "🤣" },
  { name: "Helgoland", answer: "falsch" },
  { name: "Barcelona", answer: "nein" },
  { name: "Italien", answer: "wann anders" },
  { name: "Bernsteinsee", answer: "machen wir eh" },
  { name: "Bretagne", answer: "geht leider nicht" },
  { name: "Europapark", answer: "Gute Idee.." },
  { name: "Tschechien", answer: "nope" },
  { name: "Pflaumheim", answer: "🥱" },
  { name: "Tokyo", answer: "irgendwann mal" },
  { name: "Kolumbien", answer: "machst du eh" },
  { name: "Dänemark", answer: "warm" },
  { name: "Melt Festival", answer: "zu spät..." },
  { name: "Polen", answer: "Korrekt", richtig: true },
];

export default function Home() {
  const [next, setNext] = useState(false);
  return (
    <>
      {next && (
        <div className={styles.next}>
          <Link href="/4">
            <h3>Mehr Informationen</h3>
          </Link>
        </div>
      )}
      <main className={styles.main}>
        <div className={styles.listWrapper}>
          {places.map((place, i) => (
            <ListEntry place={place} setNext={setNext} />
          ))}
        </div>
      </main>
    </>
  );
}

export function ListEntry({ place, setNext }) {
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    clicked && place.richtig && setNext(true);
  });
  return (
    <h2
      onClick={() => setClicked(true)}
      className={clicked && styles.clicked}
      style={
        clicked && place.richtig ? { color: " rgb(0,255,0)" } : { color: "" }
      }
    >
      {!clicked ? place.name : place.answer}
    </h2>
  );
}
