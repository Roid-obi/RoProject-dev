"use client";
import { useState } from "react";

const Home = () => {
  const [options, setOptions] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedOptionsHistory, setSelectedOptionsHistory] = useState<string[]>([]);

  // Fungsi untuk menambahkan opsi ke daftar
  const addOption = () => {
    if (inputValue.trim() !== "" && !options.includes(inputValue)) {
      setOptions([...options, inputValue]);
      setInputValue("");
    }
  };

  // Fungsi untuk memutar roda dan memilih opsi acak
  const spinWheel = () => {
    if (options.length > 0) {
      const availableOptions = options.filter(option => !selectedOptionsHistory.includes(option));
      if (availableOptions.length === 0) {
        alert("Semua opsi telah dipilih!");
        return;
      }

      const randomIndex = Math.floor(Math.random() * availableOptions.length);
      const chosenOption = availableOptions[randomIndex];
      
      setSelectedOption(chosenOption);
      setSelectedOptionsHistory([...selectedOptionsHistory, chosenOption]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6">Picker Generator</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Masukkan opsi"
            className="flex-1 p-2 border border-gray-300 rounded-md"
          />
          <button
            onClick={addOption}
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            Tambah
          </button>
        </div>
        <button
          onClick={spinWheel}
          className="w-full py-2 bg-blue-500 text-white rounded-md mb-4"
        >
          Putar Roda
        </button>
        {selectedOption && (
          <div className="text-center mb-4">
            <p className="text-xl font-semibold">Hasil: {selectedOption}</p>
          </div>
        )}
        <div>
          <p className="font-semibold">Opsi yang Tersisa:</p>
          <ul className="list-disc pl-5">
            {options.filter(option => !selectedOptionsHistory.includes(option)).map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <p className="font-semibold">Riwayat Pilihan:</p>
          <ul className="list-disc pl-5">
            {selectedOptionsHistory.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
