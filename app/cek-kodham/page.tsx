"use client";
import BackButton from "@/components/BackButton";
import { useState } from "react";

const Home = () => {
  const [userName, setUserName] = useState<string>(""); // Untuk menyimpan nilai input yang terus diperbarui
  const [submittedName, setSubmittedName] = useState<string>(""); // Menyimpan nama yang sudah diproses
  const [randomKodham, setRandomKodam] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Daftar Kodam (contoh)
  const kodamList = [
    "Biji Satu",
    "Burger Bangor",
    "Mas Anis",
    "Vestia Zeta",
    "Nenek Turbo 🥵",
    "Nyi RoroJongrang",
    "Elmanuk 👽",
    "Fufufafa",
    "Ambalabu",
    "Nasi Goreng 😋",
    "Cit cit cit🐭",
    "Tidak punya Kodham 😭",
    "MommyKafkha 🥵",
    "Atmin Suki",
    "Kapal Karam",
    "PopMie 🥵",
    "Kewer-Kewer",
    "Hawk Tuah",
    "Skibidy",
    "PDiddy",
    "Nigger",
    "Anomali Hytam",
    "Tidak punya Kodham 😭",
  ];

  // Fungsi untuk memilih kodam secara acak
  const getRandomKodam = () => {
    setIsLoading(true); // Mulai loading
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * kodamList.length);
      setRandomKodam(kodamList[randomIndex]);
      setSubmittedName(userName); // Menyimpan nama yang telah dimasukkan
      setIsLoading(false); // Hentikan loading setelah 2 detik
    }, 1000); // Delay 1 detik untuk efek loading
  };

  // Fungsi untuk reset halaman
  const resetPage = () => {
    setUserName(""); // Mengosongkan form
    setRandomKodam(null); // Menghapus hasil kodam
    setSubmittedName(""); // Menghapus nama yang sudah diproses
    setIsLoading(false); // Reset status loading
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <BackButton />
      <h1 className="text-4xl font-bold mb-6">Cek Kodham</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {/* Form input tetap ada meskipun hasil sudah ditampilkan */}
        <div className="mb-4">
          <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" placeholder="Masukkan nama Anda" />
        </div>

        <button
          onClick={randomKodham ? resetPage : getRandomKodam}
          disabled={!userName || isLoading} // Tombol disable saat loading atau input kosong
          className="w-full py-2 bg-purple-500 text-white rounded-md disabled:bg-gray-300 hover:opacity-80"
        >
          {randomKodham ? "Cek Kembali" : isLoading ? "Loading..." : "Cek Kodham"}
        </button>

        {/* Menampilkan loading spinner jika loading */}
        {isLoading && (
          <div className="mt-6 text-center">
            <div className="w-8 h-8 border-4 border-t-4 border-purple-500 rounded-full animate-spin mx-auto"></div>
            <p className="mt-2">Sedang memproses...</p>
          </div>
        )}

        {/* Menampilkan output setelah proses selesai */}
        {submittedName && randomKodham && !isLoading && (
          <div className="mt-6">
            <p className="font-semibold">{submittedName}, Kodham Anda:</p>
            <p className="text-xl font-semibold text-purple-600">{randomKodham}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
