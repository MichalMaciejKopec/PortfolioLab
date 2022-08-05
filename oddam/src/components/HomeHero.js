import image from "../assets/Home-Hero-Image.jpg"
import {UserContext} from "../context"
import {useContext} from "react";
import {Link} from "react-router-dom";

const HomeHero = () => {
//TODO img hero dać jako BG
    const {user} = useContext(UserContext);
    return (
        <div className="hero" id="hero">

            <img className="hero-image" src={image} alt="pudło z przedmiotami"/>
            <div className="hero-content">
                <h1>Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</h1>
                <div className="decoration"/>
                <div className="hero-buttons">
                    {user ?
                        <>
                            <Link to="/oddam">ODDAJ RZECZY</Link>
                            <Link to="/">ZORGANIZUJ ZBIÓRKĘ</Link>
                        </>
                        :
                        <>
                            <Link to="/login">ODDAJ RZECZY</Link>
                            <Link to="/login">ZORGANIZUJ ZBIÓRKĘ</Link>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default HomeHero;
