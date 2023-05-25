import React from "react";
import styles from "./Menu.module.css";
import Logo from "../../assets/logo.svg";

function Menu() {
    return (
        <>
            <div className={styles.menu}>
                <div>
                    <div className={styles.menuLogo}>
                        <a href="#">
                            <img src={Logo} alt="" />
                        </a>
                    </div>
                    <div className="menu-items">
                        <ul className={styles.link}>
                            <li>
                                <a href="#">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.43638 16.896V14.1441C6.43638 13.4416 7.00668 12.8721 7.71018 12.8721H10.2818C10.6196 12.8721 10.9436 13.0061 11.1825 13.2446C11.4214 13.4832 11.5556 13.8067 11.5556 14.1441L11.5556 16.896C11.5535 17.1881 11.6682 17.4689 11.8742 17.6762C12.0803 17.8834 12.3607 18 12.6532 18H14.4076C15.227 18.0021 16.0136 17.6786 16.5938 17.1007C17.1739 16.5229 17.5 15.7383 17.5 14.92L17.5 7.08017C17.5 6.41921 17.2066 5.79226 16.6989 5.3682L10.7304 0.608282C9.69222 -0.226295 8.20468 -0.199348 7.19745 0.672281L1.36522 5.3682C0.833505 5.77976 0.515705 6.40857 0.5 7.08017L0.5 14.912C0.5 16.6175 1.8845 18 3.59237 18H5.30679C5.91426 18 6.40794 17.5106 6.41235 16.904L6.43638 16.896Z" />
                                    </svg>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.3288 2.29878L17.9269 2.29871V0.773585C17.9269 0.424416 17.6838 0.127756 17.3552 0.0760953C17.2978 0.067037 15.932 -0.141446 14.2874 0.173048C12.4539 0.523633 10.9917 1.38821 9.99997 2.69522C9.00818 1.38821 7.54597 0.523633 5.71257 0.173048C4.06786 -0.141375 2.70208 0.067037 2.64477 0.0760953C2.31615 0.127827 2.07306 0.424487 2.07306 0.773585L2.07306 2.29871L0.671109 2.29871C0.300538 2.29871 0 2.61455 0 3.00405L0 16.2947C0 16.523 0.105185 16.7372 0.282356 16.8696C0.459527 17.0019 0.686664 17.0359 0.891849 16.9607C0.942219 16.9424 5.97136 15.1387 9.72145 16.9363C9.89842 17.0212 10.1016 17.0212 10.2786 16.9363C14.0181 15.1438 19.058 16.9425 19.1081 16.9607C19.1801 16.987 19.2545 17 19.3288 17C19.4663 17 19.6025 16.9556 19.7176 16.8696C19.8948 16.7373 20 16.5231 20 16.2947L20 3.00412C19.9999 2.61462 19.6995 2.29878 19.3288 2.29878ZM1.34229 15.351L1.34229 3.70933L2.07306 3.70933L2.07306 13.1021C2.07306 13.307 2.15838 13.5017 2.30592 13.6356C2.45346 13.7696 2.64969 13.8297 2.84255 13.7997C2.87959 13.7941 5.79513 13.3734 7.92523 14.9093C5.30133 14.4378 2.67521 14.9832 1.34229 15.351ZM9.32886 14.2732C8.39068 13.3824 7.16866 12.78 5.71257 12.5016C5.01183 12.3676 4.36174 12.3285 3.84187 12.3285C3.68753 12.3285 3.54463 12.332 3.41541 12.3374L3.41541 1.42126H3.41534C4.70524 1.36011 7.84307 1.50504 9.32886 4.15198L9.32886 14.2732ZM10.6711 4.15205C12.1515 1.51644 15.2943 1.36492 16.5846 1.42302L16.5846 12.3374C16.0201 12.3135 15.196 12.3278 14.2874 12.5016C12.8313 12.78 11.6093 13.3823 10.6711 14.2732L10.6711 4.15205ZM12.0725 14.9097C14.2028 13.3729 17.1199 13.794 17.1563 13.7997C17.3496 13.8302 17.5457 13.7704 17.6937 13.6365C17.8418 13.5025 17.9269 13.3075 17.9269 13.1021L17.9269 3.7094L18.6576 3.7094L18.6576 15.351C17.3243 14.983 14.6971 14.4374 12.0725 14.9097Z" />
                                    </svg>
                                    Courses
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <svg className={styles.stroke} width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15 4.58574C15 2.0261 13.3055 1 10.8659 1L5.13677 1C2.77213 1 1 1.95614 1 4.41504L1 18.1153C1 18.7907 1.70361 19.216 2.27355 18.8858L8.02348 15.5547L13.7237 18.8802C14.2946 19.2123 15 18.7869 15 18.1106L15 4.58574Z" stroke="#939495" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M4.53906 7.26028L11.3278 7.26028" stroke="#939495" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    Libraries
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <svg width="20" className={styles.stroke} height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.799 11.6942C15.4126 11.6942 15.9275 12.1993 15.8337 12.8038C15.2834 16.3597 12.232 18.9999 8.55169 18.9999C4.47996 18.9999 1.17969 15.7075 1.17969 11.6465C1.17969 8.30062 3.72763 5.18394 6.59623 4.47924C7.21263 4.32742 7.84436 4.75997 7.84436 5.39305C7.84436 9.68231 7.98889 10.7919 8.80534 11.3953C9.62179 11.9988 10.5818 11.6942 14.799 11.6942Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8129 8.12236C18.8617 5.36662 15.4686 0.924583 11.3337 1.00097C11.0121 1.0067 10.7546 1.27406 10.7402 1.59394C10.6359 3.85984 10.7766 6.79605 10.8551 8.12713C10.879 8.54154 11.2054 8.86715 11.6199 8.89102C12.9915 8.96932 16.0419 9.07627 18.2807 8.73825C18.5851 8.69241 18.8081 8.42887 18.8129 8.12236Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    Statistics
                                </a>
                            </li>
                            <li className={styles.line}></li>
                            <li>
                                <a href="#">
                                    <svg className={styles.stroke} width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.9661 14.1736L5.74609 14.1736" stroke="#939495" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.9661 10.0803L5.74609 10.0803" stroke="#939495" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M8.50109 5.99677L5.74609 5.99677" stroke="#939495" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.158 1C13.158 1 5.481 1.00391 5.469 1.00391C2.709 1.02053 1 2.79609 1 5.5044L1 14.4956C1 17.2176 2.722 19 5.506 19C5.506 19 13.182 18.9971 13.195 18.9971C15.955 18.9804 17.665 17.2039 17.665 14.4956L17.665 5.5044C17.665 2.7824 15.942 1 13.158 1Z" stroke="#939495" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    User guidline
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <button type="button" className={styles.signOut}>
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.9423 5.49319V4.58541C12.9423 2.60541 11.3369 1 9.35694 1L4.6137 1C2.63467 1 1.02927 2.60541 1.02927 4.58541L1.02927 15.4146C1.02927 17.3946 2.63467 19 4.6137 19L9.36667 19C11.3408 19 12.9423 17.3995 12.9423 15.4253L12.9423 14.5078" stroke="#939495" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M19.5522 10.0001L7.83667 10.0001" stroke="#939495" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M16.7031 7.16351L19.552 9.99973L16.7031 12.8369" stroke="#939495" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Sign Out
                    </button>
                </div>
            </div>
        </>
    )
}

export default Menu;