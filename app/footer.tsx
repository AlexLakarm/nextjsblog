import Image from 'next/image';
import nextImage from './assets/next.png';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-gray-900 to-gray-300 text-center py-4 text-black mt-auto">
      <p>Powered by Next.js and Alyra</p>
      <div className="flex justify-center">
        <Image src={nextImage} alt="Next.js" width={100} height={100} />
      </div>
    </footer>
  );
}
