import Icon1 from "../assets/Icon-1.svg";
import Icon2 from "../assets/Icon-2.svg";
import Icon3 from "../assets/Icon-3.svg";
import Icon4 from "../assets/Icon-4.svg";

import {UserContext} from "../context/userContext"
import {useContext} from "react";
import {Link} from "react-router-dom";

const HomeSteps = () => {

    const {user} = useContext(UserContext);

    return (
        <div className="steps" id="steps">
            <div className="steps-title">
                <h1>Wystarczą 4 proste kroki</h1>
                <div className="decoration"/>
            </div>
            <div className="steps-container">
                <div className="steps-box">
                    <img className="steps-box-icon" src={Icon1} alt="koszulka"/>
                    <p className="steps-box-title">Wybierz rzeczy</p>
                    <p className="steps-box-text">ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="steps-box">
                    <img className="steps-box-icon" src={Icon2} alt="torba"/>
                    <p className="steps-box-title">Spakuj je</p>
                    <p className="steps-box-text">skorzystaj z worków na śmieci</p>
                </div>
                <div className="steps-box">
                    <img className="steps-box-icon" src={Icon3} alt="lupa"/>
                    <p className="steps-box-title">Zdecyduj komu chcesz pomóc</p>
                    <p className="steps-box-text">wybierz zaufane miejsce</p>
                </div>
                <div className="steps-box">
                    <img className="steps-box-icon" src={Icon4} alt="strzałki"/>
                    <p className="steps-box-title">Zamów kuriera</p>
                    <p className="steps-box-text">kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            {user?
                <Link to="/oddam">ODDAJ <br/> RZECZY</Link>
            :
                <Link to="/login">ODDAJ <br/> RZECZY</Link>
            }
        </div>
    )
}

export default HomeSteps;
