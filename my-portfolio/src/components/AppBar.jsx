/* eslint-disable react/jsx-max-depth */
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from '@mui/material';
import logo from '../assets/imgs/logo.png';

const pages = ['Sobre', 'Habilidades', 'Projetos', 'Contato'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const history = useHistory();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={ { backgroundColor: '#f0f3f5' } }>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            src={ logo }
            alt="logo"
            noWrap
            sx={ {
              mr: { xs: 2 },
              ml: { lg: 10, xl: 0 },
              justifyContent: 'flex-end',
              display: { xs: 'none', md: 'flex' },
              height: { md: '35px', xl: '50px' },
              marginTop: 0.8 } }
          />

          <Box
            component="img"
            src={ logo }
            alt="div"
            sx={ { flexGrow: 0,
              justifyContent: 'center',
              display: { xs: 'flex', md: 'none' },
              height: '30px',
              marginTop: 0.5 } }
          />
          <Box
            sx={ {
              flexGrow: 1,
              justifyContent: 'flex-end',
              display: { xs: 'flex', md: 'none' } } }
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={ handleOpenNavMenu }
              sx={ { marginTop: 0.4, color: '#d14e4e' } }
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={ anchorElNav }
              anchorOrigin={ {
                vertical: 'bottom',
                horizontal: 'right',
              } }
              keepMounted
              transformOrigin={ {
                vertical: 'top',
                horizontal: 'right',
              } }
              open={ Boolean(anchorElNav) }
              onClose={ handleCloseNavMenu }
              sx={ {
                display: { xs: 'block', md: 'none' },
              } }
            >
              {pages.map((page) => (
                <MenuItem
                  key={ page }
                  onClick={ handleCloseNavMenu }
                >
                  <Typography
                    textAlign="center"
                    sx={ { fontSize: 22 } }

                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <Box
            component="img"
            src={ logo }
            alt="div"
            sx={ { flexGrow: 0,
              justifyContent: 'center',
              display: { xs: 'flex', md: 'none' },
              height: '30px',
              marginTop: 0.5 } }
          /> */}
          <Box
            sx={ {
              flexGrow: 1,
              justifyContent: 'flex-end',
              display: { xs: 'none', md: 'flex' } } }
          >
            {pages.map((page) => (
              <Button
                key={ page }
                component={ Link }
                href={ `#${page}` }
                sx={
                  { my: 2,
                    mr: { xs: 2, lg: 5 },
                    color: '#D14E4E',
                    display: 'block',
                    marginTop: 1,
                    fontSize: { md: 15, lg: 20 },
                    marginBottom: 1 }
                }
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
