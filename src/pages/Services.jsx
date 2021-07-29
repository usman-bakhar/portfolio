import React from 'react';

import ServiceCard from '../components/Service';

import { Grid, Container } from '@material-ui/core'

import styles from '../styles/pages/Services';

function Services(props) {
    const classes = styles();

    return (
        <div className={classes.root}>
            <Container maxWidth='xl'>
                <Grid container>
                    <Grid item xs={12} className={classes.top}>
                        <h1>Services</h1>
                        <hr />
                        <p>
                            Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Eveniet corporis <br />
                            tenetur ratione ad, eum nam velit 
                            iure quae officia perspiciatis?
                        </p>
                    </Grid>
    
                    <Grid container spacing={4} justify='center'>
                        <Grid item xs={12} sm={4}>
                            <ServiceCard />
                            <ServiceCard />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <ServiceCard />
                            <ServiceCard />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Services;