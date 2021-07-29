import React from 'react';

import { Container, Grid } from '@material-ui/core';

import styles from '../styles/pages/HireMe';

function HireMe(props) {
    const classes = styles();

    return (
        <div className={classes.root}>
            <Container maxWidth='xl'>
                <Grid container justify= 'center'>
                    <Grid item xs={12} className={classes.top}>
                        <h1>Have Any Project In Mind?</h1>
                        <hr />
                        <button className={classes.btn}>Hire Me</button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default HireMe;