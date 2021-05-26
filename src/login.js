import React, {useContext} from 'react';
import {Box, makeStyles} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import {BloodbankSearchRequest, LoginUser, verifiyOtp} from "./constants";
import stateData from "./data";
import Typography from "@material-ui/core/Typography";
import {useHistory} from "react-router-dom";
import OtpInput from 'react-otp-input';
import {DetailsContext} from "./contexts";

const useStyle = makeStyles({
    text: {
        width: "40%",
        margin: "2%"
    },
    button:
        {
            height: "50px",
            width: "70px",
            marginBottom: "1%",
            fontSize: "14px",
            fontWeight: "Bold",
            color: "white",
            background: "#d43f28",
            borderRadius: "10%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderColor: "white",
            cursor: "pointer"
        },
    div: {
        boxShadow: "2px 3px 4px 5px rgba(0.2, 0.2, 0.2, 0.2)",
        justifyContent: "center",
        alignItem: "center",
        border: "2px solid #d43f28",
        borderRadius: "10px",
        width: "50%",
        marginLeft: "25%",
        /* To adjust the height as well */
        height: "fit-content"
    }
});

function Login(props) {
    const history = useHistory();
    const [phoneNum, setphoneNum] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [verified, setVerify] = React.useState(true);
    const [otp, setOtp] = React.useState("");
    const log = useContext(DetailsContext);

    let myStorage = window.localStorage;
    const classes = useStyle();
    let btn = false;

    function onclickLogin() {

        LoginUser(phoneNum, password, (result) => {
            if (result["credentials"] && result["verified"]) {
                console.log(result["user_info"]["user_name"]);
                log.setLoggedUser(result["user_info"]["user_name"]);
                log.setLoggedNum(phoneNum);
                history.push("/")
            } else if (result["credentials"] && !result["verified"]) {
                setVerify(result["verified"])
                console.log(verified)
                alert("mobile number not verified")
            } else {
                setMessage("mobile number or password incorrect")
            }
        });
    };

    function handleOtpChange(otp) {
        setOtp(otp)
    }

    function onchanagePhonenum(event) {
        setphoneNum(event.target.value);
        setMessage("")
    }

    function onchangePassword(event) {
        setPassword(event.target.value);
        setMessage("")
    }

    function onClickOtp() {
        verifiyOtp(otp, phoneNum, (result)=>{
            if(result["verified"]){
                setVerify(true)
                setMessage("mobile number verified now login")
            }
            else{
                setVerify(false)
                alert("incorrect otp entered")
            }
        })
    }

    return (
        <div justify="center" className={classes.div}>
            <Grid style={{justifyContent: "center", alignItems: "center", margin: "5%"}}>
                <Grid container justify="center" spacing={2} className={{flexGrow: 1}}>
                    <TextField className={classes.text} id="Name" label="Mobile Number" value={phoneNum}
                               onChange={onchanagePhonenum} variant="outlined" required={true}/>
                </Grid>
                <Grid container justify="center" spacing={2} className={{flexGrow: 1}}>
                    <TextField className={classes.text} type={"password"} id="Name" label="Password" value={password}
                               onChange={onchangePassword} variant="outlined" required={true}/>
                </Grid>
                <Grid container justify="center" spacing={2} className={{flexGrow: 1}} style={{padding: "20px"}}>
                    <Grid container justify="center" spacing={2} className={{flexGrow: 1}} style={{padding: "10px"}}>
                        <button className={classes.button} disabled={btn} onClick={onclickLogin}>
                            Login
                        </button>
                    </Grid>
                    <Grid container justify="center" spacing={2} className={{flexGrow: 1}} style={{padding: "10px"}}>
                        <Typography style={{fontSize: "12px", color: "red"}}>
                            {message}
                        </Typography>

                        {
                            (verified) ? <div></div> : <Grid style={{justifyContent: "center", alignItems: "center"}}>
                                Enter otp :
                                <OtpInput
                                    value={otp}
                                    onChange={handleOtpChange}
                                    numInputs={6}
                                    shouldAutoFocus={true}
                                    separator={<span>-</span>}
                                />
                                <button onClick={onClickOtp}>
                                    OTP
                                </button>
                            </Grid>
                        }
                    </Grid>
                </Grid>
            </Grid>
        </div>

    );
}

export default Login;