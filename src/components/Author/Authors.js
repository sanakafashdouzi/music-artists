import React from 'react';
import {Link} from "react-router-dom";
import { useQuery } from '@apollo/client';
import { GET_AUTHORS_INFO } from '../../graphql/queries';
import {Avatar, Divider, Grid, Typography} from '@mui/material';
import Loader from '../shared/Loader';

function Authors() {
    const {loading ,data ,errors} = useQuery(GET_AUTHORS_INFO);

    if(loading) return <Loader />

    if(errors) return <h4>errors</h4>
     
    console.log(data);
    return (
        <Grid container 
        sx={{boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px" , borderRadius: 4}}>
            {data.authors.map((author ,index) => (
           <React.Fragment key={author.id} >
            <Grid item xs={12} padding={2} >
             <Link
              to={`/authors/${author.slug}`}
                style={{textDecoration:"none" , 
                 display:"flex", alignItems:"center"}} >
             <Avatar src={author.avatar.url} sx={{marginLeft: 2 }} />
             <Typography component="p" variant='p' color='#4caf50' >
                {author.name}
             </Typography>
            </Link>
            </Grid>
            {
              index !== author.length - 1 && (
              <Grid item xs={12} >
               <Divider variant='middle' />
             </Grid>
             )}
             
        </React.Fragment> 
            ))}
        </Grid>
    );
};

export default Authors;