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
              habilidades
            </Box>
          </Grid>

          <Grid item xs={ 5 } md={ 3 } sx={ { ml: 'auto', marginBottom: { xs: 2 } } }>
            <Card sx={ { maxWidth: 155, backgroundColor: '#323431' } }>
              <CardMedia
                component="img"
                // height="180px"
                image={ htmlimage }
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
                  HTML
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={ 5 } md={ 3 } sx={ { mr: 'auto', marginBottom: { md: 3, xs: 2 } } }>

            <Card sx={ { maxWidth: 155, backgroundColor: '#323431' } }>
              <CardMedia
                component="img"
                height="180"
                image={ csslogo }
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
                  sx={ { fontFamily: 'Bellaboo', fontSize: { xs: 12, md: 15, lg: 20 }, mb: -1, textAlign: 'center', color: '#fbcf67', textTransform: 'uppercase' } }
                >
                  CSS
                </Typography>
              </CardContent>
            </Card>

          </Grid>

          <Grid item xs={ 5 } md={ 3 } sx={ { ml: 'auto', marginBottom: { md: 3, xs: 2 } } }>

            <Card sx={ { maxWidth: 155, backgroundColor: '#323431' } }>
              <CardMedia
                component="img"
                height="180"
                image={ jslogo }
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
                  sx={ { fontFamily: 'Bellaboo', fontSize: { xs: 12, md: 15, lg: 20 }, mb: -1, textAlign: 'center', color: '#fbcf67', textTransform: 'uppercase' } }
                >
                  JavaScript
                </Typography>
              </CardContent>
            </Card>

          </Grid>

          <Grid item xs={ 5 } md={ 3 } sx={ { mr: 'auto', marginBottom: { md: 3, xs: 2 } } }>

            <Card sx={ { maxWidth: 155, backgroundColor: '#323431' } }>
              <CardMedia
                component="img"
                height="180"
                image={ reactlogo }
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
                  sx={ { fontFamily: 'Bellaboo', fontSize: { xs: 12, md: 15, lg: 20 }, mb: -1, textAlign: 'center', color: '#fbcf67', textTransform: 'uppercase' } }
                >
                  React JS
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={ 5 } md={ 3 } sx={ { ml: 'auto', marginBottom: { md: 3, xs: 2 } } }>

            <Card sx={ { maxWidth: 155, backgroundColor: '#323431' } }>
              <CardMedia
                component="img"
                height="180"
                image={ jestlogo }
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
                  sx={ { fontFamily: 'Bellaboo', fontSize: { xs: 12, md: 15, lg: 20 }, mb: -1, textAlign: 'center', color: '#fbcf67', textTransform: 'uppercase' } }
                >
                  Jest
                </Typography>
              </CardContent>
            </Card>

          </Grid>

          <Grid item xs={ 5 } md={ 3 } sx={ { mr: 'auto', marginBottom: { md: 3, xs: 2 } } }>
            <Card sx={ { maxWidth: 155, backgroundColor: '#323431' } }>
              <CardMedia
                component="img"
                height="180"
                image={ muilogo }
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
                  sx={ { fontFamily: 'Bellaboo', fontSize: { xs: 12, md: 15, lg: 20 }, mb: -1, textAlign: 'center', color: '#fbcf67', textTransform: 'uppercase' } }
                >
                  Material UI
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={ 5 } md={ 3 } sx={ { ml: 'auto', marginBottom: { md: 3, xs: 2 } } }>

            <Card sx={ { maxWidth: 155, backgroundColor: '#323431' } }>
              <CardMedia
                component="img"
                height="180"
                image={ bootlogo }
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
                  sx={ { fontFamily: 'Bellaboo', fontSize: { xs: 12, md: 15, lg: 20 }, mb: -1, textAlign: 'center', color: '#fbcf67', textTransform: 'uppercase' } }
                >
                  Bootstrap
                </Typography>
              </CardContent>
            </Card>

          </Grid>

          <Grid item xs={ 5 } md={ 3 } sx={ { mr: 'auto', marginBottom: { md: 3, xs: 2 } } }>

            <Card sx={ { maxWidth: 155, backgroundColor: '#323431' } }>
              <CardMedia
                component="img"
                height="180"
                image={ sasslogo }
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
