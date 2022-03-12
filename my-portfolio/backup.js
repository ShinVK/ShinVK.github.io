/* eslint-disable max-len */
/* eslint-disable react/jsx-max-depth */
import { Box, Container, Grid, Grow, Paper, Typography } from '@mui/material';
import React from 'react';
import { Parallax } from 'react-scroll-parallax';
// import ResponsiveAppBar from '../components/AppBar';
// import back1 from '../assets/imgs/back1.jpeg';

export default function NewHome() {
  return (
    <>
      {/* <ResponsiveAppBar /> */}
      <Container maxWidth={ false } sx={ { maxWidth: { xs: '80%', xl: '80%' } } }>

        <Box component="div" sx={ { mt: 10, mb: 7, ml: -2.5 } }>
          <Grid container>
            <Grid item xs={ 12 } md={ 7 }>
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
                    fontSize: { xs: '5rem', sm: '7rem', lg: '9rem', xl: '15rem' },
                    lineHeight: 1,
                    mb: 0,
                  } }
                >
                  WELCOME
                </Typography>
              </Grow>
            </Grid>
            <Grid item xs={ 12 } md={ 7 }>
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
                    fontSize: { xs: '5rem', sm: '7rem', lg: '9rem', xl: '15rem' },
                    lineHeight: 1.2,
                    mb: 0,
                    letterSpacing: '-6px',
                  } }
                >
                  BEM VINDO
                </Typography>
              </Grow>
            </Grid>
            <Grid item xs={ 12 } md={ 7 }>
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
                    fontSize: { xs: '5rem', sm: '7rem', lg: '9rem', xl: '15rem' },
                    lineHeight: 1,
                    letterSpacing: '9px',
                    mb: 0,
                  } }
                >
                  ようこそ
                </Typography>
              </Grow>
            </Grid>

            <Grid item xs={ 12 } md={ 4 }>
              <Parallax speed={ 50 }>
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
                      mt: { xs: 5, md: 0, xl: 12 },
                      fontWeight: 600,
                      maxWidth: '90vw',
                      textAlign: { xs: 'center', md: 'right' },
                      fontSize: { xs: '2rem', xl: '5.5rem' },
                      lineHeight: 1,
                      mb: 0,
                    } }
                  >
                    Olá, eu sou o Shin, brasileiro, estudante e desenvolvedor.
                  </Typography>
                </Grow>
              </Parallax>
            </Grid>
          </Grid>
          {/* <Paper sx={ { minHeight: '100vh' } }>
          <h2>Teste</h2>
        </Paper> */}
        </Box>

        <Parallax speed={ 15 }>
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
                maxWidth: '90vw',
                color: '#627264',
                display: { xs: 'none', md: 'flex' },
                top: { md: -380, lg: -395, xl: -630 },
                right: { md: 65, lg: 130, xl: 280 },
                position: 'absolute',
                fontFamily: 'DM Serif Display',
                width: { md: 180, lg: 240, xl: 600 },
                textAlign: { md: 'justify' },
                fontSize: { xs: '2.5rem', xl: '5rem' },
                lineHeight: 1,
                mb: 0,
              } }
            >
              meraki [may.rah.kee]

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
                top: { md: -380, lg: -355, xl: -540 },
                right: { md: 65, lg: 130, xl: 280 },
                position: 'absolute',
                fontFamily: 'DM Serif Display',
                width: { md: 180, lg: 240, xl: 600 },
                textAlign: { md: 'justify' },
                fontSize: { xs: '2.4rem', xl: '3.5rem' },
                lineHeight: 1,
                mb: 0,
              } }
            >
              do grego: fazer algo com alma, criatividade ou amor.
              Colocar parte de si em algo que está a fazer.
            </Typography>
          </Grow>
        </Parallax>
      </Container>
      <Paper sx={ { minHeight: '200vh' } }>
        olá
      </Paper>
    </>
  );
}
