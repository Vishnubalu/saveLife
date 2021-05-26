import React from 'react';
import {Card} from "material-ui-core";
import CardMedia from '@material-ui/core/CardMedia';
import img from"./icon.png"
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "material-ui-core/CardActions";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";


function CarouselCard(props) {
    function onclickMore(event){
        console.log(event.currentTarget.value);
        window.open(
            event.currentTarget.value,
            '_blank'
        );
    }
    return (
        <div style={{margin:"2%", align : "center", alignItems :"center", display: "flex",
            justifyContent: "center"}} >
            <Box>

                <Card style={{height : "80%", width:"80%", alignItems : "center"}}>
                    <Typography>
                        {props.name}
                    </Typography>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="profile"
                            image = {props.img}
                            title="Profile"
                            style={{width : "20%", height : "20%", animation: "spin infinite 20s linear"}}
                        >

                        </CardMedia>
                        <CardContent>
                            <Typography>
                                {
                                    props.designation
                                }
                            </Typography>
                            <Typography>
                                {
                                    props.content
                                }
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions style={{alignItems : "center", display :"flex", justifyContent : "center" }}>
                        <Button size="small" color="primary" onClick={onclickMore} value={props.know}>
                            Know More
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </div>
    );
}

export default CarouselCard;