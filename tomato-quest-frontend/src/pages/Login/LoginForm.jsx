import React, {useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";

import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import styles from "./Login.module.css";

import {ValidatorForm, TextValidator} from "react-material-ui-form-validator";

import MySnackBar from "../../components/common/MySnackbar/MySnackbar";

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
    }

    return (
        <div className={classes.main_container}>
            <div className={classes.login_container}>
                <div className={styles.glass_container}>
                    <h1 className={classes.login_text}>
                        {/* Unlock the Access to Quality Education Resources! */}
                        LOGIN
                    </h1>

                    <ValidatorForm className="pt-2" /* onSubmit={handleSubmit} */>
                        <TextValidator
                            label="Email"
                            type="email"
                            variant="outlined"
                            size="small"
                            fullWidth
                            required={true}
                            style={{marginBottom: "20px"}}
                            validators={["matchRegexp:^[A-z|0-9]{4,}@(gmail)(.com|.lk)$"]}
                            errorMessages={["Invalid email address"]}
                            value={loginFormData.username}
                            onChange={handleEmailChange}
                        />
                        <TextValidator
                            label="Password"
                            type="password"
                            variant="outlined"
                            size="small"
                            fullWidth
                            required={true}
                            style={{marginBottom: "20px"}}
                            validators={["matchRegexp:^[A-z|0-9|@]{8,}$"]}
                            errorMessages={["Must have atleast 8 characters"]}
                            value={loginFormData.password}
                            onChange={handlePasswordChange}
                        />
                    </ValidatorForm>
                    <br/>
                    <div className={classes.login_footer}>
                        <button
                            disabled={!(isEmailValid && isPasswordValid)}
                            className={
                                isEmailValid && isPasswordValid
                                    ? classes.btn_login
                                    : classes.btn_login_disabled
                            }
                            type="submit"
                            onClick={(e) => {
                                handleSubmit(e);
                            }}
                        >
                            Login
                        </button>
                        <small className={classes.login_footer_text}>
                            Not a member?{" "}
                            <u>
                                <Link to="/register" className={classes.txt_register}>
                                    Register
                                </Link>
                            </u>
                        </small>
                    </div>
                </div>
                <MySnackBar
                    open={openAlert.open}
                    alert={openAlert.alert}
                    severity={openAlert.severity}
                    variant={openAlert.variant}
                    onClose={() => {
                        setOpenAlert({open: false});
                    }}
                />
            </div>
        </div>
    )
}

export default withStyles(styleSheet)(Login);