import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

// Externals
import classNames from "classnames";
import PropTypes from "prop-types";

// Material helpers
import { withStyles } from "@material-ui/core";

// Material components
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from "@material-ui/core";

// Material icons
import { DashboardOutlined as DashboardIcon } from "@material-ui/icons";

// Component styles
import styles from "./styles";

function Sidebar({ classes, className }) {
  const user = useSelector(state => state.auth.user);
  const avatar = `https://api.adorable.io/avatars/130/${user._id}@adorable.png`;

  const rootClassName = classNames(classes.root, className);

  const ForwardNavLink = React.forwardRef((props, ref) => (
    <NavLink {...props} innerRef={ref} />
  ));

  return (
    <nav className={rootClassName}>
      <div className={classes.logoWrapper}>
        <Link className={classes.logoLink} to="/">
          <img
            alt="Brainalytica logo"
            className={classes.logoImage}
            src="/images/logo.png"
          />
        </Link>
      </div>
      <Divider className={classes.logoDivider} />
      <div className={classes.profile}>
        <Link to="/account">
          <Avatar alt={user.name} className={classes.avatar} src={avatar} />
        </Link>
        <Typography className={classes.nameText} variant="h6">
          {user.name}
        </Typography>
        <Typography className={classes.bioText} variant="caption">
          {user.email}
        </Typography>
      </div>
      <Divider className={classes.profileDivider} />
      <List component="div" disablePadding>
        <ListItem
          activeClassName={classes.activeListItem}
          className={classes.listItem}
          component={ForwardNavLink}
          to="/dashboard"
        >
          <ListItemIcon className={classes.listItemIcon}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Meus Leads"
          />
        </ListItem>
      </List>
    </nav>
  );
}

Sidebar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Sidebar);
