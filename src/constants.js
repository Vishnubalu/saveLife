import vishnu from "./images/vishnu.png"
import ramya from "./images/ramya.png"
import lucky from "./images/lucky.png"
import dipen from "./images/dipen.JPG"


const BASE_URL = "http://127.0.0.1:8000/savelife/"
export const TOTAL_INFO_URL = BASE_URL + "bloodInfo";
export const BLOOD_SEARCH_URL = BASE_URL + "findBlood/";
export const REGISTRATION_URL = BASE_URL + "signup/";
export const BLOOD_BANK_SEARCH_URL = BASE_URL + "getbank/";
export const LOGIN_USER_URL = BASE_URL + "login/";
export const CHAT_URL = "http://localhost:5005/webhooks/rest/webhook/";
export const ADD_PATIENT_URL = BASE_URL + "addpatient/";
export const GET_PATIENT_URL = BASE_URL + "getpatients/";
export const VERIFY_OTP_URL = BASE_URL + "verify/";
export const SEND_SMS_URL =  BASE_URL + "send_sms/";


export const developerList = [
    {
        "name": "vishnu",
        "img": vishnu,
        "designation": "Founder & developer",
        "content": "Front-end (React) and Back-end(Django) Developer",
        "know": "https://www.linkedin.com/in/vishnu-sangem/"
    },
    {
        "name": "Ramya",
        "img": ramya,
        "designation": "Co-Founder & content writer",
        "content": "Programmer and Content writer",
        "know": "https://www.linkedin.com/in/vavilala-ramya-a9171313a/",
    },
    {
        "name": "Lucky",
        "img": lucky,
        "designation": "Co-Founder and Developer",
        "content": "Backend and database architect",
        "know": "https://www.linkedin.com/in/lavanya-kumar-allu-508932145/"
    },
    {
        "name": "Dipen",
        "img": dipen,
        "designation": "Supervisor",
        "content": "Supervising and tracking",
        "know": "https://www.linkedin.com/in/dipen-saini-2ba773a9/"
    }
]


export function BloodSearch(type, state, district, mandal, callback) {
    fetch(BLOOD_SEARCH_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "details": {
                "bloodType": type,
                "state": state,
                "district": district,
                "mandal": mandal
            }
        })

    }).then((response) => {
        response.json().then((jsonResponse) => {

            callback(jsonResponse);
        })
    });
}


export function Signup(name, email, pass, mob, add, age, gender, type, state, district, mandal, callback) {
    fetch(REGISTRATION_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "details": {
                "bloodType": type,
                "state": state,
                "district": district,
                "mandal": mandal,
                "user_name": name,
                "email": email,
                "phoneNum": mob,
                "password": pass,
                "age": age,
                "gender": gender,
                "address": add
            }
        })

    }).then((response) => {
        response.json().then(function (jsonResponse) {
            console.log(jsonResponse);
            callback(jsonResponse)

        })
            .catch(console.log(response));
    });
}

export function DonorSearchByArea(type, state, district, callback) {
    fetch(BLOOD_SEARCH_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "details": {
                "bloodType": type,
                "state": state,
                "district": district,
                "mandal": ""
            }
        })

    }).then((response) => {
        response.json().then((jsonResponse) => {
            callback(jsonResponse);
            console.log(jsonResponse)
        })
    });
}

export function BloodbankSearchRequest(state, district, callback) {
    fetch(BLOOD_BANK_SEARCH_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "details": {
                "state": state,
                "district": district
            }
        })

    }).then((response) => {
        response.json().then((jsonResponse) => {
            callback(jsonResponse);
            console.log("result");
            console.log(jsonResponse)
        })
    });
}

export function LoginUser(phoneNum, password, callback) {
    fetch(LOGIN_USER_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "credentials": {
                "phoneNum": phoneNum,
                "password": password
            }
        })

    }).then((response) => {
        response.json().then((jsonResponse) => {
            callback(jsonResponse);
            console.log("result");
            console.log(jsonResponse)
        })
    });
}


export function AddPatient(name, email, phone, hospital, Message, age, gender, date, type, state, district, mandal, callback) {
    fetch(ADD_PATIENT_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "details": {
                "patient_name": name,
                "blood": type,
                "state": state,
                "district": district,
                "mandal": mandal,
                "email": email,
                "contact": phone,
                "age": age,
                "gender": gender,
                "message": Message,
                "hospital": hospital,
                "date_need": date
            }
        })

    }).then((response) => {
        response.json().then(function (jsonResponse) {
            console.log(jsonResponse);
            callback(jsonResponse)

        })
            .catch(console.log(response));
    });
}

export function getAllPatients(callback) {
    fetch(GET_PATIENT_URL, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
    }).then((response) => {
        response.json().then((jsonResponse) => {
            callback(jsonResponse);
            console.log(jsonResponse)
        })
    });
}

export function GetDonorsByType(blood_type, callback) {
    fetch(BLOOD_SEARCH_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "details": {
                "bloodType": blood_type,
                "state": "",
                "district": "",
                "mandal": ""
            }
        })

    }).then((response) => {
        response.json().then((jsonResponse) => {
            callback(jsonResponse);
            console.log(jsonResponse)
        })
    });
}

export function verifiyOtp(otp, phoneNum, callback) {
    fetch(VERIFY_OTP_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "details": {
                "otp": otp,
                "phoneNum": phoneNum
            }
        })
    }).then((response) => {
        response.json().then((jsonResponse) => {
            callback(jsonResponse);
            console.log(jsonResponse)
        })
    });
}

export function send_sms(Name, From, To, Messege, Hosp, callback){
    fetch(SEND_SMS_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "details": {
                "Name" : Name,
                "From": From,
                "To": To,
                "Messege" : Messege,
                "Hospital" : Hosp
            }
        })
    }).then((response) => {
        response.json().then((jsonResponse) => {
            callback(jsonResponse);
            console.log(jsonResponse)
        })
    });
}
