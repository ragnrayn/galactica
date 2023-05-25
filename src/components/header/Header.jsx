import React from "react";
import styles from "./Header.module.css";
import searchIcon from "../../assets/Search.svg"
import arrowDown from "../../assets/arrowDown.svg";
import notification from "../../assets/Notification.svg";
import avatar from "../../assets/accountImage.png";

function Header() {
    return(
        <>
            <header className={styles.header}>
                <div className={styles.headerSearch}>
                    <div className={styles.searchIcon}>
                        <img src={searchIcon} alt="" />
                    </div>
                    <input type="text" placeholder="Search" className={styles.search} />
                </div>
                <div className={styles.headerBtns}>
                    <div className={styles.headerLanguage}>
                        EN <img src={arrowDown} alt="" />
                    </div>
                    <div className={styles.notification}>
                        <a href="#">
                            <img src={notification} alt="" />
                        </a>
                    </div>
                    <div className={styles.account}>
                        <div className={styles.accountInfo}>
                            <div className={styles.infoName}>Peter</div>
                            <div className={styles.infoRole}>Admin</div>
                        </div>
                        <div className={styles.accountImage}>
                            <img src={avatar} alt="" />
                            <div className={styles.imageStatus}></div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )   
}

export default Header;