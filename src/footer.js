import SimpleReactFooter from "simple-react-footer";
import React from 'react';
import Divider from "@material-ui/core/Divider";
import {makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyle = makeStyles({
    div: {
        backgroundColor: "#d43f28",
        borderRadius: "5px",

    },
});


function Footer(props) {
    const classes = useStyle();
    const description = "A Blood Donation system where anyone who needs blood can directly search for blood using Web  app, " +
        "system shows the availability of blood in nearby places (like districts), and customer can see the availability of blood also in his nearby places. " +
        "If anyone is ready to donate blood can register themselves into our site and can donate. After donating blood customer can directly interact using chat " +
        "bot if customer have any doubt or any issue. By this Blood donation system we are helping many people who need blood (in case of emergency). " +
        "The person who donated blood their names will be displayed in our main page by this every person will come forward to donate blood and that will be easy for " +
        "every person who needs blood emergency can directly check in nearby places it is less time and in case of emergency it will help to save a life." +
        "(this is moto of our project).";
    const title = "SaveLife";
    const columns = [
        {
            title: "Resources",
            resources: [
                {
                    name: "About",
                    link: "/about"
                },
                {
                    name: "Careers",
                    link: "/careers"
                },
                {
                    name: "Contact",
                    link: "/contact"
                },
                {
                    name: "Admin",
                    link: "/admin"
                }
            ]
        },
        {
            title: "Legal",
            resources: [
                {
                    name: "Privacy",
                    link: "/privacy"
                },
                {
                    name: "Terms",
                    link: "/terms"
                }
            ]
        },
        {
            title: "Visit",
            resources: [
                {
                    name: "Locations",
                    link: "/locations"
                },
                {
                    name: "Culture",
                    link: "/culture"
                }
            ]
        }
    ];
    return <div className={classes.div}>
        <SimpleReactFooter
            description={description}
            title={title}
            columns={columns}
            instagram="_._vishnu__"
            facebook="vishnu.sangem.1"
            twitter="vishnu-sangem"
            linkedin="vishnu-sangem"
            youtube="UCFt6TSF464J8K82xeA?"
            pinterest="fluffy_cats_collections"
            copyright="black"
            iconColor="black"
            backgroundColor="#d43f28"
            fontColor="white"
            copyrightColor="darkgrey"
        />
        <div justify={"center"} align={"center"} style={{backgroundColor: "#d43f28"}}>
            <Divider style={{height: " 3px", color: "black"}}/>
            <Typography style={{
                fontWeight: "bold",
                fontSize: "30px",
                color: "white",
                margin: "2%",
                backgroundColor: "#d43f28"
            }}>
                Made with LOVE
            </Typography>
            <Divider style={{height: " 3px", color: "black"}}/>
        </div>
    </div>
}

export default Footer;
