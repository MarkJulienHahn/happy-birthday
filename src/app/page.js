"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

const content = [
  "Liebe Pia,",
  "alles",
  "allles",
  "alllles",
  "allllles",
  "Gute",
  "zum",
  "Geburtstag!",
  "<3",
  "Schön",
  "dass",
  "wir",
  "uns",
  "kennen.",
  "Bleib",
  "wie",
  "du",
  "bist",
  "!",
  "",
];

const visible = { opacity: 1 };
const hidden = { opacity: 0 };

export default function Home() {
  const [index, setIndex] = useState(0);
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        {content.map((entry, i) => (
          <Inner
            key={i}
            i={i}
            entry={entry}
            index={index}
            length={content.length}
            setIndex={setIndex}
          />
        ))}
      </div>
    </main>
  );
}

export function Inner({ entry, i, index, length, setIndex }) {
  console.log(index, i);
  return index != length ? (
    <div className={styles.typeWrapper} onClick={() => setIndex(index + 1)}>
      <h1 style={index == i ? visible : hidden}>{entry}</h1>
    </div>
  ) : (
    <div className={styles.linkWrapper}>
      <Link href="/2">
        <h3>✨ Zum Geschenk ✨</h3>
      </Link>
      {/* <div onClick={() => setIndex(0)}>
        <p>nochmal</p>
      </div> */}
    </div>
  );
}
