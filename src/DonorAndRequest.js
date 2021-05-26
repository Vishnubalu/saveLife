import React from 'react';
import {makeStyles} from "material-ui-core/styles";
import Grid from "@material-ui/core/Grid";
import {Link, useHistory} from "react-router-dom";

const useStyle = makeStyles({
    button:
        {
            height: "170px",
            width: "170px",
            fontSize: "20px",
            fontWeight: "Bold",
            color: "white",
            background: "#d43f28",
            backgroundColor: 'rgba(212, 63, 40, 0.9)',
            border: "none",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 0,
            cursor : "pointer"
        }
});

function DonorAndRequest() {
    const history = useHistory();
    function onclickPatient() {
        history.push('/addpatient');
    }

    function onclickDonorsearch(){
        history.push('/donorsearch');
    }


    const classes = useStyle();
    return (
        <div>
            <Grid container justify="center" spacing={2} className={{flexGrow: 1}} style={{padding: "20px"}}>
                <Grid key="request" item style={{marginRigth : "10%"}}>
                    <button className={classes.button} onClick={onclickPatient}>
                        Request
                    </button>
                </Grid>
                <Grid key="donate" item style={{marginLeft : "10%"}}>
                    <button className={classes.button} onClick={onclickDonorsearch}>
                        Find Donor
                    </button>
                </Grid>
            </Grid>
        </div>
    );
};

export default DonorAndRequest;