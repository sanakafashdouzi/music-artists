import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_POST_COMMENTS } from '../../graphql/queries';
import { Grid, Typography ,Box, Avatar } from '@mui/material';

function Comments({slug}) {
    const {loading, data } = useQuery(GET_POST_COMMENTS,{
        variables: {slug},
    });

    if(loading) return null;

    console.log(data);
    return (
        <Grid container sx={{boxShadow:"rgba(0,0,0,0.1) 0px 4px 12px" , py:1 , mt:8 , borderRadius:4 }}>
          <Grid item xs={12} m={2}>
            <Typography component='p' variant='h6' fontWeight={400} color="primary">
                کامنت ها
            </Typography>
          </Grid>
          {data.comments.map((comment) => (
            <Grid item xs={12} key={comment.id} m={2} p={2}
                  border="1px silver solid"
                  borderRadius={1}>

              <Box component="div" display="flex" alignItems="center" mb={3}>
              <Avatar>{comment.name[0]}</Avatar>
              <Typography component="span" variant='p' fontWeight={400} mr={1}>{comment.name}</Typography>
              </Box>
              <Typography component="p" variant='p'>{comment.text}</Typography>
             </Grid>
          ))}
        </Grid>
    );
}

export default Comments;