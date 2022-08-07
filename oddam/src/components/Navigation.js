import {Link, useLocation, useNavigate} from "react-router-dom";
import {Link as Scroll, scroller} from "react-scroll";
import {UserContext} from "../context/userContext"
import {useContext} from "react";

const Navigation = () => {

    const navigate = useNavigate();
    const path = useLocation().pathname;
    const location = path.split('/')[1];
    const {user} = useContext(UserContext);

    const goToHomeAndScroll = async (e) => {
        e.preventDefault();
        await navigate('/');
        await scroller.scrollTo(e.target.getAttribute("href"), {
            smooth: true,
            delay: 100,
            offset: -50
        });
    };

    return (
        <div className="nav">
            <div className="nav-log">
                {user ?
                    <p>Cześć {user.email}</p>
                    :
                    <></>
                }
                {user ?
                    <>
                        <Link to="/oddam">Oddaj rzeczy</Link>
                        <Link to="/logout">Wyloguj</Link>
                    </>
                    :
                    <>
                        <Link to="/login">Zaloguj</Link>
                        <Link to="/registration">Załóż konto</Link>
                    </>
                }
            </div>
            <div className="nav-main">
                <Link to="/">Start</Link>
                {location !== "" ?
                    <>
                        <a href="steps" onClick={goToHomeAndScroll}>O co chodzi?</a>
                        <a href="aboutUs" onClick={goToHomeAndScroll}>O nas</a>
                        <a href="fundations" onClick={goToHomeAndScroll}>Fundacja i organizacje</a>
                        <a href="contact" onClick={goToHomeAndScroll}>Kontakt</a>
                    </>
                    :
                    <>
                        <Scroll to="steps" smooth={true} offset={-50}>O co chodzi?</Scroll>
                        <Scroll to="aboutUs" smooth={true} offset={-50}>O nas</Scroll>
                        <Scroll to="fundations" smooth={true} offset={-50}>Fundacja i organizacje</Scroll>
                        <Scroll to="contact" smooth={true} offset={-50}>Kontakt</Scroll>
                    </>
                }

            </div>

        </div>
    )
}

export default Navigation;
