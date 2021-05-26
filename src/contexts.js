import React, {useState, createContext} from 'react';


export const BloodContext = createContext();
export const DetailsContext = createContext();

export const DetailsProvider = (props) => {
    const [details, setDetails] = useState({"donors" : []})
    const [string, setString] = useState('hello')
    const [loggedUser, setLoggedUser] = useState("")
    const [loggedNum, setLoggedNum] = useState("")
    return (
        <DetailsContext.Provider value={{details, setDetails, string, setString, loggedUser, setLoggedUser, loggedNum, setLoggedNum}}>
            {props.children}
        </DetailsContext.Provider>
    )
};

export const BloodProvider = (props) => {
    const [type, setType] = useState("");
    const [state, setState] = useState("")
    const [dist, setDist] = useState('')
    const [mandal, setMandal] = useState('')

    return (
        <BloodContext.Provider value={{type, setType, state, setState, dist, setDist, mandal, setMandal}}>
            {props.children}
        </BloodContext.Provider>
    );
};

