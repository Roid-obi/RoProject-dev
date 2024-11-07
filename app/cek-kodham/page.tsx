"use client";
import { useState } from "react";

const Home = () => {
  const [userName, setUserName] = useState<string>(""); // Untuk menyimpan nilai input yang terus diperbarui
  const [submittedName, setSubmittedName] = useState<string>(""); // Menyimpan nama yang sudah diproses
  const [randomKodam, setRandomKodam] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Daftar Kodam (contoh)
  const kodamList = [
    "Biji Satu",
    "Burger Bangor",
    "Mas Anis",
    "Vestia Zeta",
    "Nenek Turbo 🥵",
    "Nyi RoroJongrang",
    "Elmanuk",
    "Fufufafa",
    "Ambalabu",
    "Nasi Goreng 😋",
    "Cit cit cit🐭",
    "Tidak punya kodham 😭",
    "Mommy Kafkha",
    "Presiden"
  ];

  // Fungsi untuk memilih kodam secara acak
  const getRandomKodam = () => {
    setIsLoading(true); // Mulai loading
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * kodamList.length);
      setRandomKodam(kodamList[randomIndex]);
      setSubmittedName(userName); // Menyimpan nama yang telah dimasukkan
      setIsLoading(false); // Hentikan loading setelah 2 detik
    }, 2000); // Delay 2 detik untuk efek loading
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
      <h1 className="text-4xl font-bold mb-6">Cek Kodam</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {/* Form input tetap ada meskipun hasil sudah ditampilkan */}
        <div className="mb-4">
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Masukkan nama Anda"
          />
        </div>

        <button
          onClick={randomKodam ? resetPage : getRandomKodam}
          disabled={!userName || isLoading} // Tombol disable saat loading atau input kosong
          className="w-full py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300"
        >
          {randomKodam ? "Cek Kembali" : isLoading ? "Loading..." : "Cek Kodam"}
        </button>

        {/* Menampilkan loading spinner jika loading */}
        {isLoading && (
          <div className="mt-6 text-center">
            <div className="w-8 h-8 border-4 border-t-4 border-blue-500 rounded-full animate-spin mx-auto"></div>
            <p className="mt-2">Sedang memproses...</p>
          </div>
        )}

        {/* Menampilkan output setelah proses selesai */}
        {submittedName && randomKodam && !isLoading && (
          <div className="mt-6">
            <p className="font-semibold">{submittedName}, Kodam Anda:</p>
            <p className="text-xl font-semibold text-blue-600">{randomKodam}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
