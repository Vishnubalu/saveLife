import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core";
import {send_sms} from "./constants";


const useStyle = makeStyles({
    textField: {
        margin: "10px"
    }
})


export default function MessegeDialog(props) {
    const classes = useStyle();
    const[patientName, setPatientName] = React.useState("");
    const[patientMobile, setPatientMobile] = React.useState("");
    const[patientHospital, setPatientHospital] = React.useState("");
    const[patientMessege, setPatientMessege] = React.useState("")
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function sendClicked() {
        if(patientName !== "" && patientMobile !== "") {
            send_sms(patientName, patientMobile, props.phone, patientMessege, patientHospital, (result)=>{
                if(result["done"]){
                    setOpen(false);
                }
            });
        }
    }

    function onchangeName(event) {
        setPatientName(event.target.value)
    }

    function onchangeMobile(event) {
        setPatientMobile(event.target.value)
    }

    function onchangeHospital(event) {
        setPatientHospital(event.target.value)
    }

    function onchangeMessege(event) {
        setPatientMessege(event.target.value)
    }

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Messege
            </Button>
            <Dialog open={open} onClose={handleClose} aria-sd="form-dialog-title">
                <DialogTitle id="form-dialog-title"> Messege to Donor : </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Provide your details correctly to contact you -
                    </DialogContentText>
                    <Grid container justify="center" spacing={3} className={{flexGrow: 1}}>
                        <TextField className={classes.textField}
                                   id="name" label="Name"
                                   variant="outlined"
                                   required={true}
                                   value={patientName}
                                   onChange={onchangeName}/>
                        <TextField className={classes.textField}
                                   id="phoneNumber" label="Mobile"
                                   variant="outlined"
                                   required={true}
                                   value={patientMobile}
                                   onChange={onchangeMobile}/>
                        <TextField className={classes.textField}
                                   id="hospital" label="Hospital"
                                   variant="outlined"
                                   required={true}
                                   value={patientHospital}
                                   onChange={onchangeHospital}/>
                        <TextField className={classes.textField}
                                   id="messege" label="Messege"
                                   variant="outlined"
                                   required={true}
                                   value={patientMessege}
                                   onChange={onchangeMessege}/>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={sendClicked} color="primary">
                        Send
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
