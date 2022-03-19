import React from "react";
import {NavLink} from "react-router-dom";

export const PATH = {
    MAIN: '/main',
    PROFILE: 'profile',
    TEST: '/test',
    AUTH: '/auth'
}

export const Navigations = () => {

    return (
        <>
            <NavLink to={PATH.MAIN} className={({isActive}) => isActive ? '' : ''}>Main</NavLink>
            <NavLink to={PATH.PROFILE} className={({isActive}) => isActive ? '' : ''}>Profile</NavLink>
            <NavLink to={PATH.TEST} className={({isActive}) => isActive ? '' : ''}>Test</NavLink>
            <NavLink to={PATH.AUTH} className={({isActive}) => isActive ? '' : ''}>Auth</NavLink>
        </>
    )
}