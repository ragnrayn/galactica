import React from "react";
import styles from "./Achievement.module.css";
import fillBook from "../../assets/fillBook.svg";
import fillFolder from "../../assets/fillFolder.svg";
import fillDocument from "../../assets/fillDocument.svg";

function Achievement() {
    return (
        <>
            <div className={styles.achievements}>
                <div className={styles.achievement}>
                    <div className={styles.score}>
                        <div class={styles.circleBorder}>
                            <div class={styles.circle}>
                                <img src={fillBook} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="score-complete">
                        <div className={styles.completed}><span>3</span> / 15</div>
                        <div className={styles.completeTitle}>Courses completed</div>
                    </div>
                </div>
                <div className={styles.achievement}>
                    <div className={styles.score}>
                        <div class={styles.circleBorder}>
                            <div class={styles.circle}>
                                <img src={fillFolder} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="score-complete">
                        <div className={styles.completed}><span>6</span> / 10</div>
                        <div className={styles.completeTitle}>Folders add</div>
                    </div>
                </div>
                <div className={styles.achievement}>
                    <div className={styles.score}>
                        <div class={styles.circleBorder}>
                            <div class={styles.circle}>
                                <img src={fillDocument} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="score-complete">
                        <div className={styles.completed}><span>3</span> / 19</div>
                        <div className={styles.completeTitle}>Books read</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Achievement;