import styles from "./modal.module.css";
import { useState, useContext } from "react";
import { StoreContext, ACTION_TYPES } from "../../store/store-context";
import { stuctureResponse } from "../../utils/capitalizeFunc";

export default function Modal({ modalFunc }) {

    const { dispatch } = useContext(StoreContext);

    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    const onLatitudeChange = (e) => {
        setLatitude(e.target.value);
    }

    const onLongitudeChange = (e) => {
        setLongitude(e.target.value);
    }

    const getWeatherData = async () => {
        try {
            const data = await fetch(`/api/getWeatherInfo?lat=${latitude}&lon=${longitude}`);
            const dataJSON = await data.json();
            const restructuredResponse = stuctureResponse(dataJSON);
            dispatch({
              type: ACTION_TYPES.SET_WEATHER_DATA,
              payload: { weatherData: restructuredResponse }
            });
            modalFunc();
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <div className={styles.modalContainer}>
            <div className={styles.modal}>
                <div className={styles.top}>
                    <div className={styles.closeBtn} onClick={modalFunc}>
                        <span>x</span>
                    </div>
                </div>
                <div className={styles.forum}>
                    <div className={styles.title}>
                        <h3>Enter new location</h3>
                    </div>
                    <hr/>
                    <div className={styles.inputSection}>
                        <div className={styles.inputZone}>
                            <div className={styles.parameter}>
                                <span>Latitude:</span>
                            </div>
                            <input
                                className={styles.input}
                                type="number"
                                value={latitude}
                                placeholder="Example:    32.543"
                                onChange={onLatitudeChange}
                            />
                        </div>
                        <div className={styles.inputZone}>
                            <div className={styles.parameter}>
                                <span>Longitude:</span>
                            </div>
                            <input
                                className={styles.input}
                                type="number"
                                value={longitude}
                                placeholder="Example:    -12.003"
                                onChange={onLongitudeChange}
                            />
                        </div>
                    </div>
                    <div className={styles.bottomSection}>
                        <button className={styles.button} onClick={getWeatherData}>SEARCH</button>
                    </div>
                </div>
                <span>Modal</span>
            </div>
        </div>
    )
}