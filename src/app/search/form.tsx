import { ChangeEventHandler } from "react"

export default function SearchForm({ searchValue, handleClick, handleChange }: {
    searchValue: string,
    handleClick: string | ((formData: FormData) => void | Promise<void>) | undefined,
    handleChange: ChangeEventHandler<HTMLInputElement> | undefined
}) {
    return (
        <form action={handleClick}>
            <label htmlFor="searchField">Symbol:</label>
            <input id="searchField" name="searchField" type="text" required value={searchValue} onChange={handleChange} />
            <button type="submit">Find me things</button>
        </form >
    )
}