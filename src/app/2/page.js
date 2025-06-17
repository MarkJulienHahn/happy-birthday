"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "../page.module.css";

import { use100vh } from "react-div-100vh";

const content = [
  "Happy,",
  "happpy,",
  "happppy,",
  "happpppy,",
  "Birthday",
  "mein",
  "Engel!",
  "Und",
  "Auf",
  "dass",
  "ich",
  "dir",
  "noch",
  "viele,",
  "vieele,",
  "vieeele,",
  "vieeeele,",
  "weitere",
  "Geburtstags-",
  "websiten",
  "coden",
  "darf.",
  "",
  "Love",
  "You",
  "A",
  "Lot",
  "!",
  "",
  "<3",
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
  const height = use100vh();
  return index !== length ? (
    <div
      className={styles.typeWrapper}
      style={{ height: height }}
      onClick={() => setIndex(index + 1)}
    >
      <h1 style={index == i ? visible : hidden}>{entry}</h1>
    </div>
  ) : (
    <div className={styles.linkWrapper}>
      <Link href="/3">
        <h3>Du kennst den Ablauf: wähle aus worauf du am meisten Lust hast...</h3>
      </Link>
    </div>
  );
}
