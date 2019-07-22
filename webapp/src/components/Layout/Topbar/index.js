import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

// Externals
import classNames from "classnames";
import compose from "recompose/compose";
import PropTypes from "prop-types";

// Material helpers
import { withStyles } from "@material-ui/core";

// Material components
import { IconButton, Toolbar, Typography } from "@material-ui/core";

// Material icons
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Input as InputIcon
} from "@material-ui/icons";

// Component styles
import styles from "./styles";

//Actions
import { signOut } from "~/store/modules/auth/actions";

function Topbar({ classes, className, title, isSidebarOpen, onToggleSidebar }) {
  const dispatch = useDispatch();
  const rootClassName = classNames(classes.root, className);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Fragment>
      <div className={rootClassName}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            className={classes.menuButton}
            onClick={onToggleSidebar}
            variant="text"
          >
            {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Typography className={classes.title} variant="h4">
            {title}
          </Typography>

          <IconButton className={classes.signOutButton} onClick={handleSignOut}>
            <InputIcon />
          </IconButton>
        </Toolbar>
      </div>
    </Fragment>
  );
}

Topbar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  isSidebarOpen: PropTypes.bool,
  onToggleSidebar: PropTypes.func,
  title: PropTypes.string
};

Topbar.defaultProps = {
  onToggleSidebar: () => {}
};

export default compose(
  withRouter,
  withStyles(styles)
)(Topbar);
