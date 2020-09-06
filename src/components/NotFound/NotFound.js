import React from 'react';
import { Box, Typography } from '@material-ui/core';

const NotFound = () => {
  return (
    <Box textAlign="center" m="50px" color="error.main">
      <Typography variant="h1" component="h1">
        404! Not Found!
      </Typography>
    </Box>
  );
};

export default NotFound;
