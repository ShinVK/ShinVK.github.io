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
    minHeight: '80vh',
    backgroundSize: 'cover',
  },
};

export default function Profile() {
  return (
    <Paper style={ styles.paperContainer }>
      {/* <div className="cardProfile">
        <div className="imgProfile">
          <img src={ profilePhoto } alt="profile" />
        </div>
        <div className="content">
          <h2>Title</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla impedit est facilis. Voluptatibus deleniti unde commodi id, necessitatibus labore, nobis nisi ipsum voluptatem aliquid architecto quis quo asperiores laborum totam.</p>
        </div>
      </div> */}

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
              id="Sobre"
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
          <div className="cardProfile">
            <div className="imgProfile">
              <img src={ profilePhoto } alt="profile" />
            </div>
            {/* <div className="content">
              <h2>Title</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla impedit est facilis. Voluptatibus deleniti unde commodi id, necessitatibus labore, nobis nisi ipsum voluptatem aliquid architecto quis quo asperiores laborum totam.</p>
            </div> */}
          </div>
          <Grid item xs={ 12 } md={ 7 }>
            <Box
              sx={ {
                typography: 'body1',
                fontWeight: 550,
                color: '#f0f3f5',
                textAlign: { xs: 'justify', md: 'justify' },
                marginTop: { xs: -3, md: -5, lg: -50 },
                fontSize: { xs: 10, sm: 10, md: 15, lg: 20 },
                display: 'block' } }
            >
              Olá, tenho 27 anos, formado em eng. agronômica.
              <br />
              <br />
              Iniciei o estudo em prog. no ano de 2021, e desde então fiquei fascinado por esse mundo, descobrindo algo que me fascina e me motiva todos os dias.
              <br />
              <br />
              Atualmente estudando BackEnd na Trybe.
            </Box>
          </Grid>
          <Grid item xs={ 12 } md={ 7 }>

            {/* <Box
              component="img"
              src={ profilePhoto }
              alt="avatar"
              sx={ {
                marginTop: { xs: 10, md: 5 },
                marginLeft: 3.5,
                width: '80%',
              } }
            /> */}

          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}
