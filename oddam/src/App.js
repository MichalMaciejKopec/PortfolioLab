import {BrowserRouter, Route, Routes} from "react-router-dom";

import Main from "./components/Main";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Logout from "./components/Logout";
import Form from "./components/Form";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="registration" element={<Registration/>}/>
                <Route path="logout" element={<Logout/>}/>
                <Route path="oddam" element={<Form/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
