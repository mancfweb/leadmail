import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { signInRequest } from "~/store/modules/auth/actions";

// Externals
import PropTypes from "prop-types";
import compose from "recompose/compose";
import validate from "validate.js";

// Material helpers
import { withStyles } from "@material-ui/core";

// Material components
import {
  Button,
  IconButton,
  CircularProgress,
  TextField,
  Typography
} from "@material-ui/core";
// Material icons
import { ArrowBack as ArrowBackIcon } from "@material-ui/icons";

import styles from "./styles";

// Form validation schema
import schema from "./schema";

function SignIn({ classes, history }) {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const [values, setValues] = useState({
    email: "",
    password: ""
  });

  const [toucheds, setTouched] = useState({
    email: false,
    password: false
  });

  const [errors, setErrors] = useState({
    email: null,
    password: null
  });

  const [isValid, setIsValid] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  function handleBack() {
    history.goBack();
  }

  function handleFieldChange(field, value) {
    setSubmitError(null);
    setTouched({ ...toucheds, [field]: true });
    setValues({ ...values, [field]: value });
  }

  function handleSignIn() {
    dispatch(signInRequest(values.email, values.password));
  }

  useEffect(() => {
    const validationErrors = validate(values, schema);
    setErrors(validationErrors || {});
    setIsValid(validationErrors ? false : true);
  }, [values]);

  const showEmailError = toucheds.email && errors.email;
  const showPasswordError = toucheds.password && errors.password;

  return (
    <div className={classes.content}>
      <div className={classes.contentHeader}>
        <IconButton className={classes.backButton} onClick={handleBack}>
          <ArrowBackIcon />
        </IconButton>
        <img
          alt="Brainalytica logo"
          className={classes.logoImage}
          src="/images/logo.png"
        />
      </div>
      <div className={classes.contentBody}>
        <form className={classes.form}>
          <Typography className={classes.title} variant="h2">
            Acessar Conta
          </Typography>

          <Typography className={classes.sugestion} variant="body1">
            informe seu e-mail e senha
          </Typography>
          <div className={classes.fields}>
            <TextField
              className={classes.textField}
              label="Seu E-mail cadastrado"
              name="email"
              onChange={event => handleFieldChange("email", event.target.value)}
              type="text"
              value={values.email}
              variant="outlined"
            />
            {showEmailError && (
              <Typography className={classes.fieldError} variant="body2">
                {errors.email[0]}
              </Typography>
            )}
            <TextField
              className={classes.textField}
              label="Sua senha"
              name="password"
              onChange={event =>
                handleFieldChange("password", event.target.value)
              }
              type="password"
              value={values.password}
              variant="outlined"
            />
            {showPasswordError && (
              <Typography className={classes.fieldError} variant="body2">
                {errors.password[0]}
              </Typography>
            )}
          </div>
          {submitError && (
            <Typography className={classes.submitError} variant="body2">
              {submitError}
            </Typography>
          )}

          {loading ? (
            <CircularProgress className={classes.progress} />
          ) : (
            <Button
              className={classes.signInButton}
              color="primary"
              disabled={!isValid}
              onClick={handleSignIn}
              size="large"
              variant="contained"
            >
              Acessar
            </Button>
          )}
          <Typography className={classes.signUp} variant="body1">
            Ainda não possui conta?{" "}
            <Link className={classes.signUpUrl} to="/">
              Criar conta
            </Link>
          </Typography>
        </form>
      </div>
    </div>
  );
}

SignIn.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default compose(
  withRouter,
  withStyles(styles)
)(SignIn);
