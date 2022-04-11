/* eslint-disable react/prop-types */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { CardContent, CardActionArea, CardActions } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

const gitHubIcon = 'devicon-github-original-wordmark colored';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton { ...other } />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({ project }) {
  const [expanded, setExpanded] = React.useState(false);
  const { nome, updates, modulo,
    imagem, gitHub, linkSite, disponivel,
    ferramentas, data, descricao, maisDescricao } = project;
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // gitHub,
  return (
    <Card sx={ { maxWidth: 500, backgroundColor: '#efe9e7', ml: 3, mr: 3 } }>
      <CardActionArea onClick={ () => window.open(linkSite) }>
        <CardHeader
          avatar={
            <Avatar sx={ { bgcolor: '#f5853f' } } aria-label="recipe">
              { modulo }
            </Avatar>
          }
          title={
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              sx={
                { fontFamily: 'Bellaboo', fontSize: { xs: 15, md: 20, lg: 20 } }
              }
            >
              { nome }
            </Typography>
          }
          subheader={
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              sx={
                { fontFamily: 'Bellaboo', fontSize: { xs: 12, md: 12, lg: 12 } }
              }
            >
              { data }
            </Typography>
          }
        />
        <CardMedia
          component="img"
          height="194"
          image={ imagem }
          alt="Paella dish"
        />
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={
              { fontFamily: 'Sinkin', fontSize: { xs: 12, md: 12, lg: 12 } }
            }
          >
            { descricao }
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions disableSpacing>
        <IconButton onClick={ () => window.open(gitHub) }>
          <i className={ gitHubIcon } style={ { fontSize: 40 } } />
        </IconButton>
        <IconButton onClick={ () => window.open(linkSite) }>
          <OpenInBrowserIcon style={ { fontSize: 40 } } />
        </IconButton>
        <ExpandMore
          expand={ expanded }
          onClick={ handleExpandClick }
          aria-expanded={ expanded }
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={ expanded } timeout="auto" unmountOnExit>
        <CardContent>
          <Typography
            paragraph
            sx={
              { fontFamily: 'Sinkin', fontSize: { xs: 12, md: 12, lg: 12 } }
            }
          >
            Method:

          </Typography>
          <Typography
            paragraph
            sx={
              { fontFamily: 'Sinkin', fontSize: { xs: 12, md: 12, lg: 12 } }
            }
          >
            { maisDescricao }
          </Typography>
          <Typography
            div
            sx={ {
              fontFamily: 'Sinkin',
              fontSize: { xs: 12, md: 12, lg: 12 },
            } }
          >
            Updates:
            <ul style={ { marginLeft: 20, color: '#8d8d8d' } }>
              { updates.map(((el, i) => (
                <li key={ i }>
                  {' '}
                  {el}
                </li>
              ))) }
            </ul>
          </Typography>

          <Typography
            div
            sx={ {
              fontFamily: 'Sinkin',
              fontSize: { xs: 12, md: 12, lg: 12 },
            } }
          >
            Otimizado:
            <ul style={ { marginLeft: 20, color: '#8d8d8d' } }>
              { disponivel.map(((el, i) => (
                <li key={ i }>
                  {el}
                </li>
              ))) }
            </ul>
          </Typography>

          <Typography paragraph sx={ { mt: 2 } }>
            { ferramentas.map((el, i) => (
              <i style={ { fontSize: 40 } } key={ i } className={ el } />
            ))}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
