import styles from "./doughnut.module.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutGraph({ visibility }) {

  const dataset = {
      labels: ['Visibility (%)'],
      datasets: [
        {
          label: 'Visibility',
          data: [visibility, 100 - visibility],
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'lightgrey',
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'grey',
          ],
          borderWidth: 1,
        },
      ],
      maintainAspectRatio: false
    };

  return (
      <div className={styles.doughnut}>
          <div className={styles.doughnutContainer}>
              <Doughnut data={dataset} />
          </div>
          <div className={styles.visibilityNumber}>
            <p>{visibility} %</p>
          </div>
      </div>
  )
}