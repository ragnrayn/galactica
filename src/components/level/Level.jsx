import React from "react";
import styles from "./Level.module.css";
import levelPlanet from "../../assets/levelPlanet.png";
import hand from "../../assets/wavingHand.png";

function Level() {
    return (
        <>
            <div className={styles.level}>
                <div className={styles.levelHello}>
                    <div className={styles.helloName}>Hey, Peter <img src={hand} alt="" /></div>
                    <div className={styles.helloText}>
                        Here’s complex overview of your progress
                    </div>
                </div>
                <div className={styles.levelPlanet}>
                    <div class={styles.circleBorder}>
                        <div class={styles.circle}>
                            <img src={levelPlanet} alt="" />
                            <div className={styles.levelScore}>
                                <div className={styles.scoreNumber}>
                                    4
                                </div>
                                <div className={styles.scoreText}>
                                    Level
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.newLevel}>
                    63% to reach next level
                </div>
            </div>
        </>
    )
}

export default Level;