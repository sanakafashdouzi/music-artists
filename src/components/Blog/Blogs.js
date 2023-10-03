import React from 'react';

import CardEl from '../shared/CardEl';
import { Grid } from '@mui/material';
import { useQuery } from '@apollo/client';
import { GET_BLOGS_INFO } from '../../graphql/queries';
import Loader from '../shared/Loader';

function Blogs() {
    const {loading , data ,errors} = useQuery(GET_BLOGS_INFO);

    if(loading) return <Loader />
    if(errors) return <h4>errors ...</h4>

    console.log(data);
    return (
        <Grid container spacing={2} >
            {data.posts.map((post) =>(
                <Grid item xs={12} sm={6} md={4} key={post.id} >
                    <CardEl {...post} />
                </Grid>
            ))}
        </Grid>
    );
}

export default Blogs;