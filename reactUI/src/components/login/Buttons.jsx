import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function Buttons() {
  return (
    <Stack spacing={2} direction="row">
      <Button component={Link} to="/login" variant="contained">
        Login
      </Button>
      <Button component={Link} to="/register" variant="contained">
        Register
      </Button>
    </Stack>
  );
}
