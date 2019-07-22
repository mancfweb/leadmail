export default theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.border}`,
    backgroundColor: theme.palette.common.white,
    display: "flex",
    alignItems: "center",
    height: "64px",
    zIndex: theme.zIndex.appBar
  },
  toolbar: {
    minHeight: "auto",
    width: "100%",
    justifyContent: "space-between"
  },
  title: {
    marginLeft: theme.spacing(),
    flex: 1
  },
  menuButton: {
    marginLeft: "-4px"
  },
  notificationsButton: {
    marginLeft: "auto"
  },
  signOutButton: {
    marginLeft: theme.spacing()
  }
});
