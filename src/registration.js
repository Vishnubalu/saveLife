import React, {useContext} from 'react';
import {BloodContext, BloodProvider, DetailsContext} from "./contexts";
import {Box, makeStyles} from "@material-ui/core";
import SearchBlood from "./searchBlood";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import SimpleSelect from "./SimpleSelect";
import stateData from "./data";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import {Signup} from "./constants";
import {Link, useHistory} from "react-router-dom";


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
});

function Registration(props) {
    const log = useContext(DetailsContext)
    const [gender, setGender] = React.useState('female');
    const [age, setAge] = React.useState("");
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [pass, setPass] = React.useState("");
    const [mob, setMob] = React.useState("");
    const [address, setAddress] = React.useState("");

    const history = useHistory();

    let bloodData = [
        {"name": "A-"},
        {"name": "A+"},
        {"name": "B-"},
        {"name": "B+"},
        {"name": "AB-"},
        {"name": "AB+"},
        {"name": "O-"},
        {"name": "O+"}
    ];
    const bcon = useContext(BloodContext);
    let btn = true;
    let message = "";
    {
        if (bcon.type !== "" &&
            bcon.state !== "" &&
            bcon.dist !== "" &&
            bcon.mandal !== "" &&
            name !== "" &&
            email !== "" &&
            pass !== "" &&
            mob !== "" &&
            age !== "") {
            btn = false;
            message = "";
        } else {
            btn = true;
            message = "*please enter all values"
        }
    }
    const classes = useStyle();

    function onclickRegister() {
        Signup(name, email, pass, mob, address, age, gender, bcon.type["name"], stateData[bcon.state]["name"],
            stateData[bcon.state]["cities"][bcon.dist]["name"],
            stateData[bcon.state]["cities"][bcon.mandal]["name"], (result) => {
                if (result["signed"]) {
                    alert("Registered Successfully, Please login");
                    history.push("/login");
                }
            });
    }


    const handleChange = (event) => {
        setGender(event.target.value);
    };

    function onChangeAge(event) {
        setAge(event.target.value);
    }


    function onChangeEmail(event) {
        setEmail(event.target.value)
    }

    function onChangeName(event) {
        setName(event.target.value)
    }

    function onChangeMob(event) {
        setMob(event.target.value)
    }


    function onChangePass(event) {
        setPass(event.target.value)
    }

    function onChangeAddress(event) {
        setAddress(event.target.value)
    }


    return (
        <Grid style={{justifyContent: "center", alignItems: "center", marginLeft: "5%", marginRight: "5%"}}>
            <Typography style={{marginLeft: "5%", fontSize: "30px"}}>
                Login Information :
            </Typography>
            <Box style={{display: 'flex', justifyContent: "center", alignItems: "center"}}>
                <TextField className={classes.text}
                           id="Name" label="Name"
                           variant="outlined"
                           required={true}
                           value={name}
                           onChange={onChangeName}/>
                <TextField className={classes.text}
                           id="Name" label="Email"
                           variant="outlined"
                           required={true}
                           value={email}
                           onChange={onChangeEmail}
                />
            </Box>
            <Box style={{display: 'flex', justifyContent: "center", alignItems: "center"}}>
                <TextField className={classes.text}
                           id="outlined-basic" label="Mobile Number"
                           variant="outlined"
                           required={true}
                           value={mob}
                           onChange={onChangeMob}/>
                <TextField className={classes.text} type={"password"} id="outlined-basic" label="Password"
                           variant="outlined"
                           required={true}
                           value={pass}
                           onChange={onChangePass}/>
            </Box>
            <Typography style={{marginLeft: "5%", fontSize: "30px"}}>
                Donor Details:
            </Typography>
            <Box style={{justifyContent: "center", alignItems: "center", marginLeft: "25%"}}>
                <FormControl component="fieldset">

                    <RadioGroup aria-label="gender" name="gender1" value={gender} onChange={handleChange}>
                        <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                        <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                        <FormControlLabel value="other" control={<Radio/>} label="Other"/>
                    </RadioGroup>
                </FormControl>
                <TextField className={classes.text} id="outlined-basic" label="Age" variant="outlined"
                           required={true} value={age} onChange={onChangeAge}/>
            </Box>


            <Grid container justify="center" spacing={2} className={{flexGrow: 1}} style={{padding: "20px"}}>
                <Box>
                    <Grid key="blood" item style={{padding: "10px"}}>
                        <SimpleSelect label="BloodGroup" disable={false} data={bloodData}/>
                    </Grid>
                    {(bcon.state === "") ? <Grid key="district" item style={{padding: "10px"}}>
                        <SimpleSelect label="District" disable={bcon.state === ""} data={stateData}/>
                    </Grid> : <Grid key="district" item style={{padding: "10px"}}>
                        {console.log(bcon.state)}
                        <SimpleSelect label="District" disable={bcon.state === ""}
                                      data={stateData[bcon.state]["cities"]}/>
                    </Grid>}
                </Box>
                <Box>
                    <Grid key="state" item style={{padding: "10px", cursor: "not-allowed"}}>
                        <SimpleSelect label="State" disable={bcon.type === ""} data={stateData}/>
                    </Grid>
                    {(bcon.state === "") ? <Grid key="mandal" item style={{padding: "10px"}}>
                        <SimpleSelect label="Mandal" disable={bcon.state === ""} data={stateData}/>
                    </Grid> : <Grid key="mandal" item style={{padding: "10px"}}>
                        {console.log(bcon.state)}
                        <SimpleSelect label="Mandal" disable={bcon.state === ""}
                                      data={stateData[bcon.state]["cities"]}/>
                    </Grid>}

                </Box>
                <Box style={{padding: "15px"}}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Address"
                        multiline
                        rows={6}
                        defaultValue="Default Value"
                        variant="outlined"
                        value={address}
                        onChange={onChangeAddress}
                    />
                </Box>
            </Grid>
            <Grid container justify="center" spacing={2} className={{flexGrow: 1}} style={{padding: "20px"}}>
                <Box style={{marginBottom: "2%"}}>
                    <button className={classes.button} disabled={btn} onClick={onclickRegister}>
                        Register
                    </button>
                    <Typography style={{fontSize: "8px"}}>
                        {message}
                    </Typography>
                </Box>
            </Grid>
        </Grid>


    )
        ;
}

export default Registration;