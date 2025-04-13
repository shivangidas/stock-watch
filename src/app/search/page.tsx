"use client";

import { useState } from "react";
import { Stock } from "../lib/definitions";
import { api_key } from "../lib/constants";
import Table from "../lib/table";

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
          <Table<Stock, keyof Stock> bodyData={stockList} keyId="symbol" link={true}></Table>
        </>
      }

    </>
  );
}
