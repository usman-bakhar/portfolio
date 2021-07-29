import React from 'react';
import { Container, Grid } from '@material-ui/core';

import hero from '../images/hero.png';

import styles from '../styles/pages/Hero'

function Hero(props) {
    const classes = styles();

    return (
        <>
            <div className={classes.root}>
                <Container maxWidth='xl' > 
                    <Grid container spacing={4} justify='center'>
                        <Grid item xs={12} sm={10} md={5} className={classes.TextContainer}>
                            <div>
                                <h1>I'm michael</h1>
                                <p>Freelance Web Developer</p>
                                <button>Hire Me</button>
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={10} md={6} className={classes.ImgContainer}>
                            <div>
                                <img src={hero} alt={hero} />
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
}

export default Hero;