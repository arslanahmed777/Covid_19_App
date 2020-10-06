import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Grid,Paper} from "@material-ui/core";


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles((theme) => ({
    container: {
        maxHeight: "70vh",
      },
}));


  

const AllCountries = () => {
  const classes = useStyles();
  const [globalData, setGlobalData] = useState([{}]);
  
  function createData(ourid, title, total_cases, total_recovered, total_unresolved, total_deaths, total_new_cases_today, total_new_deaths_today, total_active_cases, total_serious_cases) {
    return { ourid, title, total_cases, total_recovered, total_unresolved, total_deaths, total_new_cases_today, total_new_deaths_today, total_active_cases, total_serious_cases };
  }
 

const rows = [];

  
  
  useEffect(() => {
    async function formdata() {
      const response = await fetch(
        "https://api.thevirustracker.com/free-api?countryTotals=ALL"
      );
      let data = await response.json();
      setGlobalData(Object.values(Object.values(data.countryitems)[0])); 
      
    }
    formdata();
  }, []);
  globalData.map((val,idx)=>{
    rows.push(createData(globalData[idx].ourid,globalData[idx].title , globalData[idx].total_cases, globalData[idx].total_recovered, globalData[idx].total_unresolved, globalData[idx].total_deaths, globalData[idx].total_new_cases_today, globalData[idx].total_new_deaths_today, globalData[idx].total_active_cases, globalData[idx].total_serious_cases));
    
  })

   
  return (
      <Grid container justify="center" spacing={3}>
            <Grid item lg={10} xs={12}  sm={4}>
                <Paper>
                    <TableContainer className={classes.container} >
                        <Table   stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>title</TableCell>
                                    <TableCell align="right">total_cases</TableCell>
                                    <TableCell align="right">total_recovered</TableCell>
                                    <TableCell align="right">total_unresolved</TableCell>
                                    <TableCell align="right">total_deaths</TableCell>
                                    <TableCell align="right">total_new_cases_today</TableCell>
                                    <TableCell align="right">total_new_deaths_today</TableCell>
                                    <TableCell align="right">total_active_cases</TableCell>
                                    <TableCell align="right">total_serious_cases</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.ourid}>
                                        <TableCell component="th" scope="row">{row.title}</TableCell>
                                        <TableCell align="right">{row.total_cases}</TableCell>
                                        <TableCell align="right">{row.total_recovered}</TableCell>
                                        <TableCell align="right">{row.total_unresolved}</TableCell>
                                        <TableCell align="right">{row.total_deaths}</TableCell>
                                        <TableCell align="right">{row.total_new_cases_today}</TableCell>
                                        <TableCell align="right">{row.total_new_deaths_today}</TableCell>
                                        <TableCell align="right">{row.total_active_cases}</TableCell>
                                        <TableCell align="right">{row.total_serious_cases}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
          </Grid>
      </Grid>
    
  );
};

export default AllCountries;
