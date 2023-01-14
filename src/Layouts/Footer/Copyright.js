import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { Typography, Link } from '@mui/material';

export default function Copyright({ siteName }) {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" component={RouterLink} to="/">
        {siteName}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

Copyright.propTypes = {
  siteName: PropTypes.string.isRequired
};