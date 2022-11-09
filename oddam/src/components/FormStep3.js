import {useContext, useState} from "react";
import {FormContext} from "../context/FormContext";

const FormStep3 = () => {

    const {fromAndWhom, SetState} = useContext(FormContext)
    const [komu, setKomu] = useState(fromAndWhom.whom)

    const handleStep3 = e => {
        let data = fromAndWhom;
        const what = e.target.getAttribute("type");
        switch (what) {
            case "select": {
                data = {
                    ...data,
                    localization: e.target.value
                };
                break;
            }
            case "text": {
                data = {
                    ...data,
                    organization: e.target.value
                };
                break;
            }
            case "checkbox": {
                let copy = [...komu];
                if (copy.includes(e.target.id)) {
                    copy = copy.filter(el => el !== e.target.id)
                } else {
                    copy.push(e.target.id);
                }
                setKomu(copy);
                data = {
                    ...data,
                    whom: copy
                };
                break;
            }
        }
        SetState(data);
    }

    return (
        <div className="form-step3">
            <form>
                <h2>Lokalizacja</h2>
                <select type="select" name="localization" id="localization" onChange={handleStep3}>
                    <option value={0} selected={fromAndWhom.localization === ""} disabled hidden>— wybierz —</option>
                    <option value="Poznań" selected={fromAndWhom.localization === "Poznań"}>Poznań</option>
                    <option value="Warszawa" selected={fromAndWhom.localization === "Warszawa"}>Warszawa</option>
                    <option value="Kraków" selected={fromAndWhom.localization === "Kraków"}>Kraków</option>
                    <option value="Wrocław" selected={fromAndWhom.localization === "Wrocław"}>Wrocław</option>
                    <option value="Katowice" selected={fromAndWhom.localization === "Katowice"}>Katowice</option>
                </select>
                <p>Komu chcesz pomóc?</p>
                <div className="form-step3-checkboxes">
                    <input type="checkbox" id="children" checked={komu.includes("children")} onChange={handleStep3}/>
                    <label htmlFor="children">dzieciom</label>
                    <input type="checkbox" id="mothers" checked={komu.includes("mothers")} onChange={handleStep3}/>
                    <label htmlFor="mothers">samotnym matkom</label>
                    <input type="checkbox" id="homeless" checked={komu.includes("homeless")} onChange={handleStep3}/>
                    <label htmlFor="homeless">bezdomnym</label>
                    <input type="checkbox" id="disabled" checked={komu.includes("disabled")} onChange={handleStep3}/>
                    <label htmlFor="disabled">niepełnosprawnym</label>
                    <input type="checkbox" id="oldPeople" checked={komu.includes("oldPeople")}
                           onChange={handleStep3}/>
                    <label htmlFor="oldPeople">osobom starszym</label>
                </div>
                <p> Wpisz nazwę konkretnej organizacji (opcjonalnie)</p>
                <input type="text" name="organization" value={fromAndWhom.organization} onChange={handleStep3}/>
            </form>
        </div>
    )
}

export default FormStep3;
