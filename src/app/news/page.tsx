import { api_key } from "../lib/constants";
import NewsSection from "./news";

export default async function Page() {
    const response = await fetch(
        `https://finnhub.io/api/v1/news?category=general&token=${api_key}`
    );
    const data = await response.json();

    return <NewsSection data={data}></NewsSection>
}