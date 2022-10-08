import styles from "./Loader.module.scss";
import loaderImg from "../../assets/loader.gif";
import ReactDOM from "react-dom";

export const Loader = () => {
    return ReactDOM.createPortal(
        <div className={styles.wrapper}>
            <div className={styles.loader}>
                <img src={loaderImg} alt="Loading..." />
            </div>
        </div>,
        document.getElementById("loader")
    );
};

