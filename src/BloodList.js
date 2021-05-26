import React, {useContext, useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import save from "./save.png";
import {GetDonorsByType, TOTAL_INFO_URL} from "./constants";
import SavelifeInfo from "./savelifeInfo";
import {BloodContext, DetailsContext} from "./contexts";
import {useHistory} from "react-router-dom";
import stateData from "./data";



const useStyle = makeStyles({
    button:
        {
            borderColor: "white",
            marginBottom: "2%",
            width: "150px",
            height: "150px",
            fontSize: "30px",
            color: "white",
            background: "#ee5a5a",
            borderRadius: "10%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer"
        },
    div: {
        marginLeft: "18%",
        maxWidth: "65%",
        backgroundColor: "#eaeaea",
        borderRadius: "5px",
        marginTop: "5%"
    },
    typo:
        {
            fontFamily: "Times new roman",
            fontSize: "24px",
            marginLeft: "27%",
            fontWeight: "1px"
        },
    article : {
        '&:hover': {
            background: "#ee5a5a",
            color: "white",
            borderRadius : "5px",
            border : "white"
        },
        height : "40px",
        marginTop : "5px",
        borderRadius : "10px",
        marginLeft : "10%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer"
    }

});


function BloodList(props) {
    const details = useContext(DetailsContext);
    const history = useHistory();
    const bcon = useContext(BloodContext);
    const [bloodCount, setBloodcount] = useState({"bloodInfo" : []});

    function getBloodInfo() {
        fetch(TOTAL_INFO_URL, {
            method: 'GET'
        }).then((response) => {
            response.json().then((jsonResponse) => {
                setBloodcount(jsonResponse)
            })
        })
    }

    function onclickBloodButton(event){
        GetDonorsByType(event.target.value, (result)=>{
            console.log(result);
            details.setDetails(result);
            history.push({pathname:'/cardlist', state :"donors"})
        })

    }

    useEffect(() => {
        getBloodInfo();
        details.setDetails({"donors": []});
        bcon.setState("");
        bcon.setType("");
        bcon.setDist("");
        details.setString('');
    }, []);

    const classes = useStyle();

    function clickedArticle() {
        window.open(
            'https://www.longdom.org/peer-reviewed-journals/articles-on-blood-donation-6285.html',
            '_blank'
        );
    }

    return (
        <div>
            <div className={classes.div}>
                <Typography className={classes.typo}>
                    Total Blood donors registered with SaveLife
                </Typography>
                <Grid container justify="left" spacing={2}>
                    {bloodCount["bloodInfo"].map((item) =>
                        <Grid key={item.bloodType} item style={{margin: "40px"}}>
                            <button className={classes.button} value={item.bloodType} onClick={onclickBloodButton}>
                                {item.bloodType} <br/>
                                {item["bloodType__count"]}
                            </button>
                        </Grid>
                    )}
                </Grid>
            </div>
            <div className={classes.div} style={{backgroundColor : "white", marginTop:"2px"}}>
                <Grid container justify="left" spacing={2} display="flex">
                    <Grid key="logo" item style={{margin: "40px"}}>
                        <img src={save} style={{width: "200px", height: "200    px"}}/>
                    </Grid>
                    <Grid key="typo" item style={{marginTop: "20px", marginBottom :"20px"}}>
                        <Typography >
                            <h2> Why should we donate blood?</h2>
                            <p style={{width:"auto", fontFamily : "Times new Roman"}}>
                                The blood you donate is a life-chance for someone else<br/>
                                who might need a transfusion, whether it's an emergency <br/>or out of necessity in your long term treatments.<br/>
                                Approximately 1000 donors are needed monthly to support the needs of our patients.
                            </p>
                        </Typography>
                        <button className={classes.article} onClick={clickedArticle}>
                            Read article
                        </button>
                    </Grid>
                </Grid>
            </div>
            <SavelifeInfo registered = {bloodCount["total_donors"]} banks = {bloodCount["total_banks"]}/>

        </div>
    );
}

export default BloodList;