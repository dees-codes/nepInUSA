import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { routes } from '../../Utils/routes';
import nepInUSA from '../../images/blue.jpg';
import ProfileDropdown from './ProfileDropdown';
import LoginRegisterButtons from '../login/Buttons';
import { useUserContext } from '../userContetx';

const preLoginPages = routes.filter((route) => route?.header && !route?.protected);
const postLoginPages = routes.filter((route) => route?.header && route?.protected && !route?.isAdminPage);
const postLoginAdminPages = routes.filter((route) => route?.header && route?.protected && route?.isAdminPage);

// eslint-disable-next-line react/prop-types
function Header({ children }) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const { userData: user } = useUserContext();

  const pages = user?.id > 0 ? (user?.isAdmin ? postLoginAdminPages : postLoginPages) : preLoginPages;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img src={nepInUSA} style={{ maxWidth: '12rem', maxHeight: '4rem' }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              nepInUSA
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem component={Link} to={page.path} key={page.key} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              nepInUSA
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button key={page.key} component={Link} to={page.path} sx={{ my: 2, color: 'white', display: 'block' }}>
                  {page.name}
                </Button>
              ))}
            </Box>
            {user?.id ? <ProfileDropdown user={user} /> : <LoginRegisterButtons />}
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="lg" sx={{ my: 5 }}>
        {children}
      </Container>
    </>
  );
}
export default Header;
