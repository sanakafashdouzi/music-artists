import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Authors from "../Author/Authors";
import Blogs from "../Blog/Blogs";

const HomePage = () => {
    return (
        <Container maxWidth="lg" >
          <Grid container spacing={2} padding={3} >
           <Grid item xs={12} md={3} mt={4} >
            <Typography component="h3" variant='h3' mb={3} fontWeight={500} >
                نویسنده ها
            </Typography>
              <Authors />
           </Grid>
           <Grid item xs={12} md={9} mt={4} >
            {/* {" "} */}
            <Typography component="h3" variant='h3' mb={3} fontWeight={500} >
                 مقالات
            </Typography>
            <Blogs />
           </Grid>
          </Grid>
            
        </Container>
    );
};

export default HomePage;