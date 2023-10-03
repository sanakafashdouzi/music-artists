import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import sanitizeHtml from "sanitize-html";
import { GET_AUTHOR_INFO } from '../../graphql/queries';
import { Avatar, Container, Grid, Typography } from '@mui/material';
import CardEl from '../shared/CardEl';
import Loader from '../shared/Loader';

function AuthorPage() {
    const {slug} = useParams();

    const {loading , data , errors} = useQuery(GET_AUTHOR_INFO,{
        variables: {slug},
    });

     if(loading) return <Loader />

     if(errors) return <h4>errors</h4>

     console.log(data);
     const { author } = data;

    return (
        <Container maxWidth="lg" >
         <Grid container mt={10}>
            <Grid item 
             xs={12} 
             display="flex"
             flexDirection="column"
             alignItems="center" >
            <Avatar src={author.avatar.url} 
              sx={{width:200 , height:200}} />
           <Typography component="h3" variant='h5' mt={4} fontWeight={500} >
              {author.name}
           </Typography>
           <Typography component="p" variant='h5' mt={2} color="text.secondary" >
              {author.field}
           </Typography>
            </Grid>
            <Grid item xs={12}>
               <div
               dangerouslySetInnerHTML={{ 
                  __html:sanitizeHtml(author.description.html) } }>
                </div>
            </Grid>
            <Grid item xs={12} mt={6} >
             <Typography component="h3" variant='h5' fontWeight={300} >
               مقالات {author.name}
             </Typography>
             <Grid container spacing={2} mt={2}>
               {author.posts.map((post) =>(
                  <Grid item xs={12} sm={6} md={4} key={post.id} >
                    <CardEl 
                     title={post.title}
                     slug={post.slug}
                     coverPhoto={post.coverPhoto} />
                  </Grid>
               ))}
             </Grid>
            </Grid>
         </Grid>  
        </Container>
    );
}

export default AuthorPage;