import Link from "next/link";
import styles from "./page.module.css";

export default function Table<Type extends Record<string, string | number>, Key extends keyof Type>({ bodyData, keyId, link }: { bodyData: Array<Type>, keyId: Key, link: boolean }) {
    if (bodyData.length === 0) {
        return <p>No data found</p>
    }
    const headersList = Object.keys(bodyData[0])
    const headers = headersList.map(head => <th key={head}>{head}</th>)
    return (
        <table className={styles.table}>
            <thead>
                <tr className={styles.tableHead}>
                    {headers}
                    {link && <th>More</th>}
                </tr>
            </thead>
            <tbody>
                {bodyData.map(row => {
                    return (<tr key={row[keyId]}>
                        {Object.entries(row).map(([key, value]) => <td key={key}>{value}</td>)}
                        {link && <td><Link href={`/search/${row.symbol}`}>Company Profile</Link></td>}
                    </tr>)
                })}
            </tbody>
        </table>
    )
}