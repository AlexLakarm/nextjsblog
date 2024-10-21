import { articles } from "../../assets/articles";
import Link from "next/link";
import Image from "next/image";

export default function ArticlePage({ params }: { params: { id: string } }) {
    const article = articles.find((article) => article.id === parseInt(params.id));

    if (!article) {
        return <div>Article non trouvé</div>;
    }

    return (
        <div className="p-4 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
            {article.image && (
                <div className="mb-4">
                    <Image 
                        src={article.image} 
                        alt={article.title} 
                        width={800} 
                        height={400} 
                        className="rounded-lg object-cover"
                    />
                </div>
            )}
            <p className="text-gray-600 mb-2">Par {article.author} - {article.date}</p>
            <p className="mb-4">{article.description}</p>
            <Link href="/blog">
                <button className="button-85 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                    Retour à la liste des articles
                </button>
            </Link>
        </div>
    );
}
