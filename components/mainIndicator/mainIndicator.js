import styles from "./mainIndicator.module.css";
import { useContext, useState } from "react";
import { StoreContext } from "../../store/store-context";


export default function MainIndicator() {

    const { state } = useContext(StoreContext);

    return (
        <>
            {
                state.weatherData
                ?
                <div className={styles.mainIndicator}>
                    <div className={styles.topContainer}>
                        <div className={styles.top}>
                            <span className={styles.place}>{state.weatherData.city}, {state.weatherData.country}</span>
                            <span className={styles.timezone}>timezone: {state.weatherData.timezone}</span>
                        </div>
                        <hr />
                    </div>
                    <div className={styles.middle}>
                        <span className={styles.value}>{state.weatherData.cnt} queries</span>
                    </div>
                    <div className={styles.bottom}>
                        <span className={styles.weather}>{state.weatherData.description}</span>
                    </div>
                </div>
                :
                <div className={styles.mainIndicator}>
                </div>
            }
        </>
    )
}
