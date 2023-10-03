import {gql} from "@apollo/client";

const GET_BLOGS_INFO = gql`
   query{
    posts {
    author {
      name
      avatar {
        url
      }
    }
    slug
    title
    id
    coverPhoto {
      url
    }
    
  }
}
`;

const GET_AUTHORS_INFO = gql`
   query {
     authors{
      avatar {
        url
      }
      id 
      name 
      slug
     }
   }
`;

const GET_AUTHOR_INFO = gql`
   query getAuthorInfo($slug: String!) {
    author(where: {slug: $slug }) {
    avatar {
      url
    }
    description {
      html
    }
    field
    name
    posts {
      coverPhoto {
        url
      }
      id
      slug
      title
    }
  }
   }
`;

const GET_POST_INFO = gql`
    query getPost($slug: String!) {
      post(where: {slug: $slug }) {
    author {
      avatar {
        url
      }
      field
      name
    }
    content {
      html
    }
    title
    coverPhoto {
      url
    }
  }
    }
`;

const GET_POST_COMMENTS = gql`
  query getPostComments($slug: String! ) {
  comments(where: {post: {slug: $slug }}) {
    id
    name
    text
  }
}

`;

export {GET_BLOGS_INFO , GET_AUTHORS_INFO ,GET_AUTHOR_INFO 
        ,GET_POST_INFO, GET_POST_COMMENTS} ;