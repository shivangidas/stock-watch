import { api_key } from "../lib/constants"
import { Country } from "../lib/definitions"
import Table from "../lib/table"

export default async function CountryPage() {
    const data = await fetch(`https://finnhub.io/api/v1/country?token=${api_key}`)
    const countries: Country[] = await data.json()
    return (
        <main>
            <Table<Country, keyof Country> bodyData={countries} keyId="codeNo" link={false}></Table>
        </main>
    )
}