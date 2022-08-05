import React from 'react';
import {UserProvider} from "./context";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { useScroll } from 'react-scroll';

import Home from "./components/Home";
import LogReg from "./components/LogReg";
import Logout from "./components/Logout";
import Form from "./components/Form";

function App() {

    return (
        <UserProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="login" element={<LogReg create={false}/>}/>
                    <Route path="registration" element={<LogReg create={true}/>}/>
                    <Route path="logout" element={<LogReg logout={true}/>}/>
                    <Route path="oddam" element={<Form/>}/>
                </Routes>
            </BrowserRouter>
        </UserProvider>
    );
}

export default App;
