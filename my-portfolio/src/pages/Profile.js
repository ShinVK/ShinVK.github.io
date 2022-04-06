/* eslint-disable max-len */
/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { Box, Grid, Paper } from '@mui/material';
import profilePhoto from '../assets/imgs/profile.png';
import avatarProf from '../assets/imgs/perfil1.jpeg';

const styles = {
  paperContainer: {
    // background: 'linear-gradient(0deg, rgba(134,134,134,1) 0%, rgba(134,134,134,1) 0%, rgba(32,34,33,1) 70%)',
    background: 'linear-gradient(0deg, rgba(94,177,191,1) 0%, rgba(94,177,191,1) 41%, rgba(237,135,40,1) 80%)',
    // -webkit-clip-path: 'circle(67.7% at 50% 72%)',
    // clipPath: 'circle(67.7% at 50% 72%)',
    marginTop: -10,
    boxShadow: 'none',
    // minHeight: '80vh',
  },
};

export default function Profile() {
  return (
    <Paper style={ styles.paperContainer } id="Sobre" sx={ { minHeight: { xs: '40vh', sm: '40vh', md: '60vh', lg: '100vh' } } }>
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
              sx={ {
                fontFamily: 'Bellaboo',
                typography: 'title',
                fontWeight: 300,
                ml: 5,
                justifySelf: { xs: 'center', md: 'start' },
                marginTop: 10,
                color: '#f0f3f5',
                mb: -10,
                letterSpacing: 5,
                // marginLeft: 5,
                fontSize: { xs: 30, sm: 35, md: 40, lg: '5rem' },
                display: 'block' } }
            >
              Sobre mim
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
                fontFamily: 'Bellaboo',
                fontWeight: 250,
                color: '#083d77',
                letterSpacing: 4,
                lineHeight: 1.4,
                textAlign: { xs: 'justify', md: 'justify' },
                marginTop: { xs: -10, md: 20, lg: 20 },
                fontSize: { xs: 14, sm: 15, md: 15, lg: 30 },
                mb: { xs: 15, lg: 35 },
                display: 'block' } }
            >
              Olá, me chamo Victor Shin Kamiguchi, tenho 27 anos e sou apaixonado por codar.
              <br />
              <br />
              Em agosto de 2021, iniciei meus estudos em programação e desde então, todo dia busco me tornar um programador melhor.
              <br />
              <br />
              Sempre fui curioso e gostei de aprender coisas novas. Durante minha vida tive contato com sony vegas, corel draw, photoshop, illustrator e Excel VBA.
              <br />
              <br />
              Atualmente sou desenvolvedor web Front End, e estudando back End na trybe.
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
                  left: 100,
                  width: '100%',
                  height: '100%' } }
              >
                <img src={ avatarProf } style={ { width: '80%', clipPath: 'ellipse(48% 46% at 50% 50%)' } } alt="profile" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}
