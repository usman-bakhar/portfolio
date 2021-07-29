import React, { useState } from 'react';

import { Grid, Container, Tab, Tabs } from '@material-ui/core';

import WorksGrid from '../components/WorksGrid';

import styles from '../styles/pages/Works';

function Works(props) {
    const classes = styles();
    
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (
        <div>
            <Container>
                <Grid container spacing={4} justify='center'>
                    <Grid item xs={12} className={classes.top}>
                        <h1>Latest Works</h1>
                        <hr />
                        <p>
                            Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Eveniet corporis <br />
                            tenetur ratione ad, eum nam velit 
                            iure quae officia perspiciatis?
                        </p>
                    </Grid>

                    <Grid item sx={12}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                variant='scrollable'
                                // centered
                            >
                                <Tab label='all' />
                                <Tab label="Branding Goals" />
                                <Tab label='Photography' />
                                <Tab label='True Perfection' />
                                <Tab label='Web Design' />
                            </Tabs>
                    </Grid>

                    <Grid item xs={12}>
                        <WorksGrid />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Works;