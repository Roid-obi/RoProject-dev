"use client";
import BackButton from "@/components/BackButton";
import { useState } from "react";

const CekJodoh = () => {
  const [userName, setUserName] = useState<string>("");
  const [partnerName, setPartnerName] = useState<string>("");
  const [compatibility, setCompatibility] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Fungsi untuk menghasilkan persentase kecocokan dengan probabilitas tertentu
  const calculateCompatibility = () => {
    setIsLoading(true);
    setTimeout(() => {
      let randomPercentage;
      const chance = Math.random();

      // 20% kemungkinan mendapatkan angka 50% ke bawah
      if (chance <= 0.2) {
        randomPercentage = Math.floor(Math.random() * 51); // Angka antara 0-50
      } else {
        randomPercentage = Math.floor(Math.random() * 51) + 50; // Angka antara 51-100
      }

      setCompatibility(randomPercentage);
      setIsLoading(false);
    }, 2000); // Delay 2 detik untuk efek loading
  };

  // Fungsi untuk mendapatkan deskripsi berdasarkan persentase
  const getDescription = (percentage: number) => {
    if (percentage < 50) {
      return "Hubungan Anda mungkin memerlukan lebih banyak usaha. Jangan menyerah, tetap berusaha untuk saling memahami.";
    } else if (percentage <= 65) {
      return "Ada potensi, tetapi perlu lebih banyak waktu dan usaha untuk membangun hubungan yang kuat.";
    } else if (percentage <= 70) {
      return "Hubungan Anda cukup menjanjikan, tetapi masih ada beberapa hal yang perlu diperhatikan.";
    } else if (percentage <= 80) {
      return "Hubungan Anda berada di jalur yang baik, teruskan komunikasi dan kebersamaan Anda.";
    } else if (percentage <= 90) {
      return "Hubungan Anda sangat solid! Anda berdua memiliki koneksi yang kuat.";
    } else {
      return "Hubungan Anda luar biasa! Anda berdua sangat cocok satu sama lain.";
    }
  };

  // Fungsi untuk reset halaman
  const resetPage = () => {
    setUserName("");
    setPartnerName("");
    setCompatibility(null);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <BackButton />
      <h1 className="text-4xl font-bold mb-6">Cek Jodoh</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {/* Form input untuk nama user dan nama pasangan */}
        {!compatibility && !isLoading && (
          <div className="mb-4">
            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className="w-full p-2 mb-2 border border-gray-300 rounded-md" placeholder="Masukkan nama Anda" />
            <input
              type="text"
              value={partnerName}
              onChange={(e) => setPartnerName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Masukkan nama pasangan Anda"
            />
          </div>
        )}

        <button
          onClick={compatibility ? resetPage : calculateCompatibility}
          disabled={!userName || !partnerName || isLoading}
          className="w-full py-2 bg-pink-500 text-white rounded-md disabled:bg-gray-300 hover:opacity-90"
        >
          {compatibility ? "Cek Lagi" : isLoading ? "Loading..." : "Cek Kecocokan"}
        </button>

        {/* Menampilkan loading spinner jika loading */}
        {isLoading && (
          <div className="mt-6 text-center">
            <div className="w-8 h-8 border-4 border-t-4 border-pink-500 rounded-full animate-spin mx-auto"></div>
            <p className="mt-2">Sedang menghitung...</p>
          </div>
        )}

        {/* Menampilkan output setelah proses selesai */}
        {compatibility !== null && !isLoading && (
          <div className="mt-6 text-center">
            <p className="font-semibold">
              {userName} & {partnerName}, tingkat kecocokan Anda:
            </p>
            <p className="text-2xl font-bold text-pink-600">{compatibility}%</p>
            <p className="mt-4 text-gray-700">{getDescription(compatibility)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CekJodoh;
