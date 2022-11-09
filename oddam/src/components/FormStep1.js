import {useContext} from "react";
import {FormContext} from "../context/FormContext";

const FormStep1 = () => {

    const {type, SetState} = useContext(FormContext)

    const handleChange = e => {
        SetState(e.target.value)
    }

    return (
        <div className="form-step1">
            <h2>Zaznacz co chcesz oddać:</h2>
            <form>
                <div>
                    <input type="radio" value="godClothes" id="godClothes" checked={type === "godClothes"}
                           onChange={handleChange}/>
                    <label htmlFor="godClothes" className="checkmark"/>
                    <label htmlFor="godClothes">ubrania, które nadają się do ponownego użycia</label>
                </div>
                <div>
                    <input type="radio" value="badClothes" id="badClothes" checked={type === "badClothes"}
                           onChange={handleChange}/>
                    <label htmlFor="badClothes" className="checkmark"/>
                    <label htmlFor="badClothes">ubrania, do wyrzucenia</label>
                </div>
                <div>
                    <input type="radio" value="toys" id="toys" checked={type === "toys"}
                           onChange={handleChange}/>
                    <label htmlFor="toys" className="checkmark"/>
                    <label htmlFor="toys">zabawki</label>
                </div>
                <div>
                    <input type="radio" value="books" id="books" checked={type === "books"}
                           onChange={handleChange}/>
                    <label htmlFor="books" className="checkmark"/>
                    <label htmlFor="books">książki</label>
                </div>
                <div>
                    <input type="radio" value="other" id="other" checked={type === "other"}
                           onChange={handleChange}/>
                    <label htmlFor="other" className="checkmark"/>
                    <label htmlFor="other">inne</label>
                </div>
            </form>
        </div>
    )
}

export default FormStep1;
