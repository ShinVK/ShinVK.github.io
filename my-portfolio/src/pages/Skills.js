/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable max-lines */
/* eslint-disable max-len */
/* eslint-disable react/jsx-max-depth */
import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography } from '@mui/material';

import skillDb from '../assets/database/dbSkills';

const styles = {
  paperContainer: {
    // background: rgb(8,61,119);
    background: 'linear-gradient(0deg, rgba(8,61,119,1) 15%, rgba(94,177,191,1) 96%)',
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
        <Grid container spacing={ 4 } alignItems="center" justifyContent="center" sx={ { pb: 10 } }>
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
              habilidades
            </Box>
          </Grid>
          {skillDb.map(({ nome, imagem }, i) => (
            <Grid item xs={ 5 } md={ 3 } key={ i }>
              <div style={ { display: 'flex', justifyContent: 'center' } }>
                <Card sx={ { justifyItems: 'center', minWidth: 155, backgroundColor: '#323431' } }>
                  <CardMedia
                    component="img"
                    // height="180px"
                    image={ imagem }
                    alt="green iguana"
                    sx={ {
                      height: { xs: 55, lg: 100 },
                    } }
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={ { fontFamily: 'Bellaboo', fontSize: { xs: 12, md: 15, lg: 20 }, mb: -1, textAlign: 'center', color: '#fbcf67' } }
                    >
                      {nome}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Paper>
  );
}
