import React from 'react';

import { Grid, Card, CardContent } from '@material-ui/core';

import styles from '../../styles/components/Experience';

function Experience(props) {
    const classes = styles();

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <p>2020-2020</p>
                            <h2>WebDevelpoer</h2>
                            <p>React Js</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default Experience;