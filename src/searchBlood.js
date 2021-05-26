import React, {useContext, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SimpleSelect from "./SimpleSelect";
import {Box} from "material-ui-core";
import Button from "@material-ui/core/Button";
import {makeStyles} from "material-ui-core/styles";
import {BloodContext, DetailsContext} from "./contexts";
import stateData from "./data";
import {BloodSearch} from "./constants";
import CardList from "./cardList";
import {Link, useHistory} from "react-router-dom";

const useStyle = makeStyles({

    button:
        {
            height : "50px",
            width : "70px",
            marginBottom : "10%",
            fontSize : "14px",
            fontWeight : "Bold",
            color : "white",
            background: "#d43f28",
            borderRadius: "10%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderColor : "white",
            cursor : "pointer"
        },
        div:{
            boxShadow: "2px 3px 4px 5px rgba(0.2, 0.2, 0.2, 0.2)",
            justifyContent: "center",
            alignItem: "center",
            border : "2px solid #d43f28",
            borderRadius : "10px",
            width: "",
            /* To adjust the height as well */
            height: "fit-content"
        }

});
function SearchBlood() {
    const history = useHistory();
    const details = useContext(DetailsContext);
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
    function searchBlood(){
        BloodSearch(bcon.type["name"], stateData[bcon.state]["name"],
            stateData[bcon.state]["cities"][bcon.dist]["name"],
            stateData[bcon.state]["cities"][bcon.mandal]["name"], (result) =>
            {
                console.log(result["donors"]);

                    details.setDetails(result);
                    details.setString(bcon.type["name"] + " blood group in " + stateData[bcon.state]["cities"][bcon.dist]["name"]);
                    console.log(details.details);
                    history.push({pathname: '/cardlist', state: "donors"})

        });
    }
    return (
        <div justify = "center" className={classes.div}>
        <Grid container justify="center" spacing={2} className={{flexGrow: 1}} style={{padding : "20px"}}>
            <Box>
            <Grid key="blood" item style={{padding : "10px"}}>
                <SimpleSelect label="BloodGroup" disable={false} data={bloodData}/>
            </Grid >
                {(bcon.state === "")?<Grid key="district" item style={{padding : "10px"}}>
                    <SimpleSelect label="District" disable={bcon.state === ""} data={stateData}/>
                </Grid>: <Grid key="district" item style={{padding : "10px"}}>
                    <SimpleSelect label="District" disable={bcon.state === ""} data={stateData[bcon.state]["cities"]}/>
                </Grid>}
            </Box>
            <Box >
                <Grid key="state" item style={{padding : "10px"}}>
                    <SimpleSelect label="State" disable={bcon.type === ""} data={stateData}/>
                </Grid>
                {(bcon.state === "")?<Grid key="mandal" item style={{padding : "10px"}}>
                    <SimpleSelect label="Mandal" disable={bcon.state === ""} data={stateData}/>
                </Grid>: <Grid key="mandal" item style={{padding : "10px"}}>

                    <SimpleSelect label="Mandal" disable={bcon.state === ""} data={stateData[bcon.state]["cities"]}/>
                </Grid>}
            </Box>

        </Grid>
            <Grid container justify="center" spacing={2} style={{flexGrow: 1}}>
                <Box style={{marginBottom : "2%"}}>
            <button className={classes.button} disabled={btn} onClick={searchBlood}>
                Search
            </button>
                <Typography style={{fontSize : "8px"}}>
                    {message}
                </Typography>
                </Box>
            </Grid>
            </div>
    );
}

export default SearchBlood;
