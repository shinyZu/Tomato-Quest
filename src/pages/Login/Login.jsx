import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import styles from "./Login.module.css";

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import MySnackBar from "../../components/common/MySnackbar/MySnackbar";
import { Button } from "@mui/material";

function Login(props) {
  const { classes } = props; 

  const [loginFormData, setLoginFormData] = useState({
    username: "",
    password: "",
  });

  const [isDisabled, setIsDisabled] = useState(true);

  const [openAlert, setOpenAlert] = useState({
    open: false,
    alert: "",
    severity: "warning",
    variant: "",
  });

  const [isEmailValid, setEmailValid] = useState(false);
  const [isPasswordValid, setPasswordValid] = useState(false);

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    // Your validation logic for the email field
    const isValidEmail = /^[A-z|0-9]{4,}@(gmail)(.com|.lk)$/.test(emailValue);
    setEmailValid(isValidEmail);
    setLoginFormData({
      ...loginFormData,
      username: emailValue,
    });
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    // Your validation logic for the password field
    const isValidPassword = /^[A-z|0-9|@]{8,}$/.test(passwordValue);
    setPasswordValid(isValidPassword);
    setLoginFormData({
      ...loginFormData,
      password: passwordValue,
    });
  };

  const handleSubmit = async (e) => {
    window.location.href = "/home";
  }

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
      <Grid  
        item
        container
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        className={classes.login_container}
        > 
          <Grid 
            container 
            xl={11}
            lg={11}
            md={11}
            sm={11}
            xs={11}
            className={classes.glass_container}>
            <Grid  
              item
              container
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
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
        
            <ValidatorForm className="pt-2" onSubmit={handleSubmit}>
              <Grid  
                item
                container
                xl={12}
                lg={12}
                md={12}
                sm={12}
                xs={12}
              >
                <TextValidator
                    className={classes.txt_input_container}
                    placeholder="Email"
                    type="email"
                    variant="standard"
                    size="normal"
                    // fullWidth
                    required={true}
                    style={{ marginBottom: "20px"}}
                    inputProps={{min: 0, style: { textAlign: 'center', color:"black", fontSize:"2rem" }}}
                    validators={["matchRegexp:^[A-z|0-9]{4,}@(gmail)(.com|.lk)$"]}
                    errorMessages={["Invalid email address"]}
                    value={loginFormData.username}
                    onChange={handleEmailChange}
                />
              </Grid>
              <Grid  
                item
                container
                xl={12}
                lg={12}
                md={12}
                sm={12}
                xs={12}
              >
                  <TextValidator
                    className={classes.txt_input_container}
                    placeholder="Password"
                    type="password"
                    variant="standard"
                    size="normal"
                    // fullWidth
                    required={true}
                    style={{ marginBottom: "20px"}}
                    inputProps={{min: 0, style: { textAlign: 'center', color:"black", fontSize:"2rem", outline:"none", border:"none"}}}
                    validators={["matchRegexp:^[A-z|0-9|@]{8,}$"]}
                    errorMessages={["Must have atleast 8 characters"]}
                    value={loginFormData.password}
                    onChange={handlePasswordChange}
                  />
              </Grid>

              <Grid  
                item
                container
                xl={12}
                lg={12}
                md={12}
                sm={12}
                xs={12}
                className={classes.btn_ok_container}
              >
                <Grid 
                  item  
                  xl={2}
                  lg={2}
                  md={2}
                  sm={2}
                  xs={2} className={classes.btn_ok} 
                  onClick={()=>{
                    window.location.href = "/home";
                  }}
                >
                </Grid>
              </Grid>
            </ValidatorForm>
          </Grid>
      </Grid>
    </Grid>
  )
}

export default withStyles(styleSheet)(Login);