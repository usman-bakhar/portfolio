import React from 'react';
import { Grid } from '@material-ui/core';
import styles from '../styles/components/WorksGrid';
// import '../styles/components/WorkGrid.css';

import cell1 from '../images/cell1.png';
import cell2 from '../images/cell2.png';
import cell3 from '../images/cell3.png';
import cell4 from '../images/cell4.png';
import cell5 from '../images/cell5.png';
import cell6 from '../images/cell6.png';
import cell7 from '../images/cell7.png';
import cell8 from '../images/cell8.png';

function WorksGrid(props) {
    const classes = styles();

    return (
        <div className={classes.root}>
            <Grid container justify='center'>
                <Grid item xs={12} sm={10} md={8} lg={7} >
                    <div className={classes.grid}>
                        <div><img src={cell1} alt={cell1}/></div>
                        <div><img src={cell2} alt={cell2}/></div>
                        <div><img src={cell3} alt={cell3}/></div>
                        <div><img src={cell4} alt={cell4}/></div>
                        <div><img src={cell5} alt={cell5}/></div>
                        <div><img src={cell8} alt={cell8}/></div>
                        <div><img src={cell6} alt={cell6}/></div>
                        <div><img src={cell7} alt={cell7}/></div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default WorksGrid;