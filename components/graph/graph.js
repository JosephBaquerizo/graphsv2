import styles from "./graph.module.css";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(
    Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement
);

export default function Graph({ data, bColor, bgColor, label, labels }) {

    const dataset = {
        labels: labels,
        datasets: [
            {
                label: label,
                data: data,
                backgroundColor: bgColor,
                borderColor: bColor,
                tension: 0.5,
                fill: true
            },
        ],
    };

    return (
        <>
        {
            data
            ?
            <div className={styles.graph}>
                <Line data={dataset}></Line>
            </div>
            :
            <div className={styles.graph}>
            </div>
        }
        </>
    )
}