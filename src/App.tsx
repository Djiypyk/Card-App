import React from 'react';
import './App.css';
import {Main} from "./Components/n1-Main/Main";
import {Route, Routes} from "react-router-dom";
import {ErrorPage} from "./Components/n1-Main/Error404Page/ErrorPage";
import {TestPage} from "./Components/n2-Features/f1-Test/TestPage";
import {Auth} from "./Components/n2-Features/f2-Auth/Auth";
import {PATH} from "./Components/n1-Main/Header/Navigators/Navigations";
import {Profile} from "./Components/n1-Main/Profile/Profile";


export const App = () => {
    return (
        <div className='App'>
            {/*hashrouter  provider*/}

            <Routes>
                <Route path={'/' || PATH.MAIN} element={<Main/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.AUTH} element={<Auth/>}/>
                <Route path={PATH.TEST} element={<TestPage/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
