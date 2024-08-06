import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Articles() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();
        
        (async  () => {
            const response = await fetch('http://localhost:3030/jsonstore/advanced/articles/list', {
                signal: abortController.signal
            });
            const result = await response.json();

            setArticles(result);
        })();

        return () => {
            abortController.abort();
        };
    }, []);

    return (
        <ul role="list" className="mt-20 p-20 divide-y divide-gray-100">
            {articles.map((article) => (
                <Link to={`/articles/${article._id}`} key={article._id}>
                    <li className="flex justify-between gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                            <img alt="" src={article.imageUrl} className="h-12 w-12 flex-none rounded-full bg-gray-50" />
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">{article.title}</p>
                            </div>
                        </div>
                    </li>
                </Link>
            ))}
        </ul>
    )
}
