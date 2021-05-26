import React from 'react';
import Grid from "@material-ui/core/Grid";
import {Box} from "material-ui-core";
import SimpleSelect from "./SimpleSelect";
import {makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {RiRefund2Line} from "react-icons/ri";
import {BiDonateBlood} from "react-icons/bi";
import {Link, useHistory} from "react-router-dom";

const useStyle = makeStyles({
    div: {
        // boxShadow: "2px 3px 4px 5px rgba(0.2, 0.2, 0.2, 0.2)",
        justifyContent: "center",
        alignItem: "center",
        backgroundColor: "#eaeaea",
        width: "",
        margin:"15px",
        /* To adjust the height as well */
        height: "fit-content"
    },
    button:
        {
            '&:hover': {
                background: "#ee5a5a",
                color: "white",
                border: "white"
            },
            height: "100px",
            width: "100px",
            fontSize: "20px",
            fontWeight: "Bold",
            color: "#d43f28",
            background: "white",
            border: "none",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 0,
            cursor: "pointer"
        },
    grid : {
        margin : "5%"
    }

});

function SavelifeInfo(props) {
    const classes = useStyle();
    const history = useHistory();

    function onclickVolunteer() {
        history.push('/register');
    }

    return (
        <div justify="center" className={classes.div}>
            <Grid container justify="center" spacing={2} className={{flexGrow: 1}} style={{padding: "20px"}}>
                <Grid>
                    <div>
                        <Typography style={{fontSize: "35px", fontWeight: "bold", marginLeft: "40%"}}>
                            SaveLife web app
                        </Typography>
                        <Typography style={{fontSize: "20px", fontFamily: "Times new Roman", marginLeft: "36%"}}>
                            Help Some one by Donating Blood and Save Life
                        </Typography>
                        <Typography style={{
                            fontSize: "18px",
                            fontWeight: "lighter",
                            fontFamily: "Times new Roman",
                            textAlign: "center",
                        }}>
                            By registering to the SafeLife, You can have a chance to save many lifes and gives an
                            opportunity to
                            life to whose situation is hopeless. Blood donors gives patients a second chance of life.
                        </Typography>
                    </div>
                    <div>
                        <Grid container justify="center" spacing={2} className={{flexGrow: 1}}
                              style={{padding: "20px"}}>
                            <Grid className={classes.grid}>
                                <button className={classes.button} onClick={onclickVolunteer}>
                                    <BiDonateBlood style={{width: "50%", height: "50%"}}/>
                                </button>
                                <Typography style={{marginLeft:"15px"}}>
                                    Volunteer
                                </Typography>

                            </Grid>
                            <Grid className={classes.grid}>
                                <button className={classes.button}>
                                    {props.registered}
                                </button>
                                <Typography style={{marginLeft:"10px"}}>
                                    Registered
                                </Typography>
                            </Grid>
                            <Grid className={classes.grid}>
                                <button className={classes.button}>
                                    {props.banks}
                                </button>
                                <Typography style={{marginLeft:"10px"}}>
                                    Blood Banks
                                </Typography>
                            </Grid>
                            <Grid className={classes.grid}>
                                <button className={classes.button}>
                                    <RiRefund2Line style={{width: "50%", height: "50%"}}/>
                                </button>
                                <Typography style={{marginLeft:"10px"}}>
                                    Support us
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>

                </Grid>
            </Grid>
        </div>
    );
}

export default SavelifeInfo;