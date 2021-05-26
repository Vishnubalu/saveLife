import React, {useEffect} from 'react';
import Typography from "@material-ui/core/Typography";
import {Box} from "@material-ui/core";
import Navbar from "./navbar";
import {Icon} from "material-ui-core";
import SearchBlood from "./searchBlood";
import DonorAndRequest from "./DonorAndRequest";
import Divider from "./divider";
import BloodList from "./BloodList";
import SavelifeInfo from "./savelifeInfo";
import Footer from "./footer";
import {BloodProvider} from "./contexts";
import Carousel from "./carousel.js";


function Home() {

    return (
        <Box flex={1} justifyContent="center">
            <BloodProvider>

            <Box
                style={{display: 'flex' , justifyContent:"center",alignItems:"center"}}>
                <SearchBlood/>
            </Box>
            <DonorAndRequest/>
            <Divider/>
            <BloodList/>
            <Carousel/>
            </BloodProvider>
        </Box>
    );
}

export default Home;
