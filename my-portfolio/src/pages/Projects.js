/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable max-lines */
/* eslint-disable max-len */
/* eslint-disable react/jsx-max-depth */
import React from 'react';
import {
  Box,
  Grid,
  Paper } from '@mui/material';
// import CardProject from '../components/CardProject';
import arrProject from '../assets/dbProjects/dbproj';
import CardProject2 from '../components/CardProject2';

const styles = {
  paperContainer: {
    // background: rgb(8,61,119);
    background: 'linear-gradient(0deg, #202221 15%, rgba(8,61,119,1) 96%)',
    backgroundColor: '#7c7c7c',
    minHeight: '50vh',
    backgroundSize: 'cover',
    marginTop: '-60px',
    boxShadow: 'none',
  },
};

export default function Skills() {
  return (
    <Paper style={ styles.paperContainer } id="Habilidades" sx={ { pb: { lg: 15 } } }>
      <Box
        sx={ {
          position: 'relative',
          minHeight: '50vh',
          marginTop: 0,
          left: '50%',
          transform: 'translate(-50%, 0)',
          maxWidth: { xl: '1100px', lg: '900px', md: 600 } } }
      >
        <Grid container spacing={ 2 } alignItems="flex-start" sx={ { pb: 10 } }>
          <Grid item xs={ 12 }>
            <Box
              sx={ {
                fontFamily: 'Bellaboo',
                typography: 'title',
                fontWeight: 300,
                ml: 5,
                justifySelf: { xs: 'center', md: 'start' },
                marginTop: 5,
                color: '#f0f3f5',
                mb: 5,
                letterSpacing: 5,
                // marginLeft: 5,
                fontSize: { xs: 30, sm: 35, md: 40, lg: 40 },
                display: 'block' } }
            >
              Projetos
            </Box>
          </Grid>

          {/* {arrProject.map((el, i) => (
            <Grid key={ i } item xs={ 12 } md={ 6 } sx={ { ml: 'auto', marginBottom: { xs: 2 } } }>
              <CardProject project={ el } />
            </Grid>
          ))} */}

          {arrProject.map((el, i) => (
            <Grid key={ i } item xs={ 12 } md={ 6 } sx={ { ml: 'auto', marginBottom: { xs: 2 } } }>
              <CardProject2 project={ el } />
            </Grid>
          ))}

          {/* <Grid item xs={ 5 } md={ 3 } sx={ { mr: 'auto', marginBottom: { md: 3, xs: 2 } } }>
            <CardProject />

          </Grid>

          <Grid item xs={ 5 } md={ 3 } sx={ { ml: 'auto', marginBottom: { md: 3, xs: 2 } } }>
            <CardProject />

          </Grid>

          <Grid item xs={ 5 } md={ 3 } sx={ { mr: 'auto', marginBottom: { md: 3, xs: 2 } } }>

            <CardProject />

          </Grid>

          <Grid item xs={ 5 } md={ 3 } sx={ { ml: 'auto', marginBottom: { md: 3, xs: 2 } } }>

            <CardProject />

          </Grid>

          <Grid item xs={ 5 } md={ 3 } sx={ { mr: 'auto', marginBottom: { md: 3, xs: 2 } } }>
            <CardProject />

          </Grid>

          <Grid item xs={ 5 } md={ 3 } sx={ { ml: 'auto', marginBottom: { md: 3, xs: 2 } } }>

            <CardProject />

          </Grid>

          <Grid item xs={ 5 } md={ 3 } sx={ { mr: 'auto', marginBottom: { md: 3, xs: 2 } } }>
            <CardProject />

          </Grid> */}
        </Grid>
      </Box>
    </Paper>
  );
}
