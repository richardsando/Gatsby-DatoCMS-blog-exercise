import { graphql, Link } from 'gatsby';
import React, { useState } from 'react';

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
  console.log(data);
  return (
    <div>
      {<h1>This is where the posts live!!</h1>}
      <ul>
        {data.blogPosts.nodes.map((post) => {
          console.log(post.slug);
          return (
            <li key={post.id}>
              <Link to={`${post.slug}`}>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
              </Link>
            </li>
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
