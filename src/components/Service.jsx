import React from 'react';

import { Grid, Card, CardContent } from '@material-ui/core';

import styles from '../styles/components/Service';

function Service(props) {
    const classes = styles();

    return (
        <>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Card className={classes.card}>
                        <CardContent className={classes.content}>
                            {/* <h1>
                                UX Research
                            </h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, culpa.</p> */}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
}

export default Service;