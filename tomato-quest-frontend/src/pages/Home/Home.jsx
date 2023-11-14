import React, {useState} from 'react'
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";

import Grid from '@mui/material/Grid';
import MySnackBar from "../../components/common/MySnackbar/MySnackbar";

import {Howl, Howler} from 'howler';
import track1 from "../../assets/audio/home_track.mp3"

import btn_sound_on from "../../assets/images/controls/sounds_on.png"
import btn_sound_off from "../../assets/images/controls/sounds_off.png"

import LoginService from '../../services/LoginService';

var sfx = {
    soundOn : new Howl({
        src:[track1],
    })
}

const Home = (props) => {
    const {classes} = props;

    const [isGameTrackPlaying, setIsGameTrackPlaying] = useState(false);

    const [openAlert, setOpenAlert] = useState({
        open: false,
        alert: "",
        severity: "warning",
        variant: "",
    });

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

    const logoutUser = async (e) => {
        // Retrieving the JSON string from localStorage and parse it back to an object
        const loggedPlayerJSON = localStorage.getItem('loggedPlayer');
        const loggedPlayer = JSON.parse(loggedPlayerJSON);
        console.log(loggedPlayer.username)
        let params = {
            username: loggedPlayer.username,
        };

        // let res = await LoginService.logout(params);
        // console.log(res);
    
        // if (res.status === 200) {
        //   if (res) {
        //     setOpenAlert({
        //         open: true,
        //         alert: res.data.message,
        //         severity: "success",
        //         variant: "standard",
        //     })

        //     // Removing the item from localStorage
        //     localStorage.removeItem('loggedPlayer');

        //     setTimeout(()=>{
        //         window.location.href = "/";
        //     },2000)
        //   }
        // } else {
        //   setOpenAlert({
        //     open: true,
        //     alert: res.response.data.message,
        //     severity: "error",
        //     variant: "standard",
        //   });
        // }

        await LoginService.logout(params)
            .then(res => {
                console.log(res);
               
                if (res.status === 200) {
                    if (res) {
                      setOpenAlert({
                          open: true,
                          alert: res.data.message,
                          severity: "success",
                          variant: "standard",
                      })
          
                      // Removing the item from localStorage
                      localStorage.removeItem('loggedPlayer');
          
                      setTimeout(()=>{
                          window.location.href = "/";
                      },2000)
                    }
                } else {
                    setOpenAlert({
                      open: true,
                      alert: res.response.data.message,
                      severity: "error",
                      variant: "standard",
                    });
                }

            })
            .catch(error => {
                setOpenAlert({
                    open: true,
                    alert: "Error!",
                    severity: "error",
                    variant: "standard",
                })
            })
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
                 {/* <Grid container justifyContent='flex-end' style={{border:"2px solid red"}}> */}
                 <Grid 
                        item 
                        className={classes.btn_leaderboard_container}
                        onClick={()=>{
                            console.log("navigate to leaderboard")
                            window.location.href = "/leaderboard";
                        }}
                    ></Grid>
                {/* </Grid> */}
                
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
                        <Grid item className={classes.logout_controls_container} onClick={logoutUser}></Grid>
                    </Grid>
                </Grid>
               
                <Grid item container className={classes.bottom_container}>
                    <Grid item className={classes.btn_play_container} onClick={() => {
                        console.log("Play btn clicked")
                        window.location.href = "/game";
                    }}></Grid>
                </Grid>
            </Grid>
            <MySnackBar
                open={openAlert.open}
                alert={openAlert.alert}
                severity={openAlert.severity}
                variant={openAlert.variant}
                onClose={() => {
                    setOpenAlert({ open: false });
                }}
            />
        </div>
    )
}

export default withStyles(styleSheet)(Home);