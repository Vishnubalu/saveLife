import React, {useContext, useEffect, useState} from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {Box, makeStyles} from "@material-ui/core";
import SimpleSelect from "./SimpleSelect";
import stateData from "./data";
import {BloodContext, DetailsContext} from "./contexts";
import DisplayCard from "./displayCard";
import CardList from "./cardList";
import {BloodbankSearchRequest, DonorSearchByArea} from "./constants";
import {useHistory} from "react-router-dom";
import BankDisplayCard from "./bankDisplayCard";

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
    div: {
        boxShadow: "2px 3px 4px 5px rgba(0.2, 0.2, 0.2, 0.2)",
        justifyContent: "center",
        marginLeft: "25%",
        alignItem: "center",
        border: "2px solid #d43f28",
        borderRadius: "10px",
        width: "50%",
        /* To adjust the height as well */
        height: "fit-content"
    }
});


function BloodbankSearch(props) {
    const details = useContext(DetailsContext);
    const history = useHistory();
    const bcon = useContext(BloodContext);
    const classes = useStyle();

    let btn = true;
    let message = "";
    {
        if (bcon.state !== "" && bcon.dist !== "") {
            btn = false;
            message = "";
        } else {
            btn = true;
            message = "*please enter all values"
        }
    }


    function onclickBanks() {
        BloodbankSearchRequest(stateData[bcon.state]["name"],
            stateData[bcon.state]["cities"][bcon.dist]["name"], (result) => {
                console.log(result);
                details.setDetails(result);
                details.setString(" blood bank in " + stateData[bcon.state]["cities"][bcon.dist]["name"]);
                console.log(details.details);
            });
    }

    useEffect(() => {
        details.setDetails({"donors": []});
        details.setString("");
        bcon.setState("");
        bcon.setType("");
        bcon.setDist("");
    }, []);


    return (
        <div justify="center" className={classes.div}>
            <Grid container justify="center" spacing={2} className={{flexGrow: 1}}>
                <Box>
                    <Grid key="state" item style={{padding: "10px", cursor: "not-allowed"}}>
                        <SimpleSelect label="State" data={stateData}/>
                    </Grid>

                </Box>
                <Box>
                    {(bcon.state === "") ? <Grid key="district" item style={{padding: "10px"}}>
                        <SimpleSelect label="District" disable={bcon.state === ""} data={stateData}/>
                    </Grid> : <Grid key="district" item style={{padding: "10px"}}>
                        {console.log(bcon.state)}
                        <SimpleSelect label="District" disable={bcon.state === ""}
                                      data={stateData[bcon.state]["cities"]}/>
                    </Grid>}
                </Box>
                <Box style={{padding: "10px"}}>
                    <button className={classes.button} disabled={btn} onClick={onclickBanks}>
                        search
                    </button>
                </Box>

                {
                    (details.details["donors"] !== []) ?

                        <Grid container justify="center" spacing={2} className={{flexGrow: 1}} >
                            {details.string}
                            {
                                (details.details["donors"]).map((item) => <BankDisplayCard donor = {item}/>)
                            }
                        </Grid> :
                        <div/>
                }

            </Grid>



        </div>
    );
}

export default BloodbankSearch;