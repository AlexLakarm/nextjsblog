import Image from "next/image";
import Footer from "./footer";
import Header from "./header";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center flex-grow">
      <div className="text-center mt-20">
        <h1 className="text-white text-4xl mb-6">Welcome to my blog !</h1>
        <Link href="/blog">
          <button className="button-85 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            Go to blog
          </button>
        </Link>
      </div>
    </div>
  );
}
