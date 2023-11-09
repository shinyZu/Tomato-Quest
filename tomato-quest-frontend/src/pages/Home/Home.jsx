import React, {useState} from 'react'
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";

import Grid from '@mui/material/Grid';

import {Howl, Howler} from 'howler';
import track1 from "../../assets/audio/home_track.mp3"

import btn_sound_on from "../../assets/images/controls/sounds_on.png"
import btn_sound_off from "../../assets/images/controls/sounds_off.png"

var sfx = {
    soundOn : new Howl({
        src:[track1],
    })
}

const Home = (props) => {
    const {classes} = props;

    const [isGameTrackPlaying, setIsGameTrackPlaying] = useState(false);

    const handleSound = () => {
        console.log("handling sound....",isGameTrackPlaying)
        
        if(!isGameTrackPlaying){
            console.log("if----",isGameTrackPlaying)
            sfx.soundOn.play()
            setIsGameTrackPlaying(true);
        } else {
            console.log("else------",isGameTrackPlaying)
            sfx.soundOn.pause()
            setIsGameTrackPlaying(false);
        }
    }

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
                        <Grid item 
                            className={classes.sound_controls_container}
                            onClick={handleSound}
                            style={{backgroundImage: isGameTrackPlaying ? `url(${btn_sound_on})` : `url(${btn_sound_off})` }}
                        ></Grid>
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