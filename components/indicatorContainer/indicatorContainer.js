import styles from "./indicatorContainer.module.css";

export default function IndicatorContainer({children}) {
    return (
        <div className={styles.indicatorContainer}>
            {children}
        </div>
    )
}