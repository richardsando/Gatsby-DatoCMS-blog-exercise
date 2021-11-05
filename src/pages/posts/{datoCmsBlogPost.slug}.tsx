import React from "react";
import { graphql } from "gatsby";

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

const BlogPost = ({ data }: PostPageProps, slug: string) => {

  return (
    <div>
      <h1>{data.datoCmsBlogPost.title}</h1>
    </div>
  );
};



export const query = graphql`
  query blogPostQuery {
    datoCmsBlogPost {
      id
      title
      string
      content
    }
  }
`;

export default BlogPost;
