import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getLeadsRequest, addLeadRequest } from "~/store/modules/lead/actions";

// Externals
import PropTypes from "prop-types";
import compose from "recompose/compose";
import PerfectScrollbar from "react-perfect-scrollbar";
import { format } from "date-fns";

// Material helpers
import { withStyles } from "@material-ui/core";

// Material components
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Button,
  Typography,
  CircularProgress
} from "@material-ui/core";

// Shared components
import Portlet from "components/Portlet";
import PortletContent from "components/PortletContent";
import PortletHeader from "components/PortletHeader";
import PortletLabel from "components/PortletLabel";
import PortletFooter from "components/PortletFooter";

// Component styles
import styles from "./style";

function Dashboard({ classes }) {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.lead.loading);
  const new_loading = useSelector(state => state.lead.new_loading);
  const new_fail = useSelector(state => state.lead.new_fail);
  const failMessage = useSelector(state => state.lead.failMessage);
  const leads = useSelector(state => state.lead.leads);

  const [lead, setLead] = useState("");
  const [submited, setSubmited] = useState(false);

  function handleNewLead(event) {
    event.preventDefault();
    dispatch(addLeadRequest(lead));
    setSubmited(true);
  }

  useEffect(() => {
    dispatch(getLeadsRequest());
    setSubmited(false);
  }, [dispatch, submited]);

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item lg={4} md={6} xl={3} xs={12}>
          <Portlet>
            <form onSubmit={handleNewLead}>
              <PortletHeader>
                <PortletLabel subtitle="" title="Novo Lead" />
              </PortletHeader>
              <PortletContent noPadding>
                <div className={classes.field}>
                  <TextField
                    className={classes.textField}
                    helperText="Informe um e-mail válido"
                    label="E-mail"
                    margin="dense"
                    type="email"
                    required
                    value={lead}
                    onChange={event => setLead(event.target.value)}
                    variant="outlined"
                  />
                </div>
                {new_fail && (
                  <Typography className={classes.alertText} variant="body1">
                    {failMessage}
                  </Typography>
                )}
              </PortletContent>
              <PortletFooter className={classes.portletFooter}>
                {new_loading ? (
                  <CircularProgress className={classes.progress} />
                ) : (
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={handleNewLead}
                  >
                    Adicionar
                  </Button>
                )}
              </PortletFooter>
            </form>
          </Portlet>
        </Grid>
        <Grid item lg={8} md={12} xl={9} xs={12}>
          <div className={classes.content}>
            {loading ? (
              <div className={classes.progressWrapper}>
                <CircularProgress />
              </div>
            ) : (
              <Portlet className={classes.tableRoot}>
                <PortletHeader noDivider>
                  <PortletLabel
                    subtitle="Confira nosso banco de leads"
                    title="Leads"
                  />
                </PortletHeader>
                <PortletContent noPadding>
                  <PerfectScrollbar>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell align="left">E-mail</TableCell>
                          <TableCell align="left">Verificado em</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {leads.map(item => (
                          <TableRow
                            className={classes.tableRow}
                            hover
                            key={item._id}
                          >
                            <TableCell className={classes.tableCell}>
                              {item.email}
                            </TableCell>
                            <TableCell className={classes.tableCell}>
                              {format(
                                new Date(item.createdAt),
                                "DD/MM/YYYY hh:mm:ss"
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </PerfectScrollbar>
                </PortletContent>
              </Portlet>
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

Dashboard.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default compose(
  withRouter,
  withStyles(styles)
)(Dashboard);
