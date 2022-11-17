import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  divTotal: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff",
    boxShadow: "0px 3px 6px #00000029",
    border: "1px solid #BFD7D8",
    borderRadius: 10,
  },
  text: {
    fontFamily: 'Open Sans',
    fontSize: 20,
    marginTop: 16,
    marginLeft: 22,
    marginBottom: 20
  }
}));


const Card = (props) => {

  const classes = useStyles();

  return (
    <div className={classes.divTotal}>
      <h1 className={classes.text}> {props.title} </h1>
      {props.children}
    </div>
  );
};

export default Card;
