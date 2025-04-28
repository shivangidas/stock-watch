"use client"
import 'charts.css';
import { Earning } from "@/app/lib/definitions"
import { CSSProperties, use } from "react"

type MinMax = {
    minValue: number,
    maxValue: number,

}
const normalise = (x: number, min: number, max: number) => {
    return (x - min) / (max - min)
}
export default function EarningChart({ earnings }: { earnings: Promise<Earning[]> }) {
    const data = use(earnings)
    const reverseData = [...data].reverse()
    const { minValue, maxValue }: MinMax = data.reduce((acc: MinMax, curr) => {
        acc.minValue = Math.min(acc.minValue, curr.actual, curr.estimate)
        acc.maxValue = Math.max(acc.maxValue, curr.actual, curr.estimate)
        return acc
    }, { minValue: Number.POSITIVE_INFINITY, maxValue: Number.NEGATIVE_INFINITY })

    return (
        <div id="my-chart">
            <ul className="charts-css legend legend-square legend-inline">
                <li>Actual</li>
                <li>Estimate</li>
            </ul>
            <table className='charts-css column multiple show-labels show-4-secondary-axes data-spacing-10 show-heading'>
                <caption> Earnings surprise, last 4 quarters </caption>
                <thead>
                    <tr>
                        <th scope="col">Earning period</th>
                        <th scope="col">Actual</th>
                        <th scope="col">Estimate</th>
                    </tr>
                </thead>
                <tbody>
                    {reverseData.map(earning => {
                        const normalisedActual = normalise(earning.actual, minValue, maxValue)
                        const normalisedEstimate = normalise(earning.estimate, minValue, maxValue)
                        return (
                            <tr key={earning.period}>
                                <th scope="row">{earning.period}</th>
                                <td style={{ "--size": normalisedActual } as CSSProperties}>{earning.actual}</td>
                                <td style={{ "--size": normalisedEstimate } as CSSProperties}>{earning.estimate}</td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>

        </div>
    )
}