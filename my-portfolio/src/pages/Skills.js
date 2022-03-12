/* eslint-disable max-len */
/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography } from '@mui/material';

import htmlimage from '../assets/imgs/html.png';
import csslogo from '../assets/imgs/cssLogo.png';
import jslogo from '../assets/imgs/jslogo.png';
import reactlogo from '../assets/imgs/reactLogo.png';
import jestlogo from '../assets/imgs/jestlogo.png';
import muilogo from '../assets/imgs/muilogo.png';
import bootlogo from '../assets/imgs/bootlogo.svg';
import sasslogo from '../assets/imgs/sassLogo.png';

export default function Skills() {
  return (
    <Box
      sx={ {
        position: 'relative',
        minHeight: '100vh',
        marginTop: 5,
        marginBottom: 10,
        left: '50%',
        transform: 'translate(-50%, 0)',
        maxWidth: { xl: '1100px', lg: '900px', md: 600 } } }
    >

      <Grid container spacing={ 2 } alignItems="flex-start">
        <Grid item xs={ 12 }>
          <Parallax speed={ -5 }>
            <Box
              id="Habilidades"
              sx={ {
                typography: 'title',
                fontWeight: 800,
                marginBottom: { md: 7, sm: 1 },
                color: '#D14E4E',
                // marginLeft: 5,
                fontSize: { xs: 25, sm: 35, md: 40, lg: 45 },
                display: 'block' } }
            >
              Habilidades
            </Box>
          </Parallax>
        </Grid>

        <Grid item xs={ 6 } md={ 3 } sx={ { marginBottom: { xs: 2 } } }>
          <Card sx={ { maxWidth: 345 } }>
            <CardMedia
              component="img"
              height="140px"
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

        <Grid item xs={ 6 } md={ 3 } sx={ { marginBottom: { md: 3, xs: 2 } } }>

          <Card sx={ { maxWidth: 345 } }>
            <CardMedia
              component="img"
              height="140"
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

        <Grid item xs={ 6 } md={ 3 } sx={ { marginBottom: { md: 3, xs: 2 } } }>

          <Card sx={ { maxWidth: 345 } }>
            <CardMedia
              component="img"
              height="140"
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

        <Grid item xs={ 6 } md={ 3 } sx={ { marginBottom: { md: 3, xs: 2 } } }>

          <Card sx={ { maxWidth: 345 } }>
            <CardMedia
              component="img"
              height="140"
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

        <Grid item xs={ 6 } md={ 3 } sx={ { marginBottom: { md: 3, xs: 2 } } }>

          <Card sx={ { maxWidth: 345 } }>
            <CardMedia
              component="img"
              height="140"
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

        <Grid item xs={ 6 } md={ 3 } sx={ { marginBottom: { md: 3, xs: 2 } } }>

          <Card sx={ { maxWidth: 345 } }>
            <CardMedia
              component="img"
              height="140"
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

        <Grid item xs={ 6 } md={ 3 } sx={ { marginBottom: { md: 3, xs: 2 } } }>

          <Card sx={ { maxWidth: 345 } }>
            <CardMedia
              component="img"
              height="140"
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

        <Grid item xs={ 6 } md={ 3 } sx={ { marginBottom: { md: 3, xs: 2 } } }>

          <Card sx={ { maxWidth: 345 } }>
            <CardMedia
              component="img"
              height="140"
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
  );
}
