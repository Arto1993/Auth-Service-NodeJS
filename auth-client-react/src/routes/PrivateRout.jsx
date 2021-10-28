import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { Box } from "@material-ui/core";

import Loader from "../components/Loader/loader";

const PrivateRout = ({ exact, path, component }) => {
  if (false) {
    return (
      <React.Fragment>
        <Loader />
      </React.Fragment>
    );
  }

  const currentUser = true;

  return currentUser ? (
    <React.Fragment>
      {/* <Header>
        <Box className={classes.container}>
          <Route exact={exact} path={path} component={component} />
        </Box>
      </Header> */}
    </React.Fragment>
  ) : (
    <Redirect to="/login" />
  );
}

export default PrivateRout;
