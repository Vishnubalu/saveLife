import React from 'react';
import {Card} from "material-ui-core";
import CardMedia from '@material-ui/core/CardMedia';
import img from"./patient.jpg"
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "material-ui-core/CardActions";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Text from 'react-text-typing';



function PatientCard(props) {
    console.log("inside display card");
    let patient = props.patient;
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
                                {patient.patient_name}
                            </Typography>
                            <Typography style={{color:"red", padding:"0px", fontSize:"15px"}}>
                                Blood group : {patient.blood}
                            </Typography>

                            <Typography style={{color:"black", padding:"0px", fontSize:"15px"}}>
                                    date when need : {patient.date_need}
                            </Typography>
                            <Typography>
                                Hospital : {patient.hospital}
                            </Typography>
                            <Typography style={{color:"black", padding:"0px", fontSize:"15px"}}>
                                Phone no. : {patient.contact}
                            </Typography>
                            <Typography style={{color:"red", padding:"0px", fontSize:"15px"}}>
                                Email   : {patient.email}
                            </Typography>
                            <Typography style={{color:"black", padding:"0px", fontSize:"15px"}}>
                                Age : {patient.age} <br/>
                                Gender : {patient.gender}
                            </Typography>
                            <Typography style={{color:"black", padding:"0px", fontSize:"15px"}}>
                                State : {patient.state}
                            </Typography>
                            <Typography style={{color:"black", padding:"0px", fontSize:"15px"}}>
                                District : {patient.district}
                            </Typography>
                            <Typography style={{color:"black", padding:"0px", fontSize:"15px"}}>
                                Mandal : {patient.mandal}
                            </Typography>

                            <Typography style={{color:"black", padding:"0px", fontSize:"12px"}}>
                                Messege : {patient.message}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions style={{marginLeft : "25%"}}>
                        <Button size="small" color="primary">
                            Message
                        </Button>
                        <Button size="small" color="primary">
                            Request
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </div>
    );
}

export default PatientCard;