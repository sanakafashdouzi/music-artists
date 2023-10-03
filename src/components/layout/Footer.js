import { Typography } from '@mui/material';
import React from 'react';

function Footer () {
    return (
       <footer>
         <Typography
          component='p'
          variant='p'
          bgcolor="#f7f7f7"
          color="primary"
          textAlign="center"
          padding="10px"
          mt={10} 
          >
           پروژه ی وبلاگ با GraphQL| سایت هنرمندان
         </Typography>
       </footer>
    );
}

export default Footer;