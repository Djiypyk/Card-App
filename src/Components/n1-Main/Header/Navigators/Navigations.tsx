import React from "react";
import {NavLink} from "react-router-dom";
import styles from './Navigations.module.css'

export const PATH = {
    MAIN: 'main',
    PROFILE: 'profile',
    TEST: 'test',
    AUTH: 'auth',
    REGISTRATION: 'registration',
    CHANG_PASS: 'change_password',
    REC_PASS: 'recovery_password'

}

export const Navigations = () => {

    return (
        <>
            <div className={styles.nav}>
                <NavLink to={'/'}
                         className={({isActive}) => `${styles.link} ${isActive ? styles.active : ''}`}>Main</NavLink>
                <NavLink to={PATH.REGISTRATION}
                         className={({isActive}) => `${styles.link} ${isActive ? styles.active : ''}`}>Registration</NavLink>
                <NavLink to={PATH.PROFILE}
                         className={({isActive}) => `${styles.link} ${isActive ? styles.active : ''}`}>Profile</NavLink>
                <NavLink to={PATH.TEST}
                         className={({isActive}) => `${styles.link} ${isActive ? styles.active : ''}`}>Test</NavLink>
                <NavLink to={PATH.AUTH}
                         className={({isActive}) => `${styles.link} ${isActive ? styles.active : ''}`}>Auth</NavLink>
                <NavLink to={PATH.CHANG_PASS}
                         className={({isActive}) => `${styles.link} ${isActive ? styles.active : ''}`}>Change Pass</NavLink>
                <NavLink to={PATH.REC_PASS}
                         className={({isActive}) => `${styles.link} ${isActive ? styles.active : ''}`}>Recovery Pass</NavLink>

            </div>
        </>
    )
}