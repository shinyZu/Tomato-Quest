import React, { useState, useEffect } from 'react'
import { withStyles } from "@mui/styles";
import { styleSheet } from "./style";

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function Game(props) {
  const { classes } = props; 
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [isAnswerWrong, setIsAnswerWrong] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [displayQSBoard, setDisplayQSBoard] = useState(true);

  // useEffect(()=>{
  //   setIsAnswered(false);
  //   setIsAnswerCorrect(false);
  // })

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
            >
              <Grid item className={classes.btn_timer_container}></Grid>
              <Grid item className={classes.btn_labels}>00:30</Grid>
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
              className={classes.controls_right_container}>
                <Grid item className={classes.btn_sound_container}></Grid>  
                <Grid item className={classes.btn_pause_container}></Grid>  
                <Grid item className={classes.btn_play_container}></Grid>  
                <Grid item className={classes.btn_restart_container}
                  onClick={()=>{window.location.reload(false);}}
                ></Grid>
                <Grid item className={classes.btn_home_container}
                  onClick={()=>{window.location.href = "/home";}}
                ></Grid>
              </Grid>
          </Grid>

          {/* Score section */}
          <Grid container className={classes.score_qs_board_main_container}>
            <Grid item container className={classes.score_container}
              xl={1}
              lg={1}
              md={1}
              sm={1}
              xs={1}
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

            {displayQSBoard && (
              <>
                {/* Equation board */}
                <Grid item container className={classes.qs_board_main_container}
                  xl={11}
                  lg={11}
                  md={11}
                  sm={11}
                  xs={11}
                >
                  <Grid item className={classes.qs_board_container}>
                    <Grid item className={classes.qs_container}></Grid>
                  </Grid>
                </Grid>  
              </>
            )}
            
            {!displayQSBoard && isAnswerCorrect ? (
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
                          <Grid item container className={classes.txt_answer_container} >
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
            ) : !displayQSBoard && !isAnswerCorrect ? (
              <>
                <Grid item container className={classes.answer_status_main_container}
                    xl={11}
                    lg={11}
                    md={11}
                    sm={11}
                    xs={11}
                  >
                    <Grid item container className={classes.red_cross_main_container}>
                      <Grid item container className={classes.txt_answer_container} >
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

          {displayQSBoard ? (
            <>
              {/* Answer section */}
              <Grid container className={classes.answer_container}
                xl={12}
                lg={12}
                md={12}
                sm={12}
                xs={12}
                >
                <Grid item className={classes.btn_0} onClick={()=>{
                  console.log("Its the wrong answer")
                  setIsAnswerCorrect(false)
                  setDisplayQSBoard(false)
                }}></Grid>  
                <Grid item className={classes.btn_1}
                   onClick={()=>{
                    console.log("Its the correct answer")
                    setIsAnswerCorrect(true)
                    setDisplayQSBoard(false)
                  }}
                ></Grid>  
                <Grid item className={classes.btn_2}></Grid>  
                <Grid item className={classes.btn_3}></Grid>  
                <Grid item className={classes.btn_4}></Grid>  
                <Grid item className={classes.btn_5}></Grid>  
                <Grid item className={classes.btn_6}></Grid>  
                <Grid item className={classes.btn_7}></Grid>  
                <Grid item className={classes.btn_8}></Grid>  
                <Grid item className={classes.btn_9}></Grid>  
              </Grid>
            </>
          ) : null }
      </Grid>
  )
}

export default withStyles(styleSheet)(Game);