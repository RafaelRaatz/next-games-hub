"use client";

import { useState } from "react";
import { FiEdit, FiX } from "react-icons/fi";

export function FavoriteCard() {
  const [input, setInput] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [gameName, setGameName] = useState("");

  function handleButton() {
    setShowInput(!showInput);

    if (input !== "") {
      setGameName(input);
    }

    setInput("");
  }

  return (
    <div className="w-full bg-slate-300 p-4 h-44 text-white rounded-lg flex justify-between flex-col">
      {showInput ? (
        <div className="flex items-center justify-center gap-3">
          <input
            className="w-full rounded h-8 text-black px-2"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button onClick={handleButton}>
            <FiX size={24} color="#fff" />
          </button>
        </div>
      ) : (
        <button
          onClick={handleButton}
          className="self-start hover:scale-110 duration-200 transition-all"
        >
          <FiEdit size={24} color="#374151" />
        </button>
      )}

      {gameName && (
        <div>
          <span className="text-gray-900">Favorite Game</span>
          <p className="font-bold text-gray-900">{gameName}</p>
        </div>
      )}

      {!gameName && <p className="font-bold text-gray-900">Add Game</p>}
    </div>
  );
}
