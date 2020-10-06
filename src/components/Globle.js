import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Grid,Box,Typography,Paper} from "@material-ui/core";
import CountUp from "react-countup";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    margin: "0 auto",
    marginTop:"20px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Globle = () => {
  const classes = useStyles();
  const [globalData, setGlobalData] = useState({});
  useEffect(() => {
    async function formdata() {
      const response = await fetch(
        "https://api.thevirustracker.com/free-api?global=stats"
      );
      let data = await response.json();
      delete data.results[0].source;
      setGlobalData(data.results[0]); 
    }
    formdata();
  }, []);

  const data = Object.keys(globalData).map((val,idx)=>{
    return(
        <Grid key={idx} item xs={12} sm={4}>
            <Paper elevation={3} >
                <Box textAlign="center"  borderLeft={0}borderTop={0}borderRight={0} border={4}borderColor="red" p={{ xs:2,sm:2,md:2,lg:2 }}>
                    <Box color="primary.main">
                        <Typography  variant="h6" gutterBottom>{val.replace(/_/gi, " ").toUpperCase()}</Typography>
                    </Box>
                    <Box>
                        <Typography  variant="h5" >
                            <CountUp
                                start={0}
                                end={globalData[val]}
                                duration={2.5}
                                separator=","
                                    />
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </Grid>
    )
  })
  
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
      {data}
      </Grid>
    </div>
  );
};

export default Globle;
