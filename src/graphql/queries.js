import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
  query {
    posts {
      coverPhoto {
        url
      }
      id
      slug
      title
      author {
        avatar {
          url
        }
        name
        slug
      }
    }
  }
`;

const GET_AUTHORS_INFO = gql`
  query {
    authors {
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
    author(where: { slug: $slug }) {
      avatar {
        url
      }
      name
      description {
        html
      }
      posts {
        coverPhoto {
          url
        }
        id
        slug
        title
      }
      field
    }
  }
`;

const GET_BLOG_INFO = gql`
  query getBlogInfo($slug: String!) {
    post(where: { slug: $slug }) {
      coverPhoto {
        url
      }
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
    }
  }
`;

const GET_BLOG_COMMENTS = gql`
  query getBloggComments($slug: String!) {
    comments(where: { post: { slug: $slug } }) {
      id
      name
      text
    }
  }
`;

export {
  GET_BLOGS_INFO,
  GET_BLOG_INFO,
  GET_AUTHORS_INFO,
  GET_AUTHOR_INFO,
  GET_BLOG_COMMENTS,
};
