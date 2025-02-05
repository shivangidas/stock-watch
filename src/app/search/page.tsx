"use client";
import { useActionState } from "react-dom";
const api_key = process.env.NEXT_PUBLIC_FINNHUB_API_KEY;

async function searchAction(formData: FormData) {
  const searchField = formData.get("searchField");
  const response = await fetch(
    `https://finnhub.io/api/v1/search?q=${searchField}&exchange=US&token=${api_key}`
  );
  const data = await response.json();
  console.log(data);
}

export default function Search() {
  return (
    <>
      <form action={searchAction}>
        <label htmlFor="searchField">Symbol:</label>
        <input id="searchField" name="searchField" type="text" required />
      </form>
      <div>Search Results</div>
    </>
  );
}
