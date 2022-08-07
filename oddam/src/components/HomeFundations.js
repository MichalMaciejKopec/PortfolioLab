import {useState} from "react";
import Pagination from "./Pagination";

const HomeFundations = () => {

    const [number, setNumber] = useState(1)

    const handleClick = e => {
        const text = e.target.innerText;
        if (text.includes("Fundacjom")) {
            setNumber(1)
        } else if (text.includes("Organizacjom")) {
            setNumber(2)
        } else {
            setNumber(3)
        }
    }

    return (
        <div className="fundations">
            <h1 className="fundations-title">Komu pomagamy?</h1>
            <div className="decoration"/>
            <div className="fundations-buttons">
                <button className="fundations-buttons-btn" onClick={handleClick}>Fundacjom</button>
                <button className="fundations-buttons-btn" onClick={handleClick}>Organizacjom <br/> pozarządowym
                </button>
                <button className="fundations-buttons-btn" onClick={handleClick}>Lokalnym <br/> zbiórkom</button>
            </div>
            <p className="fundations-text">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
                współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
            <ul className="fundations-list">
                {number === 1 ?
                    <Pagination itemsPerPage={3} nr={number}/>
                    :
                    number === 2 ?
                        <Pagination itemsPerPage={3} nr={number}/>
                        :
                        <Pagination itemsPerPage={3} nr={number}/>
                }
            </ul>
        </div>
    )
}

export default HomeFundations;
