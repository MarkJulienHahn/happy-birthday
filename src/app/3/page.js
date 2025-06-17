"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../page.module.css";

const places = [
  {
    name: "Spreewald",
    answer: "Sure?",
    explanation: "Keine Angst... es gibt wird keine Pinguine geben.",
  },
  {
    name: "Massage",
    answer: "Uuuuuh...",
    explanation: "1x Seifenbürstenmassage (pro Person)",
  },
  {
    name: "50m² Suite",
    answer: "Wenn du wüsstests...",
    explanation:
      "Wir haben sogar unsere eigene Sauna... 🥵",
  },
  {
    name: "Genuss",
    answer: "Ooooh ja!",
    explanation: "4-Gang Candle-Light Dinner am 2. Abend",
  },
  {
    name: "Boyfriend time",
    answer: "Yeeees! 🥹",
    explanation: "Zwei Tage im August nur für uns beide... 🥳",
  },
  {
    name: "Regenwald",
    answer: "Puh... ok ",
    explanation: "Wellness-Regenwalddusche mit zwei Duschköpfen",
  }, 
  {
    name: "Aktive Abenteuer",
    answer: "Sehr wichtig! 🥱",
    explanation: "Es gibte eine Kegelbahn!",
  },
  {
    name: "Roadtrip",
    answer: "🚙💨",
    explanation: "Irgend eine Art von Volvo wird und uns in etwa 1.5h in die Wellness-Oase führen.",
  },
  {
    name: "Oase",
    answer: "ok..",
    explanation: "Freie Nutzung der Wellnessoase mit Pool & Saunen",
  },
  {
    name: "Strand",
    answer: "Well...",
    explanation: "Niete... diesmal gibt's leider keinen Strand, sorry!",
  },
  {
    name: "Natur",
    answer: "Das wird uns gut tun!",
    explanation: "Spaziergang durch den Spreewald?!",
  },
  {
    name: "Unterhaltung",
    answer: "Gute Wahl!",
    explanation: "Eine Suite mit Flatscreen mit SAT-TV",
  },
  {
    name: "Schlemmen",
    answer: "Pflichtfeld!",
    explanation: "Es gibt ein tägliches Genießer-Frühstück",
  },
  {
    name: "Nachtleben",
    answer: "Mal schauen...",
    explanation: "1x Wellness Cocktail (pro Person)",
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
