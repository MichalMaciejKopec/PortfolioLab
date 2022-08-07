import React from 'react';
import {UserProvider} from "./context/userContext";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "./components/Home";
import LogReg from "./components/LogReg";
import Form from "./components/Form";

function App() {

    return (
        <UserProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="login" element={<LogReg create={false} logout={false}/>}/>
                    <Route path="registration" element={<LogReg create={true} logout={false}/>}/>
                    <Route path="logout" element={<LogReg create={false} logout={true}/>}/>
                    <Route path="oddam" element={<Form/>}/>
                </Routes>
            </BrowserRouter>
        </UserProvider>
    );
}

export default App;
