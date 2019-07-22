export default theme => ({
  root: {
    padding: theme.spacing(3)
  },
  tableRoot: {
    padding: 0
  },
  content: {},
  progressWrapper: {
    paddingTop: "48px",
    paddingBottom: "24px",
    display: "flex",
    justifyContent: "center"
  },
  tableRow: {
    height: "64px"
  },
  tableCell: {
    whiteSpace: "nowrap"
  },
  tableCellInner: {
    display: "flex",
    alignItems: "center"
  },
  alertText: {
    color: theme.palette.danger.main,
    fontWeight: 500,
    marginLeft: 15,
    marginBottom: 10
  },
  nameText: {
    display: "inline-block",
    marginLeft: theme.spacing(2),
    fontWeight: 500,
    cursor: "pointer"
  },
  searchRoot: {
    alignItems: "center",
    backgroundColor: theme.palette.common.white,
    border: `1px solid ${theme.palette.common.neutral}`,
    borderRadius: "4px",
    display: "flex",
    flexBasis: "420px",
    paddingBottom: theme.spacing(0.5),
    paddingLeft: theme.spacing(),
    paddingRight: theme.spacing(),
    paddingTop: theme.spacing(0.5)
  },
  icon: {
    marginRight: theme.spacing(),
    color: theme.palette.text.secondary
  },
  input: {
    flexGrow: 1,
    fontSize: "14px",
    lineHeight: "16px",
    letterSpacing: "-0.05px"
  },
  field: {
    margin: theme.spacing(3)
  },
  textField: {
    width: "420px",
    maxWidth: "100%",
    marginRight: theme.spacing(3)
  },
  portletFooter: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  progress: {
    display: "block",
    marginTop: theme.spacing(2),
    marginLeft: "auto",
    marginRight: "auto"
  }
});
