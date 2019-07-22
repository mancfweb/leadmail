import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { signUpRequest, verifyUserRequest } from "~/store/modules/auth/actions";

// Externals
import PropTypes from "prop-types";
import compose from "recompose/compose";
import validate from "validate.js";

// Material helpers
import { withStyles } from "@material-ui/core";

// Material components
import {
  Button,
  Checkbox,
  CircularProgress,
  TextField,
  Typography
} from "@material-ui/core";

import styles from "./styles";

// Form validation schema
import schema from "./schema";

function SignUp({ classes, history }) {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const usedEmail = useSelector(state => state.auth.used_email);

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    policy: false
  });

  const [toucheds, setTouched] = useState({
    name: false,
    email: false,
    password: false,
    policy: false
  });

  const [errors, setErrors] = useState({
    name: null,
    email: null,
    password: null,
    policy: null
  });

  const [isValid, setIsValid] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  function handleFieldChange(field, value) {
    setSubmitError(null);
    setTouched({ ...toucheds, [field]: true });
    setValues({ ...values, [field]: value });
  }

  function handleSignUp() {
    dispatch(signUpRequest(values.name, values.email, values.password));
  }

  useEffect(() => {
    if (toucheds.email) {
      setTimeout(() => {
        dispatch(verifyUserRequest(values.email));
      }, 600);
    }

    const validationErrors = validate(values, schema);
    setErrors(validationErrors || {});
    setIsValid(validationErrors || usedEmail ? false : true);
  }, [dispatch, toucheds, values, usedEmail]);

  const showNameError = toucheds.name && errors.name;
  const showEmailError = toucheds.email && errors.email;
  const showUsedEmailError = usedEmail && values.email !== "";
  const showPasswordError = toucheds.password && errors.password;
  const showPolicyError = toucheds.policy && errors.policy;

  return (
    <div className={classes.content}>
      <div className={classes.contentHeader}>
        <img
          alt="Leadmail logo"
          className={classes.logoImage}
          src="/images/logo.png"
        />
      </div>
      <div className={classes.contentBody}>
        <form className={classes.form}>
          <Typography className={classes.title} variant="h2">
            Crie agora sua conta
          </Typography>
          <Typography className={classes.subtitle} variant="body1">
            Comece agora a salvar os emails de seus leads
          </Typography>
          <div className={classes.fields}>
            <TextField
              className={classes.textField}
              label="Name"
              name="name"
              onChange={event => handleFieldChange("name", event.target.value)}
              value={values.name}
              variant="outlined"
            />
            {showNameError && (
              <Typography className={classes.fieldError} variant="body2">
                {errors.name[0]}
              </Typography>
            )}

            <TextField
              className={classes.textField}
              label="Seu e-mail"
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
            {showUsedEmailError && (
              <Typography className={classes.fieldError} variant="body2">
                Este e-mail já está em uso!
              </Typography>
            )}

            <TextField
              className={classes.textField}
              label="Senha"
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
            <div className={classes.policy}>
              <Checkbox
                checked={values.policy}
                className={classes.policyCheckbox}
                color="primary"
                name="policy"
                onChange={() => handleFieldChange("policy", !values.policy)}
              />
              <Typography className={classes.policyText} variant="body1">
                Eu li e aceito os &nbsp;
                <Link className={classes.policyUrl} to="#">
                  Termos de uso
                </Link>
                .
              </Typography>
            </div>
            {showPolicyError && (
              <Typography className={classes.fieldError} variant="body2">
                {errors.policy[0]}
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
              className={classes.signUpButton}
              color="primary"
              disabled={!isValid}
              onClick={handleSignUp}
              size="large"
              variant="contained"
            >
              Criar conta
            </Button>
          )}
          <Typography className={classes.signIn} variant="body1">
            Já possui conta?{" "}
            <Link className={classes.signInUrl} to="/sign-in">
              Acesse agora
            </Link>
          </Typography>
        </form>
      </div>
    </div>
  );
}

SignUp.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default compose(
  withRouter,
  withStyles(styles)
)(SignUp);
