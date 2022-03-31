import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
  loader: {
    color: "#00ACED",
    width: "30px !important",
    height: "30px !important",
  },
}));

export default function Loader() {
  const classes = useStyles();

  return (
    <div className="cm-loader">
      <div className={classes.root}>
        <CircularProgress className={classes.loader} />
      </div>
    </div>
  );
}
