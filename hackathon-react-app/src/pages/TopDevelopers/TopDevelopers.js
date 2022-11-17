import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import DeveloperTable from "../../components/DeveloperTable/DeveloperTable";
import { useSelector } from "react-redux";
import { _getTopDevelopers } from "../../actions/Application";
import store from "../../Store";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 80,
    marginRight: 15,
  },
  divTitle: {
    marginTop: 90,
    marginBottom: 20,
  },
  title: {
    display: "inline-block",
    fontSize: 30,
    marginLeft: 97,
    fontFamily: "Open Sans",
  },
  team: {
    flexGrow: 1,
    padding: 20,
  },
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 50,
  },
}));

const TopDevelopers = () => {

  const classes = useStyles();

  const topDevelopersReady = useSelector((state) => state.topDevelopers.ready) || null;
  const topDevelopers = useSelector((state) => state.topDevelopers.data) || null;

  useEffect(() => {
    store.dispatch(_getTopDevelopers());
  }, []);

  console.log(topDevelopersReady);
  
  return (
    <div>
      <div className={classes.divTitle}>
        <h1 className={classes.title}>Top Developers</h1>
      </div>
      <div className={classes.root}>
        { topDevelopersReady ?
            <DeveloperTable developers={topDevelopers}/>
          :
          null
        }
      </div>
    </div>
  );
};

export default TopDevelopers;
