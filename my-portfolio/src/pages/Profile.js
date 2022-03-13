/* eslint-disable max-len */
/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { Box, Grid, Paper } from '@mui/material';
import profilePhoto from '../assets/imgs/profile.png';
// import daruma from '../assets/imgs/daruma.svg';
// import back3 from '../assets/imgs/back23.jpeg';

const styles = {
  paperContainer: {
    backgroundColor: '#2d3047',
    minHeight: '50vh',
    backgroundSize: 'cover',
  },
};

export default function Profile() {
  return (
    <Paper style={ styles.paperContainer } id="Sobre">
      <Box
        sx={ {
          position: 'relative',
          marginTop: 0,
          left: '50%',
          transform: 'translate(-50%, 0)',
          maxWidth: { xl: '1100px', lg: '900px', md: 600 } } }
      >

        <Grid
          container
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={ 12 }>
            <Box
              className="glitchAbout"
              sx={ {
                typography: 'title',
                fontWeight: 800,
                ml: 5,
                justifySelf: { xs: 'center', md: 'start' },
                marginTop: 10,
                color: '#f0f3f5',
                mb: -10,
                // marginLeft: 5,
                fontSize: { xs: 25, sm: 35, md: 40, lg: '5rem' },
                display: 'block' } }
            >
              <span aria-hidden="true">Sobre mim</span>
              Sobre mim
              <span aria-hidden="true">Sobre mim</span>
            </Box>
          </Grid>

          <Grid item xs={ 9 } md={ 6 }>
            <Box
              className="cardProfile"
              component="div"
              sx={ { position: 'relative',
                maxWidth: '300px',
                height: '300px',
                mt: 7,
                ml: 'auto',
                mr: 'auto',
                display: { xs: 'flex', md: 'none' },
              } }
            >
              <div className="imgProfile">
                <img src={ profilePhoto } alt="profile" />
              </div>
            </Box>
            <Box
              sx={ {
                typography: 'body1',
                fontWeight: 650,
                color: '#ff9000',
                textAlign: { xs: 'justify', md: 'justify' },
                marginTop: { xs: -10, md: 20, lg: 20 },
                fontSize: { xs: 14, sm: 15, md: 15, lg: 20 },
                mb: 15,
                display: 'block' } }
            >
              Olá, me chamo Victor Shin Kamiguchi, tenho 27 anos.
              <br />
              <br />
              Em agosto de 2021, iniciei meus estudos em programação na Trybe, uma escola de programação.
              <br />
              Sempre fui curioso e gostei de aprender coisas novas. Durante minha vida tive contato com sony vegas, corel draw, photoshop, illustrator e Excel VBA.
              <br />
              <br />
              Atualmente estudando BackEnd, com o objetivo de me tornar um programador fullstack.
            </Box>
          </Grid>
          <Grid item xs={ 12 } md={ 6 }>
            <Box
              className="cardProfile"
              component="div"
              sx={ { position: 'relative',
                maxWidth: '90%',
                ml: 'auto',
                mr: 'auto',
                mt: { md: -20, lg: -30, xl: -35 },
                display: { xs: 'none', md: 'flex' },
              } }
            >
              <Box
                component="div"
                sx={ {
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%' } }
              >
                <img src={ profilePhoto } style={ { width: '100%' } } alt="profile" />
              </Box>
            </Box>

          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}
