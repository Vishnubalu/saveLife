import React from "react";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Typography from "@material-ui/core/Typography";
import CarouselCard from "./carouselCard";
import {developerList} from "./constants";
import img from "./save.png"
import Grid from "@material-ui/core/Grid";

export default (props) => (
    <Grid container justify="center" spacing={2} className={{flexGrow: 1}} >
        <Grid container justify="center" spacing={2} className={{flexGrow: 1}} >
        <Typography style={{marginTop : "2%", fontSize : "24px", fontWeight :"bold", color : "#d43f28"}}>
            DEVELOPERS
        </Typography>
        </Grid>
    <Carousel autoPlay={true} showThumbs={false} transitionTime={1} showStatus={false} infiniteLoop={true} width={1400}
              showIndicators={true}>
        {
            developerList.map((item) =>
                <div align={"center"} key={item.name}>
                    {/*<div >*/}
                    {/*    <p style={{float: "center", color: "white"}}>{item.name}</p>*/}
                    {/*</div>*/}
                    <div style={{height: "100%", width: "100%"}}>
                        <CarouselCard
                            img = {item.img}
                            name = {item.name}
                            content = {item.content}
                            designation = {item.designation}
                            know = {item.know}
                        />
                    </div>
                </div>
            )
        }

    </Carousel>
    </Grid>
);
