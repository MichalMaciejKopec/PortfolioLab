import {createContext, useState} from 'react';

export const FormContext = createContext();

export function FormProvider({children}) {

    const [step, setStep] = useState(1);
    const [type, setType] = useState("goodClothes");
    const [bags, setBags] = useState(0);
    const [fromAndWhom, setFromAndWhom] = useState({
        localization: "",
        whom: [],
        organization: ""

    });
    const [adres, setAdres] = useState({
        street: "",
        city: "",
        postCode: "",
        phone: "",
        date: "",
        hour: "",
        notes: ""
    })

    const SetStep = step => {
        setStep(step);
    }

    const SetState = data => {
        switch (step) {
            case 1:
                setType(data);
                break;
            case 2:
                setBags(parseInt(data));
                break;
            case 3:
                setFromAndWhom(data);
                break;
            case 4:
                setAdres(data);
                break;
        }
    }

    return (
        <FormContext.Provider value={{step, type, bags, fromAndWhom, adres, SetState,SetStep}}>
            {children}
        </FormContext.Provider>
    )
}
