"use client";
import Link from "next/link";
import { News } from "../lib/definitions";
import { useState } from "react";

export default function NewsSection({ data }: { data: News[] }) {
    const [category, setCategory] = useState("");
    const filters = ["", "top news", "business", "technology", "company"];
    const allNews = category ? data.filter(news => news.category === category) : data;
    return (
        <>
            <label htmlFor="selectedCategory">Pick a category</label>
            <select name="selectedCategory" value={category} onChange={(e) => setCategory(e.target.value)}>
                {filters.map(op => <option key={op} value={op}>{op}</option>)}
            </select>
            <ul>
                {
                    allNews.map(news => {
                        return <li key={news.id}>
                            <b>{news.category}</b> {news.headline} {new Date(news.datetime * 1000).toString()}
                            {" "}
                            <Link href={news.url}>link</Link>
                        </li>
                    })
                }
            </ul>
        </>
    )
}