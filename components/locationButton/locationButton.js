import styles from "./locationButton.module.css";
import { useContext } from "react";
import { StoreContext } from "../../store/store-context";
import { BsFillGeoAltFill } from "react-icons/bs";
import cls from "classnames";

export default function LocationButton({ modalFunc }) {

    const { state } = useContext(StoreContext);

    return (
        <div className={state.sidebar? cls(styles.center, styles.item) : styles.item} onClick={modalFunc}>
            <div className={styles.innerItem}>
                <BsFillGeoAltFill className={styles.icon}/>
                <span className={state.sidebar ? styles.hide : styles.itemName}>Set Location</span>
            </div>
        </div>
    )
}