/* eslint-disable react/jsx-max-depth */
import React from 'react';

import { Container, Grid, Paper, Typography } from '@mui/material';

import backForest from '../assets/imgs/backForest.svg';

const styles = {
  paperContainer: {
    // eslint-disable-next-line max-len
    background: 'radial-gradient(circle, rgba(251,207,103,0.9) 25%, rgba(251,184,37,0.8) 32%, rgba(237,135,40,0.7) 50%)',
    boxShadow: 'none',
    position: 'relative',
  },
};

export default function MessageFil() {
  return (
    <Paper
      style={ styles.paperContainer }
      sx={
        { overflow: 'hidden',
          minHeight: { xs: '40vh', sm: '40vh', md: '60vh', lg: '110vh' } }
      }
    >
      <Container maxWidth={ false } sx={ { maxWidth: { xs: '100%', xl: 1600 } } }>
        <Grid container justifyContent="center">
          <Grid item xs={ 9 } sm={ 9 } md={ 7 } justifyContent="flex-end">
            <Typography
              gutterBottom
              variant="body1"
              component="div"
              sx={ {
                fontFamily: 'JustSimple, Sinkin',
                mt: { xs: 15, sm: 25, md: 35, lg: 45, xl: 55 },
                fontWeight: 500,
                maxWidth: '100%',
                // color: '#922d50',
                color: '#da4167',
                textAlign: { xs: 'center' },
                fontSize: { xs: '1.5rem', sm: '3rem', md: '3rem', xl: '6rem' },
                letterSpacing: 6,
                lineHeight: 1,
                mb: 0,
              } }
            >
              MERAHKI [may.rah.kee]:
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
                // color: '#f5d491',
                color: '#083d77',
                textAlign: { xs: 'center' },
                fontSize: { xs: '1.2rem', sm: '2rem', md: '2.5rem', xl: '4rem' },
                letterSpacing: 4,
                lineHeight: 1.4,
                mb: { xs: 15, sm: 20, md: 25, lg: 35, xl: 35 },
              } }
            >
              do grego: fazer algo com alma, criatividade ou amor.
              Colocar parte de si em algo que est?? a fazer.
            </Typography>

          </Grid>
        </Grid>
      </Container>
      <img
        src={ backForest }
        alt="backcity"
        style={ {
          width: '110%',
          position: 'absolute',
          marginTop: -15,
          marginLeft: -15,
          top: 0,
          zIndex: 100,
          transform: 'rotate(180deg)',
        } }
      />
    </Paper>
  );
}
