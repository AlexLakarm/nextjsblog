import Link from "next/link";
import { articles } from "../assets/articles";

export default function Blog() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Blog</h1>
            <ul className="space-y-2">
                {articles.map((article) => (
                    <li key={article.id}>
                        <Link href={`/blog/${article.id}`} className="text-blue-500 hover:underline transition duration-300 ease-in-out hover:text-blue-600">
                            {article.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <Link href="/">
                <button className="button-85 mt-4 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                    Go to home
                </button>
            </Link>
        </div>
    );
}
