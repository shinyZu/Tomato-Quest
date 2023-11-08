import React from 'react'
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";

import Grid from '@mui/material/Grid';

const Home = (props) => {
    const {classes} = props;

    return (
        <div className={classes.container_1}>
            <Grid
                container
                xl={12}
                lg={12}
                md={12}
                sm={12}
                xs={12}
                className={classes.main_container}
            >
                <Grid
                    item
                    container
                    xl={12}
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    className={classes.top_container}>
                    <Grid item container className={classes.controls_container}>
                        <Grid item className={classes.settings_controls_container}></Grid>
                        <Grid item className={classes.help_controls_container}></Grid>
                        <Grid item className={classes.sound_controls_container}></Grid>
                        <Grid item className={classes.logout_controls_container} onClick={() => {
                            window.location.href = "/";
                        }}></Grid>
                    </Grid>
                </Grid>
                <Grid item container className={classes.bottom_container}>
                    <Grid item className={classes.btn_play_container} onClick={() => {
                        console.log("Play btn clicked")
                        window.location.href = "/game";
                    }}></Grid>
                </Grid>
            </Grid>

        </div>
    )
}

export default withStyles(styleSheet)(Home);