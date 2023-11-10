import React, {useState, useEffect} from 'react'
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import btn_sound_on from "../../assets/images/controls/sounds_on.png"
import btn_sound_off from "../../assets/images/controls/sounds_off.png"
import btn_play from "../../assets/images/controls/play.png"
import btn_pause from "../../assets/images/controls/pause.png"

import {Howl, Howler} from 'howler';
import game_track from "../../assets/audio/game_track.mp3"
import success_track from "../../assets/audio/CorrectAnswer.mp3"
import fail_track from "../../assets/audio/WrongAnswer.mp3"
import gameover_track from "../../assets/audio/GameOver.mp3"
import gamewin_track from "../../assets/audio/game_win_2.mp3"

import { AnimateOnWin } from './style'; 
import { AnimateOnGameOver } from './style'; 

var sfx = {
    game_track : new Howl({
        src:[game_track],
    }),
    success_track:new Howl({
        src:[success_track]
    }),
    fail_track:new Howl({
        src:[fail_track]
    }),
    gameover_track:new Howl({
        src:[gameover_track]
    }),
    gamewin_track:new Howl({
        src:[gamewin_track]
    })
}

function Game(props) {
    const {classes} = props;
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
    const [isAnswerWrong, setIsAnswerWrong] = useState(false);
    const [isAnswered, setIsAnswered] = useState(false);
    const [displayQSBoard, setDisplayQSBoard] = useState(true);
    const [isGameTrackPlaying, setIsGameTrackPlaying] = useState(false);
    const [isGamePaused, setIsGamePaused] = useState(false);
    const [isGamePausedForAnswerCheck, setIsGamePausedForAnswerCheck] = useState(false);
    const [time, setTime] = useState(30);
    const [isTimeOver, setIsTimeOver] = useState(false);

    // To handle the game sound track
    const handleSound = () => {
        console.log("handling sound....",isGameTrackPlaying)
        
        if(!isGameTrackPlaying){
            console.log("if----",isGameTrackPlaying)
            sfx.game_track.play()
            setIsGameTrackPlaying(true);
        } else {
            console.log("else------",isGameTrackPlaying)
            sfx.game_track.pause()
            setIsGameTrackPlaying(false);
        }

        // if(isGameTrackPlaying){
        //     console.log("if----",isGameTrackPlaying)
        //     sfx.game_track.pause()
        //     setIsGameTrackPlaying(false);
        // } else {
        //     console.log("else------",isGameTrackPlaying)
        //     sfx.game_track.play()
        //     setIsGameTrackPlaying(true);
        // }
    }
    
    // To pause the game
    const pauseGame = () => {
        console.log("pausing sound....",isGamePaused)
        if(isGamePaused) {
            console.log("if------",isGamePaused)
            sfx.game_track.play()
            setIsGamePaused(false)
            
        }else {
            console.log("else------",isGamePaused)
            sfx.game_track.pause()
            setIsGamePaused(true)

        }
    }
    
    // const resumeGame = () => {
    //     sfx.game_track.play()
    //     setIsGamePaused(false)
    // }

    // To check the answer
    const checkAnswer = (selectedAnswer) => {
        setIsGameTrackPlaying(false)
        handlePauseResume()
        // setIsGamePausedForAnswerCheck(true)
        if(selectedAnswer == 5) {
            console.log("Answer is correct play the success track")
            sfx.game_track.stop();
            sfx.success_track.play()
            setIsAnswerCorrect(true)
            setDisplayQSBoard(false)
        } else{
            console.log("Answer is wrong play the defeat track")
            sfx.game_track.stop();
            sfx.fail_track.play()
            setIsAnswerCorrect(false)
            setDisplayQSBoard(false)

        }
    }

    // useEffect(()=>{
    //     setIsGameTrackPlaying(true)
    //     sfx.game_track.play();
    // },[])
    
    // useEffect(() => {
    //     if (!isGamePaused) {
    //         const timer = setInterval(() => {
    //             if (time > 0) {
    //                 setTime(time - 1);
    //             } else {
    //                 clearInterval(timer);
    //                 // Timer has reached 0, you can trigger actions or stop the timer here
    //                 if (!isTimeOver) { // Check if the game over track hasn't been played yet
    //                     setIsTimeOver(true);
                        // sfx.game_track.stop();
                        // sfx.gameover_track.play();
                        // // sfx.gamewin_track.play();
    //                 }
    //             }
    //         }, 1000);
        
    //     return () => {
    //         clearInterval(timer); // Clear the timer when the component unmounts
    //       };
    //     }
    //   }, [time, isGamePaused, isTimeOver]);


    useEffect(() => {
        let timer;
    
        if (!isGamePaused && !isGamePausedForAnswerCheck) {
          timer = setInterval(() => {
            if (time > 0) {
              setTime((prevTime) => prevTime - 1);
            } else {
              clearInterval(timer);
              // Timer has reached 0, you can trigger actions or stop the timer here
              if (!isTimeOver) {
                // Check if the game over track hasn't been played yet
                setIsTimeOver(true);
                sfx.game_track.stop();
                sfx.gameover_track.play();
                // sfx.gamewin_track.play();
              }
            }
          }, 1000);
        }
    
        return () => {
          clearInterval(timer); // Clear the timer when the component unmounts or when the timer is paused
        };
      }, [time, isGamePaused, isTimeOver, isGamePausedForAnswerCheck]);


      const handlePauseResume = () => {
        setIsGamePausedForAnswerCheck((prevIsGamePausedForAnswerCheck) => !prevIsGamePausedForAnswerCheck);
      };
      
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
            {/* Top controls button bar */}
            <Grid conatiner className={classes.controls_bar_container}
                  xl={12}
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
            >
                {/* Right side control buttons */}
                <Grid container
                      xl={6}
                      lg={6}
                      md={6}
                      sm={6}
                      xs={6}
                      className={classes.controls_left_container}
                    //   style={{filter: isGamePaused ? "blur(8px)" : "none", "-webkit-filter": isGamePaused ? "blur(2px)" : "none"}}
                >
                    <Grid item className={classes.btn_timer_container}></Grid>
                    {/* <Grid item className={classes.btn_labels}>00:30</Grid> */}
                    <Grid item className={classes.btn_labels}>{`00:${time < 10 ? `0${time}` : time}`}</Grid>
                    <Grid item className={classes.btn_level_container}></Grid>
                    <Grid item className={classes.btn_labels}>Level: 1</Grid>
                </Grid>

                {/* Left side control buttons */}
                <Grid container
                    xl={6}
                    lg={6}
                    md={6}
                    sm={6}
                    xs={6}
                    className={classes.controls_right_container}
                >
                    <Grid item 
                        className={classes.btn_sound_container} 
                        onClick={handleSound}
                        style={{backgroundImage: isGameTrackPlaying ? `url(${btn_sound_on})` : `url(${btn_sound_off})`, display: isGamePaused ? "none" : "block" }}
                    ></Grid>

                    <Grid item 
                        className={classes.btn_pause_container}  
                        onClick={pauseGame}
                        style={{backgroundImage: !isGamePaused ? `url(${btn_pause})` : `url(${btn_play})`, pointerEvents: !isGameTrackPlaying && (isAnswerCorrect || !isAnswerCorrect) && "none" }}
                    ></Grid>

                    {/* <Grid item 
                        className={classes.btn_play_container}
                        onClick={resumeGame}
                    ></Grid> */}

                    <Grid item className={classes.btn_restart_container}
                          onClick={() => {
                              window.location.reload(false);
                          }}
                    ></Grid>

                    <Grid item className={classes.btn_home_container}
                          onClick={() => {
                              window.location.href = "/home";
                          }}
                    ></Grid>
                </Grid>
            </Grid>

            {/* Score section */}
            <Grid container 
                className={classes.score_qs_board_main_container} 
            >
                <Grid item container className={classes.score_container}
                      xl={1}
                      lg={1}
                      md={1}
                      sm={1}
                      xs={1}
                    //   style={{filter: isGamePaused ? "blur(8px)" : "none", "-webkit-filter": isGamePaused ? "blur(2px)" : "none"}}
                >
                    {/* Correct score icon & score in text */}
                    <Grid item container className={classes.icon_correct_score_container}>
                        <Grid item className={classes.icon_correct_score}></Grid>
                        <Grid item className={classes.lbl_scores}>X 15</Grid>
                    </Grid>
                    {/* Incorrect score icon & score in text */}
                    <Grid item container className={classes.icon_correct_score_container}>
                        <Grid item className={classes.icon_wrong_score}></Grid>
                        <Grid item className={classes.lbl_scores}>X 2</Grid>
                    </Grid>
                </Grid>

                {displayQSBoard && !isGamePaused && !isTimeOver ? (
                    <>
                        {/* Equation board */}
                        <Grid item container className={classes.qs_board_main_container}
                              xl={11}
                              lg={11}
                              md={11}
                              sm={11}
                              xs={11}
                              style={{filter: isGamePaused ? "blur(8px)" : "none", "-webkit-filter": isGamePaused || isTimeOver ? "blur(2px)" : "none"}}
                        >
                            <Grid item className={classes.qs_board_container}>
                                <Grid item className={classes.qs_container}></Grid>
                            </Grid>
                        </Grid>
                    </>
                ) : isGamePaused ? (
                    <>
                        {/* Pause image */}
                        <Grid item container className={classes.qs_board_main_container}
                              xl={11}
                              lg={11}
                              md={11}
                              sm={11}
                              xs={11}
                        >
                            <Grid item className={classes.pause_bg}>
                                <Grid item className={classes.pause_bg}></Grid>
                            </Grid>
                        </Grid>
                    </>
                ) : isTimeOver && (
                    <>
                        {/* Game Over image */}
                        <Grid item container className={classes.qs_board_main_container}
                            xl={11}
                            lg={11}
                            md={11}
                            sm={11}
                            xs={11}
                        >
                            <Grid item className={classes.gamewin_bg}>
                                {/* <Grid item className={classes.gamewin_bg}></Grid> */}
                                {/* <AnimateOnWin></AnimateOnWin> */}
                                <AnimateOnGameOver></AnimateOnGameOver>
                            </Grid>
                        </Grid>
                    </>
                )}

                {!displayQSBoard && isAnswerCorrect ? ( // if answer is correct
                    // Display correct answer on the screen when no QS board displayed and user's answer is correct
                    <>
                        <Grid item container className={classes.answer_status_main_container}
                              xl={11}
                              lg={11}
                              md={11}
                              sm={11}
                              xs={11}
                        >
                            <Grid item container className={classes.green_tick_main_container}>
                                <Grid item container className={classes.txt_answer_container}>
                                    <Typography variant='h4'>Correct Answer is : 5</Typography>
                                </Grid>
                                <Grid item className={classes.happy_tomato_container}></Grid>
                                <Grid item container justifyContent='center'>
                                    <Grid item className={classes.green_tick_container}></Grid>
                                </Grid>
                            </Grid>
                            <Grid container justifyContent='flex-end'>
                                <Grid item className={classes.btn_next_container}></Grid>
                            </Grid>
                        </Grid>
                    </>
                ) : !displayQSBoard && !isAnswerCorrect ? ( // if answer is wrong
                    <>
                        <Grid item container className={classes.answer_status_main_container}
                              xl={11}
                              lg={11}
                              md={11}
                              sm={11}
                              xs={11}
                        >
                            <Grid item container className={classes.red_cross_main_container}>
                                <Grid item container className={classes.txt_answer_container}>
                                    <Typography variant='h4'>Correct Answer is : 4</Typography>
                                </Grid>
                                <Grid item className={classes.sad_tomato_container}></Grid>
                                <Grid item container justifyContent='center'>
                                    <Grid item className={classes.red_cross_container}></Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container justifyContent='flex-end'>
                            <Grid item className={classes.btn_next_container}></Grid>
                        </Grid>
                    </>
                ) : null}
            </Grid>

            {/* Answer section */}
            {displayQSBoard ? (
                <>
                    <Grid container className={classes.answer_container}
                          xl={12}
                          lg={12}
                          md={12}
                          sm={12}
                          xs={12}
                          style={{filter: isGamePaused ? "blur(8px)" : "none", "-webkit-filter": isGamePaused || isTimeOver ? "blur(2px)" : "none"}}
                    >
                        <Grid item className={classes.btn_0} style={{pointerEvents: isGamePaused ? "none" : isTimeOver ? "none" : isGamePaused || isTimeOver ? "none" : "auto"}} onClick={() => {checkAnswer(0)}} ></Grid>
                        <Grid item className={classes.btn_1} style={{pointerEvents: isGamePaused ? "none" : isTimeOver ? "none" : isGamePaused || isTimeOver ? "none" : "auto"}} onClick={() => {checkAnswer(1)}}></Grid>
                        <Grid item className={classes.btn_2} style={{pointerEvents: isGamePaused ? "none" : isTimeOver ? "none" : isGamePaused || isTimeOver ? "none" : "auto"}} onClick={() => {checkAnswer(2)}}></Grid>
                        <Grid item className={classes.btn_3} style={{pointerEvents: isGamePaused ? "none" : isTimeOver ? "none" : isGamePaused || isTimeOver ? "none" : "auto"}} onClick={() => {checkAnswer(3)}}></Grid>
                        <Grid item className={classes.btn_4} style={{pointerEvents: isGamePaused ? "none" : isTimeOver ? "none" : isGamePaused || isTimeOver ? "none" : "auto"}} onClick={() => {checkAnswer(4)}}></Grid>
                        <Grid item className={classes.btn_5} style={{pointerEvents: isGamePaused ? "none" : isTimeOver ? "none" : isGamePaused || isTimeOver ? "none" : "auto"}} onClick={() => {checkAnswer(5)}}></Grid>
                        <Grid item className={classes.btn_6} style={{pointerEvents: isGamePaused ? "none" : isTimeOver ? "none" : isGamePaused || isTimeOver ? "none" : "auto"}} onClick={() => {checkAnswer(6)}}></Grid>
                        <Grid item className={classes.btn_7} style={{pointerEvents: isGamePaused ? "none" : isTimeOver ? "none" : isGamePaused || isTimeOver ? "none" : "auto"}} onClick={() => {checkAnswer(7)}}></Grid>
                        <Grid item className={classes.btn_8} style={{pointerEvents: isGamePaused ? "none" : isTimeOver ? "none" : isGamePaused || isTimeOver ? "none" : "auto"}} onClick={() => {checkAnswer(8)}}></Grid>
                        <Grid item className={classes.btn_9} style={{pointerEvents: isGamePaused ? "none" : isTimeOver ? "none" : isGamePaused || isTimeOver ? "none" : "auto"}} onClick={() => {checkAnswer(9)}}></Grid>
                    </Grid>
                </>
            ) : null}
        </Grid>
    )
}

export default withStyles(styleSheet)(Game);