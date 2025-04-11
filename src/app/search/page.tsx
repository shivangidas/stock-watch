"use client";

import { useState } from "react";
import { Stock } from "../lib/definitions";
import styles from "./page.module.css";
import { api_key } from "../lib/constants";
import Link from "next/link";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [stockList, setStockList] = useState<Stock[]>([])
  async function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    const response = await fetch(
      `https://finnhub.io/api/v1/search?q=${searchValue}&exchange=US&token=${api_key}`
    );
    const data = await response.json();
    setStockList(data.result);
  }

  const headers = stockList.length > 0 ? Object.keys(stockList[0]) : [];
  const head = headers.map(h => <th key={h}>{h}</th>)
  const body = stockList.map(stock => {
    return (
      <tr key={stock.symbol}>
        <td>{stock.description}</td>
        <td>{stock.displaySymbol}</td>
        <td>{stock.symbol} <Link href={`/search/${stock.symbol}`}>Company Profile</Link></td>
        <td>{stock.type}</td>
      </tr>
    )
  })
  return (
    <>
      <h2>Search Page</h2>
      <form>
        <label htmlFor="searchField">Symbol:</label>
        <input id="searchField" name="searchField" type="text" required value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        <button onClick={handleClick}>Find me things</button>
      </form >
      {stockList.length === 0 ? "Search something" :
        <><div>Search Results</div>
          <table className={styles.table}>
            <thead>
              <tr className={styles.tableHead}>
                {head}
              </tr>
            </thead>
            <tbody>
              {body}
            </tbody>
          </table>
        </>
      }

    </>
  );
}
