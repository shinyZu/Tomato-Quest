import React, {useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";

import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {ValidatorForm, TextValidator} from "react-material-ui-form-validator";

import MySnackBar from "../../components/common/MySnackbar/MySnackbar";
import {Button} from "@mui/material";
import PlayerService from "../../services/PlayerService";

function Register(props) {
    const {classes} = props;

    const [registerFormData, setRegisterFormData] = useState({
        email: "",
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

    const handleEmailChange = (e) => {
        const emailValue = e.target.value;
        // Your validation logic for the email field
        const isValidEmail = /^[A-z|0-9]{4,}@(gmail)(.com|.lk)$/.test(emailValue);
        setEmailValid(isValidEmail);
        setRegisterFormData({
            ...registerFormData,
            email: emailValue,
        });
    };

    const handleUsernameChange = (e) => {
        const usernameValue = e.target.value;
        const isValidUsername = /^[A-z|0-9]{5,}$/.test(usernameValue);
        setUsernameValid(isValidUsername);
        setRegisterFormData({
            ...registerFormData,
            username: usernameValue,
        });
    };

    const handlePasswordChange = (e) => {
        const passwordValue = e.target.value;
        // Your validation logic for the password field
        const isValidPassword = /^[A-z|0-9|@]{8,}$/.test(passwordValue);
        setPasswordValid(isValidPassword);
        setRegisterFormData({
            ...registerFormData,
            password: passwordValue,
        });
    };

    const registerUser = async (e) => {
        console.log(registerFormData);
        let res = await PlayerService.createPlayer(registerFormData);
        console.log(res)
        
        if (res.status === 201) {
            if (res) {
                console.log(res);
                setOpenAlert({
                    open: true,
                    alert: res.data.message,
                    severity: "success",
                    variant: "standard",
                })

                // Converting the loginFormData object to a JSON string and store it in localStorage
                localStorage.setItem('loggedPlayer', JSON.stringify(registerFormData));

                setTimeout(()=>{
                    window.location.href="/home";
                },1500)
            }
        } else {
          setOpenAlert({
            open: true,
            alert: res.response.data.message,
            severity: "error",
            variant: "standard",
          });
        }
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

                    <ValidatorForm className="pt-2" onSubmit={registerUser}>
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
                                // required={true}
                                style={{marginBottom: "20px"}}
                                inputProps={{min: 0, style: {textAlign: 'center', color: "black", fontSize: "2rem"}}}
                                validators={["matchRegexp:^[A-z|0-9]{4,}@(gmail)(.com|.lk)$"]}
                                errorMessages={["Invalid email address"]}
                                value={registerFormData.email}
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
                                placeholder="Username"
                                type="text"
                                variant="standard"
                                size="normal"
                                // fullWidth
                                // required={true}
                                style={{marginBottom: "20px"}}
                                inputProps={{min: 0, style: {textAlign: 'center', color: "black", fontSize: "2rem"}}}
                                validators={["matchRegexp:^[A-z|0-9]{5,}$"]}
                                errorMessages={["Should have atleast 5 character"]}
                                value={registerFormData.username}
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
                                        fontSize: "2rem",
                                        outline: "none",
                                        border: "none"
                                    }
                                }}
                                validators={["matchRegexp:^[A-z|0-9|@]{8,}$"]}
                                errorMessages={["Must have atleast 8 characters"]}
                                value={registerFormData.password}
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
                                    registerUser()
                                }} */
                            >
                                <Button 
                                    type="submit"
                                    disabled={isEmailValid && isUsernameValid && isPasswordValid ? false : true}
                                    className={classes.btn_ok} 
                                ></Button>
                            </Grid>
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
                                Already a member?{" "}
                                <u>
                                    <Link to="/" className={classes.txt_register}>
                                        Login
                                    </Link>
                                </u>
                            </small>
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

export default withStyles(styleSheet)(Register);