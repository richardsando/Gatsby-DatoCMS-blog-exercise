import { graphql, Link } from 'gatsby';
import React, { useState } from 'react';
// import BlogPost from '../components/BlogPost';

interface AllPostsPageProps {
  data: {
    blogPosts: {
      nodes: [
        {
          id: string;
          title: string;
          content: string;
          slug: string;
        }
      ];
    };
  };
}

const Posts = ({ data }: AllPostsPageProps) => {
  return (
    <div>
      {<h1>This is where the posts live!!</h1>}
      <ul>
        {data.blogPosts.nodes.map((post) => {
          console.log(post.slug);
          return (
            // <BlogPost
            // key={post.title}
            //   title={post.title}
            //   slug={post.slug}
            //   content={post.content}
            // />
            <h1>yo</h1>
          );
        })}
      </ul>
    </div>
  );
};

export const query = graphql`
  {
    blogPosts: allDatoCmsBlogPost {
      nodes {
        id
        title
        content
        # nameSlug: gatsbyPath(filePath: "/posts/{datoCmsBlogPost.slug}")
        slug
      }
    }
  }
`;

export default Posts;
