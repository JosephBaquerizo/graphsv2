import styles from "./indicator.module.css";
import cls from "classnames";

export default function Indicator({ color, icon, title, value, units }) {

    const getColor = (colorName) => {
        switch (colorName) {
            case "green":
                return styles.green;
            case "red":
                return styles.red;
            case "blue":
                return styles.blue;
            case "purple":
                return styles.purple;
        }
    }

    const getValueColor = (colorName) => {
        switch (colorName) {
            case "green":
                return styles.greenTitle;
            case "red":
                return styles.redTitle;
            case "blue":
                return styles.blueTitle;
            case "purple":
                return styles.purpleTitle;
        }
    }
    
    const getDescription = (title) => {
        switch (title) {
            case "average":
                return "The average of the last queries"
            case "max":
                return "The max value among the queries"
            case "min":
                return "The min value among the queries"
            case "latest":
                return "The latest value from the queries"
        }
    }

    return (
        <div className={styles.indicator}>
            <div className={cls(styles.iconContainer, getColor(color))}>
                {
                    icon
                }
            </div>
            <span className={cls(styles.value, getValueColor(color))}>{value} {units}</span>
            <div className={styles.infoContainer}>
                <span className={styles.title}>{title.toUpperCase()}</span>
                <span className={styles.description}>{getDescription(title)}</span>
            </div>
        </div>
    )
}