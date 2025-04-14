import { api_key } from "@/app/lib/constants";
import { CompanyProfile, News } from "@/app/lib/definitions";
import NewsV2 from "@/app/newsV2/news";
import Link from "next/link";
import { Suspense } from "react";

async function getNews(symbol: string) {
    const today = new Date();
    const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]
    const monthBack = new Date(Date.parse(today.toString()) - (1000 * 60 * 60 * 24 * 31))
    const toDate = today.getFullYear() + "-" + months[today.getMonth()] + "-" + today.getDate()
    const fromDate = monthBack.getFullYear() + "-" + months[monthBack.getMonth()] + "-" + monthBack.getDate()

    const response = await fetch(
        `https://finnhub.io/api/v1/company-news?symbol=${symbol}&from=${fromDate}&to=${toDate}&token=${api_key}`
    );
    return response.json();
}
export default async function Page({ params }: { params: Promise<{ symbol: string }> }) {
    const { symbol } = await params
    const response = await fetch(
        `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${api_key}`
    );
    const company: CompanyProfile = await response.json();
    const news: Promise<News[]> = getNews(symbol)

    return (
        <>
            <h1>{company.name} </h1>
            {/* <img src={company.logo} alt="Logo" width={100} height={100} /> */}
            <Link href="/search">Back to search page</Link><br />
            <a href={company.weburl} target="_blank">company site</a>
            <p>Industry: {company.finnhubIndustry} </p>
            <p>Exchange: {company.exchange} </p>
            <p>Country: {company.country} </p>
            <p>Market cap: {company.marketCapitalization} </p>
            <Suspense fallback="...loading company news">
                <NewsV2 newsPromise={news}></NewsV2>
            </Suspense>

        </>
    )
}