/* eslint-disable max-len */
/* eslint-disable react/jsx-max-depth */
import { Box, Container, Grid, Grow, Paper, Typography } from '@mui/material';
import React from 'react';
import back3 from '../assets/imgs/back23.jpeg';
// import back1 from '../assets/imgs/back1.jpeg';

const styles = {
  paperContainer: {
    backgroundImage: `linear-gradient(to bottom, rgba(240,243,245,0.5), #2d3047), url(${back3})`,
    // background: 'linear-gradient(180deg, rgba(240,243,245,1) 0%, rgba(45,48,71,1) 85%)',
    backgroundSize: 'cover',
  },
};

export default function NewHome() {
  return (
    <>
      <Container maxWidth={ false } sx={ { maxWidth: { xs: '80%', xl: 1600 } } }>

        <Box component="div" sx={ { mt: 10, mb: 7, ml: -2.5 } }>
          <Grid container>
            <Grid item xs={ 12 } md={ 6 }>
              <Grow
                in
                style={ { transformOrigin: '0 0 0' } }
                { ...{ timeout: 1000 } }
              >
                <Typography
                  gutterBottom
                  variant="h1"
                  component="div"
                  sx={ {
                    fontWeight: 800,
                    fontSize: { xs: '4.5rem', sm: '7rem', lg: '8rem', xl: '10rem' },
                    lineHeight: 1,
                    mb: 0,
                  } }
                >
                  WELCOME
                </Typography>
              </Grow>
              <Grow
                in
                style={ { transformOrigin: '0 0 0' } }
                { ...{ timeout: 1400 } }
              >
                <Typography
                  color="primary"
                  gutterBottom
                  variant="h1"
                  component="div"
                  sx={ {
                    fontWeight: 800,
                    fontSize: { xs: '4.5rem', sm: '7rem', lg: '8rem', xl: '10rem' },
                    lineHeight: 1.2,
                    mb: 0,
                    letterSpacing: '-4px',
                  } }
                >
                  BEM VINDO
                </Typography>
              </Grow>
              <Grow
                in
                style={ { transformOrigin: '0 0 0' } }
                { ...{ timeout: 1600 } }
              >

                <Typography
                  gutterBottom
                  variant="h1"
                  component="div"
                  sx={ {
                    fontWeight: 800,
                    fontSize: { xs: '5rem', sm: '7rem', lg: '9rem', xl: '13rem' },
                    lineHeight: 1,
                    letterSpacing: '9px',
                    mb: 0,
                  } }
                >
                  ようこそ
                </Typography>
              </Grow>
            </Grid>

            <Grid item xs={ 12 } md={ 6 } justifyContent="flex-end">
              <Grow
                in
                style={ { transformOrigin: '0 0 0' } }
                { ...{ timeout: 1300 } }
              >
                <Typography
                  gutterBottom
                  color="secondary"
                  variant="body1"
                  component="div"
                  sx={ {
                    fontWeight: 800,
                    width: '90%',
                    color: '#627264',
                    display: { xs: 'none', md: 'block' },
                    fontFamily: 'DM Serif Display',
                    textAlign: { md: 'right' },
                    justifyItems: 'end',
                    fontSize: { xs: '2.5rem', xl: '3rem' },
                    lineHeight: 1,
                    mb: 2,
                  } }
                >
                  meraki [may.rah.kee]:

                </Typography>
              </Grow>
              <Grow
                in
                style={ { transformOrigin: '0 0 0' } }
                { ...{ timeout: 2000 } }
              >
                <Typography
                  gutterBottom
                  variant="body1"
                  component="div"
                  sx={ {
                    fontWeight: 300,
                    color: '#627264',
                    maxWidth: '90vw',
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'DM Serif Display',
                    ml: 'auto',
                    width: { md: 180, lg: 240, xl: 400 },
                    textAlign: { md: 'justify' },
                    fontSize: { xs: '2rem', xl: '2.5rem' },
                    lineHeight: 1,
                    mb: 5,
                  } }
                >
                  do grego: fazer algo com alma, criatividade ou amor.
                  Colocar parte de si em algo que está a fazer.
                </Typography>
              </Grow>
              <Grow
                in
                style={ { transformOrigin: '0 0 0' } }
                { ...{ timeout: 1300 } }
              >
                <Typography
                  gutterBottom
                  color="secondary"
                  variant="body1"
                  component="div"
                  sx={ {
                    mt: { xs: 5, md: 10, xl: 15 },
                    fontWeight: 600,
                    maxWidth: '90vw',
                    textAlign: { xs: 'center', md: 'right' },
                    fontSize: { xs: '2rem', md: '2.5rem', xl: '3.2rem' },
                    lineHeight: 1,
                    mb: 0,
                  } }
                >
                  Olá, eu sou o Shin,
                  {' '}
                  <span className="titleHomeDev" />
                  {' '}
                </Typography>
              </Grow>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Paper style={ styles.paperContainer } sx={ { minHeight: { xs: '20vh', md: '30vh', lg: '40vh' } } }>
        <Typography variant="body1" component="div" sx={ { display: 'none' } }>
          hey soul sister
        </Typography>
      </Paper>
    </>
  );
}
