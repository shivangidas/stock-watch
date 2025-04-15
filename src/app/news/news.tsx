"use client";
import { News } from "../lib/definitions";
import { useState } from "react";
import styles from "./news.module.css"

const TrialSection = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles.trial}>
            {children}
        </div>
    )
}
const NewsDisplay = ({ allNews }: { allNews: News[] }) => {
    return (<ul className={styles.list}>
        {
            allNews.map(news => {
                return <li key={news.id}>
                    {news.headline} {new Date(news.datetime * 1000).toString()}
                    {" "}
                    <a href={news.url}>link</a> {" "}<b>{news.category}</b>
                </li>
            })
        }
    </ul>)
}
export default function NewsSection({ data }: { data: News[] }) {
    const [category, setCategory] = useState("");
    const filters = ["", "top news", "business", "technology", "company"];
    const allNews = category ? data.filter(news => news.category === category) : data;
    let display = <p>No news!</p>
    if (allNews.length > 0) {
        display = <NewsDisplay allNews={allNews}></NewsDisplay>
    }

    return (
        <>
            <label htmlFor="selectedCategory">Pick a category</label>
            <select name="selectedCategory" id="selectedCategory" value={category} onChange={(e) => setCategory(e.target.value)}>
                {filters.map(op => <option key={op} value={op}>{op}</option>)}
            </select>
            <TrialSection>{display}</TrialSection>
        </>
    )
}