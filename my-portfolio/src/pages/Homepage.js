/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { Box, Container, Grid, Link } from '@mui/material';
import ResponsiveAppBar from '../components/AppBar';
import lamp from '../assets/imgs/lampada.svg';
import avatar from '../assets/imgs/avatar.png';
import Profile from './Profile';
import Skills from './Skills';

export default function Homepage() {
  return (
    <>
      <ResponsiveAppBar />
      <Link href="#Sobre">Go to foto</Link>
      <Container maxWidth="xl">
        <Box
          sx={
            { position: 'relative',
              left: '50%',
              transform: 'translate(-50%, 0)',
              maxWidth: { xl: '1100px', lg: '900px', md: 600 },
              minHeight: '100vh',
              marginTop: { sx: 5, md: 12 } }
          }
        >

          <Grid container>
            <Grid item xs={ 12 }>
              <Parallax speed={ -5 }>
                <Box
                  sx={ {
                    typography: 'title',
                    fontWeight: 800,
                    color: '#3d315b',
                    marginLeft: 5,
                    fontSize: { xs: 25, sm: 30, md: 35, lg: 40 },
                    display: 'block' } }
                >
                  Olá, me chamo
                </Box>
              </Parallax>
            </Grid>
            <Grid item xs={ 12 }>
              <Parallax speed={ -5 }>
                <h3 className="title__homepage">
                  <span className="color__letter">V</span>
                  ictor
                  <span className="color__letter"> S</span>
                  hin
                  <span className="color__letter"> K</span>
                  amiguchi
                </h3>
              </Parallax>
            </Grid>
            <Grid item xs={ 12 } md={ 5 }>
              <Parallax speed={ -8 }>
                <Box
                  sx={ {
                    typography: 'title',
                    fontWeight: 500,
                    color: '#FF9000',
                    textAlign: { xs: 'center', md: 'right' },
                    marginTop: { xs: 3, md: 5, lg: 10 },
                    fontSize: { xs: 20, sm: 30, md: 40, lg: 45 },
                    display: 'block' } }
                >
                  Desenvolvedor
                  {' '}
                  <br />
                  Brasileiro
                  {' '}
                  <br />
                  Estudante
                </Box>
              </Parallax>
            </Grid>
            <Parallax
              speed={ -15 }
              style={ {
                position: 'absolute',
                top: '15%',
                left: '30%',
                transform: 'translate(-50%, -15%)',
              } }
            >
              <Box
                component="img"
                src={ lamp }
                alt="lampIre"
                sx={ {
                // margin: 'auto',
                  zIndex: -100,
                  opacity: 0.1,
                  width: { lg: '80%', md: '60%', xs: '60%' },
                // maxHeight: '30%',
                } }
              />
            </Parallax>
            <Grid item xs={ 12 } md={ 7 }>
              <Parallax speed={ 5 }>
                <Box
                  component="img"
                  src={ avatar }
                  alt="avatar"
                  sx={ {
                    position: 'absolute',
                    zIndex: 20,
                    marginTop: { xs: 5, md: 2 },
                    marginLeft: 7,
                    width: '70%',
                  } }
                />
              </Parallax>
            </Grid>

          </Grid>

          {/* <Parallax speed={ -15 }>
          <img
          src={ dog }
          alt="dogIrezumi"
          className="rellax"
          width="100px"
          style={ { marginTop: '50px' } }
          />
        </Parallax> */}
          {/*
          <Parallax speed={ 15 }>
          <Box
          component="img"
          src={ mountain1 }
          alt="logo"
          sx={ {
            // marginTop: -20,
            width: '80%',
                position: 'absolute',
                right: 0,
                bottom: '-125px',
                display: { xs: 'none', md: 'flex' },

                // maxHeight: '30%',
              } }
              />
            </Parallax> */}

        </Box>
        <Profile />
        <Skills />
        <Profile />
      </Container>

    </>
  );
}
