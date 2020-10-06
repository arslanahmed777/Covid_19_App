import React from 'react';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import Language from '@material-ui/icons/Language';
import PublicIcon from '@material-ui/icons/Public';
import BarChartIcon from '@material-ui/icons/BarChart';




export default function FootNav({screenConfig}) {
  return (
    <div className='bottom-bar'>
        <div className='bottom-button-container'>
        <BottomNavigation
        value={screenConfig[0]}
        onChange={(event, newValue) => {
            screenConfig[1](newValue);
        
        }}
        showLabels
        
        >
            <BottomNavigationAction label="Globle" icon={<Language />} />
            <BottomNavigationAction label="Countries" icon={<PublicIcon />} />
            <BottomNavigationAction label="Graphs" icon={<BarChartIcon />} />
        </BottomNavigation>
        </div>
    </div>
    
  );
}
