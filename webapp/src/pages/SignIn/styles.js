export default theme => ({
  contentWrapper: {},
  content: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  contentHeader: {
    display: "flex",
    alignItems: "center",
    paddingTop: theme.spacing(5),
    paddingBototm: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  backButton: {},
  form: {
    paddingLeft: "100px",
    paddingRight: "100px",
    paddingBottom: "125px",
    flexBasis: "700px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  },
  title: {
    marginTop: theme.spacing(3)
  },
  subtitle: {
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(0.5)
  },
  sugestion: {
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(2),
    textAlign: "center"
  },
  fields: {
    marginTop: theme.spacing(2)
  },
  textField: {
    width: "100%",
    "& + & ": {
      marginTop: theme.spacing(2)
    }
  },
  policy: {
    display: "flex",
    alignItems: "center"
  },
  policyCheckbox: {
    marginLeft: "-14px"
  },
  policyText: {
    display: "inline",
    color: theme.palette.text.secondary
  },
  policyUrl: {
    color: theme.palette.text.primary,
    "&:hover": {
      cursor: "pointer",
      color: theme.palette.primary.main
    }
  },
  progress: {
    display: "block",
    marginTop: theme.spacing(2),
    marginLeft: "auto",
    marginRight: "auto"
  },
  signInButton: {
    marginTop: theme.spacing(2),
    width: "100%"
  },
  signUp: {
    marginTop: theme.spacing(2),
    color: theme.palette.text.secondary
  },
  signUpUrl: {
    color: theme.palette.primary.main,
    fontWeight: "bold",
    "&:hover": {
      color: theme.palette.primary.main
    }
  },
  fieldError: {
    color: theme.palette.danger.main,
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing()
  },
  submitError: {
    color: theme.palette.danger.main,
    alignText: "center",
    marginBottom: theme.spacing(),
    marginTop: theme.spacing(2)
  }
});
