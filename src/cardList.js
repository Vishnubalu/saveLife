import React, {useContext, useState} from 'react';
import {makeStyles} from "@material-ui/core";
import DisplayCard from "./displayCard";
import {DetailsContext} from "./contexts";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import PatientCard from "./patientCard";
import donor from"./icon.png"
import patient from "./patient.png"


const useStyle = makeStyles({

    text: {
        width: "40%",
        margin: "2%"
    },
    button:
        {
            height: "50px",
            width: "70px",

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
    div:{
        boxShadow: "2px 3px 4px 5px rgba(0.2, 0.2, 0.2, 0.2)",
        justifyContent: "center",
        marginTop : "10%",
        marginLeft : "25%",
        alignItem: "center",
        border : "2px solid #d43f28",
        borderRadius : "10px",
        width: "50%",
        /* To adjust the height as well */
        height: "fit-content"
    }
});


function CardList(props) {
    const {state} = props.location;
    console.log(state);
    const details = useContext(DetailsContext);
    const data = details.details;
    const str = details.string;
    console.log(str + details.string);
    return (
        <div>
        <Grid container justify="center" spacing={2} className={{flexGrow: 1}} >

            {
                (state === "donors")? data["donors"].map((item) => <DisplayCard donor = {item} img={donor}/>) :
                    data["patients"].map((item) => <PatientCard patient = {item} img={patient}/>)
            }
        </Grid>
        </div>
    );
}

export default CardList;