import React from 'react';

import ExperienceCard from '../components/Card/Experience';

import { Grid, Container } from '@material-ui/core';

import styles from '../styles/pages/Experience';

function Experience(props) {
    const classes = styles();

    return (
        <div className={classes.root}>
            <Container maxWidth='xl'>
                <Grid container>
                    <Grid item xs={12} className={classes.top}>
                        <h1>Work Experience</h1>
                        <hr />
                        <p>
                            Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Eveniet corporis <br />
                            tenetur ratione ad, eum nam velit 
                            iure quae officia perspiciatis?
                        </p>
                    </Grid>
    
                    <Grid container justify='center'>
                        <Grid item xs={12} sm={7} md={3}>
                            <ExperienceCard />
                        </Grid>
                        <Grid item xs={12} sm={7} md={3}>
                            <ExperienceCard />
                        </Grid>
                        <Grid item xs={12} sm={7} md={3}>
                            <ExperienceCard />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Experience;