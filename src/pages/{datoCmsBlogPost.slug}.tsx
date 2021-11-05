import React from 'react';
import { graphql } from 'gatsby';

interface PostPageProps {
  data: {
    datoCmsBlogPost: {
      title: string;
      id: string;
      content: string;
      author: string;
      slug: string;
      meta: {
        updatedAt: string;
      };
    };
  };
}

const BlogPost = (props: any, { data }: PostPageProps) => {
  console.log(props)
  console.log(data);

  return (
    <div>
      <h1>hello</h1>
      <h1>{data.datoCmsBlogPost.title}</h1>
    </div>
  );
};

export const query = graphql`
  query ($id: String!) {
    datoCmsBlogPost(id: { eq: $id }) {
      title
      slug
      content
    }
  }
`;

export default BlogPost;
