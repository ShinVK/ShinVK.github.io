/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable max-len */
/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import backCity from '../assets/imgs/back_city.png';

const styles = {
  paperContainer: {
    // background: 'rgb(134,134,134)',
    background: 'linear-gradient(0deg, rgba(134,134,134,1) 0%, rgba(134,134,134,1) 0%, rgba(32,34,33,1) 70%)',
    boxShadow: 'none',
    position: 'relative',
  },
};

export default function Homepage() {
  return (
    <>
      <Paper style={ styles.paperContainer } sx={ { overflow: 'hidden', minHeight: { xs: '20vh', sm: '40vh', md: '50vh', lg: '60vh' } } }>
        <Container maxWidth={ false } sx={ { maxWidth: { xs: '100%', xl: 1600 } } }>
          <Grid container>
            <Grid item xs={ 12 } md={ 6 } justifyContent="center">
              <Box
                className="glitchAbout"
                sx={ {
                  fontFamily: 'Bellaboo',
                  typography: 'title',
                  fontWeight: 100,
                  mt: { xs: 5, md: 15, lg: 20, xl: 25 },
                  justifySelf: { xs: 'center' },
                  justifyContent: 'center',
                  letterSpacing: 5,
                  fontSize: { xs: 27, sm: 35, md: 51, lg: '7rem' },
                  display: 'flex' } }
              >
                <span aria-hidden="true" className="titleHomeWelcome" />
                {' '}
                <span className="titleHomeWelcome" />
                {' '}
                <span aria-hidden="true" className="titleHomeWelcome" />
              </Box>

            </Grid>

            <Grid item xs={ 12 } sm={ 12 } md={ 6 } justifyContent="flex-end">
              <Typography
                gutterBottom
                variant="body1"
                component="div"
                sx={ {
                  fontFamily: 'Bellaboo, Sinkin',
                  mt: { xs: 10, md: 10, xl: 10 },
                  fontWeight: 400,
                  maxWidth: '100%',
                  // color: '#B3B3B3',
                  color: '#f5d491',

                  textAlign: { xs: 'center' },
                  fontSize: { xs: '2rem', md: '3rem', lg: '5rem', xl: '5rem' },
                  letterSpacing: 6,
                  lineHeight: 1,
                  mb: 0,
                } }
              >
                Olá, eu sou o Shin
              </Typography>
              <Typography
                gutterBottom
                variant="body1"
                component="div"
                sx={ {
                  fontFamily: 'Bellaboo, Sinkin',
                  mt: { xs: 2, md: 5 },
                  fontWeight: 400,
                  maxWidth: '100%',
                  color: '#B3B3B3',
                  textAlign: { xs: 'center' },
                  fontSize: { xs: '1.8rem', md: '2.5rem', lg: '4rem', xl: '4rem' },
                  letterSpacing: 4,
                  lineHeight: 1.4,
                  // mb: { xs: 20, md: 50, lg: 65, xl: 90 },
                } }
              >
                Desenvolvedor FrontEnd
                {' '}
                <br />
                Estudante (BackEnd)
                {' '}
                <br />
                Brasileiro
              </Typography>
              <Typography
                gutterBottom
                variant="body1"
                component="div"
                sx={ {
                  fontFamily: 'Sinkin',
                  mt: { xs: 2, md: 5 },
                  fontWeight: 400,
                  maxWidth: '100%',
                  color: '#ff1b1c',
                  textAlign: { xs: 'center' },
                  fontSize: { xs: '0.9rem', md: '1.3rem', lg: '2rem', xl: '2rem' },
                  letterSpacing: 1,
                  lineHeight: 1.4,
                  mb: { xs: 20, md: 50, lg: 65, xl: 88 },
                  // mb: { xs: 5, md: 5, lg: 5, xl: 5 },
                } }
              >
                pwrd by coffee
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <img src={ backCity } alt="backcity" style={ { maxWidth: '100%', position: 'absolute', bottom: 0, zIndex: 100 } } />
      </Paper>
      {/* <Profile />
      <Skills />
      <Profile /> */}

    </>
  );
}
