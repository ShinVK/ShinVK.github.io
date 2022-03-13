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

import htmlimage from '../assets/imgs/html.png';
import csslogo from '../assets/imgs/cssLogo.png';
import jslogo from '../assets/imgs/jslogo.png';
import reactlogo from '../assets/imgs/reactLogo.png';
import jestlogo from '../assets/imgs/jestlogo.png';
import muilogo from '../assets/imgs/muilogo.png';
import bootlogo from '../assets/imgs/bootlogo.svg';
import sasslogo from '../assets/imgs/sassLogo.png';

const styles = {
  paperContainer: {
    backgroundColor: '#2d3047',
    minHeight: '50vh',
    backgroundSize: 'cover',
    marginTop: '-60px',
  },
};

export default function Skills() {
  return (
    <Paper style={ styles.paperContainer } id="Habilidades">

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
              className="glitchAbout"
              sx={ {
                typography: 'title',
                fontWeight: 800,
                ml: 5,
                justifySelf: { xs: 'center', md: 'start' },
                marginTop: 5,
                color: '#f0f3f5',
                mb: 5,
                // marginLeft: 5,
                fontSize: { xs: 25, sm: 35, md: 40, lg: '5rem' },
                display: 'block' } }
            >
              <span aria-hidden="true">Habilidades</span>
              Habilidades
              <span aria-hidden="true">Habilidades</span>
            </Box>
          </Grid>

          <Grid item xs={ 5 } md={ 3 } sx={ { ml: 'auto', marginBottom: { xs: 2 } } }>
            <Card sx={ { maxWidth: 345 } }>
              <CardMedia
                component="img"
                height="110px"
                image={ htmlimage }
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  HTML
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={ 5 } md={ 3 } sx={ { mr: 'auto', marginBottom: { md: 3, xs: 2 } } }>

            <Card sx={ { maxWidth: 345 } }>
              <CardMedia
                component="img"
                height="110"
                image={ csslogo }
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  CSS
                </Typography>
              </CardContent>
            </Card>

          </Grid>

          <Grid item xs={ 5 } md={ 3 } sx={ { ml: 'auto', marginBottom: { md: 3, xs: 2 } } }>

            <Card sx={ { maxWidth: 345 } }>
              <CardMedia
                component="img"
                height="110"
                image={ jslogo }
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  JavaScript
                </Typography>
              </CardContent>
            </Card>

          </Grid>

          <Grid item xs={ 5 } md={ 3 } sx={ { mr: 'auto', marginBottom: { md: 3, xs: 2 } } }>

            <Card sx={ { maxWidth: 345 } }>
              <CardMedia
                component="img"
                height="110"
                image={ reactlogo }
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  React JS
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={ 5 } md={ 3 } sx={ { ml: 'auto', marginBottom: { md: 3, xs: 2 } } }>

            <Card sx={ { maxWidth: 345 } }>
              <CardMedia
                component="img"
                height="110"
                image={ jestlogo }
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Jest
                </Typography>
              </CardContent>
            </Card>

          </Grid>

          <Grid item xs={ 5 } md={ 3 } sx={ { mr: 'auto', marginBottom: { md: 3, xs: 2 } } }>
            <Card sx={ { maxWidth: 345 } }>
              <CardMedia
                component="img"
                height="110"
                image={ muilogo }
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Material UI
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={ 5 } md={ 3 } sx={ { ml: 'auto', marginBottom: { md: 3, xs: 2 } } }>

            <Card sx={ { maxWidth: 345 } }>
              <CardMedia
                component="img"
                height="110"
                image={ bootlogo }
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Bootstrap
                </Typography>
              </CardContent>
            </Card>

          </Grid>

          <Grid item xs={ 5 } md={ 3 } sx={ { mr: 'auto', marginBottom: { md: 3, xs: 2 } } }>

            <Card sx={ { maxWidth: 345 } }>
              <CardMedia
                component="img"
                height="110"
                image={ sasslogo }
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  SASS
                </Typography>
              </CardContent>
            </Card>

          </Grid>

        </Grid>
      </Box>
    </Paper>
  );
}
