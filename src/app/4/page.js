"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../page.module.css";

import img01 from "../../../public/img01.png";

const places = [
  { name: "Anfahrt", answer: "🚙 🎶 🗺" },
  { name: "Zwischenstopp", answer: "⛪️ 🛍 🖼 🌭" },
  { name: "Unterkunft", answer: "⛺️ 🏝 " },
  { name: "Aktivitäten", answer: "🌊 🌳 🍹 ☀️" },
  { name: "Essen", answer: "🦪 🦀 🍝" },
  { name: "Zeitpunkt", answer: "asap ⏰" },
];

export default function Home() {
  const [complete, setComplete] = useState(0);
  const [ender, setEnder] = useState(false);

  const showEnder = () => setEnder(true);

  useEffect(() => {
    complete == places.length && setTimeout(showEnder, 2000);
  }, [complete]);

  return (
    <>
      {!ender ? (
        <main className={styles.main}>
          <p className={styles.header}>Folgendes wird uns erwarten:</p>
          <div className={styles.listWrapperActivities}>
            {places.map((place, i) => (
              <ListEntry
                place={place}
                complete={complete}
                setComplete={setComplete}
              />
            ))}
          </div>
        </main>
      ) : (
        <div className={styles.ender}>
          <h1>Freu mich auf dich!</h1>
        </div>
      )}
    </>
  );
}

export function ListEntry({ place, setComplete, complete }) {
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    clicked && setComplete(complete + 1);
  }, [clicked]);
  return (
    <h2 onClick={() => setClicked(true)}>
      {!clicked ? place.name : place.answer}
    </h2>
  );
}
