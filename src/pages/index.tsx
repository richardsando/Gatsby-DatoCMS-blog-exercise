import { graphql, Link } from 'gatsby';
import React from 'react';
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
          blogPath: string;
        }
      ];
    };
  };
}

const Posts = (params: AllPostsPageProps) => {
  console.log(params);
  const { data } = params;
  return (
    <div>
      {<h1>This is where the posts live!!</h1>}
      <ul>
        {data.blogPosts.nodes.map((post) => {
          return (
            <div key={post.title}>
              <Link to={post.blogPath}>
                <h1>{post.title}</h1>
              </Link>
            </div>
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
        blogPath: gatsbyPath(filePath: "/{datoCmsBlogPost.slug}")
        slug
      }
    }
  }
`;

export default Posts;
