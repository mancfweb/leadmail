import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

//Externals
import classNames from "classnames";
import compose from "recompose/compose";

// Material helpers
import { withStyles, withWidth } from "@material-ui/core";

// Material components
import { Drawer } from "@material-ui/core";

import Topbar from "~/components/Layout/Topbar";
import Sidebar from "~/components/Layout/Sidebar";
import Footer from "~/components/Layout/Footer";

//Component styles
import styles from "./styles";

class DefaultLayout extends Component {
  constructor(props) {
    super(props);

    const isMobile = ["xs", "sm", "md"].includes(props.width);

    this.state = {
      isOpen: !isMobile
    };
  }

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  handleToggleOpen = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    const { classes, width, children } = this.props;
    const { isOpen } = this.state;

    const isMobile = ["xs", "sm", "md"].includes(width);
    const shiftTopbar = isOpen && !isMobile;
    const shiftContent = isOpen && !isMobile;

    return (
      <Fragment>
        <Topbar
          className={classNames(classes.topbar, {
            [classes.topbarShift]: shiftTopbar
          })}
          isSidebarOpen={isOpen}
          onToggleSidebar={this.handleToggleOpen}
          title="Leads"
        />
        <Drawer
          anchor="left"
          classes={{ paper: classes.drawerPaper }}
          onClose={this.handleClose}
          open={isOpen}
          variant={isMobile ? "temporary" : "persistent"}
        >
          <Sidebar className={classes.sidebar} />
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: shiftContent
          })}
        >
          {children}
          <Footer />
        </main>
      </Fragment>
    );
  }
}

DefaultLayout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  width: PropTypes.string.isRequired
};

export default compose(
  withStyles(styles),
  withWidth()
)(DefaultLayout);
