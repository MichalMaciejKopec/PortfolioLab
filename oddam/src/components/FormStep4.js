import {useContext} from "react";
import {FormContext} from "../context/FormContext";

const FormStep4 = () => {

    const {adres, SetState} = useContext(FormContext)

    const handleStep4 = e => {
        let data;
        const what= e.target.getAttribute("name")
        const value = e .target.value
        switch (what){
            case "street":{
                data = {
                    ...adres,
                    street: value
                };
                break;
            }
            case "city":{
                data = {
                    ...adres,
                    city: value
                };
                break;
            }
            case "postCode":{
                data = {
                    ...adres,
                    postCode: value
                };
                break;
            }
            case "phone":{
                data = {
                    ...adres,
                    phone: value
                };
                break;
            }
            case "date":{
                data = {
                    ...adres,
                    date: value
                };
                break;
            }
            case "hour":{
                data = {
                    ...adres,
                    hour: value
                };
                break;
            }
            case "notes":{
                data = {
                    ...adres,
                    notes: value
                };
                break;
            }
        }
        SetState(data);
    }

    return (
        <div className="form-step4">
            <h2>Podaj adres oraz termin odbioru rzecz przez kuriera</h2>
            <form>
                <div className="form-step4-adres">
                    <label>Ulica</label>
                    <input type="text" name="street" value={adres.street} onChange={handleStep4}/>
                    <label>Miasto</label>
                    <input type="text" name="city" value={adres.city} onChange={handleStep4}/>
                    <label>Kod pocztowy</label>
                    <input type="text" name="postCode" value={adres.postCode} onChange={handleStep4}/>
                    <label>Numer telefonu</label>
                    <input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" value={adres.phone}
                           onChange={handleStep4}/>
                </div>
                <div className="form-step4-date">
                    <label>Data</label>
                    <input type="text" name="date" value={adres.date} onChange={handleStep4}/>
                    <label>Godzina</label>
                    <input type="text" name="hour" value={adres.hour} onChange={handleStep4}/>
                    <label>Uwagi dla kuriera</label>
                    <textarea name="notes" value={adres.notes} onChange={handleStep4}/>
                </div>
            </form>
        </div>
    )
}

export default FormStep4;
