import React, {useEffect, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";

import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";

import Grid from '@mui/material/Grid';
import MySnackBar from "../../components/common/MySnackbar/MySnackbar";
import PlayerScore from "../../components/common/PlayerScore/PlayerScore";

import PlayerService from "../../services/PlayerService";

function Leaderboard(props) {
    const {classes} = props;

    const [playerScores, setPlayerScores] = useState(null);

    const [openAlert, setOpenAlert] = useState({
        open: false,
        alert: "",
        severity: "warning",
        variant: "",
    });

    const getHighestScores =  () => {
        console.log("fetching playre score data......")

         PlayerService.getHighestScores()
        .then(res => {
            console.log(res);
            setPlayerScores(res.data.data)
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

    useEffect(()=>{
        console.log("Home component did mount")
        const player = localStorage.getItem("loggedPlayer");
        if (player) {
            props.handleLogin(true);
        }  else {
            props.handleLogin(false);
        }
    },[])

    useEffect(()=>{
        getHighestScores();
    },[])

    console.log(playerScores)
    return (
        <Grid
            container
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            className={classes.main_container}
        >
            {/* Home btn */}
            <Grid
                container
                xl={12}
                lg={12}
                md={12}
                sm={12}
                xs={12}
                justifyContent="flex-end"
            >
                <Grid item className={classes.btn_home_container}
                        onClick={() => {
                            window.location.href = "/home";
                        }}
                ></Grid>
            </Grid>

            <Grid
                container
                xl={12}
                lg={12}
                md={12}
                sm={12}
                // xs={12}
                className={classes.leaderboard_container}
            >
                <Grid
                    container
                    xl={11}
                    lg={11}
                    md={11}
                    sm={11}
                    // xs={11}
                    className={classes.glass_container}>
                    <Grid
                        item
                        container
                        xl={12}
                        lg={12}
                        md={12}
                        sm={12}
                        // xs={12}
                        className={classes.title_container}
                    >
                        <Grid
                            item
                            xl={4}
                            lg={4}
                            md={4}
                            sm={4}
                            xs={4}
                            className={classes.title_tag}
                        >
                        </Grid>
                    </Grid>

                    <Grid
                        // item
                        container
                        xl={12}
                        lg={12}
                        md={12}
                        sm={12}
                        // xs={12}
                        className={classes.score_main_container}
                    >
                        {/* Headers */}
                        <Grid
                            container
                            xl={2}
                            lg={2}
                            md={2}
                            sm={2}
                            // xs={2}
                            className={classes.lbl_score_container}
                        >
                            <Grid
                                item
                                xl={2}
                                lg={2}
                                md={2}
                                sm={2}
                                xs={2}
                                className={classes.txt_container}
                            >
                                <span style={{fontSize:"1rem", color:"white", marginLeft:"3vh" }}>Rank</span>
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
                                <span style={{fontSize:"1rem", color:"white",}}>Username</span>
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
                                <span style={{fontSize:"1rem", color:"white", }}>{""}</span>
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
                                <span style={{fontSize:"1rem", color:"white", }}>Score</span>
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
                                <span style={{fontSize:"1rem", color:"orange", marginLeft:"5vh"}}>Fail</span>
                            </Grid>
                        </Grid>

                        {playerScores != null && playerScores.length != 0 && playerScores.map((player,index)=>{
                            return (<PlayerScore key={index} rank={index+1} username={player.username} score={player.success_score} failedScore={player.failure_score}/>)

                        })}
                    </Grid>
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
        </Grid>
    )
}

export default withStyles(styleSheet)(Leaderboard);