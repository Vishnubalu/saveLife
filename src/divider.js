import React, {useContext} from 'react';
import Grid from "@material-ui/core/Grid";
import {Box} from "material-ui-core";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core";
import TableRow from "material-ui-core/TableRow";
import {MdPeople, MdAirlineSeatIndividualSuite} from "react-icons/md";
import {RiRefund2Line} from "react-icons/ri";
import Button from "@material-ui/core/Button";
import {Link, useHistory} from "react-router-dom";
import {DonorSearchByArea, getAllPatients} from "./constants";
import stateData from "./data";
import {DetailsContext} from "./contexts";


const useStyle = makeStyles({
    dividerBox: {
        display: 'flex',
        color: "white",
        borderRadius: "5px",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#d43f28",
        minWidth: "30%",
        minHeight: "200px",

    },
    button:
        {
            borderColor : "white",
            marginLeft : "42%",
            marginBottom : "2%",
            height : "50px",
            fontSize : "14px",
            fontWeight : "Bold",
            color : "white",
            background: "#d42828",
            borderRadius: "10%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor : "pointer"

        }
});

function Divider(props) {
    const history = useHistory();
    const details = useContext(DetailsContext);

    function allDonors() {
        DonorSearchByArea("", "", "",(result) => {
                details.setDetails(result);
            history.push({pathname:'/cardlist', state :"donors"})
        });
    }
    const classes = useStyle();
    function allPatients() {
        getAllPatients((result) => {
            details.setDetails(result);
            history.push({pathname:'/cardlist', state :"patients"})
        });
    }
    return (
        <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 2, flexGrow: 1, margin: "10px", marginLeft : "20px", marginRight : "20px"}}>
            <div className={classes.dividerBox}>
                <div style={{justify : "center", justifyContent : "center"}}>
                    <MdPeople style={{width : "100px", height: "100px", marginLeft : "37%"}}/>
                    <h2 style={{marginLeft : "30%"}}>
                        Recent Donors
                    </h2>
                    <h5 style={{marginLeft : "10%", marginRight : "10%", display:"flex"}}>“The Ties And Relations Established With Blood Are Better Than Ties And Relations Established With Money.”</h5>
                    <h6 style={{marginLeft : "20%", marginRight : "10%", display:"flex"}}>Thanks to every one who came up to donate blood</h6>
                    <button className={classes.button} onClick={allDonors}>
                        All Donors
                    </button>
                </div>
            </div>
            <div className={classes.dividerBox}>
                <div style={{justify : "center", justifyContent : "center"}}>
                    <MdAirlineSeatIndividualSuite style={{width : "100px", height: "100px", marginLeft : "37%"}}/>
                    <h2 style={{marginLeft : "30%"}}>
                        Need for blood
                    </h2>
                    <h5 style={{marginLeft : "10%", marginRight : "10%", display:"flex"}}>
                        “If God Has Bestowed You With Great Health, Then Make Sure That You Are Beneficial To People Who Aren’t Bestowed By God With This Blessing.”</h5>
                    <button className={classes.button} onClick={allPatients}>
                        Patients
                    </button>
                </div>
            </div>
            <div className={classes.dividerBox}>
                <div style={{justify : "center", justifyContent : "center"}}>
                    <RiRefund2Line style={{width : "100px", height: "100px", marginLeft : "37%"}}/>
                    <h2 style={{marginLeft : "35%"}}>
                        Support Us
                    </h2>
                    <h5 style={{marginLeft : "10%", marginRight : "10%", display:"flex"}}>
                        Give To People From What God Has Provided You. It Will Surely Come Back To You With Greater Value.</h5>
                    <button className={classes.button}>
                        Funding
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Divider;
