import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery"; 

import styles from '../styles/pages/About'

function About(props) {
    const classes = styles();
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <>
            <div className={classes.root}>
                <Container maxWidth='xl' > 
                    <Grid container spacing={isSmall ? 0 : 4} justify='center'>
                        <Grid item xs={12} sm={10} md={5} className={classes.Title}>
                            <div>
                                <h1>About Me</h1>
                                <hr />
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={10} md={6} className={classes.Deccription}>
                            <div>
                                <p>
                                    Lorem ipsum dolor sit,amet consectetur adipisicing elit. <br /> 
                                    Provident eos sed porro. Excepturi minima voluptatibus magnam <br /> 
                                    officia cupiditate placeat ratione accusamus sequi dolore illo <br /> 
                                    eius incidunt eos velit earum laudantium quidem fugit quis, <br />
                                    unde cumque.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nihil cum, <br /> 
                                    delectus ex velit deleniti.
                                </p>
                                <button className={classes.btnWorks}>View Works</button>
                                <button className={classes.btnCV}>Download CV</button>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
}

export default About;