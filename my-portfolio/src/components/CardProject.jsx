/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import PropTypes, { string } from 'prop-types';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Link } from '@mui/material';

const gitHubIcon = 'devicon-github-original-wordmark colored';

export default function MultiActionAreaCard({ project }) {
  const { nome, imagem, gitHub, linkSite, ferramentas } = project;
  return (
    <Card sx={ { maxWidth: 345, backgroundColor: '#daffef' } }>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={ imagem }
          alt="project"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            { nome }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            { ferramentas.map((el, i) => (
              <i style={ { fontSize: 20 } } key={ i } className={ el } />
            ))}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <a href={ linkSite }> Site </a> */}
        <Button size="small" color="secondary">
          <Link href={ linkSite }>Site</Link>
        </Button>
        <a href={ gitHub }>
          {' '}
          <i style={ { fontSize: 20 } } className={ gitHubIcon } />
          {' '}
        </a>
        {/*
        <Button size="small" color="Secondary">

        </Button> */}
      </CardActions>
    </Card>
  );
}

MultiActionAreaCard.propTypes = {
  ferramentas: PropTypes.arrayOf(string).isRequired,
  gitHub: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired,
  linkSite: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
};
