import React from 'react';
import { useQuery } from '@apollo/client';
import {useNavigate, useParams } from "react-router-dom"; 
import { GET_POST_INFO } from '../../graphql/queries';
import Loader from '../shared/Loader';
import { Avatar, Box, Container, Grid, Typography } from '@mui/material';
import sanitizeHtml from "sanitize-html"; 
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CommentForm from '../comment/CommentForm';
import Comments from '../comment/Comments';

function BlogPage() {
    const {slug} = useParams();
    const navigate = useNavigate();

    const {loading, data, errors} = useQuery(GET_POST_INFO,{
        variables: {slug}
    });

    if(loading) return <Loader />

    if(errors) return <h4>errors</h4>
     
    console.log(data);

    return (
        <Container>
         <Grid container maxWidth="lg">
           <Grid item xs={12} mt={9} display="flex" justifyContent="space-between">
            <Typography component='h2' variant='h4' fontWeight={400} color="#357a38">
                {data.post.title}
            </Typography>
            <ArrowBackIcon onClick={() => navigate(-1)} />
           </Grid>
           <Grid item xs={12} mt={6}>
             <img src={data.post.coverPhoto.url} 
                  alt={data.post.slug}
                  width="100%" 
                  style={{borderRadius:20}} />
           </Grid>
           <Grid item xs={12} mt={7} display="flex" alignItems="center" >
               <Avatar src={data.post.author.avatar.url} 
                    sx={{width:80, height:80, marginLeft:2}} />
            <Box component="div">
             <Typography component="p" variant='h5' fontWeight={300}>
               {data.post.author.name}
             </Typography>
             <Typography component="p" variant='p' color="#4caf50">
               {data.post.author.field}
             </Typography>
            </Box>
           </Grid>
           <Grid item xs={12} mt={5}>
             <div dangerouslySetInnerHTML={{__html: sanitizeHtml(data.post.content.html)}} ></div>
           </Grid>
           <Grid item xs={12}>
             <CommentForm slug={slug} />
           </Grid>
           <Grid item xs={12}>
             <Comments slug={slug} />
           </Grid>
         </Grid>
        </Container>
    );
}

export default BlogPage;