import { Suspense } from "react";
import NewsV2 from "./news";
import { News } from "../lib/definitions";
import { api_key } from "../lib/constants";

async function getNews(): Promise<News[]> {
    const response = await fetch(
        `https://finnhub.io/api/v1/news?category=general&token=${api_key}`
    );
    return response.json();
}
export default function Page() {
    const newsPromise = getNews()
    return (<>
        <h3>This uses the suspense-use promise </h3>
        <Suspense fallback="...loading">
            <NewsV2 newsPromise={newsPromise}></NewsV2>
        </Suspense>
    </>
    )
}