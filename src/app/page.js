"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

import { use100vh } from "react-div-100vh";

const content = [
  "",
  "Liebe Pia,",
  "",
  "happy",
  "happpy",
  "happppy",
  "happpppy",
  "happppppy",
  "happpppppy",
  "happppppppy",
  "31st",
  "Birthday!",
  "<3",
  "",
  "So",
  "Soo",
  "Sooo",
  "schön",
  "dass",
  "wir",
  "uns",
  "kennen!",
  "<3<3",
  "",
  "Danke",
  "dass",
  "du",
  "so",
  "toll",
  "bist!",
  "...",
  "Bleib",
  "so",
  "",
  "!",
  "Love",
  "U!",
  "",
  "A lot!",
  "<3<3<3",
  "",
  // "bist",
  // "!",
  // "",
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
  return index != length ? (
    <div
      className={styles.typeWrapper}
      style={{ height: height }}
      onClick={() => setIndex(index + 1)}
    >
      <h1 style={index == i ? visible : hidden}>{entry}</h1>
    </div>
  ) : (
    <div className={styles.linkWrapper}>
      <Link href="/2">
        <h3>Mittlerweile ist das letztjährige Geschenk leider verjährt... </h3>
      </Link>
      {/* <div onClick={() => setIndex(0)}>
        <p>nochmal</p>
      </div> */}
    </div>
  );
}
