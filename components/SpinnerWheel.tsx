"use client";
import { useState } from 'react';

const SpinnerWheel = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const items = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6'];

  const spinWheel = () => {
    if (isSpinning) return; // Mencegah memutar ulang jika sudah berputar

    setIsSpinning(true);
    const randomRotation = Math.floor(5000 + Math.random() * 5000);
    const totalRotation = rotation + randomRotation;

    setRotation(totalRotation);

    // Hitung item yang dipilih berdasarkan rotasi
    const selectedIndex = Math.floor((totalRotation % 360) / (360 / items.length));
    setSelectedItem(items[selectedIndex]);

    setTimeout(() => {
      setIsSpinning(false);
    }, 5000); // Waktu berputar selama 5 detik
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <div
        className="w-64 h-64 border-4 border-gray-500 rounded-full relative"
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: isSpinning ? 'transform 5s cubic-bezier(0.17, 0.67, 0.83, 0.67)' : 'none',
        }}
      >
        {items.map((item, index) => {
          const angle = (360 / items.length) * index;
          return (
            <div
              key={index}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                transform: `rotate(${angle}deg) translate(0, -120px)`,
              }}
            >
              <div className="text-center">{item}</div>
            </div>
          );
        })}
      </div>
      <button
        onClick={spinWheel}
        className="mt-5 px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-400"
        disabled={isSpinning}
      >
        {isSpinning ? 'Spinning...' : 'Spin'}
      </button>
      {selectedItem && (
        <div className="mt-4">
          <p>Selected Item: <strong>{selectedItem}</strong></p>
        </div>
      )}
    </div>
  );
};

export default SpinnerWheel;
