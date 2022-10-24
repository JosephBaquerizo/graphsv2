import styles from "./locationButton.module.css";
import { useContext } from "react";
import { StoreContext } from "../../store/store-context";
import { BsFillGeoAltFill } from "react-icons/bs";
import cls from "classnames";

export default function LocationButton({ modalFunc }) {

    const { state } = useContext(StoreContext);

    return (
        <div className={state.sidebar? styles.item : cls(styles.center, styles.item)} onClick={modalFunc}>
            <div className={styles.innerItem}>
                <BsFillGeoAltFill className={styles.icon}/>
                <span className={state.sidebar ? styles.itemName : styles.hide}>Set Location</span>
            </div>
        </div>
    )
}