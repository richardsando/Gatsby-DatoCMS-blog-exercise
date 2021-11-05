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
          gatsbyPath: string
          
         
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
          return (
            <div key={post.title}>
              <Link to={post.slug}>
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
        nameSlug: gatsbyPath(filePath: "/{datoCmsBlogPost.slug}")
        slug
      }
    }
  }
`;

export default Posts;
