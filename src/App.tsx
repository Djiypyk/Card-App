import React from 'react';
import './App.css';
import {Main} from "./Components/n1-Main/Main";
import {Route, Routes} from "react-router-dom";
import {ErrorPage} from "./Components/n1-Main/Error404Page/ErrorPage";
import {TestPage} from "./Components/n2-Features/f1-Test/TestPage";
import {Auth} from "./Components/n2-Features/f2-Auth/Auth";
import {PATH} from "./Components/n1-Main/Header/Navigators/Navigations";
import {Profile} from "./Components/n1-Main/Profile/Profile";
import {Header} from "./Components/n1-Main/Header/Header";
import {ChangePassword} from "./Components/n2-Features/f4-ChangePassword/ChangePassword";
import {RecoveryPassword} from "./Components/n2-Features/f4-ChangePassword/RecoveryPassword";


export const App = () => {
    return (
        <div className='App'>

            <Header/>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path={`${PATH.AUTH}`} element={<Auth/>}/>
                <Route path={`${PATH.PROFILE}`} element={<Profile/>}/>
                <Route path={`${PATH.REGISTRATION}`} element={<Profile/>}/>
                <Route path={`${PATH.TEST}`} element={<TestPage/>}/>
                <Route path={`${PATH.CHANG_PASS}`} element={<ChangePassword/>}/>
                <Route path={`${PATH.REC_PASS}`} element={<RecoveryPassword/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
