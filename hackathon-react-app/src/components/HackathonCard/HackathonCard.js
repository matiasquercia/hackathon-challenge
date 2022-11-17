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
    margin: 10
  },
  text: {
    fontFamily: 'Open Sans',
    fontSize: 20,
    marginLeft: 20,
    marginTop:20
  },
  info: {
    margin: 20,
  }
}));


const HackathonCards = (props) => {

  const classes = useStyles();

  const setHackathon = (id) => console.log(id);

  const colorChecked = (_colorChecked) => {
    const color = [];
    if (_colorChecked) {
      color[0] = "#0066E7";
      color[1] = "#FAFAFA";
    } else {
      color[0] = "#7E7E7E";
      color[1] = "#FFFFFF";
    }
    return color;
  };

  return (
      <div className={classes.divTotal}>
        <div className={classes.text}> {props.name} </div>
        <div className={classes.info}> 
          {props.location} 
          <br/> 
          {props.date} 
        </div>
      </div>
  );
};

export default HackathonCards;
