import { Container, Typography, Link, Divider } from '@mui/material';
import { Facebook, YouTube, Instagram } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { routes } from '../../Utils/routes';
import nepInUSA from '../../images/blue.jpg';
import Box from '@mui/material/Box';

const footerLinks = routes.filter((r) => r.footer && !r.protected);

function Footer() {
  const footerStyle = {
    backgroundColor: '#f5f5f5',
    padding: '2rem',
    marginTop: 'auto',
  };

  const linkStyle = {
    margin: '0 1rem',
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
      textDecoration: 'underline',
    },
  };

  return (
    <footer style={footerStyle}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            pb: '2px',
          }}
        >
          <img
            src={nepInUSA}
            style={{
              maxWidth: '12rem',
              maxHeight: '4rem',
              marginRight: '1rem',
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 5,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            nepInUSA Education Consultancy
          </Typography>
        </Box>

        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="div"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            pb: '20px',
          }}
        >
          {footerLinks.map((link, index) => (
            <>
              <Link key={link?.key} component={RouterLink} to={link?.path} style={linkStyle}>
                {link?.name}
              </Link>
              {index !== footerLinks.length - 1 && <Divider orientation="vertical" flexItem />}
            </>
          ))}
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          Follow us on:
          <Link href="https://www.facebook.com/nepinusa" target="_blank" rel="noopener" sx={{ mx: 1 }}>
            <Facebook />
          </Link>
          <Link href="https://www.youtube.com/nepinusa" target="_blank" rel="noopener" sx={{ mx: 1 }}>
            <YouTube />
          </Link>
          <Link href="https://www.instagram.com/nepinusa" target="_blank" rel="noopener" sx={{ mx: 1 }}>
            <Instagram />
          </Link>
        </Typography>
        <Typography variant="body1" align="center" color="textSecondary" component="div">
          Copyright © {new Date().getFullYear()} All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
