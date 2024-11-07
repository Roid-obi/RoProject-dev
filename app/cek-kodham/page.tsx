"use client";
import BackButton from "@/components/BackButton";
import { useState } from "react";

const Home = () => {
  const [userName, setUserName] = useState<string>("");
  const [randomKodam, setRandomKodam] = useState<string | null>(null);

  // Daftar Kodam (contoh)
  const kodamList = [
    "Biji Satu",
    "Burger Bangor",
    "Farhan Kebab",
    "Vestia Zeta",
    "Nenek Turbo 🥵",
    "Nyi RoroJongrang",
    "Elmanuk",
    "Fufufafa",
    "Ambalabu",
    "Nasi Goreng 😋"
  ];

  // Fungsi untuk memilih kodam secara acak
  const getRandomKodam = () => {
    const randomIndex = Math.floor(Math.random() * kodamList.length);
    setRandomKodam(kodamList[randomIndex]);
  };

  return (
    <>
    <BackButton />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
        <h1 className="text-4xl font-bold mb-6">Cek Kodam</h1>
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <div className="mb-4">
            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" placeholder="Masukkan nama Anda" />
          </div>
          <button onClick={getRandomKodam} disabled={!userName} className="w-full py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300">
            Cek Kodam
          </button>
          {randomKodam && userName && (
            <div className="mt-6">
              <p className="font-semibold">{userName}, Kodam Anda:</p>
              <p className="text-xl font-semibold text-blue-600">{randomKodam}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
