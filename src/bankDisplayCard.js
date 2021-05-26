import React, {useState} from 'react';
import {Card} from "material-ui-core";
import CardMedia from '@material-ui/core/CardMedia';
import img from"./icon.png"
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "material-ui-core/CardActions";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import MessegeDialog from "./messegeDialog";
import RequestDialog from "./requestDialog";


function BankDisplayCard(props) {
    console.log("inside display card");
    let donor = props.donor;

    return (
        <div style={{margin:"2%", align : "center", alignItems :"center", display: "flex",
            justifyContent: "center"}} >
            <Box>
                <Card style={{height : "40%", width:"80%"}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="profile"
                            image={img}
                            title="Profile"
                            style={{width : "40%", height : "40%", marginLeft : "25%", animation: "spin infinite 20s linear"}}
                        >
                        </CardMedia>
                        <CardContent style={{marginLeft : "10%"}}>
                            <Typography gutterBottom variant="h5" component="h2" style={{color:"blue", padding:"5px"}}>
                                {donor.bank_name}
                            </Typography>
                            <Typography style={{color:"red", padding:"0px", fontSize:"15px"}}>
                                 Phone  : {donor.contact}
                            </Typography>
                            <Typography style={{color:"black", padding:"0px", fontSize:"15px"}}>
                                Email         : {donor.email}
                            </Typography>
                            <Typography style={{color:"black", padding:"0px", fontSize:"15px"}}>
                                Organised By      : {donor.organisedby}
                            </Typography>
                            <Typography style={{color:"black", padding:"0px", fontSize:"15px"}}>
                                availability of blood : {(donor.blood_availability)? "Yes" : "No"
                            }
                            </Typography>
                            <Typography style={{color:"black", padding:"0px", fontSize:"15px"}}>
                                availability of plasma : {(donor.plasma_availability)? "Yes" : "No"
                            }
                            </Typography>
                            <Typography style={{color:"black", padding:"0px", fontSize:"15px"}}>
                                State : {donor.state}
                            </Typography>
                            <Typography style={{color:"black", padding:"0px", fontSize:"15px"}}>
                                District : {donor.district}
                            </Typography>
                            <Typography style={{color:"black", padding:"0px", fontSize:"15px"}}>
                                Mandal : {donor.mandal}
                            </Typography>

                            <Typography style={{color:"black", padding:"0px", fontSize:"12px"}}>
                                address : {donor.address}
                            </Typography>

                            <Typography style={{color:"black", padding:"0px", fontSize:"12px"}}>
                                details : {donor.details}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions style={{marginLeft : "25%"}}>
                        <MessegeDialog/>
                        <RequestDialog/>
                    </CardActions>
                </Card>

            </Box>
        </div>
    );
}

export default BankDisplayCard;