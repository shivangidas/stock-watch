"use client";

import { ChangeEvent, useState } from "react";
import { Stock } from "../lib/definitions";
import { api_key } from "../lib/constants";
import Table from "../ui/table";
import SearchForm from "./form";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [stockList, setStockList] = useState<Stock[]>([])
  async function handleClick() {
    const response = await fetch(
      `https://finnhub.io/api/v1/search?q=${searchValue}&exchange=US&token=${api_key}`
    );
    const data = await response.json();
    setStockList(data.result);
  }
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value)
  }
  return (
    <>
      <SearchForm searchValue={searchValue} handleChange={handleChange} handleClick={handleClick} ></SearchForm>
      <Table<Stock, keyof Stock> bodyData={stockList} keyId="symbol" link={true}></Table>
    </>
  );
}
