"use client";

import { useState, useEffect } from "react";
import styles from "../page.module.css";

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
