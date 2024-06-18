"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../page.module.css";

const places = [
  {
    name: "Abenteuer",
    answer: "Sure?",
    explanation: "Ehrlich gesagt wird sich das Abenteuer in Grenzen halten...",
  },
  {
    name: "Wellness",
    answer: "Gute Wahl",
    explanation: "Es gibt einen Spa-Bereich 😮‍💨",
  },
  {
    name: "Historisches",
    answer: "naja..",
    explanation:
      "Auf einem Spaziergang am Mittag kann ich dir historische Fakten erzählen.",
  },
  {
    name: "Genuss",
    answer: "Ooooh ja!",
    explanation: "Ein tolles Abendessen ist mitinbegriffen (Danke an Jane)",
  },
  {
    name: "Boyfriend time",
    answer: "I knew it! 🥹",
    explanation: "Diese Auswahl ist Automatisch.",
  },
  {
    name: "Luxus",
    answer: "Puh... ok ",
    explanation: "Es wird eine 1A Luxus-Hotel Erfahrung geben.",
  },
  {
    name: "Entspannung",
    answer: "Sehr wichtig! 🥱",
    explanation: "Spa-Bereich mit Sauna usw ist vorhanden...",
  },
  {
    name: "Roadtrip",
    answer: "🚙💨",
    explanation: "Wir fahren ca. 2 Stunden Richtung Norden.",
  },
  {
    name: "Einfach abschalten...",
    answer: "ok.. 🤣",
    explanation: "Hätte nicht gedacht dass du das auswählst...",
  },
  {
    name: "Strand",
    answer: "Geil..!",
    explanation: "Wir fahren einen Tag an die Ostsee!",
  },
  {
    name: "Natur",
    answer: "Wird gemacht!",
    explanation: "Die Ostsee ist Natur",
  },
  {
    name: "Unterhaltung",
    answer: "Kabelfernsehen <3",
    explanation: "Im Bett Fernseh glotzen und dabei einschlafen 🥰",
  },
  {
    name: "1000 Köstlichkeiten",
    answer: "Tolle Entscheidung!",
    explanation: "Das Frühstücksbuffet ist richtig gut! 🥂",
  },
  {
    name: "Nachtleben",
    answer: "Sicher..?",
    explanation: "Cocktails in der Rooftop Bar included 🍹",
  },
  { name: "Romantik", answer: "🫶", explanation: "Sowieso immer dabei" },
];

export default function Home() {
  const [next, setNext] = useState(false);
  const [clickedCount, setClickedCount] = useState(0);
  const [selectedPlaces, setSelectedPlaces] = useState([]);

  const incrementCounter = () => {
    setClickedCount((prevCount) => prevCount + 1);
  };

  const decrementCounter = () => {
    setClickedCount((prevCount) => prevCount - 1);
  };

  useEffect(() => {
    if (clickedCount > 0) {
      console.log(`Items clicked: ${clickedCount}`);
    }
    localStorage.setItem("selectedPlaces", JSON.stringify(selectedPlaces));
  }, [clickedCount, selectedPlaces]);

  return (
    <>
      <div className={styles.counter}>{clickedCount} von 5 ausgewählt</div>
      {next && (
        <div className={styles.next}>
          <Link href="/4">
            <h3>Das war`s. Bist du dir sicher?</h3>
          </Link>
        </div>
      )}
      <main className={styles.main}>
        <div className={styles.listWrapper}>
          {places.map((place, i) => (
            <ListEntry
              key={i}
              place={place}
              setNext={setNext}
              incrementCounter={incrementCounter}
              decrementCounter={decrementCounter}
              clickedCount={clickedCount}
              setSelectedPlaces={setSelectedPlaces}
              selectedPlaces={selectedPlaces}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export function ListEntry({
  place,
  setNext,
  incrementCounter,
  decrementCounter,
  clickedCount,
  setSelectedPlaces,
  selectedPlaces,
  final,
}) {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    clickedCount > 4 ? setNext(true) : setNext(false);
  }, [clickedCount]);

  useEffect(() => {
    if (clicked && place.richtig) {
      setNext(true);
    } else if (!clicked && place.richtig) {
      setNext(false);
    }
  }, [clicked, place.richtig, setNext]);

  return (
    <h2
      onClick={() => {
        if (!clicked && clickedCount < 5) {
          setClicked(true);
          incrementCounter();
          setSelectedPlaces([...selectedPlaces, place]);
        } else if (clicked && clickedCount < 5) {
          setClicked(false);
          decrementCounter();
          setSelectedPlaces(
            selectedPlaces.filter((p) => p.name !== place.name)
          );
        } else if (clicked && clickedCount == 5) {
          setClicked(false);
          decrementCounter();
          setSelectedPlaces(
            selectedPlaces.filter((p) => p.name !== place.name)
          );
        }
      }}
      className={clicked && styles.clicked}
      style={
        clicked && place.richtig ? { color: " rgb(0,255,0)" } : { color: "" }
      }
    >
      {!clicked ? place.name : place.answer}
    </h2>
  );
}
