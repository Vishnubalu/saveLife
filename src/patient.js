import React, {useContext} from 'react';
import {BloodContext, BloodProvider} from "./contexts";
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
import DateFnsUtils from '@date-io/date-fns';

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Radio from "@material-ui/core/Radio";
import {AddPatient, Signup} from "./constants";
import {useHistory} from "react-router-dom";

const useStyle = makeStyles({
    text: {
        width: "40%",
        margin: "2%"
    },
    button:
        {
            height: "50px",
            width: "fit-content",
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


function Patient(props) {
    var currentDate = new Date()
    var day = currentDate.getDate()
    var month = currentDate.getMonth() + 1
    var year = currentDate.getFullYear()
    const history = useHistory();
    const [gender, setGender] = React.useState('female');
    const [date, setSelectedDate] = React.useState(new Date(year +"-" + month + "-" + day));
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [hospital, setHospital] = React.useState('');
    const [age, setAge] = React.useState('');
    const [Message, setMessage] = React.useState('');




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
        if (bcon.type !== "" && bcon.state !== "" && bcon.dist !== "" && bcon.mandal !== "") {
            btn = false;
            message = "";
        } else {
            btn = true;
            message = "*please enter all values"
        }
    }
    const classes = useStyle();

    function addPatient() {
        AddPatient(name, email,phone, hospital, Message, age, gender,date, bcon.type["name"], stateData[bcon.state]["name"],
            stateData[bcon.state]["cities"][bcon.dist]["name"],
            stateData[bcon.state]["cities"][bcon.mandal]["name"], (result) => {
                alert("Patient added successfully")
                history.push('/')
            });
    }

    const handleDateChange = (date) => {

        setSelectedDate((new Date(date).toISOString()).slice(0, 10));
    };

    const handleAgeChange = (event) => {
        setGender(event.target.value);
    };

    function onNameChange(event) {
        setName(event.target.value)
    }

    function oncEmailChange(event) {
        setEmail(event.target.value)
    }

    function onPhoneChange(event) {
        setPhone(event.target.value)
    }

    function onHospitalChange(event) {
        setHospital(event.target.value)
    }

    function onAgeChange(event) {
        setAge(event.target.value)
    }

    function onChangeMessage(event) {
        setMessage(event.target.value)
    }

    console.log(name+email+phone+age+date+bcon.type);

    return (
        <Grid style={{justifyContent: "center", alignItems: "center", margin: "5%"}}>
            <Typography style={{marginLeft: "5%", fontSize: "30px"}}>
                Patient Information
            </Typography>
            <Box style={{display: 'flex', justifyContent: "center", alignItems: "center"}}>
                <TextField className={classes.text} id="Name" label="Name" variant="outlined"
                           required={true}
                           value={name}
                           onChange={onNameChange}/>
                <TextField className={classes.text} id="Name" label="Email"
                           value={email}
                           onChange={oncEmailChange}
                           variant="outlined"
                           required={true}/>
            </Box>
            <Box style={{display: 'flex', justifyContent: "center", alignItems: "center"}}>
                <TextField className={classes.text} id="outlined-basic"
                           value={phone}
                           onChange={onPhoneChange}
                           label="Mobile Number"
                           variant="outlined"
                           required={true}/>
                <TextField className={classes.text} id="outlined-basic"
                           value={hospital}
                           onChange={onHospitalChange}
                           label="Hospital or place"
                           variant="outlined"/>
            </Box>

            <Grid style={{justifyContent: "center", alignItems: "center", marginLeft: "25%"}}>
                <FormControl component="fieldset">

                    <RadioGroup aria-label="gender" name="gender1" value={gender} onChange={handleAgeChange}>
                        <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                        <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                        <FormControlLabel value="other" control={<Radio/>} label="Other"/>
                    </RadioGroup>
                </FormControl>
                <TextField className={classes.text} id="outlined-basic"
                           label="Age"
                           value={age}
                           onChange={onAgeChange}
                           variant="outlined"
                           required={true}/>


            </Grid>
            <Box>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="center">
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="dd/MM/yyyy"
                            id="date-picker-inline"
                            label="When needed :"
                            value={date}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
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
                        label="Message"
                        multiline
                        rows={6}
                        defaultValue="Default Value"
                        variant="outlined"
                        value={Message}
                        onChange={onChangeMessage}
                    />
                </Box>
            </Grid>
            <Grid container justify="center" spacing={2} className={{flexGrow: 1}} style={{padding: "20px"}}>
                <button className={classes.button} disabled={btn} onClick={addPatient}>
                    Add patient
                </button>
            </Grid>
        </Grid>


    )
        ;
}

export default Patient;