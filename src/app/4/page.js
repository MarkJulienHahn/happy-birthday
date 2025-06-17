"use client";

import { useState, useEffect } from "react";
import styles from "../page.module.css";

import { use100vh } from "react-div-100vh";

export default function Home() {
  const [selectedPlaces, setSelectedPlaces] = useState([]);
  const [complete, setComplete] = useState(0);
  const [ender, setEnder] = useState(false);

  const showEnder = () => setEnder(true);

  useEffect(() => {
    const storedPlaces = JSON.parse(localStorage.getItem("selectedPlaces"));
    if (storedPlaces) {
      setSelectedPlaces(storedPlaces);
    }
  }, []);

  const height = use100vh();

  useEffect(() => {
    complete == 5 && setTimeout(showEnder, 3000);
  }, [complete]);
  return (
    <>
      {!ender ? (
        <main className={styles.main}>
          <p className={styles.header}>
            Hier die Ergebnisse des Konfigurators:
          </p>
          <div className={styles.listWrapperActivities}>
            {selectedPlaces.map((place, i) => (
              <ListEntry
                key={i}
                place={place}
                complete={complete}
                setComplete={setComplete}
                final={true}
              />
            ))}
          </div>
        </main>
      ) : (
        <div className={styles.ender} style={{ height: height }}>
          <h1 style={{ fontSize: "8vw", lineHeight: "8.2vw" }}>
            Ergebnis: <br />Zwei Nächte im Christinenhof & Spa Hotel, Spreewald.
            <br />
            <br />
            Gute Wahl, Pia!
          </h1>
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
      {!clicked ? (
        place.name
      ) : (
        <span style={{ color: "lightblue", cursor: "default" }}>
          {place.explanation}
        </span>
      )}
    </h2>
  );
}
