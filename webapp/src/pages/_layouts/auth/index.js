import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

//Externals
import compose from "recompose/compose";

// Material helpers
import { withStyles } from "@material-ui/core";

// Material components
import { Grid, Typography } from "@material-ui/core";

//Component styles
import styles from "./styles";

function AuthLayout({ classes, children }) {
  return (
    <div className={classes.root}>
      <Grid className={classes.grid} container>
        <Grid className={classes.quoteWrapper} item lg={7}>
          <div className={classes.quote}>
            <div className={classes.quoteInner}>
              <Typography className={classes.quoteText} variant="h1">
                A melhor ferramenta gratuita para organizar seu leads
              </Typography>
              <div className={classes.person}>
                <Typography className={classes.name} variant="body1">
                  Salve e encontre seus leads na simplicidade de um click!
                </Typography>
              </div>
            </div>
          </div>
        </Grid>
        <Grid className={classes.content} item lg={5} xs={12}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
}

AuthLayout.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired
};

export default compose(
  withRouter,
  withStyles(styles)
)(AuthLayout);
