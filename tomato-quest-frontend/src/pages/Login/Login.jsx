import React, {useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";

import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import styles from "./Login.module.css";

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {ValidatorForm, TextValidator} from "react-material-ui-form-validator";

import MySnackBar from "../../components/common/MySnackbar/MySnackbar";
import {Button} from "@mui/material";
import LoginService from "../../services/LoginService";

function Login(props) {
    const {classes} = props;

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
    const [isUsernameValid, setUsernameValid] = useState(false);
    const [isPasswordValid, setPasswordValid] = useState(false);

    const handleUsernameChange = (e) => {
        const usernameValue = e.target.value;
        const isValidUsername = /^[A-z|0-9]{5,}$/.test(usernameValue);
        setUsernameValid(isValidUsername);
        setLoginFormData({
            ...loginFormData,
            username: usernameValue,
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

    const loginUser = async (e) => {
        console.log(loginFormData)

        await LoginService.login(loginFormData)
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
          
                      // Converting the loginFormData object to a JSON string and store it in localStorage
                      localStorage.setItem('loggedPlayer', JSON.stringify(res.data.data));
          
                      setTimeout(()=>{
                          window.location.href="/home";
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
                    xl={9}
                    lg={9}
                    md={9}
                    sm={9}
                    xs={9}
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
                            xl={6}
                            lg={6}
                            md={6}
                            sm={6}
                            xs={6}
                            className={classes.title_tag}
                        >
                        </Grid>
                    </Grid>

                    <ValidatorForm className="pt-2" onSubmit={loginUser}>
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
                                placeholder="Username"
                                type="text"
                                variant="standard"
                                size="normal"
                                // fullWidth
                                // required={true}
                                style={{marginBottom: "20px"}}
                                inputProps={{min: 0, style: {textAlign: 'center', color: "black", fontSize: "1.5rem"}}}
                                validators={["matchRegexp:^[A-z|0-9]{5,}$"]}
                                errorMessages={["Invalid username, must contain atleast 5 characters"]}
                                value={loginFormData.username}
                                onChange={handleUsernameChange}
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
                                // required={true}
                                style={{marginBottom: "20px"}}
                                inputProps={{min: 0,
                                    style: {
                                        textAlign: 'center',
                                        color: "black",
                                        fontSize: "1.5rem",
                                        outline: "none",
                                        border: "none"
                                    }
                                }}
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
                                xs={2} 
                                /* className={classes.btn_ok}
                                onClick={() => {
                                    loginUser();
                                }} */
                            >
                                <Button 
                                    type="submit"
                                    disabled={isUsernameValid && isPasswordValid ? false : true}
                                    className={classes.btn_ok} 
                                ></Button>
                            </Grid>

                            <Grid
                                item
                                container
                                xl={12}
                                lg={12}
                                md={12}
                                sm={12}
                                xs={12}
                                className={classes.footer_container}
                            >
                                <small className={classes.login_footer_text}>
                                    Not a member?{" "}
                                    <u>
                                        <Link to="/register" className={classes.txt_register}>
                                            Register
                                        </Link>
                                    </u>
                                </small>
                            </Grid>

                        </Grid>
                    </ValidatorForm>
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

export default withStyles(styleSheet)(Login);