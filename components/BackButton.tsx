"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import IconBack from "@/public/pngwing.com (1).png";

const BackButton = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back(); // Kembali ke halaman sebelumnya
  };

  return (
    <button
      onClick={handleBackClick}
      className="button-back-b fixed top-2 left-4 p-2  text-white rounded-full"
    >
      <Image src={IconBack} alt='back' className='back-button'/>
    </button>
  );
};

export default BackButton;
