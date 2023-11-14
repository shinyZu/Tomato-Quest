import React, {useState} from "react";
import Button from "@mui/material/Button";
import Snackbar, {SnackbarOrigin} from "@mui/material/Snackbar";
import Alert, {AlertProps} from "@mui/material/Alert";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";

import Grid from '@mui/material/Grid';

function PlayerScore(props) {
    const {classes} = props;

    return (
        <>
            <Grid
                container
                xl={2}
                lg={2}
                md={2}
                sm={2}
                xs={2}
                className={classes.lbl_score_container}
            >
                <Grid
                    item
                    xl={3}
                    lg={3}
                    md={3}
                    sm={3}
                    xs={3}
                    className={classes.txt_container}
                >
                    <span style={{fontSize:"2.5rem", color:"white", }}>{props.rank}</span>
                </Grid>
                <Grid
                    item
                    xl={5}
                    lg={5}
                    md={5}
                    sm={5}
                    xs={5}
                    className={classes.txt_container}
                >
                    <span style={{fontSize:"1.5rem", color:"white",  marginRight:"3vh" }}>{props.username}</span>
                </Grid>
                {/* <Grid
                    item
                    xl={1}
                    lg={1}
                    md={1}
                    sm={1}
                    xs={1}
                    className={classes.txt_container}
                >
                    <span style={{fontSize:"1.5rem", color:"white", }}>{""}</span>
                </Grid> */}
                <Grid
                    item
                    xl={2}
                    lg={2}
                    md={2}
                    sm={2}
                    xs={2}
                    className={classes.txt_container}
                >
                    <span style={{fontSize:"1.5rem", color:"white",  marginRight:"3vh"}}>{props.score}</span>
                </Grid>
                <Grid
                    item
                    xl={1}
                    lg={1}
                    md={1}
                    sm={1}
                    xs={1}
                    className={classes.txt_container}
                >
                    <span style={{fontSize:"1rem", color:"orange", }}>- {props.failedScore}</span>
                </Grid>
            </Grid>
        </>
    );
}

export default withStyles(styleSheet)(PlayerScore);