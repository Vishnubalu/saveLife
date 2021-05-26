import React, {useContext} from 'react';
import logo from "./logo.JPG";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import {Button, TextField} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import CallRoundedIcon from '@material-ui/icons/CallRounded';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import {RiRefund2Line} from "react-icons/ri";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import {Link, useHistory} from "react-router-dom";
import {DetailsContext} from "./contexts";

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        left: theme.spacing(2),
    },
    Button: {
        fontcolor: "white"
    }
}));

function ScrollTop(props) {

    const {children, window} = props;
    const classes = useStyles();
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({behavior: 'smooth', block: 'center'});
        }
    };


    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={classes.root}>
                {children}
            </div>
        </Zoom>
    );
}

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default function BackToTop(props) {

    const log = useContext(DetailsContext)

    const history = useHistory();
    function onclickRegister() {
        history.push("/register");
    };

    function onclickHome() {
        history.push("/");
    }

    function onclisckLogin() {
        history.push("/login");
    }

    function onclickBank() {
        history.push("/bloodBank");
    }

    function onclickSignout() {
        log.setLoggedUser("")
        log.setLoggedNum("")

        history.push("/")
    }

    return (
        <React.Fragment>
            <CssBaseline/>
            <AppBar style={{background: '#ffffff'}} position={"relative"}>
                <Toolbar>
                    <div style={{marginLeft: "5%", display: "flex"}}>
                        <img src={logo} style={{width: "200px", height: "125px"}}/>
                    </div>
                    {
                        (log.loggedUser === "") ? <div style={{display: "flex", marginLeft: "40%", color: "black"}}>
                                <CallRoundedIcon fontSize={"Large"}/>
                                <Typography style={{fontWeight: "bold", fontSize: "18px"}}>+91 9100488235</Typography>
                                <Button variant="outlined" color="primary" onClick={onclisckLogin}
                                        style={{marginLeft: "100px", marginRight: "10px", padding: "10px"}}>
                                    Login
                                </Button>
                                <Button variant="outlined" color="secondary" onClick={onclickRegister}>
                                    Register
                                </Button>
                            </div> :
                            <div style={{display: "flex", marginLeft: "40%", color: "black"}}>
                                <CallRoundedIcon fontSize={"Large"}/>
                                <Typography style={{fontWeight: "bold", fontSize: "18px"}}>+91 9100488235</Typography>
                                <Button variant="outlined" color="primary"
                                        style={{marginLeft: "100px", marginRight: "10px", padding: "10px"}}>
                                    {log.loggedUser}
                                </Button>
                                <Button variant="outlined" color="secondary" onClick={onclickSignout}>
                                    sign out
                                </Button>
                            </div>
                    }


                </Toolbar>
                <Toolbar variant={"dense"} style={{background: "#d43f28"}}>
                    <div style={{display: "flex", marginLeft: "25%"}}>
                        <Button onClick={onclickHome}><Typography style={{color: '#fff'}}>Home</Typography></Button>
                        <Button onClick={onclickBank}><Typography
                            style={{color: '#fff'}}>BloodBank</Typography></Button>
                        <Button><Typography style={{color: '#fff'}}>Events</Typography></Button>
                        <Button><Typography style={{color: '#fff'}}>About Us</Typography></Button>
                        <Button><Typography style={{color: '#fff'}}>ContactUs</Typography></Button>
                        <Button>
                            <RiRefund2Line size={"30px"}/>
                            <Typography style={{color: '#fff'}}>Donate Us</Typography>
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
            <Toolbar id="back-to-top-anchor"/>

            <ScrollTop {...props}>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon/>
                </Fab>
            </ScrollTop>
        </React.Fragment>
    );
}