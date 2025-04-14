"use client";

import { use } from "react";
import { News } from "../lib/definitions";

export default function NewsV2({ newsPromise }: { newsPromise: Promise<News[]> }) {
    const news = use(newsPromise);
    return (
        <section>
            <h2>News</h2>

            <ul>
                {news.map(data => <li key={data.id}>{data.headline}</li>)}
            </ul>
        </section>
    )
}