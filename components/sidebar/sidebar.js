import styles from "./sidebar.module.css";
import Link from "next/link";
import SidebarItem from "../sidebarItem/sidebarItem";
import LocationButton from "../locationButton/locationButton";
import { IoMdAnalytics } from "react-icons/io";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew, MdOutlineCloudDownload } from "react-icons/md";
import { TbTemperature} from "react-icons/tb";
import { GiWaterDrop } from "react-icons/gi";
import { BsWind, BsPersonLinesFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { StoreContext, ACTION_TYPES } from "../../store/store-context";
import cls from "classnames";
import Modal from "../modal/modal";


export default function Sidebar() {

    const { state, dispatch } = useContext(StoreContext);

    const [showModal, setShowModal] = useState(false);

    const iconClassName = "sidebarItem_icon__gToxY";

    const toggleSidebar = () => {
        dispatch({
            type: ACTION_TYPES.SET_SIDEBAR,
            payload: { sidebar: !state.sidebar }
        })
    }

    return (
        <div className={state.sidebar ? cls(styles.sidebar, styles.active) : styles.sidebar}>
            {
                showModal
                &&
                <Modal modalFunc={() => setShowModal(current => !current)}/>
            }
            <section className={state.sidebar ? styles.logoSection : cls(styles.logoSection, styles.center)}>
                <div className={styles.logoContainer}>
                    <IoMdAnalytics className={styles.logoIcon} />
                    <span className={state.sidebar ? undefined : styles.hide}>Weather</span>
                </div>
                <div className={styles.arrowContainer} onClick={toggleSidebar}>
                    {
                        state.sidebar
                        ?
                        <MdOutlineArrowForwardIos className={styles.arrowIcon} />
                        :
                        <MdOutlineArrowBackIosNew className={styles.arrowIcon} />
                    }
                </div>
            </section>
            <hr />
            <section className={styles.infoSection}>
                <div className={styles.itemSection}>
                    <ul className={styles.navList}>
                        <li>
                            <LocationButton modalFunc={() => setShowModal(current => !current)} />
                        </li>
                        <li>
                            <SidebarItem name={"temperature"} icon={<TbTemperature className={iconClassName} />}/>
                        </li>
                        <li>
                            <SidebarItem name={"sensation"} icon={<BsPersonLinesFill className={iconClassName} />}/>
                        </li>
                        <li>
                            <SidebarItem name={"pressure"} icon={<MdOutlineCloudDownload className={iconClassName} />}/>
                        </li>
                        <li>
                            <SidebarItem name={"humidity"} icon={<GiWaterDrop className={iconClassName} />}/>
                        </li>
                        <li>
                            <SidebarItem name={"wind"} icon={<BsWind className={iconClassName} />}/>
                        </li>
                    </ul>
                </div>
                <div className={state.sidebar ? cls(styles.bottomSection, styles.center) : styles.bottomSection}>
                    <div className={styles.bottomContainer}>
                        <FaUserCircle className={styles.bottomIcon} />
                        <div className={state.sidebar ? styles.bottomRight : styles.hide}>
                            <span>Joseph Baquerizo</span>
                            <span className={styles.position}>Web Developer</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}