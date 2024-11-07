"use client";
import BackButton from "@/components/BackButton";
import { useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState<number | string>(""); // Nilai input
  const [fromUnit, setFromUnit] = useState<string>("Celsius"); // Unit input
  const [convertedValues, setConvertedValues] = useState<{
    reamur: string;
    fahrenheit: string;
    kelvin: string;
    celsius: string;
  }>({
    reamur: "",
    fahrenheit: "",
    kelvin: "",
    celsius: "",
  });

  const convertTemperature = () => {
    if (inputValue === "") return;

    const input = parseFloat(inputValue.toString());

    let celsius = 0;

    // Konversi ke Celsius berdasarkan unit input
    if (fromUnit === "Celsius") {
      celsius = input;
    } else if (fromUnit === "Fahrenheit") {
      celsius = (input - 32) * (5 / 9);
    } else if (fromUnit === "Kelvin") {
      celsius = input - 273.15;
    } else if (fromUnit === "Reamur") {
      celsius = (input * 5) / 4;
    }

    // Hitung konversi suhu lainnya
    const reamur = (celsius * 4) / 5;
    const fahrenheit = (celsius * 9) / 5 + 32;
    const kelvin = celsius + 273.15;

    setConvertedValues({
      reamur: reamur.toFixed(2),
      fahrenheit: fahrenheit.toFixed(2),
      kelvin: kelvin.toFixed(2),
      celsius: celsius.toFixed(2),
    });
  };

  return (
    <>
      <BackButton />
      <div className="min-h-screen flex flex-col items-center justify-center  p-6">
        <h1 className="text-4xl font-bold mb-6">Konversi Suhu</h1>
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <div className="mb-4">
            <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" placeholder="Masukkan suhu" />
          </div>
          <div className="mb-4">
            <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md">
              <option value="Celsius">Celsius</option>
              <option value="Fahrenheit">Fahrenheit</option>
              <option value="Kelvin">Kelvin</option>
              <option value="Reamur">Reamur</option>
            </select>
          </div>
          <button onClick={convertTemperature} className="w-full py-2 bg-blue-500 text-white rounded-md">
            Konversi
          </button>
          <div className="mt-6">
            <p className="font-semibold">Hasil Konversi:</p>
            <ul className="list-disc pl-5">
              <li>Celsius: {convertedValues.celsius}°C</li>
              <li>Fahrenheit: {convertedValues.fahrenheit}°F</li>
              <li>Reamur: {convertedValues.reamur}°R</li>
              <li>Kelvin: {convertedValues.kelvin}K</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
