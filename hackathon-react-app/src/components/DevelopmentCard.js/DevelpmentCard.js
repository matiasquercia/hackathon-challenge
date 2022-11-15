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
  info: {
    fontFamily: 'Open Sans',
    fontSize: 20,
    display: "flex",
    alignItems: 'center',
    overflow: "hidden",
    marginLeft: 10
  },
  rank: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: 5
  },
  img: {
    display: "flex",
    alignItems: "center",
    marginLeft: 10
  },
  container: {
    display: "flex",
    flexDirection: "row",
    margin: 5
  }
}));


const DevelopmentCard = (props) => {

  const classes = useStyles();

  return (
    <div className={classes.divTotal}>
        <div className={classes.container}>
          <div className={classes.rank}> {props.ranking} </div>
          <div className={classes.img}>
            <img src={props.picture} alt='img'/>
          </div>
          <div item xs={12} sm={8} className={classes.name}>
            <div className={classes.info}>
              {props.firstName + ' ' + props.lastName}
              <br/> 
              {props.email}
            </div>
          </div>
        </div>     
    </div>
  );
};

export default DevelopmentCard;
