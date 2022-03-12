import React from 'react';
import Grid from '@mui/material/Grid';
import { Container, Paper, Typography } from '@mui/material';

export default function TestMui() {
  const stylePaper = {
    background: 'black',
    color: 'white',
    height: 150,
    width: 200,
  };

  return (
    <Container maxWidth="xl">
      <Grid container spacing={ 2 } justifyContent="space-around">
        <Grid item>
          <Paper style={ stylePaper }>
            <Typography color="primary">teste </Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper style={ stylePaper }> teste </Paper>
        </Grid>
        <Grid item>
          <Paper style={ stylePaper }> teste </Paper>
        </Grid>
        <Grid item>
          <Paper style={ stylePaper }> teste </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
