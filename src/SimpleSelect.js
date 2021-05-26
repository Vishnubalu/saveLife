import React, {useContext, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import {BloodContext} from "./contexts";
import stateData from "./data";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 250,

    },
    selectEmpty: {
        marginTop: theme.spacing(2),
        minWidth : 140,
    },
}));

export default function NativeSelects(props) {
    const bcon = useContext(BloodContext);
    const classes = useStyles();
    const [state, setState] = React.useState({
        label: '',
        name: 'hai',
    });

    const handleChange = (event) => {
        const name = event.target.name;

        if(name === "BloodGroup"){
            bcon.setType(props.data[event.target.value]);
        }
        if(name === "State"){
            bcon.setState(event.target.value);
        }
        if(name === "District"){
            bcon.setDist(event.target.value);

        }
        if(name === "Mandal"){
            bcon.setMandal(event.target.value);
        }
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    return (
        <div >
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel  htmlFor="outlined-age-native-simple">{props.label} </InputLabel>
                <Select
                    style={{backgroundColor : "white"}}
                    disabled={props.disable}
                    native
                    value={state.location}
                    onChange={handleChange}
                    label={props.label}
                    inputProps={{
                        name: props.label,
                        id: 'outlined-age-native-simple',
                    }}
                >
                    <option aria-label="None" value="" />
                    {
                        (props.data).map((item, index)=>
                            <option value={index} label={item["name"]} />
                        )
                    }
                </Select>
            </FormControl>

        </div>
    );
}
