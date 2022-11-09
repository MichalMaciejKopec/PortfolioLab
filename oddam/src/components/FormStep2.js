import {useContext} from "react";
import {FormContext} from "../context/FormContext";

const FormStep2 = ()=>{

    const{bags, SetState}=useContext(FormContext)

    const handleChange = e => {
        SetState(e.target.value)
    }

    return(
        <div className="form-step2">
            <h2>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
            <span htmlFor="bags">Liczba 60l worków:</span>
            <select name="bags" id="bags" onChange={handleChange}>
                <option value={0} selected={bags===0} disabled hidden>— wybierz —</option>
                <option value={1} selected={bags===1}>1</option>
                <option value={2} selected={bags===2}>2</option>
                <option value={3} selected={bags===3}>3</option>
                <option value={4} selected={bags===4}>4</option>
                <option value={5} selected={bags===5}>5</option>
            </select>
        </div>
    )
}

export default FormStep2;
