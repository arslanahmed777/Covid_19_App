import React,{ useEffect, useState } from 'react'
import {Grid,Paper} from "@material-ui/core";
import {Line} from 'react-chartjs-2';



const Graphs = () => {
    
    const [globalData, setGlobalData] = useState([{}]);
    useEffect(() => {
        async function formdata() {
          const response = await fetch(
            "https://api.thevirustracker.com/free-api?countryTotals=ALL"
          );
          let data = await response.json();
          setGlobalData(Object.values(data.countryitems[0])); 
          
        }
        formdata();
      }, []);
      const countriesArray = [];
      const total_cases_Array = [];
      const total_recovered_Array = [];
      const total_new_cases_today_Array = [];
      const total_new_deaths_today_Array = [];
      const total_active_cases_Array = [];
      const total_deaths_Array = [];
      globalData.map((val,idx)=>{
        //console.log(val)
        countriesArray.push(globalData[idx].title);
        total_cases_Array.push(globalData[idx].total_cases);
        total_recovered_Array.push(globalData[idx].total_recovered);
        total_new_cases_today_Array.push(globalData[idx].total_new_cases_today);
        total_new_deaths_today_Array.push(globalData[idx].total_new_deaths_today);
        total_active_cases_Array.push(globalData[idx].total_active_cases);
        total_deaths_Array.push(globalData[idx].total_deaths);
      })
     
    const graphData = {
        labels: countriesArray,
        datasets: [
          {
            label: 'Total Cases',
            fill: true,
            backgroundColor: 'rgba(91,70,195,0.4)',
            borderColor: 'rgba(20,15,46,1)',
            data:total_cases_Array
          },
          {
            label: 'Total Recovered',
            fill: true,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            data:total_recovered_Array
          },
          {
            label: 'Total Deaths',
            fill: true,
            backgroundColor: 'rgba(246,103,101,0.4)',
            borderColor: 'rgba(174,13,10,1)',
            data:total_deaths_Array
          },
          {
            label: 'Today Cases',
            fill: true,
            backgroundColor: 'rgba(247,178,100,0.4)',
            borderColor: 'rgba(243,140,22,1)',
            data:total_new_cases_today_Array
          },
          {
            label: 'Today Deaths',
            fill: true,
            backgroundColor: 'rgba(228,139,218,0.4)',
            borderColor: 'rgba(132,31,120,1)',
            data:total_new_deaths_today_Array
          },
          {
            label: 'Total Active',
            fill: true,
            backgroundColor: 'rgba(63,153,243,0.4)',
            borderColor: 'rgba(6,51,96,1)',
            data:total_active_cases_Array
          },
          
        ]
      };
      
    return (
        <div >
            <Grid container justify="center" spacing={3}>
                <Grid item xs={12} sm={10}>
                    <Paper >
                        <Line data={graphData} />
                    </Paper>
                </Grid>
            </Grid>
        </div>
        
    )
}

export default Graphs
